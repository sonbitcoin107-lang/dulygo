// src/components/exercises/MatchPairs.jsx
import { useState } from 'react';
import './MatchPairs.css';

export default function MatchPairs({ question, pairs, onAnswer, disabled }) {
  const [leftSelected, setLeftSelected] = useState(null);
  const [rightSelected, setRightSelected] = useState(null);
  const [matched, setMatched] = useState([]); // [{left, right}]
  const [wrongPair, setWrongPair] = useState(null);

  // Shuffle right side
  const [rightItems] = useState(() => [...pairs].sort(() => Math.random() - 0.5));

  const checkMatch = (left, right) => {
    const pair = pairs.find(p => p.en === left && p.vi === right);
    return !!pair;
  };

  const handleLeft = (item) => {
    if (disabled) return;
    if (matched.some(m => m.left === item)) return;
    setLeftSelected(item);
    if (rightSelected) {
      const correct = checkMatch(item, rightSelected);
      if (correct) {
        const newMatched = [...matched, { left: item, right: rightSelected }];
        setMatched(newMatched);
        setLeftSelected(null);
        setRightSelected(null);
        if (newMatched.length === pairs.length) {
          setTimeout(() => onAnswer(true), 400);
        }
      } else {
        setWrongPair({ left: item, right: rightSelected });
        setTimeout(() => {
          setWrongPair(null);
          setLeftSelected(null);
          setRightSelected(null);
          onAnswer(false);
        }, 800);
      }
    }
  };

  const handleRight = (item) => {
    if (disabled) return;
    if (matched.some(m => m.right === item)) return;
    setRightSelected(item);
    if (leftSelected) {
      const correct = checkMatch(leftSelected, item);
      if (correct) {
        const newMatched = [...matched, { left: leftSelected, right: item }];
        setMatched(newMatched);
        setLeftSelected(null);
        setRightSelected(null);
        if (newMatched.length === pairs.length) {
          setTimeout(() => onAnswer(true), 400);
        }
      } else {
        setWrongPair({ left: leftSelected, right: item });
        setTimeout(() => {
          setWrongPair(null);
          setLeftSelected(null);
          setRightSelected(null);
          onAnswer(false);
        }, 800);
      }
    }
  };

  const isLeftMatched = (item) => matched.some(m => m.left === item);
  const isRightMatched = (item) => matched.some(m => m.right === item);
  const isWrongLeft = wrongPair?.left === leftSelected;
  const isWrongRight = wrongPair?.right === rightSelected;

  return (
    <div className="matchpairs-container fade-in">
      <h2 className="matchpairs-question">{question}</h2>

      <div className="matchpairs-grid">
        {/* Left column — English */}
        <div className="matchpairs-col">
          {pairs.map((pair, idx) => (
            <button
              key={idx}
              id={`match-left-${idx}`}
              className={`match-card ${leftSelected === pair.en ? 'selected' : ''} ${isLeftMatched(pair.en) ? 'matched' : ''} ${wrongPair?.left === pair.en ? 'wrong-match' : ''}`}
              onClick={() => handleLeft(pair.en)}
              disabled={isLeftMatched(pair.en)}
            >
              {pair.en}
            </button>
          ))}
        </div>

        {/* Right column — Vietnamese */}
        <div className="matchpairs-col">
          {rightItems.map((pair, idx) => (
            <button
              key={idx}
              id={`match-right-${idx}`}
              className={`match-card ${rightSelected === pair.vi ? 'selected' : ''} ${isRightMatched(pair.vi) ? 'matched' : ''} ${wrongPair?.right === pair.vi ? 'wrong-match' : ''}`}
              onClick={() => handleRight(pair.vi)}
              disabled={isRightMatched(pair.vi)}
            >
              {pair.vi}
            </button>
          ))}
        </div>
      </div>

      <p className="matchpairs-hint">
        {matched.length}/{pairs.length} cặp đã nối ✓
      </p>
    </div>
  );
}
