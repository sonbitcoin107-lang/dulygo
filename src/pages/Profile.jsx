// src/pages/Profile.jsx
import { useEffect, useState } from 'react';
import { useGame } from '../context/GameContext';
import { loadProfile, clearAll } from '../utils/storage';
import { useNavigate } from 'react-router-dom';
import { COURSES } from '../data/courses';
import './Profile.css';

const LEVEL_NAMES = ['', 'Mới bắt đầu', 'Học sinh', 'Giỏi', 'Xuất sắc', 'Thiên tài', 'Huyền thoại', 'Bậc thầy'];
const LEVEL_COLORS = ['', '#8B8B8B', '#CD7F32', '#C0C0C0', '#FFD700', '#00BFFF', '#9B59B6', '#58CC02'];

const BADGES_CONFIG = [
  { id: 'first_lesson', name: 'Bài học đầu tiên', emoji: '🌟', desc: 'Hoàn thành bài học đầu tiên' },
  { id: 'streak_3', name: 'Streak 3 ngày', emoji: '🔥', desc: 'Học 3 ngày liên tiếp' },
  { id: 'streak_7', name: 'Streak 7 ngày', emoji: '🔥🔥', desc: 'Học 7 ngày liên tiếp' },
  { id: 'xp_100', name: '100 XP', emoji: '⚡', desc: 'Đạt 100 XP' },
  { id: 'xp_500', name: '500 XP', emoji: '⚡⚡', desc: 'Đạt 500 XP' },
  { id: 'course_complete', name: 'Hoàn thành chủ đề', emoji: '🏆', desc: 'Hoàn thành 1 chủ đề học' },
  { id: 'perfect_lesson', name: 'Bài học hoàn hảo', emoji: '💎', desc: 'Không sai câu nào' },
];

export default function Profile() {
  const { state, reset, getCourseProgress } = useGame();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [showReset, setShowReset] = useState(false);

  useEffect(() => {
    setProfile(loadProfile());
  }, []);

  const handleReset = () => {
    reset();
    clearAll();
    navigate('/onboarding');
  };

  const levelColor = LEVEL_COLORS[state.level] || '#58CC02';
  const levelName = LEVEL_NAMES[state.level] || 'Bậc thầy';
  const xpToNextLevel = [100, 300, 600, 1000, 1500, 2500, 99999][state.level - 1] || 99999;
  const xpProgress = Math.min(100, (state.xp / xpToNextLevel) * 100);

  const earnedBadges = BADGES_CONFIG.filter(b => state.badges.includes(b.id));
  const unearnedBadges = BADGES_CONFIG.filter(b => !state.badges.includes(b.id));

  const completedCourses = COURSES.filter(c => getCourseProgress(c.id) >= 100).length;

  return (
    <div className="profile-page">
      {/* Profile Card */}
      <div className="profile-card" style={{ '--level-color': levelColor }}>
        <div className="profile-avatar">{profile?.avatar || '🦊'}</div>
        <div className="profile-info">
          <h1 className="profile-name">{profile?.name || 'Bé yêu'}</h1>
          <div className="profile-level" style={{ background: levelColor }}>
            Cấp {state.level} — {levelName}
          </div>
        </div>

        {/* XP bar */}
        <div className="profile-xp-section">
          <div className="profile-xp-label">
            <span>⚡ {state.xp} XP</span>
            <span>→ {xpToNextLevel} XP</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${xpProgress}%` }} />
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="profile-stats-grid">
        <div className="profile-stat-item">
          <span className="pstat-icon">🔥</span>
          <span className="pstat-val">{state.streak}</span>
          <span className="pstat-label">Ngày streak</span>
        </div>
        <div className="profile-stat-item">
          <span className="pstat-icon">📚</span>
          <span className="pstat-val">{state.totalLessonsCompleted}</span>
          <span className="pstat-label">Bài đã học</span>
        </div>
        <div className="profile-stat-item">
          <span className="pstat-icon">💎</span>
          <span className="pstat-val">{state.gems}</span>
          <span className="pstat-label">Gems</span>
        </div>
        <div className="profile-stat-item">
          <span className="pstat-icon">🏆</span>
          <span className="pstat-val">{completedCourses}</span>
          <span className="pstat-label">Chủ đề xong</span>
        </div>
      </div>

      {/* Course Progress */}
      <div className="profile-section">
        <h2 className="profile-section-title">📊 Tiến độ học</h2>
        <div className="course-progress-list">
          {COURSES.map(course => {
            const progress = getCourseProgress(course.id);
            return (
              <div key={course.id} className="course-progress-item">
                <span className="cp-emoji">{course.emoji}</span>
                <div className="cp-info">
                  <span className="cp-name">{course.title}</span>
                  <div className="cp-track">
                    <div
                      className="cp-fill"
                      style={{ width: `${progress}%`, background: course.color }}
                    />
                  </div>
                </div>
                <span className="cp-pct">{progress}%</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Badges */}
      <div className="profile-section">
        <h2 className="profile-section-title">🏅 Huy hiệu của bạn</h2>
        <div className="badges-grid">
          {earnedBadges.map(badge => (
            <div key={badge.id} className="badge-item earned" title={badge.desc}>
              <span className="badge-emoji">{badge.emoji}</span>
              <span className="badge-name">{badge.name}</span>
            </div>
          ))}
          {unearnedBadges.map(badge => (
            <div key={badge.id} className="badge-item locked" title={`Cách mở khóa: ${badge.desc}`}>
              <span className="badge-emoji" style={{ filter: 'grayscale(1) opacity(0.4)' }}>
                {badge.emoji}
              </span>
              <span className="badge-name">{badge.name}</span>
              <span className="badge-lock">🔒</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reset */}
      <div className="profile-section">
        {!showReset ? (
          <button
            id="btn-show-reset"
            className="btn btn-ghost btn-full"
            onClick={() => setShowReset(true)}
          >
            ⚙️ Cài đặt
          </button>
        ) : (
          <div className="reset-confirm">
            <p>Xóa toàn bộ tiến trình học?</p>
            <div className="flex gap-3">
              <button id="btn-reset-confirm" className="btn btn-danger flex-1" onClick={handleReset}>
                Xóa hết
              </button>
              <button className="btn btn-secondary flex-1" onClick={() => setShowReset(false)}>
                Hủy
              </button>
            </div>
          </div>
        )}
      </div>

      <div style={{ height: 32 }} />
    </div>
  );
}
