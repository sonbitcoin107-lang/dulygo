// src/components/ui/DuoMascot.jsx
import './DuoMascot.css';

export default function DuoMascot({ message, size = 'md', mood = 'happy', animate = true }) {
  const sizeClass = {
    sm: 'duo-sm',
    md: 'duo-md',
    lg: 'duo-lg',
    xl: 'duo-xl',
  }[size];

  return (
    <div className={`duo-mascot ${sizeClass} ${animate ? 'float-anim' : ''} mood-${mood}`}>
      <img
        src="/dulygo/favicon.svg"
        alt="Duo"
        className="duo-img"
      />
      {message && (
        <div className="duo-bubble fade-in">
          <p>{message}</p>
          <div className="duo-bubble-tail" />
        </div>
      )}
    </div>
  );
}
