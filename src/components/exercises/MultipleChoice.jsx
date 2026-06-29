// src/components/exercises/MultipleChoice.jsx
import { useState } from 'react';
import { speakEnglish } from '../../utils/audio';
import './MultipleChoice.css';

export default function MultipleChoice({ question, options, audio, onAnswer, disabled }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (opt, idx) => {
    if (disabled || selected !== null) return;
    setSelected(idx);
    onAnswer(opt.correct, idx);
  };

  const handleSpeak = () => {
    if (audio) speakEnglish(audio);
  };

  return (
    <div className="mc-container fade-in">
      <div className="mc-question">
        {audio && (
          <button
            id="btn-speak"
            className="speak-btn"
            onClick={handleSpeak}
            aria-label="Nghe phát âm"
          >
            🔊
          </button>
        )}
        <h2 className="mc-question-text">{question}</h2>
      </div>

      <div className="mc-options">
        {options.map((opt, idx) => {
          let statusClass = '';
          if (selected !== null) {
            if (idx === selected) {
              statusClass = opt.correct ? 'correct' : 'wrong';
            } else if (opt.correct && selected !== null) {
              statusClass = 'correct';
            }
          }

          return (
            <button
              key={idx}
              id={`option-${idx}`}
              className={`option-btn ${selected === idx ? 'selected' : ''} ${statusClass}`}
              onClick={() => handleSelect(opt, idx)}
              disabled={disabled}
            >
              {opt.emoji && <span className="option-emoji">{opt.emoji}</span>}
              <span>{opt.text}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
