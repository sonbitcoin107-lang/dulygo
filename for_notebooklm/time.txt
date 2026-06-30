// src/data/lessons/time.js
// Chủ đề 13: Thời gian

export default [
  // --- Câu 1-8: Giữ nguyên ---
  {
    id: 'tim-1', type: 'multiple_choice',
    question: '"Today" có nghĩa là gì?', audio: 'Today',
    options: [
      { text: 'Hôm nay', emoji: '📅', correct: true },
      { text: 'Hôm qua', emoji: '⬅️', correct: false },
      { text: 'Ngày mai', emoji: '➡️', correct: false },
      { text: 'Tuần này', emoji: '🗓️', correct: false },
    ],
  },
  {
    id: 'tim-2', type: 'match_pairs',
    question: 'Nối từ chỉ thời gian',
    pairs: [
      { en: 'Yesterday 📆', vi: 'Hôm qua' },
      { en: 'Tomorrow 🌅', vi: 'Ngày mai' },
      { en: 'Morning ☀️', vi: 'Buổi sáng' },
      { en: 'Night 🌙', vi: 'Ban đêm' },
    ],
  },
  {
    id: 'tim-3', type: 'multiple_choice',
    question: '"Monday" là thứ mấy?', audio: 'Monday',
    options: [
      { text: 'Thứ Hai', emoji: '📅', correct: true },
      { text: 'Thứ Ba', emoji: '📅', correct: false },
      { text: 'Thứ Tư', emoji: '📅', correct: false },
      { text: 'Thứ Sáu', emoji: '📅', correct: false },
    ],
  },
  {
    id: 'tim-4', type: 'multiple_choice',
    question: '"Weekend" có nghĩa là gì?', audio: 'Weekend',
    options: [
      { text: 'Cuối tuần', emoji: '🎉', correct: true },
      { text: 'Ngày thường', emoji: '📅', correct: false },
      { text: 'Ngày lễ', emoji: '🎊', correct: false },
      { text: 'Mùa hè', emoji: '☀️', correct: false },
    ],
  },
  {
    id: 'tim-5', type: 'fill_blank',
    question: '"___ is my favorite day!" (Thứ Sáu là ngày yêu thích của tôi!)',
    audio: 'Friday is my favorite day', answer: 'Friday', hint: 'Fri...',
    options: ['Friday', 'Monday', 'Sunday', 'Tuesday'],
  },
  {
    id: 'tim-6', type: 'match_pairs',
    question: 'Nối các thứ trong tuần',
    pairs: [
      { en: 'Tuesday', vi: 'Thứ Ba' },
      { en: 'Wednesday', vi: 'Thứ Tư' },
      { en: 'Thursday', vi: 'Thứ Năm' },
      { en: 'Saturday', vi: 'Thứ Bảy' },
    ],
  },
  {
    id: 'tim-7', type: 'tap_words',
    question: 'Sắp xếp: "Hôm nay là thứ Hai"',
    answer: ['Today', 'is', 'Monday'],
    wordBank: ['Today', 'is', 'Monday', 'Yesterday', 'Friday', 'Sunday'],
  },
  {
    id: 'tim-8', type: 'multiple_choice',
    question: '"Year" có nghĩa là gì?', audio: 'Year',
    options: [
      { text: 'Năm', emoji: '🗓️', correct: true },
      { text: 'Tháng', emoji: '📅', correct: false },
      { text: 'Tuần', emoji: '📆', correct: false },
      { text: 'Ngày', emoji: '☀️', correct: false },
    ],
  },

  // --- Câu 9-12: Multiple choice mới ---
  {
    id: 'tim-9', type: 'multiple_choice',
    question: '"Afternoon" có nghĩa là gì?', audio: 'Afternoon',
    options: [
      { text: 'Buổi chiều', emoji: '🌇', correct: true },
      { text: 'Buổi sáng', emoji: '🌅', correct: false },
      { text: 'Buổi tối', emoji: '🌆', correct: false },
      { text: 'Ban đêm', emoji: '🌙', correct: false },
    ],
  },
  {
    id: 'tim-10', type: 'multiple_choice',
    question: '"Month" có nghĩa là gì?', audio: 'Month',
    options: [
      { text: 'Tháng', emoji: '📅', correct: true },
      { text: 'Năm', emoji: '🗓️', correct: false },
      { text: 'Tuần', emoji: '📆', correct: false },
      { text: 'Ngày', emoji: '☀️', correct: false },
    ],
  },
  {
    id: 'tim-11', type: 'multiple_choice',
    question: '"Clock" có nghĩa là gì?', audio: 'Clock',
    options: [
      { text: 'Đồng hồ', emoji: '🕐', correct: true },
      { text: 'Lịch', emoji: '📅', correct: false },
      { text: 'Đồng hồ cát', emoji: '⏳', correct: false },
      { text: 'Báo thức', emoji: '⏰', correct: false },
    ],
  },
  {
    id: 'tim-12', type: 'multiple_choice',
    question: '"Evening" có nghĩa là gì?', audio: 'Evening',
    options: [
      { text: 'Buổi tối', emoji: '🌆', correct: true },
      { text: 'Buổi sáng', emoji: '🌅', correct: false },
      { text: 'Buổi trưa', emoji: '☀️', correct: false },
      { text: 'Nửa đêm', emoji: '🌙', correct: false },
    ],
  },

  // --- Câu 13-16: Fill blank mới ---
  {
    id: 'tim-13', type: 'fill_blank',
    question: '"I wake up every ___" (Tôi thức dậy mỗi buổi sáng)',
    audio: 'I wake up every morning', answer: 'morning', hint: 'mor...',
    options: ['morning', 'meaning', 'moaning', 'missing'],
  },
  {
    id: 'tim-14', type: 'fill_blank',
    question: '"There are 12 ___ in a year" (Có 12 tháng trong một năm)',
    audio: 'There are twelve months in a year', answer: 'months', hint: 'mon...',
    options: ['months', 'weeks', 'hours', 'minutes'],
  },
  {
    id: 'tim-15', type: 'fill_blank',
    question: '"See you ___!" (Hẹn gặp lại ngày mai!)',
    audio: 'See you tomorrow', answer: 'tomorrow', hint: 'to...',
    options: ['tomorrow', 'today', 'tonight', 'together'],
  },
  {
    id: 'tim-16', type: 'fill_blank',
    question: '"I go to bed at ___" (Tôi đi ngủ vào ban đêm)',
    audio: 'I go to bed at night', answer: 'night', hint: 'n..ht',
    options: ['night', 'light', 'right', 'might'],
  },

  // --- Câu 17-20: Tap words mới ---
  {
    id: 'tim-17', type: 'tap_words',
    question: 'Sắp xếp: "Tôi ăn sáng vào buổi sáng"',
    answer: ['I', 'eat', 'breakfast', 'in', 'the', 'morning'],
    wordBank: ['I', 'eat', 'breakfast', 'in', 'the', 'morning', 'evening', 'lunch'],
  },
  {
    id: 'tim-18', type: 'tap_words',
    question: 'Sắp xếp: "Ngày mai là thứ Bảy"',
    answer: ['Tomorrow', 'is', 'Saturday'],
    wordBank: ['Tomorrow', 'is', 'Saturday', 'Yesterday', 'Sunday', 'Monday'],
  },
  {
    id: 'tim-19', type: 'tap_words',
    question: 'Sắp xếp: "Có bảy ngày trong một tuần"',
    answer: ['There', 'are', 'seven', 'days', 'in', 'a', 'week'],
    wordBank: ['There', 'are', 'seven', 'days', 'in', 'a', 'week', 'month', 'twelve'],
  },
  {
    id: 'tim-20', type: 'tap_words',
    question: 'Sắp xếp: "Mấy giờ rồi?"',
    answer: ['What', 'time', 'is', 'it'],
    wordBank: ['What', 'time', 'is', 'it', 'day', 'now', 'clock', 'when'],
  },

  // --- Câu 21-24: Multiple choice nâng cao ---
  {
    id: 'tim-21', type: 'multiple_choice',
    question: 'Có bao nhiêu ngày trong một tuần?', audio: 'days in a week',
    options: [
      { text: '7 ngày (seven days)', emoji: '✅', correct: true },
      { text: '5 ngày (five days)', emoji: '❌', correct: false },
      { text: '12 ngày (twelve days)', emoji: '❌', correct: false },
      { text: '30 ngày (thirty days)', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'tim-22', type: 'multiple_choice',
    question: '"Last week" nghĩa là gì?', audio: 'Last week',
    options: [
      { text: 'Tuần trước', emoji: '⬅️', correct: true },
      { text: 'Tuần này', emoji: '📅', correct: false },
      { text: 'Tuần sau', emoji: '➡️', correct: false },
      { text: 'Cuối tuần', emoji: '🎉', correct: false },
    ],
  },
  {
    id: 'tim-23', type: 'multiple_choice',
    question: 'Buổi nào đến TRƯỚC buổi chiều?', audio: 'morning comes before afternoon',
    options: [
      { text: 'Morning (buổi sáng)', emoji: '✅', correct: true },
      { text: 'Evening (buổi tối)', emoji: '❌', correct: false },
      { text: 'Night (ban đêm)', emoji: '❌', correct: false },
      { text: 'Midnight (nửa đêm)', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'tim-24', type: 'multiple_choice',
    question: '"Next year" nghĩa là gì?', audio: 'Next year',
    options: [
      { text: 'Năm sau', emoji: '➡️', correct: true },
      { text: 'Năm ngoái', emoji: '⬅️', correct: false },
      { text: 'Năm nay', emoji: '📅', correct: false },
      { text: 'Nhiều năm', emoji: '🗓️', correct: false },
    ],
  },

  // --- Câu 25: Match pairs tổng hợp ---
  {
    id: 'tim-25', type: 'match_pairs',
    question: 'Nối từ chỉ thời gian với nghĩa',
    pairs: [
      { en: 'Afternoon 🌇', vi: 'Buổi chiều' },
      { en: 'Evening 🌆', vi: 'Buổi tối' },
      { en: 'Month 📅', vi: 'Tháng' },
      { en: 'Clock 🕐', vi: 'Đồng hồ' },
    ],
  },
];
