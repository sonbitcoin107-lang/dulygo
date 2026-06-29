// src/data/lessons/colors.js
// Chủ đề 2: Màu sắc

export default [
  {
    id: 'col-1',
    type: 'multiple_choice',
    question: '"Red" có nghĩa là gì?',
    audio: 'Red',
    options: [
      { text: 'Màu đỏ', emoji: '🔴', correct: true },
      { text: 'Màu xanh', emoji: '🔵', correct: false },
      { text: 'Màu vàng', emoji: '🟡', correct: false },
      { text: 'Màu xanh lá', emoji: '🟢', correct: false },
    ],
  },
  {
    id: 'col-2',
    type: 'multiple_choice',
    question: '"Blue" có nghĩa là gì?',
    audio: 'Blue',
    options: [
      { text: 'Màu xanh dương', emoji: '🔵', correct: true },
      { text: 'Màu đỏ', emoji: '🔴', correct: false },
      { text: 'Màu tím', emoji: '🟣', correct: false },
      { text: 'Màu đen', emoji: '⚫', correct: false },
    ],
  },
  {
    id: 'col-3',
    type: 'multiple_choice',
    question: 'Màu vàng trong tiếng Anh là gì?',
    options: [
      { text: 'Yellow', emoji: '🟡', correct: true },
      { text: 'Orange', emoji: '🟠', correct: false },
      { text: 'Green', emoji: '🟢', correct: false },
      { text: 'White', emoji: '⬜', correct: false },
    ],
  },
  {
    id: 'col-4',
    type: 'match_pairs',
    question: 'Nối màu sắc với nghĩa tiếng Việt',
    pairs: [
      { en: 'Red 🔴', vi: 'Màu đỏ' },
      { en: 'Green 🟢', vi: 'Màu xanh lá' },
      { en: 'Yellow 🟡', vi: 'Màu vàng' },
      { en: 'Blue 🔵', vi: 'Màu xanh dương' },
    ],
  },
  {
    id: 'col-5',
    type: 'multiple_choice',
    question: '"Green" có nghĩa là gì?',
    audio: 'Green',
    options: [
      { text: 'Màu xanh lá', emoji: '🟢', correct: true },
      { text: 'Màu xanh dương', emoji: '🔵', correct: false },
      { text: 'Màu xám', emoji: '🩶', correct: false },
      { text: 'Màu tím', emoji: '🟣', correct: false },
    ],
  },
  {
    id: 'col-6',
    type: 'fill_blank',
    question: 'Màu trắng: "W___e" ',
    audio: 'White',
    answer: 'White',
    hint: 'W...e',
    options: ['White', 'Write', 'Wide', 'Wine'],
  },
  {
    id: 'col-7',
    type: 'multiple_choice',
    question: '"Purple" có nghĩa là gì?',
    audio: 'Purple',
    options: [
      { text: 'Màu tím', emoji: '🟣', correct: true },
      { text: 'Màu hồng', emoji: '🩷', correct: false },
      { text: 'Màu đỏ', emoji: '🔴', correct: false },
      { text: 'Màu nâu', emoji: '🟫', correct: false },
    ],
  },
  {
    id: 'col-8',
    type: 'tap_words',
    question: 'Sắp xếp: "Bầu trời màu xanh"',
    answer: ['The', 'sky', 'is', 'blue'],
    wordBank: ['The', 'sky', 'is', 'blue', 'red', 'green', 'cloud'],
  },
];
