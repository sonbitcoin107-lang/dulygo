// src/components/layout/BottomNav.jsx
import { NavLink } from 'react-router-dom';
import './BottomNav.css';

const NAV_ITEMS = [
  { to: '/',         icon: '🏠',  label: 'Học',      id: 'nav-home' },
  { to: '/speaking', icon: '🎙️', label: 'Luyện nói', id: 'nav-speaking' },
  { to: '/phonics',  icon: '📖',  label: 'Âm vần',   id: 'nav-phonics' },
  { to: '/profile',  icon: '👤',  label: 'Hồ sơ',    id: 'nav-profile' },
];

export default function BottomNav() {
  return (
    <nav className="bottomnav">
      {NAV_ITEMS.map(item => (
        <NavLink
          key={item.to}
          to={item.to}
          id={item.id}
          className={({ isActive }) => `bottomnav-item ${isActive ? 'active' : ''}`}
          end={item.to === '/'}
        >
          <span className="bottomnav-icon">{item.icon}</span>
          <span className="bottomnav-label">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
