// src/data/lessons/hobbies.js
// Chủ đề 16: Sở thích & Trò chơi

export default [
  // --- Câu 1-8: Giữ nguyên ---
  {
    id: 'hob-1', type: 'multiple_choice',
    question: '"Football" có nghĩa là gì?', audio: 'Football',
    options: [
      { text: 'Bóng đá', emoji: '⚽', correct: true },
      { text: 'Bóng rổ', emoji: '🏀', correct: false },
      { text: 'Bóng chuyền', emoji: '🏐', correct: false },
      { text: 'Bóng bầu dục', emoji: '🏈', correct: false },
    ],
  },
  {
    id: 'hob-2', type: 'multiple_choice',
    question: '"Reading" có nghĩa là gì?', audio: 'Reading',
    options: [
      { text: 'Đọc sách', emoji: '📚', correct: true },
      { text: 'Vẽ tranh', emoji: '🎨', correct: false },
      { text: 'Chơi game', emoji: '🎮', correct: false },
      { text: 'Xem phim', emoji: '🎬', correct: false },
    ],
  },
  {
    id: 'hob-3', type: 'match_pairs',
    question: 'Nối sở thích',
    pairs: [
      { en: 'Cooking 👨‍🍳', vi: 'Nấu ăn' },
      { en: 'Painting 🎨', vi: 'Vẽ tranh' },
      { en: 'Singing 🎤', vi: 'Ca hát' },
      { en: 'Dancing 💃', vi: 'Khiêu vũ' },
    ],
  },
  {
    id: 'hob-4', type: 'fill_blank',
    question: '"My hobby is ___" (Sở thích của tôi là vẽ)',
    audio: 'My hobby is drawing', answer: 'drawing', hint: 'draw...',
    options: ['drawing', 'drinking', 'driving', 'dreaming'],
  },
  {
    id: 'hob-5', type: 'multiple_choice',
    question: '"Swimming" có nghĩa là gì?', audio: 'Swimming',
    options: [
      { text: 'Bơi lội', emoji: '🏊', correct: true },
      { text: 'Chạy bộ', emoji: '🏃', correct: false },
      { text: 'Đạp xe', emoji: '🚲', correct: false },
      { text: 'Leo núi', emoji: '🧗', correct: false },
    ],
  },
  {
    id: 'hob-6', type: 'tap_words',
    question: 'Sắp xếp: "Tôi thích chơi bóng đá"',
    answer: ['I', 'like', 'playing', 'football'],
    wordBank: ['I', 'like', 'playing', 'football', 'basketball', 'hate', 'reading'],
  },
  {
    id: 'hob-7', type: 'multiple_choice',
    question: '"Gaming" có nghĩa là gì?', audio: 'Gaming',
    options: [
      { text: 'Chơi trò chơi điện tử', emoji: '🎮', correct: true },
      { text: 'Xem phim', emoji: '🎬', correct: false },
      { text: 'Nghe nhạc', emoji: '🎵', correct: false },
      { text: 'Đọc sách', emoji: '📚', correct: false },
    ],
  },
  {
    id: 'hob-8', type: 'match_pairs',
    question: 'Nối thể thao',
    pairs: [
      { en: 'Tennis 🎾', vi: 'Quần vợt' },
      { en: 'Chess ♟️', vi: 'Cờ vua' },
      { en: 'Cycling 🚲', vi: 'Đạp xe' },
      { en: 'Fishing 🎣', vi: 'Câu cá' },
    ],
  },

  // --- Câu 9-12: Multiple choice mới ---
  {
    id: 'hob-9', type: 'multiple_choice',
    question: '"Photography" có nghĩa là gì?', audio: 'Photography',
    options: [
      { text: 'Nhiếp ảnh', emoji: '📷', correct: true },
      { text: 'Vẽ tranh', emoji: '🎨', correct: false },
      { text: 'Làm phim', emoji: '🎬', correct: false },
      { text: 'Xem phim', emoji: '📺', correct: false },
    ],
  },
  {
    id: 'hob-10', type: 'multiple_choice',
    question: '"Gardening" có nghĩa là gì?', audio: 'Gardening',
    options: [
      { text: 'Làm vườn', emoji: '🌱', correct: true },
      { text: 'Làm bếp', emoji: '👨‍🍳', correct: false },
      { text: 'Dọn nhà', emoji: '🧹', correct: false },
      { text: 'Trồng cây', emoji: '🌳', correct: false },
    ],
  },
  {
    id: 'hob-11', type: 'multiple_choice',
    question: '"Basketball" có nghĩa là gì?', audio: 'Basketball',
    options: [
      { text: 'Bóng rổ', emoji: '🏀', correct: true },
      { text: 'Bóng đá', emoji: '⚽', correct: false },
      { text: 'Bóng chuyền', emoji: '🏐', correct: false },
      { text: 'Bóng tennis', emoji: '🎾', correct: false },
    ],
  },
  {
    id: 'hob-12', type: 'multiple_choice',
    question: '"Hiking" có nghĩa là gì?', audio: 'Hiking',
    options: [
      { text: 'Đi bộ đường dài', emoji: '🥾', correct: true },
      { text: 'Đạp xe', emoji: '🚲', correct: false },
      { text: 'Bơi lội', emoji: '🏊', correct: false },
      { text: 'Leo núi', emoji: '🧗', correct: false },
    ],
  },

  // --- Câu 13-16: Fill blank mới ---
  {
    id: 'hob-13', type: 'fill_blank',
    question: '"I love ___ photos with my camera" (Tôi thích chụp ảnh bằng máy ảnh)',
    audio: 'I love taking photos with my camera', answer: 'taking', hint: 'tak...',
    options: ['taking', 'making', 'baking', 'faking'],
  },
  {
    id: 'hob-14', type: 'fill_blank',
    question: '"She plays ___ every Sunday" (Cô ấy chơi tennis mỗi Chủ nhật)',
    audio: 'She plays tennis every Sunday', answer: 'tennis', hint: 'ten...',
    options: ['tennis', 'chess', 'swimming', 'cooking'],
  },
  {
    id: 'hob-15', type: 'fill_blank',
    question: '"He goes ___ in the lake" (Anh ấy câu cá ở hồ)',
    audio: 'He goes fishing in the lake', answer: 'fishing', hint: 'fish...',
    options: ['fishing', 'wishing', 'washing', 'pushing'],
  },
  {
    id: 'hob-16', type: 'fill_blank',
    question: '"My sister loves ___ flowers" (Em gái tôi thích làm vườn trồng hoa)',
    audio: 'My sister loves gardening flowers', answer: 'gardening', hint: 'gard...',
    options: ['gardening', 'graduating', 'gathering', 'guarding'],
  },

  // --- Câu 17-20: Tap words mới ---
  {
    id: 'hob-17', type: 'tap_words',
    question: 'Sắp xếp: "Sở thích của anh ấy là chụp ảnh"',
    answer: ['His', 'hobby', 'is', 'photography'],
    wordBank: ['His', 'hobby', 'is', 'photography', 'her', 'cooking', 'sport', 'reading'],
  },
  {
    id: 'hob-18', type: 'tap_words',
    question: 'Sắp xếp: "Chúng tôi chơi bóng rổ sau giờ học"',
    answer: ['We', 'play', 'basketball', 'after', 'school'],
    wordBank: ['We', 'play', 'basketball', 'after', 'school', 'football', 'before', 'they'],
  },
  {
    id: 'hob-19', type: 'tap_words',
    question: 'Sắp xếp: "Bạn thích sở thích gì nhất?"',
    answer: ['What', 'is', 'your', 'favorite', 'hobby'],
    wordBank: ['What', 'is', 'your', 'favorite', 'hobby', 'sport', 'my', 'who'],
  },
  {
    id: 'hob-20', type: 'tap_words',
    question: 'Sắp xếp: "Tôi tập đàn piano mỗi ngày"',
    answer: ['I', 'practice', 'piano', 'every', 'day'],
    wordBank: ['I', 'practice', 'piano', 'every', 'day', 'guitar', 'week', 'she'],
  },

  // --- Câu 21-24: Multiple choice nâng cao ---
  {
    id: 'hob-21', type: 'multiple_choice',
    question: '"What is your hobby?" nghĩa là gì?', audio: 'What is your hobby',
    options: [
      { text: 'Sở thích của bạn là gì?', emoji: '✅', correct: true },
      { text: 'Bạn làm nghề gì?', emoji: '❌', correct: false },
      { text: 'Bạn giỏi môn gì?', emoji: '❌', correct: false },
      { text: 'Bạn thích ăn gì?', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'hob-22', type: 'multiple_choice',
    question: '"I am into music" nghĩa là gì?', audio: 'I am into music',
    options: [
      { text: 'Tôi rất thích âm nhạc', emoji: '🎵', correct: true },
      { text: 'Tôi không biết chơi nhạc', emoji: '❌', correct: false },
      { text: 'Tôi đang học nhạc', emoji: '❌', correct: false },
      { text: 'Tôi ghét âm nhạc', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'hob-23', type: 'multiple_choice',
    question: 'Hoạt động nào là "outdoor hobby" (sở thích ngoài trời)?', audio: 'outdoor hobby',
    options: [
      { text: 'Hiking (đi bộ đường dài)', emoji: '🥾', correct: true },
      { text: 'Gaming (chơi game)', emoji: '❌', correct: false },
      { text: 'Reading (đọc sách)', emoji: '❌', correct: false },
      { text: 'Painting (vẽ tranh)', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'hob-24', type: 'multiple_choice',
    question: '"She is good at swimming" nghĩa là gì?', audio: 'She is good at swimming',
    options: [
      { text: 'Cô ấy bơi giỏi', emoji: '✅', correct: true },
      { text: 'Cô ấy thích bơi', emoji: '❌', correct: false },
      { text: 'Cô ấy đang học bơi', emoji: '❌', correct: false },
      { text: 'Cô ấy không biết bơi', emoji: '❌', correct: false },
    ],
  },

  // --- Câu 25: Match pairs tổng hợp ---
  {
    id: 'hob-25', type: 'match_pairs',
    question: 'Nối sở thích với nghĩa',
    pairs: [
      { en: 'Photography 📷', vi: 'Nhiếp ảnh' },
      { en: 'Gardening 🌱', vi: 'Làm vườn' },
      { en: 'Hiking 🥾', vi: 'Đi bộ đường dài' },
      { en: 'Basketball 🏀', vi: 'Bóng rổ' },
    ],
  },
];
