// src/data/lessons/body.js
// Chủ đề 9: Cơ thể người

export default [
  {
    id: 'bod-1',
    type: 'multiple_choice',
    question: '"Head" có nghĩa là gì?',
    audio: 'Head',
    options: [
      { text: 'Cái đầu', emoji: '🧠', correct: true },
      { text: 'Cái tay', emoji: '🤚', correct: false },
      { text: 'Cái chân', emoji: '🦵', correct: false },
      { text: 'Cái bụng', emoji: '🤰', correct: false },
    ],
  },
  {
    id: 'bod-2',
    type: 'multiple_choice',
    question: '"Hand" có nghĩa là gì?',
    audio: 'Hand',
    options: [
      { text: 'Bàn tay', emoji: '🤚', correct: true },
      { text: 'Bàn chân', emoji: '🦶', correct: false },
      { text: 'Cánh tay', emoji: '💪', correct: false },
      { text: 'Ngón tay', emoji: '☝️', correct: false },
    ],
  },
  {
    id: 'bod-3',
    type: 'match_pairs',
    question: 'Nối bộ phận cơ thể',
    pairs: [
      { en: 'Eye 👁️', vi: 'Mắt' },
      { en: 'Ear 👂', vi: 'Tai' },
      { en: 'Nose 👃', vi: 'Mũi' },
      { en: 'Mouth 👄', vi: 'Miệng' },
    ],
  },
  {
    id: 'bod-4',
    type: 'fill_blank',
    question: '"I have two ___" (Tôi có hai mắt)',
    audio: 'I have two eyes',
    answer: 'eyes',
    hint: 'e..s',
    options: ['eyes', 'ears', 'arms', 'legs'],
  },
  {
    id: 'bod-5',
    type: 'multiple_choice',
    question: '"Leg" có nghĩa là gì?',
    audio: 'Leg',
    options: [
      { text: 'Chân', emoji: '🦵', correct: true },
      { text: 'Tay', emoji: '💪', correct: false },
      { text: 'Vai', emoji: '🤷', correct: false },
      { text: 'Lưng', emoji: '🧍', correct: false },
    ],
  },
  {
    id: 'bod-6',
    type: 'tap_words',
    question: 'Sắp xếp: "Cái mũi của tôi màu đỏ"',
    answer: ['My', 'nose', 'is', 'red'],
    wordBank: ['My', 'nose', 'is', 'red', 'blue', 'eye', 'ear'],
  },
  {
    id: 'bod-7',
    type: 'multiple_choice',
    question: '"Hair" có nghĩa là gì?',
    audio: 'Hair',
    options: [
      { text: 'Tóc', emoji: '💇', correct: true },
      { text: 'Da', emoji: '🤌', correct: false },
      { text: 'Móng tay', emoji: '💅', correct: false },
      { text: 'Răng', emoji: '🦷', correct: false },
    ],
  },
  {
    id: 'bod-8',
    type: 'match_pairs',
    question: 'Nối thêm bộ phận cơ thể',
    pairs: [
      { en: 'Arm 💪', vi: 'Cánh tay' },
      { en: 'Knee 🦵', vi: 'Đầu gối' },
      { en: 'Back 🧍', vi: 'Lưng' },
      { en: 'Foot 🦶', vi: 'Bàn chân' },
    ],
  },
];
