// src/data/lessons/colors.js
// Chủ đề 2: Màu sắc

export default [
  // --- Câu 1-8: Giữ nguyên câu cũ ---
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

  // --- Câu 9-12: multiple_choice mới ---
  {
    id: 'col-9',
    type: 'multiple_choice',
    question: '"Orange" có nghĩa là gì?',
    audio: 'Orange',
    options: [
      { text: 'Màu cam', emoji: '🟠', correct: true },
      { text: 'Màu vàng', emoji: '🟡', correct: false },
      { text: 'Màu đỏ', emoji: '🔴', correct: false },
      { text: 'Màu nâu', emoji: '🟫', correct: false },
    ],
  },
  {
    id: 'col-10',
    type: 'multiple_choice',
    question: '"Pink" có nghĩa là gì?',
    audio: 'Pink',
    options: [
      { text: 'Màu hồng', emoji: '🩷', correct: true },
      { text: 'Màu tím', emoji: '🟣', correct: false },
      { text: 'Màu đỏ', emoji: '🔴', correct: false },
      { text: 'Màu trắng', emoji: '⬜', correct: false },
    ],
  },
  {
    id: 'col-11',
    type: 'multiple_choice',
    question: '"Black" có nghĩa là gì?',
    audio: 'Black',
    options: [
      { text: 'Màu đen', emoji: '⚫', correct: true },
      { text: 'Màu trắng', emoji: '⬜', correct: false },
      { text: 'Màu xám', emoji: '🩶', correct: false },
      { text: 'Màu nâu', emoji: '🟫', correct: false },
    ],
  },
  {
    id: 'col-12',
    type: 'multiple_choice',
    question: '"Brown" có nghĩa là gì?',
    audio: 'Brown',
    options: [
      { text: 'Màu nâu', emoji: '🟫', correct: true },
      { text: 'Màu đen', emoji: '⚫', correct: false },
      { text: 'Màu xám', emoji: '🩶', correct: false },
      { text: 'Màu cam', emoji: '🟠', correct: false },
    ],
  },

  // --- Câu 13-16: fill_blank mới ---
  {
    id: 'col-13',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "The apple is ___" (Quả táo màu đỏ)',
    audio: 'The apple is red',
    answer: 'red',
    hint: 'r_d',
    options: ['red', 'bed', 'led', 'fed'],
  },
  {
    id: 'col-14',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "The grass is ___" (Cỏ màu xanh lá)',
    audio: 'The grass is green',
    answer: 'green',
    hint: 'gr..n',
    options: ['green', 'greet', 'great', 'creek'],
  },
  {
    id: 'col-15',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "My favorite color is ___" (Màu yêu thích của tôi là tím)',
    audio: 'My favorite color is purple',
    answer: 'purple',
    hint: 'p...le',
    options: ['purple', 'people', 'pupil', 'pebble'],
  },
  {
    id: 'col-16',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "The night is ___" (Đêm tối màu đen)',
    audio: 'The night is black',
    answer: 'black',
    hint: 'bl..k',
    options: ['black', 'block', 'blank', 'blade'],
  },

  // --- Câu 17-20: tap_words mới ---
  {
    id: 'col-17',
    type: 'tap_words',
    question: 'Sắp xếp: "Tôi thích màu hồng"',
    answer: ['I', 'like', 'the', 'color', 'pink'],
    wordBank: ['I', 'like', 'the', 'color', 'pink', 'blue', 'red'],
  },
  {
    id: 'col-18',
    type: 'tap_words',
    question: 'Sắp xếp: "Màu sắc yêu thích của bạn là gì?"',
    answer: ['What', 'is', 'your', 'favorite', 'color'],
    wordBank: ['What', 'is', 'your', 'favorite', 'color', 'food', 'name'],
  },
  {
    id: 'col-19',
    type: 'tap_words',
    question: 'Sắp xếp: "Hoa hồng màu đỏ"',
    answer: ['The', 'rose', 'is', 'red'],
    wordBank: ['The', 'rose', 'is', 'red', 'blue', 'pink', 'white'],
  },
  {
    id: 'col-20',
    type: 'tap_words',
    question: 'Sắp xếp: "Mặt trời màu vàng và cam"',
    answer: ['The', 'sun', 'is', 'yellow', 'and', 'orange'],
    wordBank: ['The', 'sun', 'is', 'yellow', 'and', 'orange', 'red', 'blue'],
  },

  // --- Câu 21-24: multiple_choice nâng cao ---
  {
    id: 'col-21',
    type: 'multiple_choice',
    question: 'Màu gì thường gặp trên lá cây?',
    options: [
      { text: 'Green', emoji: '🟢', correct: true },
      { text: 'Purple', emoji: '🟣', correct: false },
      { text: 'Orange', emoji: '🟠', correct: false },
      { text: 'Pink', emoji: '🩷', correct: false },
    ],
  },
  {
    id: 'col-22',
    type: 'multiple_choice',
    question: 'Màu nào là sự kết hợp của đỏ và trắng?',
    options: [
      { text: 'Pink (hồng)', emoji: '🩷', correct: true },
      { text: 'Purple (tím)', emoji: '🟣', correct: false },
      { text: 'Orange (cam)', emoji: '🟠', correct: false },
      { text: 'Brown (nâu)', emoji: '🟫', correct: false },
    ],
  },
  {
    id: 'col-23',
    type: 'multiple_choice',
    question: '"Gray" có nghĩa là gì?',
    audio: 'Gray',
    options: [
      { text: 'Màu xám', emoji: '🩶', correct: true },
      { text: 'Màu đen', emoji: '⚫', correct: false },
      { text: 'Màu trắng', emoji: '⬜', correct: false },
      { text: 'Màu nâu', emoji: '🟫', correct: false },
    ],
  },
  {
    id: 'col-24',
    type: 'multiple_choice',
    question: 'Để nói "màu xanh nhạt", ta dùng cụm từ nào?',
    options: [
      { text: 'Light blue', emoji: '🔵', correct: true },
      { text: 'Dark blue', emoji: '🌊', correct: false },
      { text: 'Sky green', emoji: '🟢', correct: false },
      { text: 'Pale red', emoji: '🔴', correct: false },
    ],
  },

  // --- Câu 25: match_pairs ---
  {
    id: 'col-25',
    type: 'match_pairs',
    question: 'Nối màu sắc với nghĩa tiếng Việt',
    pairs: [
      { en: 'Orange 🟠', vi: 'Màu cam' },
      { en: 'Pink 🩷', vi: 'Màu hồng' },
      { en: 'Black ⚫', vi: 'Màu đen' },
      { en: 'Gray 🩶', vi: 'Màu xám' },
    ],
  },
];
