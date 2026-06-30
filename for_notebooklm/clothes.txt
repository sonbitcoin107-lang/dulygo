// src/data/lessons/clothes.js
// Chủ đề 12: Quần áo

export default [
  // --- Câu 1-8: Giữ nguyên ---
  {
    id: 'clo-1', type: 'multiple_choice',
    question: '"Shirt" có nghĩa là gì?', audio: 'Shirt',
    options: [
      { text: 'Áo sơ mi', emoji: '👕', correct: true },
      { text: 'Quần dài', emoji: '👖', correct: false },
      { text: 'Váy', emoji: '👗', correct: false },
      { text: 'Áo khoác', emoji: '🧥', correct: false },
    ],
  },
  {
    id: 'clo-2', type: 'multiple_choice',
    question: '"Shoes" có nghĩa là gì?', audio: 'Shoes',
    options: [
      { text: 'Đôi giày', emoji: '👟', correct: true },
      { text: 'Đôi tất', emoji: '🧦', correct: false },
      { text: 'Cái mũ', emoji: '🧢', correct: false },
      { text: 'Cái túi', emoji: '👜', correct: false },
    ],
  },
  {
    id: 'clo-3', type: 'match_pairs',
    question: 'Nối quần áo',
    pairs: [
      { en: 'Hat 🎩', vi: 'Cái mũ' },
      { en: 'Dress 👗', vi: 'Cái váy' },
      { en: 'Jacket 🧥', vi: 'Áo khoác' },
      { en: 'Socks 🧦', vi: 'Đôi tất' },
    ],
  },
  {
    id: 'clo-4', type: 'fill_blank',
    question: '"I wear a ___ to school" (Tôi mặc áo sơ mi đi học)',
    audio: 'I wear a shirt to school', answer: 'shirt', hint: 'sh..t',
    options: ['shirt', 'skirt', 'short', 'sharp'],
  },
  {
    id: 'clo-5', type: 'multiple_choice',
    question: '"Pants" có nghĩa là gì?', audio: 'Pants',
    options: [
      { text: 'Quần dài', emoji: '👖', correct: true },
      { text: 'Quần short', emoji: '🩳', correct: false },
      { text: 'Váy', emoji: '👗', correct: false },
      { text: 'Áo phông', emoji: '👕', correct: false },
    ],
  },
  {
    id: 'clo-6', type: 'tap_words',
    question: 'Sắp xếp: "Tôi thích mặc áo màu xanh"',
    answer: ['I', 'like', 'wearing', 'a', 'blue', 'shirt'],
    wordBank: ['I', 'like', 'wearing', 'a', 'blue', 'shirt', 'red', 'hat'],
  },
  {
    id: 'clo-7', type: 'multiple_choice',
    question: '"Gloves" có nghĩa là gì?', audio: 'Gloves',
    options: [
      { text: 'Đôi găng tay', emoji: '🧤', correct: true },
      { text: 'Đôi giày', emoji: '👟', correct: false },
      { text: 'Cái mũ', emoji: '🎩', correct: false },
      { text: 'Cái khăn', emoji: '🧣', correct: false },
    ],
  },
  {
    id: 'clo-8', type: 'match_pairs',
    question: 'Nối thêm phụ kiện',
    pairs: [
      { en: 'Scarf 🧣', vi: 'Cái khăn quàng' },
      { en: 'Bag 👜', vi: 'Cái túi' },
      { en: 'Belt 🪢', vi: 'Cái dây lưng' },
      { en: 'Glasses 👓', vi: 'Cái kính' },
    ],
  },

  // --- Câu 9-12: Multiple choice mới ---
  {
    id: 'clo-9', type: 'multiple_choice',
    question: '"Uniform" có nghĩa là gì?', audio: 'Uniform',
    options: [
      { text: 'Đồng phục', emoji: '👔', correct: true },
      { text: 'Trang phục biểu diễn', emoji: '🎭', correct: false },
      { text: 'Quần áo thể thao', emoji: '🩱', correct: false },
      { text: 'Trang phục dạ hội', emoji: '👗', correct: false },
    ],
  },
  {
    id: 'clo-10', type: 'multiple_choice',
    question: '"Swimsuit" có nghĩa là gì?', audio: 'Swimsuit',
    options: [
      { text: 'Đồ bơi', emoji: '🩱', correct: true },
      { text: 'Áo mưa', emoji: '🧥', correct: false },
      { text: 'Quần thể thao', emoji: '🩳', correct: false },
      { text: 'Áo len', emoji: '🧶', correct: false },
    ],
  },
  {
    id: 'clo-11', type: 'multiple_choice',
    question: '"Raincoat" có nghĩa là gì?', audio: 'Raincoat',
    options: [
      { text: 'Áo mưa', emoji: '🌧️', correct: true },
      { text: 'Áo len', emoji: '🧶', correct: false },
      { text: 'Áo phông', emoji: '👕', correct: false },
      { text: 'Áo vest', emoji: '🤵', correct: false },
    ],
  },
  {
    id: 'clo-12', type: 'multiple_choice',
    question: '"Boots" có nghĩa là gì?', audio: 'Boots',
    options: [
      { text: 'Ủng / Bốt', emoji: '🥾', correct: true },
      { text: 'Dép lê', emoji: '🩴', correct: false },
      { text: 'Giày thể thao', emoji: '👟', correct: false },
      { text: 'Giày cao gót', emoji: '👠', correct: false },
    ],
  },

  // --- Câu 13-16: Fill blank mới ---
  {
    id: 'clo-13', type: 'fill_blank',
    question: '"She wears a ___ to the party" (Cô ấy mặc váy đi dự tiệc)',
    audio: 'She wears a dress to the party', answer: 'dress', hint: 'dr..s',
    options: ['dress', 'press', 'stress', 'bless'],
  },
  {
    id: 'clo-14', type: 'fill_blank',
    question: '"My ___ are too small" (Đôi giày của tôi quá nhỏ)',
    audio: 'My shoes are too small', answer: 'shoes', hint: 'sh..s',
    options: ['shoes', 'chose', 'those', 'shows'],
  },
  {
    id: 'clo-15', type: 'fill_blank',
    question: '"It is cold, put on your ___" (Trời lạnh, hãy đội mũ lên)',
    audio: 'It is cold put on your hat', answer: 'hat', hint: 'h_t',
    options: ['hat', 'hot', 'hit', 'hut'],
  },
  {
    id: 'clo-16', type: 'fill_blank',
    question: '"I need a new ___" (Tôi cần một cái áo khoác mới)',
    audio: 'I need a new jacket', answer: 'jacket', hint: 'jack...',
    options: ['jacket', 'packet', 'racket', 'bracket'],
  },

  // --- Câu 17-20: Tap words mới ---
  {
    id: 'clo-17', type: 'tap_words',
    question: 'Sắp xếp: "Cô ấy đang mặc một chiếc váy đỏ"',
    answer: ['She', 'is', 'wearing', 'a', 'red', 'dress'],
    wordBank: ['She', 'is', 'wearing', 'a', 'red', 'dress', 'blue', 'hat'],
  },
  {
    id: 'clo-18', type: 'tap_words',
    question: 'Sắp xếp: "Trời lạnh nên tôi mặc áo khoác"',
    answer: ['It', 'is', 'cold', 'so', 'I', 'wear', 'a', 'jacket'],
    wordBank: ['It', 'is', 'cold', 'so', 'I', 'wear', 'a', 'jacket', 'hot', 'shirt'],
  },
  {
    id: 'clo-19', type: 'tap_words',
    question: 'Sắp xếp: "Anh ấy mang đôi giày màu đen"',
    answer: ['He', 'wears', 'black', 'shoes'],
    wordBank: ['He', 'wears', 'black', 'shoes', 'white', 'she', 'boots', 'red'],
  },
  {
    id: 'clo-20', type: 'tap_words',
    question: 'Sắp xếp: "Đồng phục của trường tôi màu xanh"',
    answer: ['My', 'school', 'uniform', 'is', 'blue'],
    wordBank: ['My', 'school', 'uniform', 'is', 'blue', 'red', 'your', 'white'],
  },

  // --- Câu 21-24: Multiple choice nâng cao ---
  {
    id: 'clo-21', type: 'multiple_choice',
    question: '"What are you wearing?" nghĩa là gì?', audio: 'What are you wearing',
    options: [
      { text: 'Bạn đang mặc gì vậy?', emoji: '✅', correct: true },
      { text: 'Bạn đang ăn gì vậy?', emoji: '❌', correct: false },
      { text: 'Bạn đang làm gì vậy?', emoji: '❌', correct: false },
      { text: 'Bạn đang đi đâu vậy?', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'clo-22', type: 'multiple_choice',
    question: 'Khi trời mưa, bạn nên mặc gì?', audio: 'raincoat',
    options: [
      { text: 'Raincoat (áo mưa)', emoji: '🌧️', correct: true },
      { text: 'Swimsuit (đồ bơi)', emoji: '❌', correct: false },
      { text: 'Uniform (đồng phục)', emoji: '❌', correct: false },
      { text: 'Gloves (găng tay)', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'clo-23', type: 'multiple_choice',
    question: '"She takes off her shoes" nghĩa là gì?', audio: 'She takes off her shoes',
    options: [
      { text: 'Cô ấy cởi giày ra', emoji: '✅', correct: true },
      { text: 'Cô ấy mua giày mới', emoji: '❌', correct: false },
      { text: 'Cô ấy đi giày vào', emoji: '❌', correct: false },
      { text: 'Cô ấy giặt giày', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'clo-24', type: 'multiple_choice',
    question: 'Từ nào là phụ kiện (accessory)?', audio: 'accessories',
    options: [
      { text: 'Scarf (khăn quàng)', emoji: '🧣', correct: true },
      { text: 'Pants (quần dài)', emoji: '❌', correct: false },
      { text: 'Shirt (áo sơ mi)', emoji: '❌', correct: false },
      { text: 'Dress (váy)', emoji: '❌', correct: false },
    ],
  },

  // --- Câu 25: Match pairs tổng hợp ---
  {
    id: 'clo-25', type: 'match_pairs',
    question: 'Nối trang phục với nghĩa',
    pairs: [
      { en: 'Uniform 👔', vi: 'Đồng phục' },
      { en: 'Boots 🥾', vi: 'Ủng / Bốt' },
      { en: 'Raincoat 🌧️', vi: 'Áo mưa' },
      { en: 'Swimsuit 🩱', vi: 'Đồ bơi' },
    ],
  },
];
