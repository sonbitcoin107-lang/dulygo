// src/data/lessons/numbers.js
// Chủ đề 6: Con số

export default [
  {
    id: 'num-1',
    type: 'multiple_choice',
    question: '"One" có nghĩa là số mấy?',
    audio: 'One',
    options: [
      { text: 'Số 1', emoji: '1️⃣', correct: true },
      { text: 'Số 2', emoji: '2️⃣', correct: false },
      { text: 'Số 3', emoji: '3️⃣', correct: false },
      { text: 'Số 11', emoji: '🔢', correct: false },
    ],
  },
  {
    id: 'num-2',
    type: 'match_pairs',
    question: 'Nối số với tên tiếng Anh',
    pairs: [
      { en: 'One', vi: '1' },
      { en: 'Two', vi: '2' },
      { en: 'Three', vi: '3' },
      { en: 'Four', vi: '4' },
    ],
  },
  {
    id: 'num-3',
    type: 'multiple_choice',
    question: 'Số 5 trong tiếng Anh là gì?',
    options: [
      { text: 'Five', emoji: '5️⃣', correct: true },
      { text: 'Four', emoji: '4️⃣', correct: false },
      { text: 'Six', emoji: '6️⃣', correct: false },
      { text: 'Seven', emoji: '7️⃣', correct: false },
    ],
  },
  {
    id: 'num-4',
    type: 'fill_blank',
    question: '"___ plus two equals five" (Ba cộng hai bằng năm)',
    audio: 'Three plus two equals five',
    answer: 'Three',
    hint: 'Số 3',
    options: ['Three', 'Two', 'Four', 'Five'],
  },
  {
    id: 'num-5',
    type: 'multiple_choice',
    question: '"Ten" là số mấy?',
    audio: 'Ten',
    options: [
      { text: 'Số 10', emoji: '🔟', correct: true },
      { text: 'Số 9', emoji: '9️⃣', correct: false },
      { text: 'Số 11', emoji: '🔢', correct: false },
      { text: 'Số 20', emoji: '🔢', correct: false },
    ],
  },
  {
    id: 'num-6',
    type: 'match_pairs',
    question: 'Nối số tiếp theo',
    pairs: [
      { en: 'Six', vi: '6' },
      { en: 'Seven', vi: '7' },
      { en: 'Eight', vi: '8' },
      { en: 'Nine', vi: '9' },
    ],
  },
  {
    id: 'num-7',
    type: 'tap_words',
    question: 'Sắp xếp: "Tôi có hai con chó"',
    answer: ['I', 'have', 'two', 'dogs'],
    wordBank: ['I', 'have', 'two', 'dogs', 'three', 'cats', 'one'],
  },
  {
    id: 'num-8',
    type: 'multiple_choice',
    question: '"Eleven" là số mấy?',
    audio: 'Eleven',
    options: [
      { text: 'Số 11', emoji: '🔢', correct: true },
      { text: 'Số 10', emoji: '🔟', correct: false },
      { text: 'Số 12', emoji: '🔢', correct: false },
      { text: 'Số 7', emoji: '7️⃣', correct: false },
    ],
  },
];
