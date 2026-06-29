// src/pages/PhonicsLesson.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import rules from '../data/phonics/rules_60.json';
import { speakText } from '../utils/speech';
import './PhonicsLesson.css';

// Component to highlight pattern in a word
const HighlightPattern = ({ word, pattern }) => {
  const idx = word.toLowerCase().indexOf(pattern.toLowerCase());
  if (idx === -1) return <span>{word}</span>;

  const before = word.slice(0, idx);
  const match = word.slice(idx, idx + pattern.length);
  const after = word.slice(idx + pattern.length);

  return (
    <span>
      {before}
      <span className="phonics-highlight">{match}</span>
      {after}
    </span>
  );
};

export default function PhonicsLesson() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const rule = rules.find((r) => r.id === parseInt(id));

  if (!rule) {
    return (
      <div className="phonics-lesson-page">
        <div className="phonics-top-bar">
          <button className="btn-close-lesson" onClick={() => navigate('/phonics')}>✕</button>
        </div>
        <div style={{color: 'white', padding: '20px'}}>Không tìm thấy bài học!</div>
      </div>
    );
  }

  const handleSpeak = (e, text) => {
    e.stopPropagation(); // Prevent card flip if we add flip later
    speakText(text);
  };

  return (
    <div className="phonics-lesson-page">
      <div className="phonics-top-bar">
        <button className="btn-close-lesson" onClick={() => navigate('/phonics')}>✕</button>
        <span className="lesson-title">Bài {rule.id}</span>
      </div>

      <div className="phonics-lesson-content fade-in">
        
        {/* Rule Card */}
        <div className="rule-card">
          <div className="rule-card-header">
            <span className="bulb-icon">💡</span> QUY TẮC
          </div>
          <div className="rule-card-body">
            <div className="rule-text">
              Từ có chứa <span className="phonics-highlight lg">{rule.pattern}</span>
            </div>
            <div className="rule-text" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
              <span>thì đọc là</span> 
              <span className="phonics-sound-highlight">{rule.sound}</span>
              <button 
                className="btn-speaker-card" 
                style={{position: 'relative', top: '0', right: '0'}} 
                onClick={() => speakText(rule.pattern)}
                title="Nghe âm này"
              >
                🔊
              </button>
            </div>
          </div>
        </div>

        <div className="examples-divider">
          <div className="line"></div>
          <span>VÍ DỤ</span>
          <div className="line"></div>
        </div>

        {/* Word Cards Grid */}
        <div className="words-grid">
          {rule.words.map((wordObj, index) => (
            <div key={index} className="word-card" onClick={(e) => handleSpeak(e, wordObj.word)}>
              <div className="word-card-eng">
                <HighlightPattern word={wordObj.word} pattern={rule.pattern} />
              </div>
              <div className="word-card-ipa">{wordObj.ipa}</div>
              <div className="word-card-vi">
                <span className="word-emoji">{wordObj.emoji}</span> {wordObj.vi}
              </div>
              <button className="btn-speaker-card" onClick={(e) => handleSpeak(e, wordObj.word)}>🔊</button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="phonics-footer">
          <span className="star-icon">⭐</span>
          <strong>GHI NHỚ:</strong> {rule.tip}
        </div>

      </div>
    </div>
  );
}
