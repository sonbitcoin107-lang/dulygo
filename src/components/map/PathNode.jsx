// src/components/map/PathNode.jsx
// Props:
//   nodeType: 'listen' | 'vocab' | 'practice' | 'challenge'
//   status:   'completed' | 'active' | 'locked'
//   stars:    0-3
//   onClick:  function
//   position: 0-3 (for zigzag layout, handled by parent wrapper)

import './PathNode.css';

const NODE_ICONS = {
  listen:    '🎧',
  vocab:     '📖',
  practice:  '🎬',
  challenge: '⭐',
};

const NODE_LABELS = {
  listen:    'Nghe',
  vocab:     'Từ vựng',
  practice:  'Luyện tập',
  challenge: 'Thử thách',
};

export default function PathNode({ nodeType, status, stars = 0, onClick }) {
  const icon = status === 'locked' ? '🔒' : NODE_ICONS[nodeType] || '📖';

  const handleClick = () => {
    if (status !== 'locked') onClick?.();
  };

  return (
    <div className="path-node-wrapper" onClick={handleClick}>
      <div className={`path-node ${status}`}>
        {/* Pulsing ring for active */}
        {status === 'active' && <div className="path-node-ring" />}
        <span>{icon}</span>
      </div>

      {/* Stars — only show for completed or partially active */}
      <div className="path-node-stars">
        {[0, 1, 2].map((i) => (
          <span key={i} className={`star${i < stars ? '' : ' empty'}`}>⭐</span>
        ))}
      </div>

      <span className="path-node-label">{NODE_LABELS[nodeType]}</span>
    </div>
  );
}
