// src/data/lessons/greetings.js
// Chủ đề 1: Chào hỏi cơ bản

export default [
  // Bài 1
  {
    id: 'gr-1',
    type: 'multiple_choice',
    question: '"Hello" có nghĩa là gì?',
    audio: 'Hello',
    options: [
      { text: 'Xin chào', emoji: '👋', correct: true },
      { text: 'Tạm biệt', emoji: '😢', correct: false },
      { text: 'Cảm ơn', emoji: '🙏', correct: false },
      { text: 'Xin lỗi', emoji: '😅', correct: false },
    ],
  },
  {
    id: 'gr-2',
    type: 'multiple_choice',
    question: '"Goodbye" có nghĩa là gì?',
    audio: 'Goodbye',
    options: [
      { text: 'Tạm biệt', emoji: '👋', correct: true },
      { text: 'Xin chào', emoji: '😊', correct: false },
      { text: 'Hẹn gặp lại', emoji: '😄', correct: false },
      { text: 'Cảm ơn', emoji: '🙏', correct: false },
    ],
  },
  {
    id: 'gr-3',
    type: 'tap_words',
    question: 'Sắp xếp để nói "Xin chào, tôi tên là Minh"',
    answer: ['Hello', 'my', 'name', 'is', 'Minh'],
    wordBank: ['Hello', 'my', 'name', 'is', 'Minh', 'Goodbye', 'your'],
  },
  {
    id: 'gr-4',
    type: 'multiple_choice',
    question: '"Thank you" nghĩa là gì?',
    audio: 'Thank you',
    options: [
      { text: 'Cảm ơn', emoji: '🙏', correct: true },
      { text: 'Xin lỗi', emoji: '😅', correct: false },
      { text: 'Xin chào', emoji: '👋', correct: false },
      { text: 'Không có gì', emoji: '😊', correct: false },
    ],
  },
  {
    id: 'gr-5',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "___ are you?" (Bạn khỏe không?)',
    audio: 'How are you?',
    answer: 'How',
    hint: 'Bắt đầu bằng H',
    options: ['How', 'What', 'Who', 'Where'],
  },
  {
    id: 'gr-6',
    type: 'match_pairs',
    question: 'Nối từ với nghĩa đúng',
    pairs: [
      { en: 'Hello', vi: 'Xin chào' },
      { en: 'Goodbye', vi: 'Tạm biệt' },
      { en: 'Please', vi: 'Làm ơn' },
      { en: 'Sorry', vi: 'Xin lỗi' },
    ],
  },
  {
    id: 'gr-7',
    type: 'multiple_choice',
    question: '"Good morning" nghĩa là gì?',
    audio: 'Good morning',
    options: [
      { text: 'Chào buổi sáng', emoji: '🌅', correct: true },
      { text: 'Chào buổi tối', emoji: '🌙', correct: false },
      { text: 'Chúc ngủ ngon', emoji: '😴', correct: false },
      { text: 'Chào buổi trưa', emoji: '☀️', correct: false },
    ],
  },
  {
    id: 'gr-8',
    type: 'multiple_choice',
    question: '"Good night" nghĩa là gì?',
    audio: 'Good night',
    options: [
      { text: 'Chúc ngủ ngon', emoji: '🌙', correct: true },
      { text: 'Chào buổi sáng', emoji: '🌅', correct: false },
      { text: 'Tạm biệt', emoji: '👋', correct: false },
      { text: 'Chào buổi tối', emoji: '🌆', correct: false },
    ],
  },
  {
    id: 'gr-9',
    type: 'tap_words',
    question: 'Sắp xếp: "Cảm ơn rất nhiều"',
    answer: ['Thank', 'you', 'very', 'much'],
    wordBank: ['Thank', 'you', 'very', 'much', 'please', 'hello'],
  },
  {
    id: 'gr-10',
    type: 'multiple_choice',
    question: 'Bạn nói gì khi gặp ai đó lần đầu?',
    options: [
      { text: 'Nice to meet you!', emoji: '🤝', correct: true },
      { text: 'Goodbye!', emoji: '👋', correct: false },
      { text: 'Good night!', emoji: '🌙', correct: false },
      { text: 'See you later!', emoji: '😊', correct: false },
    ],
  },
];
