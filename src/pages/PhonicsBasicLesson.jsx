// src/pages/PhonicsBasicLesson.jsx
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import curriculum from '../data/phonics/basic_phonics_curriculum.json';
import { speakText } from '../utils/speech';
import PhonicsBlendingGame from '../components/exercises/PhonicsBlendingGame';
import './PhonicsBasicLesson.css';

export default function PhonicsBasicLesson() {
  const { groupId } = useParams();
  const navigate = useNavigate();
  
  const group = curriculum.find(g => g.group_id === parseInt(groupId));
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!group) {
    return (
      <div className="phonics-basic-lesson-page">
        <button className="btn-close-lesson" onClick={() => navigate('/phonics-basic')}>✕</button>
        <div style={{padding: '20px', textAlign: 'center'}}>Không tìm thấy nhóm âm!</div>
      </div>
    );
  }

  const sounds = group.sounds;
  const isGameSlide = currentIndex === sounds.length;
  const currentSound = isGameSlide ? null : sounds[currentIndex];

  const handleNext = () => {
    if (currentIndex < sounds.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Finished the group!
      navigate('/phonics-basic');
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const speakSound = () => {
    if (isGameSlide) return;
    const exampleWord = currentSound.example_word ? currentSound.example_word.word : '';
    speakText(`${currentSound.letter.split('').join(' ')}, as in, ${exampleWord}`);
  };
  const speakWord = () => {
    if (isGameSlide) return;
    speakText(currentSound.example_word.word);
  };

  return (
    <div className="phonics-basic-lesson-page">
      <div className="basic-lesson-top">
        {currentIndex > 0 ? (
          <button className="btn-nav btn-prev" onClick={handlePrev}>◀</button>
        ) : (
          <div style={{width: '44px'}}></div> /* spacer */
        )}
        <div className="lesson-progress">{isGameSlide ? 'Thực hành' : `Âm ${currentIndex + 1} / ${sounds.length}`}</div>
        <button className="btn-nav btn-close" onClick={() => navigate('/phonics-basic')}>✕</button>
      </div>

      {isGameSlide ? (
        <div className="slide-container fade-in" key="game">
          <PhonicsBlendingGame 
            availableLetters={sounds.map(s => s.letter)} 
            blendingWords={group.blending_words || []} 
          />
        </div>
      ) : (
        <div className="slide-container fade-in" key={currentSound.letter}>
          
          {/* Letter & Sound */}
          <div className="letter-header">
            <h1 className="huge-letter">{currentSound.letter}</h1>
            <div className="sound-ipa-box" onClick={speakSound}>
              <span>{currentSound.sound}</span>
              <button className="btn-speaker-small">🔊</button>
            </div>
          </div>

          {/* Story Card */}
          <div className="info-card story-card">
            <div className="info-card-header">📖 Câu chuyện</div>
            <p>{currentSound.mnemonic_story}</p>
          </div>

          {/* Action Card */}
          <div className="info-card action-card">
            <div className="info-card-header">🙌 Hành động</div>
            <p>{currentSound.action}</p>
          </div>

          {/* Example Word */}
          <div className="example-word-card" onClick={speakWord}>
            <div className="ex-emoji">{currentSound.example_word.emoji}</div>
            <div className="ex-details">
              <div className="ex-word">{currentSound.example_word.word}</div>
              <div className="ex-ipa">{currentSound.example_word.ipa}</div>
              <div className="ex-vi">{currentSound.example_word.vi}</div>
            </div>
            <button className="btn-speaker-card">🔊</button>
          </div>

        </div>
      )}

      <div className="basic-lesson-bottom">
        <button className="btn-primary-huge" onClick={handleNext}>
          {currentIndex === sounds.length ? 'Hoàn thành 🎉' : 'Tiếp theo ▶'}
        </button>
      </div>
    </div>
  );
}
