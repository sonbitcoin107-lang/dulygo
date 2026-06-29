// src/data/lessons/animals.js
// Chủ đề 3: Động vật

export default [
  {
    id: 'ani-1',
    type: 'multiple_choice',
    question: '"Dog" có nghĩa là gì?',
    audio: 'Dog',
    options: [
      { text: 'Con chó', emoji: '🐶', correct: true },
      { text: 'Con mèo', emoji: '🐱', correct: false },
      { text: 'Con thỏ', emoji: '🐰', correct: false },
      { text: 'Con gấu', emoji: '🐻', correct: false },
    ],
  },
  {
    id: 'ani-2',
    type: 'multiple_choice',
    question: '"Cat" có nghĩa là gì?',
    audio: 'Cat',
    options: [
      { text: 'Con mèo', emoji: '🐱', correct: true },
      { text: 'Con chó', emoji: '🐶', correct: false },
      { text: 'Con chuột', emoji: '🐭', correct: false },
      { text: 'Con hổ', emoji: '🐯', correct: false },
    ],
  },
  {
    id: 'ani-3',
    type: 'multiple_choice',
    question: 'Con voi trong tiếng Anh là gì?',
    options: [
      { text: 'Elephant', emoji: '🐘', correct: true },
      { text: 'Hippo', emoji: '🦛', correct: false },
      { text: 'Rhino', emoji: '🦏', correct: false },
      { text: 'Bear', emoji: '🐻', correct: false },
    ],
  },
  {
    id: 'ani-4',
    type: 'match_pairs',
    question: 'Nối động vật với tên tiếng Anh',
    pairs: [
      { en: 'Dog 🐶', vi: 'Con chó' },
      { en: 'Cat 🐱', vi: 'Con mèo' },
      { en: 'Fish 🐟', vi: 'Con cá' },
      { en: 'Bird 🐦', vi: 'Con chim' },
    ],
  },
  {
    id: 'ani-5',
    type: 'multiple_choice',
    question: '"Lion" có nghĩa là gì?',
    audio: 'Lion',
    options: [
      { text: 'Con sư tử', emoji: '🦁', correct: true },
      { text: 'Con hổ', emoji: '🐯', correct: false },
      { text: 'Con gấu', emoji: '🐻', correct: false },
      { text: 'Con chó sói', emoji: '🐺', correct: false },
    ],
  },
  {
    id: 'ani-6',
    type: 'fill_blank',
    question: 'Con thỏ: "R___it"',
    audio: 'Rabbit',
    answer: 'Rabbit',
    hint: 'R...t',
    options: ['Rabbit', 'Robot', 'Rapid', 'Racket'],
  },
  {
    id: 'ani-7',
    type: 'tap_words',
    question: 'Sắp xếp: "Con chó ăn xương"',
    answer: ['The', 'dog', 'eats', 'a', 'bone'],
    wordBank: ['The', 'dog', 'eats', 'a', 'bone', 'cat', 'fish'],
  },
  {
    id: 'ani-8',
    type: 'multiple_choice',
    question: '"Monkey" có nghĩa là gì?',
    audio: 'Monkey',
    options: [
      { text: 'Con khỉ', emoji: '🐒', correct: true },
      { text: 'Con vẹt', emoji: '🦜', correct: false },
      { text: 'Con hươu', emoji: '🦌', correct: false },
      { text: 'Con gà', emoji: '🐔', correct: false },
    ],
  },
  {
    id: 'ani-9',
    type: 'multiple_choice',
    question: 'Con bướm trong tiếng Anh là?',
    options: [
      { text: 'Butterfly', emoji: '🦋', correct: true },
      { text: 'Dragonfly', emoji: '🪲', correct: false },
      { text: 'Honeybee', emoji: '🐝', correct: false },
      { text: 'Ladybug', emoji: '🐞', correct: false },
    ],
  },
  {
    id: 'ani-10',
    type: 'match_pairs',
    question: 'Nối động vật',
    pairs: [
      { en: 'Tiger 🐯', vi: 'Con hổ' },
      { en: 'Elephant 🐘', vi: 'Con voi' },
      { en: 'Monkey 🐒', vi: 'Con khỉ' },
      { en: 'Rabbit 🐰', vi: 'Con thỏ' },
    ],
  },
];
