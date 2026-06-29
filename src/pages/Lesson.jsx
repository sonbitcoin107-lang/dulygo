// src/pages/Lesson.jsx
import { useState, useCallback, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { getCourseById } from '../data/courses';
import MultipleChoice from '../components/exercises/MultipleChoice';
import TapWords from '../components/exercises/TapWords';
import FillBlank from '../components/exercises/FillBlank';
import MatchPairs from '../components/exercises/MatchPairs';
import Confetti from '../components/ui/Confetti';
import { playCorrect, playWrong, playHeartLost } from '../utils/audio';
import './Lesson.css';

const XP_CORRECT = 10;

export default function Lesson() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { state, loseHeart, completeLesson } = useGame();

  const course = getCourseById(courseId);
  const lessons = course?.lessons || [];
  const totalQuestions = lessons.length;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [hearts, setHearts] = useState(state.hearts);
  const [xpEarned, setXpEarned] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [resultMsg, setResultMsg] = useState('');

  const currentLesson = lessons[currentIdx];
  const progress = ((currentIdx) / totalQuestions) * 100;

  const handleAnswer = useCallback((correct) => {
    setAnswered(true);
    setIsCorrect(correct);

    if (correct) {
      playCorrect();
      setXpEarned(xp => xp + XP_CORRECT);
      setShowConfetti(true);
      const messages = ['Tuyệt vời! 🎉', 'Xuất sắc! ⭐', 'Đúng rồi! 💯', 'Giỏi lắm! 🏆', 'Hoàn hảo! 💎'];
      setResultMsg(messages[Math.floor(Math.random() * messages.length)]);
      setTimeout(() => setShowConfetti(false), 3000);
    } else {
      playWrong();
      playHeartLost();
      setMistakes(m => m + 1);
      const newHearts = hearts - 1;
      setHearts(newHearts);
      loseHeart();
      setResultMsg('Chưa đúng, cố gắng lên! 💪');
      if (newHearts <= 0) {
        setTimeout(() => navigate('/'), 2000);
      }
    }
  }, [hearts, loseHeart, navigate]);

  const handleNext = () => {
    setAnswered(false);
    setIsCorrect(null);
    setShowConfetti(false);
    setResultMsg('');

    if (currentIdx + 1 >= totalQuestions) {
      // Lesson complete!
      const perfect = mistakes === 0;
      completeLesson(courseId, currentIdx, xpEarned, perfect, totalQuestions);
      navigate('/result', {
        state: {
          courseId,
          xpEarned,
          perfect,
          mistakes,
          courseName: course.title,
          courseEmoji: course.emoji,
        }
      });
    } else {
      setCurrentIdx(i => i + 1);
    }
  };

  if (!course) {
    return <div className="lesson-error">Không tìm thấy bài học!</div>;
  }

  return (
    <div className="lesson-page">
      {/* Confetti */}
      <Confetti active={showConfetti} />

      {/* Header */}
      <div className="lesson-header">
        <button
          id="btn-lesson-back"
          className="lesson-back-btn"
          onClick={() => navigate('/')}
          aria-label="Quay lại"
        >
          ✕
        </button>

        {/* Progress bar */}
        <div className="lesson-progress-wrap">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Hearts */}
        <div className="lesson-hearts">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={`heart-icon ${i >= hearts ? 'lost' : ''}`}>❤️</span>
          ))}
        </div>
      </div>

      {/* Exercise */}
      <div className="lesson-body" key={currentIdx}>
        <div className="lesson-question-num">
          Câu {currentIdx + 1}/{totalQuestions}
        </div>

        {currentLesson.type === 'multiple_choice' && (
          <MultipleChoice
            question={currentLesson.question}
            options={currentLesson.options}
            audio={currentLesson.audio}
            onAnswer={handleAnswer}
            disabled={answered}
          />
        )}

        {currentLesson.type === 'tap_words' && (
          <TapWords
            question={currentLesson.question}
            answer={currentLesson.answer}
            wordBank={currentLesson.wordBank}
            onAnswer={handleAnswer}
            disabled={answered}
          />
        )}

        {currentLesson.type === 'fill_blank' && (
          <FillBlank
            question={currentLesson.question}
            answer={currentLesson.answer}
            hint={currentLesson.hint}
            options={currentLesson.options}
            audio={currentLesson.audio}
            onAnswer={handleAnswer}
            disabled={answered}
          />
        )}

        {currentLesson.type === 'match_pairs' && (
          <MatchPairs
            question={currentLesson.question}
            pairs={currentLesson.pairs}
            onAnswer={handleAnswer}
            disabled={answered}
          />
        )}
      </div>

      {/* Result Banner */}
      {answered && (
        <div className={`result-banner ${isCorrect ? 'correct' : 'wrong'}`}>
          <div className="result-banner-content">
            <div>
              <h3>{isCorrect ? '✅ ' : '❌ '}{resultMsg}</h3>
              {isCorrect && (
                <p className="result-xp">+{XP_CORRECT} XP ⚡</p>
              )}
              {!isCorrect && currentLesson.type === 'multiple_choice' && (
                <p className="result-correct-answer">
                  Đáp án đúng: {currentLesson.options.find(o => o.correct)?.text}
                </p>
              )}
            </div>
            <button
              id="btn-next"
              className={`btn ${isCorrect ? 'btn-primary' : 'btn-danger'}`}
              onClick={handleNext}
            >
              {currentIdx + 1 >= totalQuestions ? 'Hoàn thành! 🎊' : 'Tiếp theo →'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
