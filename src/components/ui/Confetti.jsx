// src/components/ui/Confetti.jsx
import { useEffect, useRef } from 'react';
import './Confetti.css';

const COLORS = ['#58CC02', '#FFD900', '#FF4B4B', '#1CB0F6', '#CE82FF', '#FF9600'];
const SHAPES = ['circle', 'square', 'triangle'];

export default function Confetti({ active }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!active || !containerRef.current) return;
    const container = containerRef.current;
    container.innerHTML = '';

    for (let i = 0; i < 60; i++) {
      const piece = document.createElement('div');
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
      const size = Math.random() * 10 + 6;
      const left = Math.random() * 100;
      const delay = Math.random() * 0.8;
      const duration = Math.random() * 1.5 + 1.5;
      const rotation = Math.random() * 720 - 360;

      piece.className = `confetti-piece ${shape}`;
      piece.style.cssText = `
        left: ${left}%;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
        --rotation: ${rotation}deg;
        border-color: ${color};
      `;
      container.appendChild(piece);
    }

    const timer = setTimeout(() => {
      if (container) container.innerHTML = '';
    }, 3000);

    return () => clearTimeout(timer);
  }, [active]);

  if (!active) return null;

  return <div ref={containerRef} className="confetti-container" aria-hidden="true" />;
}
