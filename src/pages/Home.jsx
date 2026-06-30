// src/pages/Home.jsx
// Duolingo-style Learning Path Map

import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { COURSES } from '../data/courses';
import PathNode from '../components/map/PathNode';
import UnitBanner from '../components/map/UnitBanner';
import Guidebook from '../components/map/Guidebook';
import './Home.css';

// 4 node types per unit — matches the 4 PathNode positions
const NODE_TYPES = ['listen', 'vocab', 'practice', 'challenge'];

// Zigzag: horizontal offset for each of the 4 nodes
// Positions go: right → center-right → left → center-left
// Using % of container width (the container is max 400px)
const ZIGZAG = [
  { justify: 'flex-end',   marginRight: '16px' },   // 0 — right
  { justify: 'center',     marginRight: '0px'  },   // 1 — center
  { justify: 'flex-start', marginLeft:  '16px' },   // 2 — left
  { justify: 'center',     marginLeft:  '0px'  },   // 3 — center
];

// Group courses into sections of 5 (Duolingo-style: Section 1 = units 1-5, etc.)
const SECTION_SIZE = 5;

/**
 * Node status based on completedNodes — Duolingo-style unlock chain.
 * node 0 is always active (or completed). node N unlocks only when node N-1 done.
 */
function getNodeStatus(courseId, nodeIdx, isNodeCompleted) {
  if (isNodeCompleted(courseId, nodeIdx)) return 'completed';
  if (nodeIdx === 0 || isNodeCompleted(courseId, nodeIdx - 1)) return 'active';
  return 'locked';
}

function getNodeStars(courseId, nodeIdx, isNodeCompleted) {
  return isNodeCompleted(courseId, nodeIdx) ? 3 : 0;
}

export default function Home() {
  const navigate    = useNavigate();
  const { getCourseProgress, isNodeCompleted } = useGame();
  const [guidebookUnit, setGuidebookUnit] = useState(null);
  const activeRef   = useRef(null);

  // Auto-scroll to first active node
  useEffect(() => {
    if (activeRef.current) {
      setTimeout(() => {
        activeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 400);
    }
  }, []);

  const handleNodeClick = (course, nodeIdx) => {
    const status = getNodeStatus(course.id, nodeIdx, isNodeCompleted);
    if (status === 'locked') return;
    navigate(`/lesson/${course.id}/${nodeIdx}`);
  };

  // Called from Guidebook footer button — always start node 0
  const handleStartFromGuidebook = (courseId) => {
    navigate(`/lesson/${courseId}/0`);
  };

  return (
    <div className="map-page">
      <div className="map-scroll">
        {COURSES.map((course, courseIdx) => {
          const sectionNum = Math.floor(courseIdx / SECTION_SIZE) + 1;
          const doorNum    = (courseIdx % SECTION_SIZE) + 1;

          // First active node: lowest nodeIdx that is 'active' (for scroll anchor)
          const firstActiveIdx = [0, 1, 2, 3].findIndex(
            (ni) => getNodeStatus(course.id, ni, isNodeCompleted) === 'active'
          );

          return (
            <div key={course.id} className="map-section">
              {/* Section divider line when new section starts */}
              {doorNum === 1 && courseIdx > 0 && (
                <div className="map-section-divider">
                  <div className="map-section-line" />
                  <span className="map-section-label">PHẦN {sectionNum}</span>
                  <div className="map-section-line" />
                </div>
              )}

              {/* Unit banner */}
              <UnitBanner
                unit={course}
                unitNumber={doorNum}
                sectionNumber={sectionNum}
                onGuidebook={() => setGuidebookUnit(course)}
              />

              {/* Node zigzag column */}
              <div className="map-nodes">
                {[0, 1, 2, 3].map((nodeIdx) => {
                  const status = getNodeStatus(course.id, nodeIdx, isNodeCompleted);
                  const stars  = getNodeStars(course.id, nodeIdx, isNodeCompleted);
                  const zz     = ZIGZAG[nodeIdx];
                  const isFirstActive = nodeIdx === firstActiveIdx;

                  return (
                    <div key={nodeIdx} className="map-node-group">
                      {/* Connector BETWEEN previous node and this one */}
                      {nodeIdx > 0 && (
                        <PathConnector
                          fromPos={ZIGZAG[nodeIdx - 1].justify}
                          toPos={zz.justify}
                          done={isNodeCompleted(course.id, nodeIdx - 1)}
                        />
                      )}

                      {/* Node row */}
                      <div
                        className="map-row"
                        style={{ justifyContent: zz.justify }}
                        ref={isFirstActive ? activeRef : null}
                      >
                        <div style={{
                          marginLeft:  zz.marginLeft  || undefined,
                          marginRight: zz.marginRight || undefined,
                        }}>
                          <PathNode
                            nodeType={NODE_TYPES[nodeIdx]}
                            status={status}
                            stars={stars}
                            onClick={() => handleNodeClick(course, nodeIdx)}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Bottom padding */}
        <div style={{ height: 48 }} />
      </div>

      {/* Guidebook modal */}
      {guidebookUnit && (
        <Guidebook
          unit={guidebookUnit}
          onClose={() => setGuidebookUnit(null)}
          onStart={handleStartFromGuidebook}
        />
      )}
    </div>
  );
}

/**
 * Visual path segment between two nodes.
 * Renders as a short vertical bar with the right color.
 * fromPos / toPos: 'flex-start' | 'center' | 'flex-end'
 */
function PathConnector({ fromPos, toPos, done }) {
  // Determine the lean direction
  const lean =
    fromPos === 'flex-end'   && toPos === 'center'     ? 'left'     :
    fromPos === 'center'     && toPos === 'flex-start'  ? 'left'     :
    fromPos === 'flex-start' && toPos === 'center'      ? 'right'    :
    fromPos === 'center'     && toPos === 'flex-end'    ? 'right'    :
    'straight';

  return (
    <div className={`path-connector path-connector-${lean} ${done ? 'done' : 'pending'}`} />
  );
}
