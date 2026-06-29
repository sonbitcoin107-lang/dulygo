// src/pages/Shop.jsx
import { useGame } from '../context/GameContext';
import DuoMascot from '../components/ui/DuoMascot';
import { playClick, playSuccess } from '../utils/audio';
import './Shop.css';

const SHOP_ITEMS = [
  {
    id: 'hearts',
    name: 'Nạp đầy Tim',
    desc: 'Hồi phục 5 tim ngay lập tức',
    emoji: '❤️',
    price: 350,
    color: '#FF4B4B',
    colorLight: '#FFDDDD',
  },
  {
    id: 'streak_freeze',
    name: 'Bảo vệ Streak',
    desc: 'Giữ chuỗi học khi bỏ 1 ngày',
    emoji: '🛡️',
    price: 200,
    color: '#1CB0F6',
    colorLight: '#DDF4FF',
  },
  {
    id: 'xp_boost',
    name: 'XP x2',
    desc: 'Nhận gấp đôi XP trong 1 bài học',
    emoji: '⚡',
    price: 100,
    color: '#FFD900',
    colorLight: '#FFF9C4',
  },
];

export default function Shop() {
  const { state, buyHearts, buyStreakFreeze, spendGems } = useGame();

  const handleBuy = (item) => {
    playClick();
    if (state.gems < item.price) {
      alert('Không đủ Gems! Hãy học thêm để kiếm Gems nhé 💎');
      return;
    }
    if (item.id === 'hearts') {
      buyHearts();
    } else if (item.id === 'streak_freeze') {
      buyStreakFreeze();
    } else {
      spendGems(item.price);
    }
    playSuccess();
    alert(`Đã mua ${item.name}! 🎉`);
  };

  return (
    <div className="shop-page">
      {/* Header */}
      <div className="shop-header">
        <DuoMascot size="sm" animate={false} />
        <div className="shop-header-info">
          <h1 className="shop-title">Cửa hàng</h1>
          <div className="shop-gems">
            <span>💎</span>
            <span className="shop-gems-val">{state.gems} Gems</span>
          </div>
        </div>
      </div>

      {/* How to earn gems */}
      <div className="gems-tip">
        <span>💡</span>
        <span>Kiếm Gems bằng cách hoàn thành bài học mỗi ngày!</span>
      </div>

      {/* Shop items */}
      <div className="shop-items">
        {SHOP_ITEMS.map(item => (
          <div
            key={item.id}
            className="shop-item"
            style={{ '--item-color': item.color, '--item-light': item.colorLight }}
          >
            <div className="shop-item-emoji">{item.emoji}</div>
            <div className="shop-item-info">
              <h3 className="shop-item-name">{item.name}</h3>
              <p className="shop-item-desc">{item.desc}</p>
            </div>
            <button
              id={`btn-buy-${item.id}`}
              className="shop-buy-btn"
              onClick={() => handleBuy(item)}
              disabled={state.gems < item.price}
            >
              <span>💎</span>
              <span>{item.price}</span>
            </button>
          </div>
        ))}
      </div>

      {/* Free gems info */}
      <div className="shop-section">
        <h2 className="shop-section-title">🎁 Nhận Gems miễn phí</h2>
        <div className="free-gems-list">
          <div className="free-gem-item">
            <span>📚</span>
            <span>Hoàn thành bài học → +2 Gems</span>
          </div>
          <div className="free-gem-item">
            <span>💯</span>
            <span>Bài học hoàn hảo → +5 Gems</span>
          </div>
          <div className="free-gem-item">
            <span>🔥</span>
            <span>Streak 7 ngày → +20 Gems</span>
          </div>
        </div>
      </div>

      <div style={{ height: 32 }} />
    </div>
  );
}
