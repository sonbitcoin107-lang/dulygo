// src/data/lessons/food.js
// Chủ đề 4: Thức ăn & Đồ uống

export default [
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
  {
    id: 'food-9',
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
    id: 'food-10',
    type: 'match_pairs',
    question: 'Nối đồ ăn',
    pairs: [
      { en: 'Pizza 🍕', vi: 'Bánh pizza' },
      { en: 'Cake 🎂', vi: 'Bánh kem' },
      { en: 'Ice cream 🍦', vi: 'Kem' },
      { en: 'Cookie 🍪', vi: 'Bánh quy' },
    ],
  },
];
