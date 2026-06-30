// src/data/lessons/food.js
// Chủ đề 4: Thức ăn & Đồ uống

export default [
  // --- Câu 1-8: Giữ nguyên câu cũ ---
  {
    id: 'food-1',
    type: 'multiple_choice',
    question: '"Apple" có nghĩa là gì?',
    audio: 'Apple',
    options: [
      { text: 'Quả táo', emoji: '🍎', correct: true },
      { text: 'Quả cam', emoji: '🍊', correct: false },
      { text: 'Quả dâu', emoji: '🍓', correct: false },
      { text: 'Quả chuối', emoji: '🍌', correct: false },
    ],
  },
  {
    id: 'food-2',
    type: 'multiple_choice',
    question: '"Banana" có nghĩa là gì?',
    audio: 'Banana',
    options: [
      { text: 'Quả chuối', emoji: '🍌', correct: true },
      { text: 'Quả táo', emoji: '🍎', correct: false },
      { text: 'Quả dứa', emoji: '🍍', correct: false },
      { text: 'Quả xoài', emoji: '🥭', correct: false },
    ],
  },
  {
    id: 'food-3',
    type: 'match_pairs',
    question: 'Nối thức ăn với nghĩa tiếng Việt',
    pairs: [
      { en: 'Rice 🍚', vi: 'Cơm' },
      { en: 'Bread 🍞', vi: 'Bánh mì' },
      { en: 'Egg 🥚', vi: 'Trứng' },
      { en: 'Milk 🥛', vi: 'Sữa' },
    ],
  },
  {
    id: 'food-4',
    type: 'multiple_choice',
    question: '"Water" có nghĩa là gì?',
    audio: 'Water',
    options: [
      { text: 'Nước', emoji: '💧', correct: true },
      { text: 'Sữa', emoji: '🥛', correct: false },
      { text: 'Nước cam', emoji: '🍊', correct: false },
      { text: 'Trà', emoji: '🍵', correct: false },
    ],
  },
  {
    id: 'food-5',
    type: 'fill_blank',
    question: '"I drink ___" (Tôi uống sữa)',
    audio: 'I drink milk',
    answer: 'milk',
    hint: 'm..k',
    options: ['milk', 'mint', 'mild', 'mail'],
  },
  {
    id: 'food-6',
    type: 'multiple_choice',
    question: 'Cơm trong tiếng Anh là gì?',
    options: [
      { text: 'Rice', emoji: '🍚', correct: true },
      { text: 'Bread', emoji: '🍞', correct: false },
      { text: 'Noodle', emoji: '🍜', correct: false },
      { text: 'Corn', emoji: '🌽', correct: false },
    ],
  },
  {
    id: 'food-7',
    type: 'tap_words',
    question: 'Sắp xếp: "Tôi thích ăn pizza"',
    answer: ['I', 'like', 'to', 'eat', 'pizza'],
    wordBank: ['I', 'like', 'to', 'eat', 'pizza', 'drink', 'water'],
  },
  {
    id: 'food-8',
    type: 'multiple_choice',
    question: '"Chicken" có nghĩa là gì?',
    audio: 'Chicken',
    options: [
      { text: 'Thịt gà', emoji: '🍗', correct: true },
      { text: 'Thịt heo', emoji: '🥩', correct: false },
      { text: 'Thịt bò', emoji: '🥓', correct: false },
      { text: 'Cá', emoji: '🐟', correct: false },
    ],
  },

  // --- Câu 9-12: multiple_choice mới ---
  {
    id: 'food-9',
    type: 'multiple_choice',
    question: '"Soup" có nghĩa là gì?',
    audio: 'Soup',
    options: [
      { text: 'Súp / Canh', emoji: '🍲', correct: true },
      { text: 'Cơm', emoji: '🍚', correct: false },
      { text: 'Mì', emoji: '🍜', correct: false },
      { text: 'Bánh', emoji: '🍞', correct: false },
    ],
  },
  {
    id: 'food-10',
    type: 'multiple_choice',
    question: '"Juice" có nghĩa là gì?',
    audio: 'Juice',
    options: [
      { text: 'Nước ép trái cây', emoji: '🧃', correct: true },
      { text: 'Nước lọc', emoji: '💧', correct: false },
      { text: 'Sữa', emoji: '🥛', correct: false },
      { text: 'Trà', emoji: '🍵', correct: false },
    ],
  },
  {
    id: 'food-11',
    type: 'multiple_choice',
    question: '"Coffee" có nghĩa là gì?',
    audio: 'Coffee',
    options: [
      { text: 'Cà phê', emoji: '☕', correct: true },
      { text: 'Trà', emoji: '🍵', correct: false },
      { text: 'Nước ngọt', emoji: '🥤', correct: false },
      { text: 'Sữa', emoji: '🥛', correct: false },
    ],
  },
  {
    id: 'food-12',
    type: 'multiple_choice',
    question: '"Sandwich" có nghĩa là gì?',
    audio: 'Sandwich',
    options: [
      { text: 'Bánh mì kẹp', emoji: '🥪', correct: true },
      { text: 'Bánh pizza', emoji: '🍕', correct: false },
      { text: 'Bánh burger', emoji: '🍔', correct: false },
      { text: 'Bánh mì', emoji: '🍞', correct: false },
    ],
  },

  // --- Câu 13-16: fill_blank mới ---
  {
    id: 'food-13',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "I eat ___ for breakfast" (Tôi ăn trứng vào bữa sáng)',
    audio: 'I eat eggs for breakfast',
    answer: 'eggs',
    hint: 'e..s',
    options: ['eggs', 'legs', 'begs', 'pegs'],
  },
  {
    id: 'food-14',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "She likes to drink ___" (Cô ấy thích uống trà)',
    audio: 'She likes to drink tea',
    answer: 'tea',
    hint: 't_a',
    options: ['tea', 'sea', 'pea', 'lea'],
  },
  {
    id: 'food-15',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "The ___ is sweet" (Bánh kem rất ngọt)',
    audio: 'The cake is sweet',
    answer: 'cake',
    hint: 'c..e',
    options: ['cake', 'lake', 'bake', 'make'],
  },
  {
    id: 'food-16',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "I want a glass of ___" (Tôi muốn một ly nước cam)',
    audio: 'I want a glass of orange juice',
    answer: 'juice',
    hint: 'j..ce',
    options: ['juice', 'judge', 'Joyce', 'jute'],
  },

  // --- Câu 17-20: tap_words mới ---
  {
    id: 'food-17',
    type: 'tap_words',
    question: 'Sắp xếp: "Tôi muốn ăn cơm với thịt gà"',
    answer: ['I', 'want', 'rice', 'and', 'chicken'],
    wordBank: ['I', 'want', 'rice', 'and', 'chicken', 'soup', 'bread'],
  },
  {
    id: 'food-18',
    type: 'tap_words',
    question: 'Sắp xếp: "Bữa sáng tôi ăn bánh mì"',
    answer: ['I', 'eat', 'bread', 'for', 'breakfast'],
    wordBank: ['I', 'eat', 'bread', 'for', 'breakfast', 'lunch', 'dinner'],
  },
  {
    id: 'food-19',
    type: 'tap_words',
    question: 'Sắp xếp: "Tôi thích uống cà phê buổi sáng"',
    answer: ['I', 'like', 'coffee', 'in', 'the', 'morning'],
    wordBank: ['I', 'like', 'coffee', 'in', 'the', 'morning', 'tea', 'evening'],
  },
  {
    id: 'food-20',
    type: 'tap_words',
    question: 'Sắp xếp: "Hoa quả rất tốt cho sức khỏe"',
    answer: ['Fruits', 'are', 'very', 'good', 'for', 'health'],
    wordBank: ['Fruits', 'are', 'very', 'good', 'for', 'health', 'bad', 'food'],
  },

  // --- Câu 21-24: multiple_choice nâng cao ---
  {
    id: 'food-21',
    type: 'multiple_choice',
    question: 'Bữa ăn buổi sáng gọi là gì?',
    options: [
      { text: 'Breakfast', emoji: '🌅', correct: true },
      { text: 'Lunch', emoji: '☀️', correct: false },
      { text: 'Dinner', emoji: '🌙', correct: false },
      { text: 'Supper', emoji: '🌃', correct: false },
    ],
  },
  {
    id: 'food-22',
    type: 'multiple_choice',
    question: '"Cake" có nghĩa là gì?',
    audio: 'Cake',
    options: [
      { text: 'Bánh kem', emoji: '🎂', correct: true },
      { text: 'Kẹo', emoji: '🍬', correct: false },
      { text: 'Kem', emoji: '🍦', correct: false },
      { text: 'Bánh quy', emoji: '🍪', correct: false },
    ],
  },
  {
    id: 'food-23',
    type: 'multiple_choice',
    question: 'Thức uống nào KHÔNG phải đồ uống nóng?',
    options: [
      { text: 'Ice cream (Kem)', emoji: '🍦', correct: true },
      { text: 'Coffee (Cà phê)', emoji: '☕', correct: false },
      { text: 'Tea (Trà)', emoji: '🍵', correct: false },
      { text: 'Hot chocolate', emoji: '🍫', correct: false },
    ],
  },
  {
    id: 'food-24',
    type: 'multiple_choice',
    question: 'Khi muốn gọi đồ ăn, ta nói gì?',
    options: [
      { text: 'Can I have...?', emoji: '🙋', correct: true },
      { text: 'Do you like...?', emoji: '🤔', correct: false },
      { text: 'Where is...?', emoji: '📍', correct: false },
      { text: 'How much is...?', emoji: '💰', correct: false },
    ],
  },

  // --- Câu 25: match_pairs ---
  {
    id: 'food-25',
    type: 'match_pairs',
    question: 'Nối đồ ăn/uống với nghĩa tiếng Việt',
    pairs: [
      { en: 'Soup 🍲', vi: 'Canh / Súp' },
      { en: 'Coffee ☕', vi: 'Cà phê' },
      { en: 'Sandwich 🥪', vi: 'Bánh mì kẹp' },
      { en: 'Juice 🧃', vi: 'Nước ép trái cây' },
    ],
  },
];
