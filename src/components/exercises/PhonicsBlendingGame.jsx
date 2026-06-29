// src/components/exercises/PhonicsBlendingGame.jsx
import { useState, useMemo, useEffect } from 'react';
import { speakText } from '../../utils/speech';
import './PhonicsBlendingGame.css';

export default function PhonicsBlendingGame({ 
  targetWord, 
  targetWordIpa, 
  targetWordVi, 
  targetWordEmoji, 
  correctSequence = [], 
  availableLetters = [],
  onSuccess 
}) {
  const bankItems = useMemo(() => {
    return availableLetters.map((letter, idx) => ({ id: `bank-${idx}`, letter, idx }));
  }, [availableLetters]);

  const [selected, setSelected] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSlotIndex, setActiveSlotIndex] = useState(-1);
  const [result, setResult] = useState(null);

  // Reset state when target word changes
  useEffect(() => {
    setSelected([]);
    setResult(null);
    setIsPlaying(false);
    setActiveSlotIndex(-1);
  }, [targetWord]);

  const maxSlots = correctSequence.length;
  const slots = Array.from({ length: maxSlots }, (_, i) => i);

  const handleBankClick = (item) => {
    if (isPlaying) return;
    if (selected.length >= maxSlots) return;
    if (selected.find(s => s.id === item.id)) return;
    
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
    if (selected.length !== maxSlots) return;
    if (isPlaying) return;
    
    setIsPlaying(true);
    setResult(null);
    
    const wordFormed = selected.map(s => s.letter).join('').toLowerCase();
    const isCorrect = wordFormed === targetWord.toLowerCase() || wordFormed === correctSequence.join('').toLowerCase();
    
    // Sequence playback
    selected.forEach((s, idx) => {
      setTimeout(() => { 
        setActiveSlotIndex(idx); 
        speakText(s.letter); 
      }, idx * 600);
    });
    
    setTimeout(() => {
      setActiveSlotIndex(-1);
      if (isCorrect) {
        speakText(targetWord);
        setResult({ type: 'success' });
        if (onSuccess) {
          setTimeout(onSuccess, 2000); // Trigger next word after a delay
        }
      } else {
        setResult({ type: 'error' });
      }
      setIsPlaying(false);
    }, maxSlots * 600);
  };

  const isUsed = (id) => selected.some(s => s.id === id);

  return (
    <div className="blending-game-container">
      <h2 className="blending-title">Thực hành Ghép Vần</h2>
      <p className="blending-subtitle">Chạm chữ cái để xếp thành từ nhé!</p>
      
      {/* Active Slots */}
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
        className={`btn-train ${selected.length === maxSlots ? 'ready' : ''} ${isPlaying ? 'playing' : ''}`}
        onClick={handlePlayTrain}
        disabled={selected.length !== maxSlots || isPlaying}
      >
        {isPlaying ? '🚂...' : '🚂 Ghép vần!'}
      </button>

      {/* Result Card */}
      {result && result.type === 'success' && (
        <div className="blending-result success fade-in">
          <div className="blending-emoji">{targetWordEmoji}</div>
          <div className="blending-info">
            <div className="blending-word">{targetWord}</div>
            <div className="blending-vi">{targetWordVi}</div>
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

