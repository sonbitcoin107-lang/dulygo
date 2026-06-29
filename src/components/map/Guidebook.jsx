// src/components/map/Guidebook.jsx
// Props:
//   unit:    course object (title, emoji, color, guidebook[])
//   onClose: function to close the modal

import { useState } from 'react';
import { speakText } from '../../utils/speech';
import './Guidebook.css';

export default function Guidebook({ unit, onClose }) {
  const [speaking, setSpeaking] = useState(null);

  const handleSpeak = (phrase, idx) => {
    setSpeaking(idx);
    speakText(phrase.en, () => setSpeaking(null));
  };

  // Close on overlay click (not on sheet click)
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  return (
    <div className="guidebook-overlay" onClick={handleOverlayClick}>
      <div className="guidebook-sheet">
        {/* Header */}
        <div className="guidebook-header">
          {/* Try to load mascot image, fallback to emoji */}
          <img
            className="guidebook-mascot"
            src="/dulygo/mascot.png"
            alt="Mascot"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'flex';
            }}
          />
          <div className="guidebook-mascot-fallback" style={{ display: 'none' }}>
            {unit.emoji}
          </div>

          <div className="guidebook-header-text">
            <span className="guidebook-header-label">Sổ tay</span>
            <span className="guidebook-header-title">{unit.title}</span>
          </div>

          <button className="guidebook-close-btn" onClick={onClose} aria-label="Đóng">
            ✕
          </button>
        </div>

        {/* Phrase list */}
        <div className="guidebook-content">
          <div className="guidebook-section-title">CỤM TỪ CHÍNH</div>

          {(unit.guidebook || []).map((phrase, idx) => (
            <div key={idx} className="guidebook-phrase-card">
              <button
                className="guidebook-speak-btn"
                onClick={() => handleSpeak(phrase, idx)}
                aria-label={`Nghe phát âm: ${phrase.en}`}
                style={speaking === idx ? { opacity: 0.7 } : {}}
              >
                🔊
              </button>

              <div className="guidebook-phrase-texts">
                <span className="guidebook-phrase-en">{phrase.en}</span>
                <span className="guidebook-phrase-vi">{phrase.vi}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="guidebook-footer">
          <button className="guidebook-start-btn" onClick={onClose}>
            BẮT ĐẦU HỌC →
          </button>
        </div>
      </div>
    </div>
  );
}
