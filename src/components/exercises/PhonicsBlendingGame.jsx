// src/components/exercises/PhonicsBlendingGame.jsx
import { useState, useMemo, useEffect } from 'react';
import { speakText } from '../../utils/speech';
import './PhonicsBlendingGame.css';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function PhonicsBlendingGame({ availableLetters = [], blendingWords = [] }) {
  // Add index to letters so duplicates can exist or just handle by index
  const bankItems = useMemo(() => {
    // If letters are less than 6, maybe duplicate some vowels? 
    // Usually availableLetters is precisely the group's letters
    let letters = shuffle(availableLetters);
    // Ensure we have some vowels if not enough, but curriculum has them.
    return letters.map((letter, idx) => ({ id: `bank-${idx}`, letter, idx }));
  }, [availableLetters]);

  const [selected, setSelected] = useState([]); // Max 3 items
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSlotIndex, setActiveSlotIndex] = useState(-1);
  const [result, setResult] = useState(null);

  const handleBankClick = (item) => {
    if (isPlaying) return;
    if (selected.length >= 3) return;
    if (selected.find(s => s.id === item.id)) return;
    
    // Auto speak letter when tapped
    speakText(item.letter);
    setSelected(prev => [...prev, item]);
    setResult(null);
  };

  const handleSlotClick = (index) => {
    if (isPlaying) return;
    setSelected(prev => prev.filter((_, i) => i !== index));
    setResult(null);
  };

  const handlePlayTrain = () => {
    if (selected.length !== 3) return;
    if (isPlaying) return;
    
    setIsPlaying(true);
    setResult(null);
    
    const wordFormed = selected.map(s => s.letter).join('');
    const matchedWord = blendingWords.find(w => w.word.toLowerCase() === wordFormed.toLowerCase());
    
    // Sequence
    setTimeout(() => { setActiveSlotIndex(0); speakText(selected[0].letter); }, 0);
    setTimeout(() => { setActiveSlotIndex(1); speakText(selected[1].letter); }, 600);
    setTimeout(() => { setActiveSlotIndex(2); speakText(selected[2].letter); }, 1200);
    
    setTimeout(() => {
      setActiveSlotIndex(-1);
      if (matchedWord) {
        speakText(matchedWord.word);
        setResult({ type: 'success', word: matchedWord });
      } else {
        setResult({ type: 'error' });
      }
      setIsPlaying(false);
    }, 1800);
  };

  const isUsed = (id) => selected.some(s => s.id === id);
  const slots = [0, 1, 2]; // Fixed 3 slots

  return (
    <div className="blending-game-container">
      <h2 className="blending-title">Thực hành Ghép Vần</h2>
      <p className="blending-subtitle">Chạm chữ cái để xếp thành từ nhé!</p>
      
      {/* 3 Active Slots */}
      <div className="blending-board">
        {slots.map(i => (
          <div 
            key={i} 
            className={`blending-slot ${activeSlotIndex === i ? 'active-glow' : ''} ${selected[i] ? 'filled' : 'empty'}`}
            onClick={() => handleSlotClick(i)}
          >
            {selected[i] ? selected[i].letter : ''}
          </div>
        ))}
      </div>

      {/* Train Button */}
      <button 
        className={`btn-train ${selected.length === 3 ? 'ready' : ''} ${isPlaying ? 'playing' : ''}`}
        onClick={handlePlayTrain}
        disabled={selected.length !== 3 || isPlaying}
      >
        {isPlaying ? '🚂...' : '🚂 Ghép vần!'}
      </button>

      {/* Result Card */}
      {result && result.type === 'success' && (
        <div className="blending-result success fade-in">
          <div className="blending-emoji">{result.word.emoji}</div>
          <div className="blending-info">
            <div className="blending-word">{result.word.word}</div>
            <div className="blending-vi">{result.word.vi}</div>
          </div>
        </div>
      )}
      
      {result && result.type === 'error' && (
        <div className="blending-result error fade-in">
          Ồ, thử xếp lại nhé! 🤔
        </div>
      )}

      <div className="blending-divider" />

      {/* Letter Bank */}
      <div className="blending-bank">
        {bankItems.map((item) => (
          <button
            key={item.id}
            className={`bank-letter ${isUsed(item.id) ? 'used' : ''}`}
            onClick={() => handleBankClick(item)}
            disabled={isPlaying}
          >
            {item.letter}
          </button>
        ))}
      </div>
    </div>
  );
}
