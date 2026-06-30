// src/data/lessons/school.js
// Chủ đề 8: Trường học

export default [
  // --- Câu 1-8: Giữ nguyên câu cũ ---
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

  // --- Câu 9-12: multiple_choice mới ---
  {
    id: 'sch-9',
    type: 'multiple_choice',
    question: '"Homework" có nghĩa là gì?',
    audio: 'Homework',
    options: [
      { text: 'Bài tập về nhà', emoji: '📝', correct: true },
      { text: 'Bài kiểm tra', emoji: '📋', correct: false },
      { text: 'Bài học', emoji: '📖', correct: false },
      { text: 'Dự án', emoji: '💡', correct: false },
    ],
  },
  {
    id: 'sch-10',
    type: 'multiple_choice',
    question: '"Library" có nghĩa là gì?',
    audio: 'Library',
    options: [
      { text: 'Thư viện', emoji: '📚', correct: true },
      { text: 'Phòng học', emoji: '🏫', correct: false },
      { text: 'Nhà ăn', emoji: '🍽️', correct: false },
      { text: 'Sân chơi', emoji: '⛹️', correct: false },
    ],
  },
  {
    id: 'sch-11',
    type: 'multiple_choice',
    question: '"Playground" có nghĩa là gì?',
    audio: 'Playground',
    options: [
      { text: 'Sân chơi', emoji: '⛹️', correct: true },
      { text: 'Thư viện', emoji: '📚', correct: false },
      { text: 'Phòng học', emoji: '🏫', correct: false },
      { text: 'Căng tin', emoji: '🍽️', correct: false },
    ],
  },
  {
    id: 'sch-12',
    type: 'multiple_choice',
    question: '"Principal" có nghĩa là gì?',
    audio: 'Principal',
    options: [
      { text: 'Hiệu trưởng', emoji: '👨‍💼', correct: true },
      { text: 'Giáo viên', emoji: '👩‍🏫', correct: false },
      { text: 'Bảo vệ', emoji: '💂', correct: false },
      { text: 'Học sinh', emoji: '🧑‍🎓', correct: false },
    ],
  },

  // --- Câu 13-16: fill_blank mới ---
  {
    id: 'sch-13',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "The ___ teaches English" (Giáo viên dạy tiếng Anh)',
    audio: 'The teacher teaches English',
    answer: 'teacher',
    hint: 't...er',
    options: ['teacher', 'leader', 'preacher', 'speaker'],
  },
  {
    id: 'sch-14',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "I read books in the ___" (Tôi đọc sách ở thư viện)',
    audio: 'I read books in the library',
    answer: 'library',
    hint: 'lib...y',
    options: ['library', 'literary', 'literacy', 'liberty'],
  },
  {
    id: 'sch-15',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "My favorite ___ is Math" (Môn học yêu thích của tôi là Toán)',
    audio: 'My favorite subject is Math',
    answer: 'subject',
    hint: 'sub...t',
    options: ['subject', 'subtract', 'suburb', 'submit'],
  },
  {
    id: 'sch-16',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "Students do ___ every day" (Học sinh làm bài tập mỗi ngày)',
    audio: 'Students do homework every day',
    answer: 'homework',
    hint: 'home...',
    options: ['homework', 'housework', 'teamwork', 'framework'],
  },

  // --- Câu 17-20: tap_words mới ---
  {
    id: 'sch-17',
    type: 'tap_words',
    question: 'Sắp xếp: "Giáo viên viết lên bảng"',
    answer: ['The', 'teacher', 'writes', 'on', 'the', 'board'],
    wordBank: ['The', 'teacher', 'writes', 'on', 'the', 'board', 'student', 'reads'],
  },
  {
    id: 'sch-18',
    type: 'tap_words',
    question: 'Sắp xếp: "Học sinh đọc sách trong lớp"',
    answer: ['Students', 'read', 'books', 'in', 'the', 'classroom'],
    wordBank: ['Students', 'read', 'books', 'in', 'the', 'classroom', 'library', 'write'],
  },
  {
    id: 'sch-19',
    type: 'tap_words',
    question: 'Sắp xếp: "Tôi học tiếng Anh mỗi ngày"',
    answer: ['I', 'study', 'English', 'every', 'day'],
    wordBank: ['I', 'study', 'English', 'every', 'day', 'Math', 'week'],
  },
  {
    id: 'sch-20',
    type: 'tap_words',
    question: 'Sắp xếp: "Trường học bắt đầu lúc bảy giờ"',
    answer: ['School', 'starts', 'at', 'seven', "o'clock"],
    wordBank: ['School', 'starts', 'at', 'seven', "o'clock", 'eight', 'ends'],
  },

  // --- Câu 21-24: multiple_choice nâng cao ---
  {
    id: 'sch-21',
    type: 'multiple_choice',
    question: 'Môn học nào dạy về số và phép tính?',
    options: [
      { text: 'Math (Toán)', emoji: '➕', correct: true },
      { text: 'Science (Khoa học)', emoji: '🔬', correct: false },
      { text: 'History (Lịch sử)', emoji: '📜', correct: false },
      { text: 'Art (Mĩ thuật)', emoji: '🎨', correct: false },
    ],
  },
  {
    id: 'sch-22',
    type: 'multiple_choice',
    question: 'Khi muốn hỏi giáo viên, ta nói gì?',
    options: [
      { text: 'Excuse me, can I ask a question?', emoji: '🙋', correct: true },
      { text: 'Good morning, teacher!', emoji: '🌅', correct: false },
      { text: 'I finished my homework!', emoji: '✅', correct: false },
      { text: 'See you tomorrow!', emoji: '👋', correct: false },
    ],
  },
  {
    id: 'sch-23',
    type: 'multiple_choice',
    question: '"Student" có nghĩa là gì?',
    audio: 'Student',
    options: [
      { text: 'Học sinh / Sinh viên', emoji: '🧑‍🎓', correct: true },
      { text: 'Giáo viên', emoji: '👩‍🏫', correct: false },
      { text: 'Hiệu trưởng', emoji: '👨‍💼', correct: false },
      { text: 'Phụ huynh', emoji: '👨‍👧', correct: false },
    ],
  },
  {
    id: 'sch-24',
    type: 'multiple_choice',
    question: '"English" là tên của môn học gì?',
    options: [
      { text: 'Tiếng Anh', emoji: '🇬🇧', correct: true },
      { text: 'Toán', emoji: '➕', correct: false },
      { text: 'Khoa học', emoji: '🔬', correct: false },
      { text: 'Thể dục', emoji: '⚽', correct: false },
    ],
  },

  // --- Câu 25: match_pairs ---
  {
    id: 'sch-25',
    type: 'match_pairs',
    question: 'Nối từ trường học với nghĩa tiếng Việt',
    pairs: [
      { en: 'Homework 📝', vi: 'Bài tập về nhà' },
      { en: 'Library 📚', vi: 'Thư viện' },
      { en: 'Playground ⛹️', vi: 'Sân chơi' },
      { en: 'Principal 👨‍💼', vi: 'Hiệu trưởng' },
    ],
  },
];
