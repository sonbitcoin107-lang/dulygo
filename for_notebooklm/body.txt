// src/data/lessons/body.js
// Chủ đề 9: Cơ thể người

export default [
  // --- Câu 1-8: Giữ nguyên câu cũ ---
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

  // --- Câu 9-12: multiple_choice mới ---
  {
    id: 'bod-9',
    type: 'multiple_choice',
    question: '"Elbow" có nghĩa là gì?',
    audio: 'Elbow',
    options: [
      { text: 'Khuỷu tay', emoji: '💪', correct: true },
      { text: 'Đầu gối', emoji: '🦵', correct: false },
      { text: 'Cổ tay', emoji: '⌚', correct: false },
      { text: 'Vai', emoji: '🤷', correct: false },
    ],
  },
  {
    id: 'bod-10',
    type: 'multiple_choice',
    question: '"Shoulder" có nghĩa là gì?',
    audio: 'Shoulder',
    options: [
      { text: 'Vai', emoji: '🤷', correct: true },
      { text: 'Khuỷu tay', emoji: '💪', correct: false },
      { text: 'Cổ', emoji: '🧣', correct: false },
      { text: 'Lưng', emoji: '🧍', correct: false },
    ],
  },
  {
    id: 'bod-11',
    type: 'multiple_choice',
    question: '"Neck" có nghĩa là gì?',
    audio: 'Neck',
    options: [
      { text: 'Cổ', emoji: '🧣', correct: true },
      { text: 'Vai', emoji: '🤷', correct: false },
      { text: 'Ngực', emoji: '👔', correct: false },
      { text: 'Bụng', emoji: '🤰', correct: false },
    ],
  },
  {
    id: 'bod-12',
    type: 'multiple_choice',
    question: '"Thumb" có nghĩa là gì?',
    audio: 'Thumb',
    options: [
      { text: 'Ngón tay cái', emoji: '👍', correct: true },
      { text: 'Ngón tay út', emoji: '🤙', correct: false },
      { text: 'Ngón giữa', emoji: '🖕', correct: false },
      { text: 'Ngón trỏ', emoji: '☝️', correct: false },
    ],
  },

  // --- Câu 13-16: fill_blank mới ---
  {
    id: 'bod-13',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "My ___ hurts" (Vai tôi đau)',
    audio: 'My shoulder hurts',
    answer: 'shoulder',
    hint: 'sho...er',
    options: ['shoulder', 'sholder', 'shoulter', 'shelter'],
  },
  {
    id: 'bod-14',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "I have ten ___" (Tôi có mười ngón tay)',
    audio: 'I have ten fingers',
    answer: 'fingers',
    hint: 'fin...s',
    options: ['fingers', 'singers', 'ringers', 'lingers'],
  },
  {
    id: 'bod-15',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "The ___ is between the head and chest" (Cổ ở giữa đầu và ngực)',
    audio: 'The neck is between the head and chest',
    answer: 'neck',
    hint: 'n_ck',
    options: ['neck', 'deck', 'peck', 'beck'],
  },
  {
    id: 'bod-16',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "I brush my ___ every morning" (Tôi đánh răng mỗi buổi sáng)',
    audio: 'I brush my teeth every morning',
    answer: 'teeth',
    hint: 'te..h',
    options: ['teeth', 'teach', 'reach', 'beach'],
  },

  // --- Câu 17-20: tap_words mới ---
  {
    id: 'bod-17',
    type: 'tap_words',
    question: 'Sắp xếp: "Tôi dùng tay để viết"',
    answer: ['I', 'use', 'my', 'hand', 'to', 'write'],
    wordBank: ['I', 'use', 'my', 'hand', 'to', 'write', 'foot', 'read'],
  },
  {
    id: 'bod-18',
    type: 'tap_words',
    question: 'Sắp xếp: "Đôi mắt của tôi màu đen"',
    answer: ['My', 'eyes', 'are', 'black'],
    wordBank: ['My', 'eyes', 'are', 'black', 'brown', 'hair', 'blue'],
  },
  {
    id: 'bod-19',
    type: 'tap_words',
    question: 'Sắp xếp: "Tôi có mái tóc dài màu đen"',
    answer: ['I', 'have', 'long', 'black', 'hair'],
    wordBank: ['I', 'have', 'long', 'black', 'hair', 'short', 'white'],
  },
  {
    id: 'bod-20',
    type: 'tap_words',
    question: 'Sắp xếp: "Chân trái của tôi bị đau"',
    answer: ['My', 'left', 'leg', 'hurts'],
    wordBank: ['My', 'left', 'leg', 'hurts', 'right', 'arm', 'feels'],
  },

  // --- Câu 21-24: multiple_choice nâng cao ---
  {
    id: 'bod-21',
    type: 'multiple_choice',
    question: 'Bộ phận nào dùng để nghe?',
    options: [
      { text: 'Ear (Tai)', emoji: '👂', correct: true },
      { text: 'Eye (Mắt)', emoji: '👁️', correct: false },
      { text: 'Nose (Mũi)', emoji: '👃', correct: false },
      { text: 'Mouth (Miệng)', emoji: '👄', correct: false },
    ],
  },
  {
    id: 'bod-22',
    type: 'multiple_choice',
    question: 'Bộ phận nào dùng để nhìn?',
    options: [
      { text: 'Eye (Mắt)', emoji: '👁️', correct: true },
      { text: 'Ear (Tai)', emoji: '👂', correct: false },
      { text: 'Hand (Tay)', emoji: '🤚', correct: false },
      { text: 'Foot (Chân)', emoji: '🦶', correct: false },
    ],
  },
  {
    id: 'bod-23',
    type: 'multiple_choice',
    question: '"Fingers" có nghĩa là gì?',
    audio: 'Fingers',
    options: [
      { text: 'Các ngón tay', emoji: '🖐️', correct: true },
      { text: 'Các ngón chân', emoji: '🦶', correct: false },
      { text: 'Bàn tay', emoji: '🤚', correct: false },
      { text: 'Lòng bàn tay', emoji: '🤲', correct: false },
    ],
  },
  {
    id: 'bod-24',
    type: 'multiple_choice',
    question: 'Khi ai đó bị thương, ta nói gì?',
    options: [
      { text: 'Are you okay?', emoji: '🤔', correct: true },
      { text: 'Good morning!', emoji: '🌅', correct: false },
      { text: 'Nice to meet you!', emoji: '🤝', correct: false },
      { text: 'See you later!', emoji: '👋', correct: false },
    ],
  },

  // --- Câu 25: match_pairs ---
  {
    id: 'bod-25',
    type: 'match_pairs',
    question: 'Nối bộ phận cơ thể với nghĩa tiếng Việt',
    pairs: [
      { en: 'Shoulder 🤷', vi: 'Vai' },
      { en: 'Elbow 💪', vi: 'Khuỷu tay' },
      { en: 'Neck 🧣', vi: 'Cổ' },
      { en: 'Thumb 👍', vi: 'Ngón tay cái' },
    ],
  },
];
