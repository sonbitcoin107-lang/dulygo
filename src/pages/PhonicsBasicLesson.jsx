// src/pages/PhonicsBasicLesson.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import curriculum from '../data/phonics/basic_phonics_curriculum.json';
import { speakText } from '../utils/speech';
import PhonicsBlendingGame from '../components/exercises/PhonicsBlendingGame';
import { decomposeToPhonemes, shuffleArray } from '../utils/phonicsUtils';
import './PhonicsBasicLesson.css';

export default function PhonicsBasicLesson() {
  const { groupId } = useParams();
  const navigate = useNavigate();
  
  const group = curriculum.find(g => g.group_id === parseInt(groupId));
  const [currentIndex, setCurrentIndex] = useState(0);

  // New state for Game
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [letterBank, setLetterBank] = useState([]);

  useEffect(() => {
    // Reset word index when group changes or we re-enter lesson
    setCurrentWordIndex(0);
  }, [groupId]);

  if (!group) {
    return (
      <div className="phonics-basic-lesson-page">
        <button className="btn-close-lesson" onClick={() => navigate('/phonics-basic')}>✕</button>
        <div style={{padding: '20px', textAlign: 'center'}}>Không tìm thấy nhóm âm!</div>
      </div>
    );
  }

  const sounds = group.sounds;
  const blendingWords = group.blending_words || group.words || [];
  
  // Game is reached after finishing all sound slides, AND only if we have words
  const isGameSlide = currentIndex === sounds.length && blendingWords.length > 0;
  const isDoneSlide = currentIndex === sounds.length && blendingWords.length === 0; // fallback
  const currentSound = (isGameSlide || isDoneSlide) ? null : sounds[currentIndex];

  const activeWordObj = isGameSlide ? blendingWords[currentWordIndex] : null;

  useEffect(() => {
    if (isGameSlide && activeWordObj?.word) {
      const correctPhonemes = decomposeToPhonemes(activeWordObj.word);
      const shuffledPhonemes = shuffleArray(correctPhonemes);
      setLetterBank(shuffledPhonemes);
    }
  }, [isGameSlide, activeWordObj]);

  const handleNext = () => {
    if (currentIndex < sounds.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate('/phonics-basic');
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleWordCompleted = () => {
    if (currentWordIndex < blendingWords.length - 1) {
      setCurrentWordIndex(prev => prev + 1);
    } else {
      // Completed all words, go back to menu
      navigate('/phonics-basic');
    }
  };

  const speakSound = () => {
    if (!currentSound) return;
    const exampleWord = currentSound.example_word ? currentSound.example_word.word : '';
    speakText(`${currentSound.letter.split('').join(' ')}, as in, ${exampleWord}`);
  };
  const speakWord = () => {
    if (!currentSound) return;
    if (currentSound?.example_word?.word) {
      speakText(currentSound.example_word.word);
    }
  };

  return (
    <div className="phonics-basic-lesson-page">
      <div className="basic-lesson-top">
        {currentIndex > 0 ? (
          <button className="btn-nav btn-prev" onClick={handlePrev}>◀</button>
        ) : (
          <div style={{width: '44px'}}></div>
        )}
        <div className="lesson-progress">{isGameSlide ? `Thực hành ${currentWordIndex + 1}/${blendingWords.length}` : `Âm ${currentIndex + 1} / ${sounds.length}`}</div>
        <button className="btn-nav btn-close" onClick={() => navigate('/phonics-basic')}>✕</button>
      </div>

      {isGameSlide && activeWordObj ? (
        <div className="slide-container fade-in" key={`game-${activeWordObj.word}`}>
          <PhonicsBlendingGame 
            targetWord={activeWordObj.word}
            targetWordIpa={activeWordObj.ipa}
            targetWordVi={activeWordObj.vi}
            targetWordEmoji={activeWordObj.emoji}
            correctSequence={decomposeToPhonemes(activeWordObj.word)}
            availableLetters={letterBank}
            onSuccess={handleWordCompleted}
          />
        </div>
      ) : isDoneSlide ? (
        <div className="slide-container fade-in" key="done">
          <div style={{textAlign: 'center', color: 'white', marginTop: '100px'}}>
            <h2>Hoàn thành Nhóm âm! 🎉</h2>
          </div>
        </div>
      ) : (
        <div className="slide-container fade-in" key={currentSound.letter}>
          
          <div className="letter-header">
            <h1 className="huge-letter">{currentSound.letter}</h1>
            <div className="sound-ipa-box" onClick={speakSound}>
              <span>{currentSound.sound}</span>
              <button className="btn-speaker-small">🔊</button>
            </div>
          </div>

          {currentSound.mnemonic_story && (
            <div className="info-card story-card">
              <div className="info-card-header">📖 Câu chuyện</div>
              <p>{currentSound.mnemonic_story}</p>
            </div>
          )}

          {currentSound.action && (
            <div className="info-card action-card">
              <div className="info-card-header">🙌 Hành động</div>
              <p>{currentSound.action}</p>
            </div>
          )}

          {currentSound.example_word && (
            <div className="example-word-card" onClick={speakWord}>
              <div className="ex-emoji">{currentSound.example_word.emoji}</div>
              <div className="ex-details">
                <div className="ex-word">{currentSound.example_word.word}</div>
                <div className="ex-ipa">{currentSound.example_word.ipa}</div>
                <div className="ex-vi">{currentSound.example_word.vi}</div>
              </div>
              <button className="btn-speaker-card">🔊</button>
            </div>
          )}

        </div>
      )}

      <div className="basic-lesson-bottom">
        {!isGameSlide && (
          <button className="btn-primary-huge" onClick={handleNext}>
            {currentIndex === sounds.length ? 'Hoàn thành 🎉' : 'Tiếp theo ▶'}
          </button>
        )}
      </div>
    </div>
  );
}

