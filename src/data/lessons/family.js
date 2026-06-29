// src/data/lessons/family.js
// Chủ đề 5: Gia đình

export default [
  {
    id: 'fam-1',
    type: 'multiple_choice',
    question: '"Mother" có nghĩa là gì?',
    audio: 'Mother',
    options: [
      { text: 'Mẹ / Má', emoji: '👩', correct: true },
      { text: 'Bố / Ba', emoji: '👨', correct: false },
      { text: 'Bà', emoji: '👵', correct: false },
      { text: 'Chị gái', emoji: '👧', correct: false },
    ],
  },
  {
    id: 'fam-2',
    type: 'multiple_choice',
    question: '"Father" có nghĩa là gì?',
    audio: 'Father',
    options: [
      { text: 'Bố / Ba', emoji: '👨', correct: true },
      { text: 'Mẹ / Má', emoji: '👩', correct: false },
      { text: 'Ông', emoji: '👴', correct: false },
      { text: 'Anh trai', emoji: '👦', correct: false },
    ],
  },
  {
    id: 'fam-3',
    type: 'match_pairs',
    question: 'Nối từ với nghĩa',
    pairs: [
      { en: 'Brother 👦', vi: 'Anh/em trai' },
      { en: 'Sister 👧', vi: 'Chị/em gái' },
      { en: 'Grandfather 👴', vi: 'Ông' },
      { en: 'Grandmother 👵', vi: 'Bà' },
    ],
  },
  {
    id: 'fam-4',
    type: 'multiple_choice',
    question: 'Gia đình trong tiếng Anh là gì?',
    options: [
      { text: 'Family', emoji: '👨‍👩‍👧', correct: true },
      { text: 'Friend', emoji: '👫', correct: false },
      { text: 'Team', emoji: '👥', correct: false },
      { text: 'Group', emoji: '👨‍👩‍👦', correct: false },
    ],
  },
  {
    id: 'fam-5',
    type: 'fill_blank',
    question: '"She is my ___" (Cô ấy là mẹ tôi)',
    audio: 'She is my mother',
    answer: 'mother',
    hint: 'm...r',
    options: ['mother', 'brother', 'father', 'sister'],
  },
  {
    id: 'fam-6',
    type: 'tap_words',
    question: 'Sắp xếp: "Anh trai tôi tên là Nam"',
    answer: ['My', 'brother', 'is', 'Nam'],
    wordBank: ['My', 'brother', 'is', 'Nam', 'sister', 'mother', 'father'],
  },
  {
    id: 'fam-7',
    type: 'multiple_choice',
    question: '"Baby" có nghĩa là gì?',
    audio: 'Baby',
    options: [
      { text: 'Em bé', emoji: '👶', correct: true },
      { text: 'Trẻ em', emoji: '🧒', correct: false },
      { text: 'Người lớn', emoji: '👨', correct: false },
      { text: 'Thanh niên', emoji: '🧑', correct: false },
    ],
  },
  {
    id: 'fam-8',
    type: 'multiple_choice',
    question: '"Uncle" có nghĩa là gì?',
    audio: 'Uncle',
    options: [
      { text: 'Chú / Cậu', emoji: '👨', correct: true },
      { text: 'Cô / Dì', emoji: '👩', correct: false },
      { text: 'Anh trai', emoji: '👦', correct: false },
      { text: 'Em gái', emoji: '👧', correct: false },
    ],
  },
];
