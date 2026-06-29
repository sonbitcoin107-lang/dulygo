// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import { loadProfile } from '../utils/storage';
import { useGame } from '../context/GameContext';
import { COURSES } from '../data/courses';
import SkillNode from '../components/home/SkillNode';
import DuoMascot from '../components/ui/DuoMascot';
import './Home.css';

const DUO_MESSAGES = [
  'Học thêm một bài nào! 🎯',
  'Bạn đang làm rất tốt! ⭐',
  'Tiếp tục cố gắng nhé! 💪',
  'Hôm nay học chủ đề gì? 🤔',
  'Duo đang chờ bạn! 🦉',
];

export default function Home() {
  const { state, getCourseProgress } = useGame();
  const [profile, setProfile] = useState(null);
  const [message] = useState(() => DUO_MESSAGES[Math.floor(Math.random() * DUO_MESSAGES.length)]);

  useEffect(() => {
    const p = loadProfile();
    setProfile(p);
  }, []);

  const dailyProgress = Math.min(100, Math.round((state.dailyXp / (state.dailyGoal || 50)) * 100));

  return (
    <div className="home-page">
      {/* Daily Goal Banner */}
      <div className="daily-banner">
        <div className="daily-info">
          <span className="daily-label">Mục tiêu hôm nay</span>
          <span className="daily-xp">
            <span className="daily-xp-val">{state.dailyXp}</span>
            <span className="daily-xp-total">/{state.dailyGoal || 50} XP ⚡</span>
          </span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${dailyProgress}%` }} />
        </div>
      </div>

      {/* Duo greeting */}
      <div className="home-duo-section">
        <DuoMascot size="md" message={message} mood="happy" />
      </div>

      {/* Course Path */}
      <div className="course-path">
        <h2 className="path-title">🗺️ Hành trình học tập</h2>
        <div className="path-nodes">
          {COURSES.map((course, index) => {
            const progress = getCourseProgress(course.id);
            const isCompleted = progress >= 100;
            const isActive = !isCompleted && (index === 0 || getCourseProgress(COURSES[index - 1]?.id) > 0);
            const isLocked = false; // All unlocked for kids!

            return (
              <SkillNode
                key={course.id}
                course={course}
                index={index}
                progress={progress}
                isActive={isActive && !isCompleted}
                isLocked={isLocked}
              />
            );
          })}
        </div>
      </div>

      {/* Bottom padding */}
      <div style={{ height: 32 }} />
    </div>
  );
}
