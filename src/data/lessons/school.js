// src/data/lessons/school.js
// Chủ đề 8: Trường học

export default [
  {
    id: 'sch-1',
    type: 'multiple_choice',
    question: '"Pencil" có nghĩa là gì?',
    audio: 'Pencil',
    options: [
      { text: 'Cây bút chì', emoji: '✏️', correct: true },
      { text: 'Cây bút mực', emoji: '🖊️', correct: false },
      { text: 'Thước kẻ', emoji: '📏', correct: false },
      { text: 'Sách giáo khoa', emoji: '📚', correct: false },
    ],
  },
  {
    id: 'sch-2',
    type: 'multiple_choice',
    question: '"Book" có nghĩa là gì?',
    audio: 'Book',
    options: [
      { text: 'Sách / Quyển vở', emoji: '📗', correct: true },
      { text: 'Bút chì', emoji: '✏️', correct: false },
      { text: 'Bảng đen', emoji: '🖊️', correct: false },
      { text: 'Cặp sách', emoji: '🎒', correct: false },
    ],
  },
  {
    id: 'sch-3',
    type: 'match_pairs',
    question: 'Nối đồ dùng học tập',
    pairs: [
      { en: 'Ruler 📏', vi: 'Thước kẻ' },
      { en: 'Eraser 🧹', vi: 'Cục tẩy' },
      { en: 'Bag 🎒', vi: 'Cặp sách' },
      { en: 'Desk 🪑', vi: 'Bàn học' },
    ],
  },
  {
    id: 'sch-4',
    type: 'fill_blank',
    question: '"I go to ___" (Tôi đi học)',
    audio: 'I go to school',
    answer: 'school',
    hint: 'sch..l',
    options: ['school', 'home', 'store', 'park'],
  },
  {
    id: 'sch-5',
    type: 'multiple_choice',
    question: '"Teacher" có nghĩa là gì?',
    audio: 'Teacher',
    options: [
      { text: 'Giáo viên', emoji: '👩‍🏫', correct: true },
      { text: 'Học sinh', emoji: '🧑‍🎓', correct: false },
      { text: 'Hiệu trưởng', emoji: '👨‍💼', correct: false },
      { text: 'Bạn cùng lớp', emoji: '👫', correct: false },
    ],
  },
  {
    id: 'sch-6',
    type: 'tap_words',
    question: 'Sắp xếp: "Em thích đi học"',
    answer: ['I', 'like', 'going', 'to', 'school'],
    wordBank: ['I', 'like', 'going', 'to', 'school', 'home', 'hate'],
  },
  {
    id: 'sch-7',
    type: 'multiple_choice',
    question: '"Classroom" có nghĩa là gì?',
    audio: 'Classroom',
    options: [
      { text: 'Phòng học', emoji: '🏫', correct: true },
      { text: 'Thư viện', emoji: '📚', correct: false },
      { text: 'Sân trường', emoji: '⛹️', correct: false },
      { text: 'Nhà ăn', emoji: '🍽️', correct: false },
    ],
  },
  {
    id: 'sch-8',
    type: 'match_pairs',
    question: 'Nối môn học',
    pairs: [
      { en: 'Math ➕', vi: 'Toán học' },
      { en: 'Music 🎵', vi: 'Âm nhạc' },
      { en: 'Art 🎨', vi: 'Mĩ thuật' },
      { en: 'Science 🔬', vi: 'Khoa học' },
    ],
  },
];
