// src/data/lessons/actions.js
// Chủ đề 15: Hành động & Động từ

export default [
  // --- Câu 1-8: Giữ nguyên ---
  {
    id: 'act-1', type: 'multiple_choice',
    question: '"Run" có nghĩa là gì?', audio: 'Run',
    options: [
      { text: 'Chạy', emoji: '🏃', correct: true },
      { text: 'Nhảy', emoji: '🤸', correct: false },
      { text: 'Đi bộ', emoji: '🚶', correct: false },
      { text: 'Bơi', emoji: '🏊', correct: false },
    ],
  },
  {
    id: 'act-2', type: 'multiple_choice',
    question: '"Jump" có nghĩa là gì?', audio: 'Jump',
    options: [
      { text: 'Nhảy', emoji: '🤸', correct: true },
      { text: 'Chạy', emoji: '🏃', correct: false },
      { text: 'Ngã', emoji: '🤕', correct: false },
      { text: 'Leo', emoji: '🧗', correct: false },
    ],
  },
  {
    id: 'act-3', type: 'match_pairs',
    question: 'Nối động từ với nghĩa',
    pairs: [
      { en: 'Eat 🍽️', vi: 'Ăn' },
      { en: 'Drink 💧', vi: 'Uống' },
      { en: 'Sleep 😴', vi: 'Ngủ' },
      { en: 'Play 🎮', vi: 'Chơi' },
    ],
  },
  {
    id: 'act-4', type: 'fill_blank',
    question: '"I like to ___ in the pool" (Tôi thích bơi trong hồ)',
    audio: 'I like to swim in the pool', answer: 'swim', hint: 'sw..m',
    options: ['swim', 'sing', 'spin', 'slim'],
  },
  {
    id: 'act-5', type: 'multiple_choice',
    question: '"Draw" có nghĩa là gì?', audio: 'Draw',
    options: [
      { text: 'Vẽ', emoji: '🎨', correct: true },
      { text: 'Đọc', emoji: '📖', correct: false },
      { text: 'Viết', emoji: '✏️', correct: false },
      { text: 'Hát', emoji: '🎤', correct: false },
    ],
  },
  {
    id: 'act-6', type: 'tap_words',
    question: 'Sắp xếp: "Tôi có thể nhảy rất cao"',
    answer: ['I', 'can', 'jump', 'very', 'high'],
    wordBank: ['I', 'can', 'jump', 'very', 'high', 'run', 'fast'],
  },
  {
    id: 'act-7', type: 'match_pairs',
    question: 'Nối thêm hành động',
    pairs: [
      { en: 'Sing 🎵', vi: 'Hát' },
      { en: 'Dance 💃', vi: 'Nhảy múa' },
      { en: 'Read 📖', vi: 'Đọc sách' },
      { en: 'Write ✏️', vi: 'Viết' },
    ],
  },
  {
    id: 'act-8', type: 'multiple_choice',
    question: '"Fly" có nghĩa là gì?', audio: 'Fly',
    options: [
      { text: 'Bay', emoji: '✈️', correct: true },
      { text: 'Bơi', emoji: '🏊', correct: false },
      { text: 'Chạy', emoji: '🏃', correct: false },
      { text: 'Nhảy', emoji: '🤸', correct: false },
    ],
  },

  // --- Câu 9-12: Multiple choice mới ---
  {
    id: 'act-9', type: 'multiple_choice',
    question: '"Climb" có nghĩa là gì?', audio: 'Climb',
    options: [
      { text: 'Leo trèo', emoji: '🧗', correct: true },
      { text: 'Chạy', emoji: '🏃', correct: false },
      { text: 'Bơi', emoji: '🏊', correct: false },
      { text: 'Nhảy', emoji: '🤸', correct: false },
    ],
  },
  {
    id: 'act-10', type: 'multiple_choice',
    question: '"Cook" có nghĩa là gì?', audio: 'Cook',
    options: [
      { text: 'Nấu ăn', emoji: '👨‍🍳', correct: true },
      { text: 'Ăn', emoji: '🍽️', correct: false },
      { text: 'Uống', emoji: '💧', correct: false },
      { text: 'Dọn dẹp', emoji: '🧹', correct: false },
    ],
  },
  {
    id: 'act-11', type: 'multiple_choice',
    question: '"Throw" có nghĩa là gì?', audio: 'Throw',
    options: [
      { text: 'Ném / Quăng', emoji: '🤾', correct: true },
      { text: 'Bắt', emoji: '🤲', correct: false },
      { text: 'Đẩy', emoji: '🙌', correct: false },
      { text: 'Kéo', emoji: '💪', correct: false },
    ],
  },
  {
    id: 'act-12', type: 'multiple_choice',
    question: '"Laugh" có nghĩa là gì?', audio: 'Laugh',
    options: [
      { text: 'Cười', emoji: '😂', correct: true },
      { text: 'Khóc', emoji: '😢', correct: false },
      { text: 'La hét', emoji: '😱', correct: false },
      { text: 'Thì thầm', emoji: '🤫', correct: false },
    ],
  },

  // --- Câu 13-16: Fill blank mới ---
  {
    id: 'act-13', type: 'fill_blank',
    question: '"She can ___ very fast" (Cô ấy có thể chạy rất nhanh)',
    audio: 'She can run very fast', answer: 'run', hint: 'r_n',
    options: ['run', 'fun', 'sun', 'bun'],
  },
  {
    id: 'act-14', type: 'fill_blank',
    question: '"I ___ a song every morning" (Tôi hát một bài mỗi sáng)',
    audio: 'I sing a song every morning', answer: 'sing', hint: 's..g',
    options: ['sing', 'ring', 'bring', 'swing'],
  },
  {
    id: 'act-15', type: 'fill_blank',
    question: '"He loves to ___ books" (Anh ấy thích đọc sách)',
    audio: 'He loves to read books', answer: 'read', hint: 're_d',
    options: ['read', 'lead', 'feed', 'need'],
  },
  {
    id: 'act-16', type: 'fill_blank',
    question: '"Can you ___ to music?" (Bạn có thể nhảy theo nhạc không?)',
    audio: 'Can you dance to music', answer: 'dance', hint: 'dan...',
    options: ['dance', 'prance', 'lance', 'glance'],
  },

  // --- Câu 17-20: Tap words mới ---
  {
    id: 'act-17', type: 'tap_words',
    question: 'Sắp xếp: "Chúng tôi đang chơi bóng đá ở sân"',
    answer: ['We', 'are', 'playing', 'football', 'in', 'the', 'yard'],
    wordBank: ['We', 'are', 'playing', 'football', 'in', 'the', 'yard', 'park', 'tennis'],
  },
  {
    id: 'act-18', type: 'tap_words',
    question: 'Sắp xếp: "Cô bé đang hát và nhảy múa"',
    answer: ['The', 'girl', 'is', 'singing', 'and', 'dancing'],
    wordBank: ['The', 'girl', 'is', 'singing', 'and', 'dancing', 'boy', 'reading', 'running'],
  },
  {
    id: 'act-19', type: 'tap_words',
    question: 'Sắp xếp: "Anh ấy leo lên cây rất nhanh"',
    answer: ['He', 'climbs', 'the', 'tree', 'very', 'fast'],
    wordBank: ['He', 'climbs', 'the', 'tree', 'very', 'fast', 'slow', 'she', 'wall'],
  },
  {
    id: 'act-20', type: 'tap_words',
    question: 'Sắp xếp: "Tôi đang học viết chữ tiếng Anh"',
    answer: ['I', 'am', 'learning', 'to', 'write', 'in', 'English'],
    wordBank: ['I', 'am', 'learning', 'to', 'write', 'in', 'English', 'read', 'Chinese'],
  },

  // --- Câu 21-24: Multiple choice nâng cao ---
  {
    id: 'act-21', type: 'multiple_choice',
    question: '"She is washing the dishes" nghĩa là gì?', audio: 'She is washing the dishes',
    options: [
      { text: 'Cô ấy đang rửa bát đĩa', emoji: '✅', correct: true },
      { text: 'Cô ấy đang nấu cơm', emoji: '❌', correct: false },
      { text: 'Cô ấy đang ăn tối', emoji: '❌', correct: false },
      { text: 'Cô ấy đang dọn bàn', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'act-22', type: 'multiple_choice',
    question: '"Stop running!" nghĩa là gì?', audio: 'Stop running',
    options: [
      { text: 'Dừng chạy lại!', emoji: '✋', correct: true },
      { text: 'Chạy nhanh lên!', emoji: '❌', correct: false },
      { text: 'Bắt đầu chạy!', emoji: '❌', correct: false },
      { text: 'Chạy cẩn thận!', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'act-23', type: 'multiple_choice',
    question: 'Câu nào dùng "swim" đúng ngữ pháp?', audio: 'correct use of swim',
    options: [
      { text: 'I can swim in the sea', emoji: '✅', correct: true },
      { text: 'I swim a book', emoji: '❌', correct: false },
      { text: 'She swim yesterday', emoji: '❌', correct: false },
      { text: 'They swimmed fast', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'act-24', type: 'multiple_choice',
    question: '"What are you doing?" nghĩa là gì?', audio: 'What are you doing',
    options: [
      { text: 'Bạn đang làm gì vậy?', emoji: '✅', correct: true },
      { text: 'Bạn muốn làm gì?', emoji: '❌', correct: false },
      { text: 'Bạn đã làm gì?', emoji: '❌', correct: false },
      { text: 'Bạn sẽ làm gì?', emoji: '❌', correct: false },
    ],
  },

  // --- Câu 25: Match pairs tổng hợp ---
  {
    id: 'act-25', type: 'match_pairs',
    question: 'Nối động từ với nghĩa',
    pairs: [
      { en: 'Climb 🧗', vi: 'Leo trèo' },
      { en: 'Cook 👨‍🍳', vi: 'Nấu ăn' },
      { en: 'Throw 🤾', vi: 'Ném / Quăng' },
      { en: 'Laugh 😂', vi: 'Cười' },
    ],
  },
];
