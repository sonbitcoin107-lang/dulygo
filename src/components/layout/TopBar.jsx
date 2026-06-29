// src/components/layout/TopBar.jsx
import { useGame } from '../../context/GameContext';
import { useTheme } from '../../hooks/useTheme';
import './TopBar.css';

export default function TopBar() {
  const { state } = useGame();
  const { xp, hearts, streak } = state;
  const { isDark, toggle } = useTheme();

  return (
    <header className="topbar">
      <div className="topbar-logo">
        <img src="/dulygo/mascot.png" alt="MinhTi" width={32} height={32}
          style={{ borderRadius: '50%', objectFit: 'contain' }} />
        <span className="topbar-brand">Dulygo</span>
      </div>
      <div className="topbar-stats">
        <div className="streak-badge">
          <span>🔥</span>
          <span>{streak}</span>
        </div>
        <div className="xp-badge">
          <span>⚡</span>
          <span>{xp}</span>
        </div>
        <div className="hearts-row">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={`heart-icon ${i >= hearts ? 'lost' : ''}`}>❤️</span>
          ))}
        </div>
        {/* Dark mode toggle */}
        <button
          id="btn-theme-toggle"
          className="theme-toggle"
          onClick={toggle}
          title={isDark ? 'Chuyển sang sáng' : 'Chuyển sang tối'}
          aria-label="Toggle dark mode"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}
