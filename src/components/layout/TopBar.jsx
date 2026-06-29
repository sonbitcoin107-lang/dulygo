// src/components/layout/TopBar.jsx
import { useGame } from '../../context/GameContext';
import './TopBar.css';

export default function TopBar() {
  const { state } = useGame();
  const { xp, hearts, streak, MAX_HEARTS } = { ...state, MAX_HEARTS: 5 };

  return (
    <header className="topbar">
      <div className="topbar-logo">
        <img src="/dulygo/favicon.svg" alt="Duo" width={32} height={32} />
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
            <span key={i} className={`heart-icon ${i >= hearts ? 'lost' : ''}`}>
              ❤️
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
