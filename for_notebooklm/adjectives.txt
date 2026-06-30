// src/data/lessons/adjectives.js
// Chủ đề 18: Tính từ mô tả

export default [
  // --- Câu 1-8: Giữ nguyên ---
  {
    id: 'adj-1', type: 'multiple_choice',
    question: '"Big" có nghĩa là gì?', audio: 'Big',
    options: [
      { text: 'To / Lớn', emoji: '🐘', correct: true },
      { text: 'Nhỏ', emoji: '🐭', correct: false },
      { text: 'Cao', emoji: '🦒', correct: false },
      { text: 'Thấp', emoji: '🐢', correct: false },
    ],
  },
  {
    id: 'adj-2', type: 'multiple_choice',
    question: '"Fast" có nghĩa là gì?', audio: 'Fast',
    options: [
      { text: 'Nhanh', emoji: '🚀', correct: true },
      { text: 'Chậm', emoji: '🐌', correct: false },
      { text: 'Mạnh', emoji: '💪', correct: false },
      { text: 'Yếu', emoji: '😞', correct: false },
    ],
  },
  {
    id: 'adj-3', type: 'match_pairs',
    question: 'Nối tính từ trái nghĩa',
    pairs: [
      { en: 'Hot 🥵', vi: 'Nóng' },
      { en: 'Cold ❄️', vi: 'Lạnh' },
      { en: 'Long 📏', vi: 'Dài' },
      { en: 'Short 📐', vi: 'Ngắn' },
    ],
  },
  {
    id: 'adj-4', type: 'fill_blank',
    question: '"The elephant is very ___" (Con voi rất to)',
    audio: 'The elephant is very big', answer: 'big', hint: 'b_g',
    options: ['big', 'bad', 'bag', 'bug'],
  },
  {
    id: 'adj-5', type: 'multiple_choice',
    question: '"Beautiful" có nghĩa là gì?', audio: 'Beautiful',
    options: [
      { text: 'Đẹp / Xinh đẹp', emoji: '🌸', correct: true },
      { text: 'Xấu', emoji: '😕', correct: false },
      { text: 'Tốt', emoji: '😊', correct: false },
      { text: 'Tồi', emoji: '😞', correct: false },
    ],
  },
  {
    id: 'adj-6', type: 'tap_words',
    question: 'Sắp xếp: "Con mèo nhỏ và dễ thương"',
    answer: ['The', 'cat', 'is', 'small', 'and', 'cute'],
    wordBank: ['The', 'cat', 'is', 'small', 'and', 'cute', 'big', 'ugly'],
  },
  {
    id: 'adj-7', type: 'match_pairs',
    question: 'Nối tính từ',
    pairs: [
      { en: 'Tall 🦒', vi: 'Cao' },
      { en: 'Strong 💪', vi: 'Mạnh mẽ' },
      { en: 'Funny 😂', vi: 'Buồn cười' },
      { en: 'Brave 🦁', vi: 'Dũng cảm' },
    ],
  },
  {
    id: 'adj-8', type: 'multiple_choice',
    question: '"Delicious" có nghĩa là gì?', audio: 'Delicious',
    options: [
      { text: 'Ngon / Thơm ngon', emoji: '😋', correct: true },
      { text: 'Đắng', emoji: '😖', correct: false },
      { text: 'Cay', emoji: '🌶️', correct: false },
      { text: 'Chua', emoji: '🍋', correct: false },
    ],
  },

  // --- Câu 9-12: Multiple choice mới ---
  {
    id: 'adj-9', type: 'multiple_choice',
    question: '"Heavy" có nghĩa là gì?', audio: 'Heavy',
    options: [
      { text: 'Nặng', emoji: '⚖️', correct: true },
      { text: 'Nhẹ', emoji: '🪶', correct: false },
      { text: 'Lớn', emoji: '🐘', correct: false },
      { text: 'Nhỏ', emoji: '🐭', correct: false },
    ],
  },
  {
    id: 'adj-10', type: 'multiple_choice',
    question: '"Clean" có nghĩa là gì?', audio: 'Clean',
    options: [
      { text: 'Sạch sẽ', emoji: '✨', correct: true },
      { text: 'Bẩn', emoji: '🗑️', correct: false },
      { text: 'Mới', emoji: '🆕', correct: false },
      { text: 'Cũ', emoji: '🕰️', correct: false },
    ],
  },
  {
    id: 'adj-11', type: 'multiple_choice',
    question: '"Soft" có nghĩa là gì?', audio: 'Soft',
    options: [
      { text: 'Mềm', emoji: '🧸', correct: true },
      { text: 'Cứng', emoji: '🪨', correct: false },
      { text: 'Nhẵn', emoji: '💧', correct: false },
      { text: 'Thô ráp', emoji: '🌵', correct: false },
    ],
  },
  {
    id: 'adj-12', type: 'multiple_choice',
    question: '"Bright" có nghĩa là gì?', audio: 'Bright',
    options: [
      { text: 'Sáng / Rực rỡ', emoji: '💡', correct: true },
      { text: 'Tối', emoji: '🌑', correct: false },
      { text: 'Mờ', emoji: '🌫️', correct: false },
      { text: 'Nhạt', emoji: '🎨', correct: false },
    ],
  },

  // --- Câu 13-16: Fill blank mới ---
  {
    id: 'adj-13', type: 'fill_blank',
    question: '"This box is very ___" (Cái hộp này rất nặng)',
    audio: 'This box is very heavy', answer: 'heavy', hint: 'hea...',
    options: ['heavy', 'hairy', 'hasty', 'healthy'],
  },
  {
    id: 'adj-14', type: 'fill_blank',
    question: '"The opposite of dirty is ___" (Trái nghĩa của bẩn là sạch)',
    audio: 'The opposite of dirty is clean', answer: 'clean', hint: 'cl..n',
    options: ['clean', 'clear', 'cream', 'clown'],
  },
  {
    id: 'adj-15', type: 'fill_blank',
    question: '"The pillow is very ___" (Cái gối rất mềm)',
    audio: 'The pillow is very soft', answer: 'soft', hint: 's..t',
    options: ['soft', 'sort', 'soot', 'sore'],
  },
  {
    id: 'adj-16', type: 'fill_blank',
    question: '"The sun is very ___" (Mặt trời rất sáng)',
    audio: 'The sun is very bright', answer: 'bright', hint: 'bri...',
    options: ['bright', 'right', 'light', 'night'],
  },

  // --- Câu 17-20: Tap words mới ---
  {
    id: 'adj-17', type: 'tap_words',
    question: 'Sắp xếp: "Con chó của tôi to và mạnh"',
    answer: ['My', 'dog', 'is', 'big', 'and', 'strong'],
    wordBank: ['My', 'dog', 'is', 'big', 'and', 'strong', 'small', 'cat', 'weak'],
  },
  {
    id: 'adj-18', type: 'tap_words',
    question: 'Sắp xếp: "Bông tuyết rất nhẹ và mềm"',
    answer: ['Snow', 'is', 'very', 'light', 'and', 'soft'],
    wordBank: ['Snow', 'is', 'very', 'light', 'and', 'soft', 'heavy', 'hard', 'rain'],
  },
  {
    id: 'adj-19', type: 'tap_words',
    question: 'Sắp xếp: "Phòng này rất sạch sẽ và sáng sủa"',
    answer: ['This', 'room', 'is', 'very', 'clean', 'and', 'bright'],
    wordBank: ['This', 'room', 'is', 'very', 'clean', 'and', 'bright', 'dirty', 'dark'],
  },
  {
    id: 'adj-20', type: 'tap_words',
    question: 'Sắp xếp: "Món ăn này ngon và rẻ"',
    answer: ['This', 'food', 'is', 'delicious', 'and', 'cheap'],
    wordBank: ['This', 'food', 'is', 'delicious', 'and', 'cheap', 'expensive', 'bad'],
  },

  // --- Câu 21-24: Multiple choice nâng cao ---
  {
    id: 'adj-21', type: 'multiple_choice',
    question: '"The opposite of tall is ___"', audio: 'opposite of tall',
    options: [
      { text: 'Short (thấp)', emoji: '✅', correct: true },
      { text: 'Small (nhỏ)', emoji: '❌', correct: false },
      { text: 'Weak (yếu)', emoji: '❌', correct: false },
      { text: 'Slow (chậm)', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'adj-22', type: 'multiple_choice',
    question: '"The weather is very ___" - Điền từ phù hợp khi trời nắng nóng.',
    audio: 'The weather is very hot',
    options: [
      { text: 'Hot (nóng)', emoji: '🥵', correct: true },
      { text: 'Cold (lạnh)', emoji: '❌', correct: false },
      { text: 'Wet (ẩm ướt)', emoji: '❌', correct: false },
      { text: 'Windy (có gió)', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'adj-23', type: 'multiple_choice',
    question: '"She has long, beautiful hair" nghĩa là gì?',
    audio: 'She has long beautiful hair',
    options: [
      { text: 'Cô ấy có mái tóc dài và đẹp', emoji: '✅', correct: true },
      { text: 'Cô ấy có mái tóc ngắn và xấu', emoji: '❌', correct: false },
      { text: 'Cô ấy có đôi mắt đẹp', emoji: '❌', correct: false },
      { text: 'Cô ấy có giọng hát hay', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'adj-24', type: 'multiple_choice',
    question: 'Cặp tính từ nào là TRÁI NGHĨA nhau?', audio: 'antonym adjectives',
    options: [
      { text: 'Heavy - Light (nặng - nhẹ)', emoji: '✅', correct: true },
      { text: 'Big - Large (to - lớn)', emoji: '❌', correct: false },
      { text: 'Fast - Quick (nhanh - mau)', emoji: '❌', correct: false },
      { text: 'Beautiful - Pretty (đẹp - xinh)', emoji: '❌', correct: false },
    ],
  },

  // --- Câu 25: Match pairs tổng hợp ---
  {
    id: 'adj-25', type: 'match_pairs',
    question: 'Nối tính từ với nghĩa',
    pairs: [
      { en: 'Heavy ⚖️', vi: 'Nặng' },
      { en: 'Clean ✨', vi: 'Sạch sẽ' },
      { en: 'Soft 🧸', vi: 'Mềm' },
      { en: 'Bright 💡', vi: 'Sáng rực rỡ' },
    ],
  },
];
