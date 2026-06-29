// src/components/map/UnitBanner.jsx
// Props:
//   unit:        course object (id, title, titleEn, emoji, color, colorDark)
//   onGuidebook: function called when 📒 button is clicked
//   unitNumber:  number (1-based index of the unit in COURSES)

import './UnitBanner.css';

export default function UnitBanner({ unit, onGuidebook, unitNumber }) {
  return (
    <div
      className="unit-banner"
      style={{ background: `linear-gradient(135deg, ${unit.color}, ${unit.colorDark})` }}
    >
      <span className="unit-banner-emoji">{unit.emoji}</span>

      <div className="unit-banner-text">
        <span className="unit-banner-part">PHẦN {unitNumber}</span>
        <span className="unit-banner-title">{unit.title}</span>
      </div>

      <button
        className="unit-banner-guidebook-btn"
        onClick={(e) => {
          e.stopPropagation();
          onGuidebook?.();
        }}
        title="Xem sổ tay từ vựng"
        aria-label="Mở sổ tay"
      >
        📒
      </button>
    </div>
  );
}
