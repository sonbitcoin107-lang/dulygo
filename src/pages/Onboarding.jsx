// src/pages/Onboarding.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveProfile } from '../utils/storage';
import DuoMascot from '../components/ui/DuoMascot';
import { playSuccess } from '../utils/audio';
import './Onboarding.css';

const AVATARS = ['🦊', '🐼', '🐸', '🦄', '🐯', '🐙', '🦁', '🐺', '🐨', '🐻'];
const DAILY_GOALS = [
  { id: 5, label: '5 phút', desc: 'Nhẹ nhàng', emoji: '🌱' },
  { id: 10, label: '10 phút', desc: 'Đều đặn', emoji: '⭐' },
  { id: 15, label: '15 phút', desc: 'Chăm chỉ', emoji: '🔥' },
];

const STEPS = ['welcome', 'name', 'avatar', 'goal', 'ready'];

export default function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('🦊');
  const [goal, setGoal] = useState(10);

  const next = () => {
    if (step < STEPS.length - 1) setStep(s => s + 1);
  };

  const handleFinish = () => {
    playSuccess();
    saveProfile({ name: name || 'Bé yêu', avatar, dailyGoal: goal });
    setTimeout(() => navigate('/'), 500);
  };

  return (
    <div className="onboarding">
      {/* Step indicators */}
      <div className="onboarding-steps">
        {STEPS.map((_, i) => (
          <div key={i} className={`step-dot ${i <= step ? 'active' : ''}`} />
        ))}
      </div>

      <div className="onboarding-content fade-in" key={step}>
        {step === 0 && (
          <div className="onboarding-screen text-center">
            <DuoMascot size="xl" mood="excited" message="Chào mừng đến với Dulygo! 🎉" />
            <h1 className="onboarding-title">Học tiếng Anh<br />mỗi ngày!</h1>
            <p className="onboarding-sub">Cùng Duo học vui, học hiệu quả,<br />và nhận phần thưởng mỗi ngày!</p>
            <button id="btn-start" className="btn btn-primary btn-full" onClick={next}>
              Bắt đầu nào! 🚀
            </button>
          </div>
        )}

        {step === 1 && (
          <div className="onboarding-screen">
            <DuoMascot size="lg" message="Em tên là gì?" />
            <h2 className="onboarding-title">Bạn tên là gì?</h2>
            <input
              id="input-name"
              type="text"
              className="name-input"
              placeholder="Nhập tên của bạn..."
              value={name}
              onChange={e => setName(e.target.value)}
              maxLength={20}
              autoFocus
            />
            <button
              id="btn-name-next"
              className="btn btn-primary btn-full"
              onClick={next}
            >
              Tiếp theo →
            </button>
            <button className="btn btn-ghost btn-full" onClick={next}>
              Bỏ qua
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="onboarding-screen">
            <h2 className="onboarding-title">Chọn nhân vật của bạn!</h2>
            <div className="avatar-grid">
              {AVATARS.map(av => (
                <button
                  key={av}
                  id={`avatar-${av}`}
                  className={`avatar-btn ${avatar === av ? 'selected' : ''}`}
                  onClick={() => setAvatar(av)}
                >
                  {av}
                </button>
              ))}
            </div>
            <div className="avatar-preview">{avatar}</div>
            <button id="btn-avatar-next" className="btn btn-primary btn-full" onClick={next}>
              Dùng nhân vật này!
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="onboarding-screen">
            <DuoMascot size="md" message="Mỗi ngày học bao lâu?" />
            <h2 className="onboarding-title">Mục tiêu học hàng ngày</h2>
            <div className="goal-list">
              {DAILY_GOALS.map(g => (
                <button
                  key={g.id}
                  id={`goal-${g.id}`}
                  className={`goal-card ${goal === g.id ? 'selected' : ''}`}
                  onClick={() => setGoal(g.id)}
                >
                  <span className="goal-emoji">{g.emoji}</span>
                  <div className="goal-info">
                    <strong>{g.label}</strong>
                    <span>{g.desc}</span>
                  </div>
                  {goal === g.id && <span className="goal-check">✓</span>}
                </button>
              ))}
            </div>
            <button id="btn-goal-next" className="btn btn-primary btn-full" onClick={next}>
              Xác nhận!
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="onboarding-screen text-center">
            <div className="ready-avatar">{avatar}</div>
            <h1 className="onboarding-title">
              Xin chào, {name || 'bạn'} {avatar}!
            </h1>
            <p className="onboarding-sub">
              Bạn đã sẵn sàng để bắt đầu học tiếng Anh chưa?
            </p>
            <div className="ready-stats">
              <div className="ready-stat">
                <span>🎯</span>
                <span>Mục tiêu: {goal} phút/ngày</span>
              </div>
              <div className="ready-stat">
                <span>📚</span>
                <span>10 chủ đề học</span>
              </div>
              <div className="ready-stat">
                <span>🎁</span>
                <span>Phần thưởng mỗi ngày</span>
              </div>
            </div>
            <button id="btn-finish" className="btn btn-primary btn-full" onClick={handleFinish}>
              Bắt đầu học! 🎉
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
