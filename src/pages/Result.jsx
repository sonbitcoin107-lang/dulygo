// src/pages/Result.jsx
import { useLocation, useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import DuoMascot from '../components/ui/DuoMascot';
import Confetti from '../components/ui/Confetti';
import { playSuccess, playLevelUp } from '../utils/audio';
import { useEffect } from 'react';
import './Result.css';

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = useGame();
  const { courseId, xpEarned, perfect, mistakes, courseName, courseEmoji } = location.state || {};

  useEffect(() => {
    if (perfect) {
      playLevelUp();
    } else {
      playSuccess();
    }
  }, [perfect]);

  const accuracy = mistakes === 0 ? 100 : Math.max(0, Math.round(((10 - mistakes) / 10) * 100));

  return (
    <div className="result-page">
      <Confetti active={true} />

      <div className="result-content fade-in">
        <DuoMascot
          size="lg"
          mood={perfect ? 'excited' : 'happy'}
          message={perfect ? 'Hoàn hảo! Bạn thật tuyệt! 🏆' : 'Làm tốt lắm! Cố gắng hơn nữa nhé! 💪'}
        />

        <div className="result-title-row">
          <span className="result-course-emoji">{courseEmoji}</span>
          <h1 className="result-title">
            {perfect ? 'Bài học hoàn hảo!' : 'Bài học hoàn thành!'}
          </h1>
        </div>

        {perfect && (
          <div className="perfect-badge bounce-in">
            <span>💎</span>
            <span>HOÀN HẢO!</span>
          </div>
        )}

        {/* Stats */}
        <div className="result-stats">
          <div className="stat-card xp-stat">
            <div className="stat-icon">⚡</div>
            <div className="stat-label">XP nhận được</div>
            <div className="stat-value">+{xpEarned || 0}</div>
          </div>

          <div className="stat-card accuracy-stat">
            <div className="stat-icon">🎯</div>
            <div className="stat-label">Độ chính xác</div>
            <div className="stat-value">{accuracy}%</div>
          </div>

          <div className="stat-card streak-stat">
            <div className="stat-icon">🔥</div>
            <div className="stat-label">Streak</div>
            <div className="stat-value">{state.streak} ngày</div>
          </div>

          <div className="stat-card mistakes-stat">
            <div className="stat-icon">{mistakes === 0 ? '✨' : '❌'}</div>
            <div className="stat-label">Sai</div>
            <div className="stat-value">{mistakes} lần</div>
          </div>
        </div>

        {/* Total XP */}
        <div className="result-total-xp">
          <span>Tổng XP của bạn:</span>
          <strong>⚡ {state.xp} XP</strong>
        </div>

        {/* Actions */}
        <div className="result-actions">
          <button
            id="btn-continue"
            className="btn btn-primary btn-full"
            onClick={() => navigate('/')}
          >
            Tiếp tục học! 🚀
          </button>
          <button
            id="btn-retry"
            className="btn btn-secondary btn-full"
            onClick={() => navigate(`/lesson/${courseId}`)}
          >
            Học lại bài này
          </button>
        </div>
      </div>
    </div>
  );
}
