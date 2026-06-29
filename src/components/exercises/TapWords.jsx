// src/components/exercises/TapWords.jsx
import { useState } from 'react';
import './TapWords.css';

export default function TapWords({ question, answer, wordBank, onAnswer, disabled }) {
  const [selected, setSelected] = useState([]); // [{word, idx}]

  const handleWordBankClick = (word, idx) => {
    if (disabled) return;
    if (selected.find(s => s.idx === idx)) return;
    setSelected(prev => [...prev, { word, idx }]);
  };

  const handleAnswerClick = (idx) => {
    if (disabled) return;
    setSelected(prev => prev.filter((_, i) => i !== idx));
  };

  const handleCheck = () => {
    const userAnswer = selected.map(s => s.word);
    const correct = JSON.stringify(userAnswer) === JSON.stringify(answer);
    onAnswer(correct);
  };

  const isWordUsed = (idx) => selected.some(s => s.idx === idx);

  return (
    <div className="tapwords-container fade-in">
      <h2 className="tapwords-question">{question}</h2>

      {/* Answer area */}
      <div className="answer-area tapwords-answer">
        {selected.length === 0 ? (
          <span className="tapwords-placeholder">Chạm vào các từ bên dưới...</span>
        ) : (
          selected.map((item, i) => (
            <button
              key={i}
              id={`answer-word-${i}`}
              className="word-chip active"
              onClick={() => handleAnswerClick(i)}
            >
              {item.word}
            </button>
          ))
        )}
      </div>

      <div className="tapwords-divider" />

      {/* Word bank */}
      <div className="tapwords-bank">
        {wordBank.map((word, idx) => (
          <button
            key={idx}
            id={`bank-word-${idx}`}
            className={`word-chip ${isWordUsed(idx) ? 'used' : ''}`}
            onClick={() => handleWordBankClick(word, idx)}
            disabled={disabled}
          >
            {word}
          </button>
        ))}
      </div>

      {/* Check button */}
      {!disabled && selected.length > 0 && (
        <button
          id="btn-check-tapwords"
          className="btn btn-primary btn-full mt-4"
          onClick={handleCheck}
        >
          Kiểm tra ✓
        </button>
      )}
    </div>
  );
}
