// src/context/GameContext.jsx
// Global game state: XP, Hearts, Streak, Progress

import { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import { saveState, loadState } from '../utils/storage';

const GameContext = createContext(null);

const MAX_HEARTS = 5;
const XP_PER_CORRECT = 10;
const XP_PER_LESSON = 20;
const HEART_REGEN_MS = 30 * 60 * 1000; // 30 minutes

const defaultState = {
  xp: 0,
  gems: 50,
  hearts: MAX_HEARTS,
  streak: 0,
  lastStudyDate: null,
  lastHeartLostTime: null,
  completedLessons: {}, // { courseId: Set<lessonIndex> }
  courseProgress: {},   // { courseId: number (0-100) }
  totalLessonsCompleted: 0,
  badges: [],
  level: 1,
  dailyXp: 0,
  dailyGoal: 50,
};

const BADGE_LIST = [
  { id: 'first_lesson', name: 'Bài học đầu tiên', emoji: '🌟', condition: (s) => s.totalLessonsCompleted >= 1 },
  { id: 'streak_3', name: 'Streak 3 ngày', emoji: '🔥', condition: (s) => s.streak >= 3 },
  { id: 'streak_7', name: 'Streak 7 ngày', emoji: '🔥🔥', condition: (s) => s.streak >= 7 },
  { id: 'xp_100', name: '100 XP', emoji: '⚡', condition: (s) => s.xp >= 100 },
  { id: 'xp_500', name: '500 XP', emoji: '⚡⚡', condition: (s) => s.xp >= 500 },
  { id: 'course_1', name: 'Hoàn thành 1 chủ đề', emoji: '🏆', condition: (s) => Object.values(s.courseProgress).some(p => p >= 100) },
  { id: 'perfect', name: 'Bài học hoàn hảo', emoji: '💎', condition: (s) => s.badges.includes('perfect_lesson') },
];

const getLevel = (xp) => {
  if (xp < 100) return 1;
  if (xp < 300) return 2;
  if (xp < 600) return 3;
  if (xp < 1000) return 4;
  if (xp < 1500) return 5;
  if (xp < 2500) return 6;
  return 7;
};

const checkStreak = (lastDate) => {
  if (!lastDate) return false;
  const last = new Date(lastDate);
  const today = new Date();
  const diff = Math.floor((today - last) / (1000 * 60 * 60 * 24));
  return diff === 0; // same day = streak maintained
};

const checkNewDay = (lastDate) => {
  if (!lastDate) return true;
  const last = new Date(lastDate);
  const today = new Date();
  return last.toDateString() !== today.toDateString();
};

function reducer(state, action) {
  switch (action.type) {
    case 'LOAD_STATE':
      return { ...defaultState, ...action.payload };

    case 'EARN_XP': {
      const newXp = state.xp + action.amount;
      const newDailyXp = state.dailyXp + action.amount;
      return {
        ...state,
        xp: newXp,
        dailyXp: newDailyXp,
        level: getLevel(newXp),
      };
    }

    case 'LOSE_HEART': {
      const hearts = Math.max(0, state.hearts - 1);
      return { ...state, hearts, lastHeartLostTime: Date.now() };
    }

    case 'REFILL_HEART': {
      return { ...state, hearts: Math.min(MAX_HEARTS, state.hearts + 1) };
    }

    case 'COMPLETE_LESSON': {
      const { courseId, lessonIndex, xpEarned, perfect } = action;
      const prev = state.completedLessons[courseId] || [];
      const completed = [...new Set([...prev, lessonIndex])];
      const courseData = action.courseLength;
      const progress = Math.round((completed.length / courseData) * 100);

      const today = new Date().toDateString();
      const isNewDay = checkNewDay(state.lastStudyDate);
      const lastDateStr = state.lastStudyDate ? new Date(state.lastStudyDate).toDateString() : null;
      const yesterday = new Date(Date.now() - 86400000).toDateString();

      let newStreak = state.streak;
      let newDailyXp = isNewDay ? xpEarned : state.dailyXp + xpEarned;

      if (isNewDay) {
        if (lastDateStr === yesterday || state.streak === 0) {
          newStreak = state.streak + 1;
        } else if (lastDateStr !== today) {
          newStreak = 1; // Reset streak if missed a day
        }
      }

      const newXp = state.xp + xpEarned + XP_PER_LESSON;
      const newBadges = [...state.badges];
      if (perfect && !newBadges.includes('perfect_lesson')) {
        newBadges.push('perfect_lesson');
      }

      const newGems = state.gems + (perfect ? 5 : 2);

      return {
        ...state,
        xp: newXp,
        gems: newGems,
        dailyXp: newDailyXp,
        level: getLevel(newXp),
        streak: newStreak,
        lastStudyDate: new Date().toISOString(),
        completedLessons: { ...state.completedLessons, [courseId]: completed },
        courseProgress: { ...state.courseProgress, [courseId]: progress },
        totalLessonsCompleted: state.totalLessonsCompleted + 1,
        badges: newBadges,
      };
    }

    case 'SPEND_GEMS': {
      const gems = Math.max(0, state.gems - action.amount);
      return { ...state, gems };
    }

    case 'BUY_HEARTS': {
      if (state.gems < 350) return state;
      return { ...state, gems: state.gems - 350, hearts: MAX_HEARTS };
    }

    case 'BUY_STREAK_FREEZE': {
      if (state.gems < 200) return state;
      return { ...state, gems: state.gems - 200 };
    }

    case 'RESET': {
      return defaultState;
    }

    default:
      return state;
  }
}

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState);

  // Load persisted state on mount
  useEffect(() => {
    const saved = loadState();
    if (saved) {
      // Regenerate hearts based on time passed
      let hearts = saved.hearts ?? MAX_HEARTS;
      if (saved.lastHeartLostTime && hearts < MAX_HEARTS) {
        const elapsed = Date.now() - saved.lastHeartLostTime;
        const regenCount = Math.floor(elapsed / HEART_REGEN_MS);
        hearts = Math.min(MAX_HEARTS, hearts + regenCount);
      }
      dispatch({ type: 'LOAD_STATE', payload: { ...saved, hearts } });
    }
  }, []);

  // Persist state on every change
  useEffect(() => {
    if (state !== defaultState) {
      saveState(state);
    }
  }, [state]);

  const earnXp = useCallback((amount) => dispatch({ type: 'EARN_XP', amount }), []);
  const loseHeart = useCallback(() => dispatch({ type: 'LOSE_HEART' }), []);
  const completeLesson = useCallback((courseId, lessonIndex, xpEarned, perfect, courseLength) => {
    dispatch({ type: 'COMPLETE_LESSON', courseId, lessonIndex, xpEarned, perfect, courseLength });
  }, []);
  const buyHearts = useCallback(() => dispatch({ type: 'BUY_HEARTS' }), []);
  const buyStreakFreeze = useCallback(() => dispatch({ type: 'BUY_STREAK_FREEZE' }), []);
  const spendGems = useCallback((amount) => dispatch({ type: 'SPEND_GEMS', amount }), []);
  const reset = useCallback(() => dispatch({ type: 'RESET' }), []);

  const isLessonCompleted = useCallback((courseId, lessonIndex) => {
    const completed = state.completedLessons[courseId] || [];
    return completed.includes(lessonIndex);
  }, [state.completedLessons]);

  const getCourseProgress = useCallback((courseId) => {
    return state.courseProgress[courseId] || 0;
  }, [state.courseProgress]);

  const isCourseUnlocked = useCallback((courseIndex) => {
    if (courseIndex === 0) return true;
    // Unlock next course when previous is > 30% complete
    const prevCourseId = `course_${courseIndex - 1}`;
    return true; // All unlocked for kids!
  }, []);

  return (
    <GameContext.Provider value={{
      state,
      MAX_HEARTS,
      earnXp,
      loseHeart,
      completeLesson,
      buyHearts,
      buyStreakFreeze,
      spendGems,
      reset,
      isLessonCompleted,
      getCourseProgress,
      isCourseUnlocked,
    }}>
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be inside GameProvider');
  return ctx;
};
