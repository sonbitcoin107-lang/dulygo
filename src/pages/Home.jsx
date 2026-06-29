// src/pages/Home.jsx
// Learning Path Map — Duolingo-style journey map
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { COURSES } from '../data/courses';
import PathNode from '../components/map/PathNode';
import UnitBanner from '../components/map/UnitBanner';
import Guidebook from '../components/map/Guidebook';
import './Home.css';

const NODE_TYPES = ['listen', 'vocab', 'practice', 'challenge'];

// Zigzag horizontal positions for 4 nodes inside a section
// Using percentage margin-left to create Duolingo-style zig-zag
const ZIGZAG_POSITIONS = ['58%', '38%', '18%', '38%'];

/**
 * Determine node status based on course progress.
 * Rules:
 *  - Each node represents 25% of course completion.
 *  - Node is 'completed' if progress >= (nodeIdx+1)*25
 *  - Node is 'active' if it's the next node to unlock, AND the course is unlocked
 *  - Node is 'locked' otherwise
 */
function getNodeStatus(progress, nodeIdx, courseIdx, prevProgress) {
  const threshold = (nodeIdx + 1) * 25;
  const prevThreshold = nodeIdx * 25;

  if (progress >= threshold) return 'completed';

  // A course is accessible if it's the first OR prev course has at least some progress
  const courseUnlocked = courseIdx === 0 || prevProgress >= 25;
  if (!courseUnlocked) return 'locked';

  // Active = next node to tackle (progress reached the gate of this node)
  if (progress >= prevThreshold) return 'active';

  return 'locked';
}

/**
 * Calculate stars for a completed node.
 * Each node covers 25% progress. Stars = how well that segment was done.
 */
function getNodeStars(progress, nodeIdx) {
  const segment = progress - nodeIdx * 25;
  return Math.min(3, Math.max(0, Math.floor(segment / 8)));
}

export default function Home() {
  const navigate = useNavigate();
  const { getCourseProgress } = useGame();
  const [guidebookUnit, setGuidebookUnit] = useState(null);
  const activeNodeRef = useRef(null);

  // Scroll to first active/unlocked node on mount
  useEffect(() => {
    if (activeNodeRef.current) {
      setTimeout(() => {
        activeNodeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  }, []);

  const handleNodeClick = (course) => {
    navigate('/lesson', { state: { courseId: course.id } });
  };

  return (
    <div className="map-page">
      <div className="map-scroll">
        {COURSES.map((course, courseIdx) => {
          const progress = getCourseProgress(course.id);
          const prevProgress = courseIdx > 0 ? getCourseProgress(COURSES[courseIdx - 1].id) : 100;

          // Find first active node in this course (for scroll ref)
          const firstActiveNodeIdx = [0, 1, 2, 3].findIndex(
            (nodeIdx) => getNodeStatus(progress, nodeIdx, courseIdx, prevProgress) === 'active'
          );

          return (
            <div key={course.id} className="map-section">
              {/* Unit banner with guidebook button */}
              <UnitBanner
                unit={course}
                unitNumber={courseIdx + 1}
                onGuidebook={() => setGuidebookUnit(course)}
              />

              {/* Node zigzag column */}
              <div className="map-nodes">
                {[0, 1, 2, 3].map((nodeIdx) => {
                  const status = getNodeStatus(progress, nodeIdx, courseIdx, prevProgress);
                  const stars = getNodeStars(progress, nodeIdx);
                  const isFirstActive = nodeIdx === firstActiveNodeIdx;

                  return (
                    <div
                      key={nodeIdx}
                      className="map-node-position"
                      style={{ marginLeft: ZIGZAG_POSITIONS[nodeIdx] }}
                      ref={isFirstActive ? activeNodeRef : null}
                    >
                      {/* Connector line above (except first node) */}
                      {nodeIdx > 0 && (
                        <div
                          className={`map-connector ${status === 'locked' ? 'locked' : 'done'}`}
                        />
                      )}
                      <PathNode
                        nodeType={NODE_TYPES[nodeIdx]}
                        status={status}
                        stars={stars}
                        onClick={() => handleNodeClick(course)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Bottom spacer */}
        <div style={{ height: 40 }} />
      </div>

      {/* Guidebook modal */}
      {guidebookUnit && (
        <Guidebook
          unit={guidebookUnit}
          onClose={() => setGuidebookUnit(null)}
        />
      )}
    </div>
  );
}
