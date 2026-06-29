// src/components/home/SkillNode.jsx
import { useNavigate } from 'react-router-dom';
import { playClick } from '../../utils/audio';
import './SkillNode.css';

export default function SkillNode({ course, index, progress, isActive, isLocked }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isLocked) return;
    playClick();
    navigate(`/lesson/${course.id}`);
  };

  const statusClass = isLocked ? 'locked' : isActive ? 'active' : progress >= 100 ? 'completed' : 'unlocked';

  // Zigzag layout
  const isRight = index % 3 === 1;
  const isCenter = index % 3 === 0 || index % 3 === 2;

  return (
    <div
      className={`skill-node-wrapper ${isRight ? 'right' : isCenter ? 'center' : 'left'}`}
    >
      <button
        id={`skill-${course.id}`}
        className={`skill-node ${statusClass}`}
        onClick={handleClick}
        aria-label={`${course.title} - ${isLocked ? 'Bị khóa' : statusClass}`}
        style={{
          '--node-color': course.color,
          '--node-dark': course.colorDark,
          '--node-light': course.colorLight,
        }}
      >
        {/* Crown for completed */}
        {progress >= 100 && (
          <div className="skill-crown">👑</div>
        )}

        {/* Lock icon */}
        {isLocked && <span className="skill-lock">🔒</span>}

        {/* Emoji */}
        {!isLocked && (
          <span className="skill-emoji">{course.emoji}</span>
        )}

        {/* Progress ring */}
        {!isLocked && progress > 0 && progress < 100 && (
          <svg className="skill-ring" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="8"/>
            <circle
              cx="50" cy="50" r="44"
              fill="none"
              stroke="white"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 44}`}
              strokeDashoffset={`${2 * Math.PI * 44 * (1 - progress / 100)}`}
              transform="rotate(-90 50 50)"
            />
          </svg>
        )}

        {/* Active pulse */}
        {isActive && <div className="skill-pulse" />}
      </button>

      {/* Title below node */}
      <div className={`skill-title ${isLocked ? 'locked-text' : ''}`}>
        {course.title}
      </div>

      {/* Progress bar below title */}
      {!isLocked && (
        <div className="skill-progress-track">
          <div
            className="skill-progress-fill"
            style={{ width: `${progress}%`, background: course.color }}
          />
        </div>
      )}
    </div>
  );
}
