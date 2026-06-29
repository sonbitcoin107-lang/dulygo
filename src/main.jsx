import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Đăng ký Service Worker — tự cập nhật khi mở lại app
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/dulygo/sw.js')
      .then((reg) => {
        // Khi có SW mới, kích hoạt ngay (skipWaiting đã set)
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          newWorker?.addEventListener('statechange', () => {
            if (newWorker.state === 'activated') {
              console.log('[SW] Phiên bản mới đã được cài đặt!');
            }
          });
        });
      })
      .catch((err) => console.warn('[SW] Đăng ký thất bại:', err));
  });
}
