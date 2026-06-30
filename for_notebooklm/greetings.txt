// src/data/lessons/greetings.js
// Chủ đề 1: Chào hỏi cơ bản

export default [
  // --- Câu 1-8: Giữ nguyên câu cũ ---
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

  // --- Câu 9-12: multiple_choice mới ---
  {
    id: 'gr-9',
    type: 'multiple_choice',
    question: '"Good afternoon" nghĩa là gì?',
    audio: 'Good afternoon',
    options: [
      { text: 'Chào buổi chiều', emoji: '🌤️', correct: true },
      { text: 'Chào buổi sáng', emoji: '🌅', correct: false },
      { text: 'Chúc ngủ ngon', emoji: '🌙', correct: false },
      { text: 'Tạm biệt', emoji: '👋', correct: false },
    ],
  },
  {
    id: 'gr-10',
    type: 'multiple_choice',
    question: '"You\'re welcome" nghĩa là gì?',
    audio: 'You\'re welcome',
    options: [
      { text: 'Không có gì', emoji: '😊', correct: true },
      { text: 'Cảm ơn', emoji: '🙏', correct: false },
      { text: 'Xin lỗi', emoji: '😅', correct: false },
      { text: 'Xin chào', emoji: '👋', correct: false },
    ],
  },
  {
    id: 'gr-11',
    type: 'multiple_choice',
    question: '"Excuse me" nghĩa là gì?',
    audio: 'Excuse me',
    options: [
      { text: 'Xin lỗi / Cho hỏi', emoji: '🙋', correct: true },
      { text: 'Cảm ơn', emoji: '🙏', correct: false },
      { text: 'Xin chào', emoji: '👋', correct: false },
      { text: 'Tạm biệt', emoji: '😢', correct: false },
    ],
  },
  {
    id: 'gr-12',
    type: 'multiple_choice',
    question: '"See you later" nghĩa là gì?',
    audio: 'See you later',
    options: [
      { text: 'Hẹn gặp lại', emoji: '😄', correct: true },
      { text: 'Tạm biệt', emoji: '👋', correct: false },
      { text: 'Xin chào', emoji: '😊', correct: false },
      { text: 'Chúc ngủ ngon', emoji: '🌙', correct: false },
    ],
  },

  // --- Câu 13-16: fill_blank mới ---
  {
    id: 'gr-13',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "I\'m ___" (Tôi ổn)',
    audio: 'I\'m fine',
    answer: 'fine',
    hint: 'f...e',
    options: ['fine', 'fire', 'five', 'file'],
  },
  {
    id: 'gr-14',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "Nice to ___ you" (Rất vui được gặp bạn)',
    audio: 'Nice to meet you',
    answer: 'meet',
    hint: 'm..t',
    options: ['meet', 'greet', 'seat', 'beat'],
  },
  {
    id: 'gr-15',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "Good ___, have a nice day!" (Tạm biệt, chúc ngày tốt lành)',
    audio: 'Good bye, have a nice day',
    answer: 'bye',
    hint: 'b_e',
    options: ['bye', 'buy', 'boy', 'bay'],
  },
  {
    id: 'gr-16',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "My ___ is Anna" (Tên tôi là Anna)',
    audio: 'My name is Anna',
    answer: 'name',
    hint: 'n..e',
    options: ['name', 'game', 'same', 'fame'],
  },

  // --- Câu 17-20: tap_words mới ---
  {
    id: 'gr-17',
    type: 'tap_words',
    question: 'Sắp xếp: "Cảm ơn rất nhiều"',
    answer: ['Thank', 'you', 'very', 'much'],
    wordBank: ['Thank', 'you', 'very', 'much', 'please', 'hello'],
  },
  {
    id: 'gr-18',
    type: 'tap_words',
    question: 'Sắp xếp: "Rất vui được gặp bạn"',
    answer: ['Nice', 'to', 'meet', 'you', 'too'],
    wordBank: ['Nice', 'to', 'meet', 'you', 'too', 'bye', 'hello'],
  },
  {
    id: 'gr-19',
    type: 'tap_words',
    question: 'Sắp xếp: "Tôi sống ở Việt Nam"',
    answer: ['I', 'live', 'in', 'Vietnam'],
    wordBank: ['I', 'live', 'in', 'Vietnam', 'from', 'is', 'am'],
  },
  {
    id: 'gr-20',
    type: 'tap_words',
    question: 'Sắp xếp: "Bạn có khỏe không?"',
    answer: ['How', 'are', 'you', 'today'],
    wordBank: ['How', 'are', 'you', 'today', 'good', 'bye', 'morning'],
  },

  // --- Câu 21-24: multiple_choice nâng cao ---
  {
    id: 'gr-21',
    type: 'multiple_choice',
    question: 'Bạn nói gì khi gặp ai đó lần đầu?',
    options: [
      { text: 'Nice to meet you!', emoji: '🤝', correct: true },
      { text: 'Goodbye!', emoji: '👋', correct: false },
      { text: 'Good night!', emoji: '🌙', correct: false },
      { text: 'See you later!', emoji: '😊', correct: false },
    ],
  },
  {
    id: 'gr-22',
    type: 'multiple_choice',
    question: 'Bạn nói gì khi ai đó nói "Thank you"?',
    options: [
      { text: 'You\'re welcome', emoji: '😊', correct: true },
      { text: 'Goodbye', emoji: '👋', correct: false },
      { text: 'Good morning', emoji: '🌅', correct: false },
      { text: 'Excuse me', emoji: '🙋', correct: false },
    ],
  },
  {
    id: 'gr-23',
    type: 'multiple_choice',
    question: 'Câu chào nào dùng vào buổi sáng?',
    options: [
      { text: 'Good morning', emoji: '🌅', correct: true },
      { text: 'Good night', emoji: '🌙', correct: false },
      { text: 'Good evening', emoji: '🌆', correct: false },
      { text: 'Goodbye', emoji: '👋', correct: false },
    ],
  },
  {
    id: 'gr-24',
    type: 'multiple_choice',
    question: 'Khi muốn nói "Tôi rất vui được gặp bạn", ta dùng câu nào?',
    options: [
      { text: 'Nice to meet you', emoji: '🤝', correct: true },
      { text: 'See you tomorrow', emoji: '😄', correct: false },
      { text: 'How are you', emoji: '🤔', correct: false },
      { text: 'Have a nice day', emoji: '☀️', correct: false },
    ],
  },

  // --- Câu 25: match_pairs ---
  {
    id: 'gr-25',
    type: 'match_pairs',
    question: 'Nối câu chào với nghĩa tiếng Việt',
    pairs: [
      { en: 'Good morning', vi: 'Chào buổi sáng' },
      { en: 'Good afternoon', vi: 'Chào buổi chiều' },
      { en: 'Good evening', vi: 'Chào buổi tối' },
      { en: 'Good night', vi: 'Chúc ngủ ngon' },
    ],
  },
];
