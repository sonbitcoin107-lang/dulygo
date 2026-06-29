// src/pages/PhonicsMap.jsx
import { useNavigate } from 'react-router-dom';
import rules from '../data/phonics/rules_60.json';
import './PhonicsMap.css';

export default function PhonicsMap() {
  const navigate = useNavigate();

  return (
    <div className="phonics-map-page">
      <div className="phonics-header">
        <h1>60 Quy tắc Đánh vần 📖</h1>
        <p>Học quy tắc đọc tiếng Anh chuẩn</p>
      </div>

      <div className="phonics-rules-list">
        {rules.map((rule) => (
          <div
            key={rule.id}
            className="phonics-rule-item"
            onClick={() => navigate(`/phonics/${rule.id}`)}
          >
            <div className="rule-item-badge">
              Bài {rule.id}
            </div>
            <div className="rule-item-content">
              <span className="rule-item-pattern">{rule.pattern}</span>
              <span className="rule-item-sound">→ {rule.sound}</span>
            </div>
            <div className="rule-item-arrow">›</div>
          </div>
        ))}
      </div>
    </div>
  );
}
