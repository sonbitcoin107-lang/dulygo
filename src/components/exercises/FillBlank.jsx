// src/components/exercises/FillBlank.jsx
import { useState } from 'react';
import { speakEnglish } from '../../utils/audio';
import './FillBlank.css';

export default function FillBlank({ question, answer, hint, options, audio, onAnswer, disabled }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (opt, idx) => {
    if (disabled || selected !== null) return;
    setSelected(idx);
    onAnswer(opt.toLowerCase() === answer.toLowerCase(), idx);
  };

  return (
    <div className="fillblank-container fade-in">
      <div className="fillblank-header">
        {audio && (
          <button
            id="btn-speak-fill"
            className="speak-btn"
            onClick={() => speakEnglish(audio)}
            aria-label="Nghe phát âm"
          >
            🔊
          </button>
        )}
        <h2 className="fillblank-question">{question}</h2>
        {hint && (
          <p className="fillblank-hint">💡 Gợi ý: {hint}</p>
        )}
      </div>

      <div className="fillblank-options">
        {options.map((opt, idx) => {
          let statusClass = '';
          if (selected !== null) {
            if (idx === selected) {
              statusClass = opt.toLowerCase() === answer.toLowerCase() ? 'correct' : 'wrong';
            } else if (opt.toLowerCase() === answer.toLowerCase()) {
              statusClass = 'correct';
            }
          }
          return (
            <button
              key={idx}
              id={`fill-option-${idx}`}
              className={`option-btn ${statusClass}`}
              onClick={() => handleSelect(opt, idx)}
              disabled={disabled}
            >
              <span>{opt}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
