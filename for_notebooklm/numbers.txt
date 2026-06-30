// src/data/lessons/numbers.js
// Chủ đề 6: Con số

export default [
  // --- Câu 1-8: Giữ nguyên câu cũ ---
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

  // --- Câu 9-12: multiple_choice mới ---
  {
    id: 'num-9',
    type: 'multiple_choice',
    question: '"Twelve" là số mấy?',
    audio: 'Twelve',
    options: [
      { text: 'Số 12', emoji: '🔢', correct: true },
      { text: 'Số 11', emoji: '🔢', correct: false },
      { text: 'Số 13', emoji: '🔢', correct: false },
      { text: 'Số 20', emoji: '🔢', correct: false },
    ],
  },
  {
    id: 'num-10',
    type: 'multiple_choice',
    question: '"Twenty" là số mấy?',
    audio: 'Twenty',
    options: [
      { text: 'Số 20', emoji: '🔢', correct: true },
      { text: 'Số 12', emoji: '🔢', correct: false },
      { text: 'Số 15', emoji: '🔢', correct: false },
      { text: 'Số 21', emoji: '🔢', correct: false },
    ],
  },
  {
    id: 'num-11',
    type: 'multiple_choice',
    question: '"Zero" có nghĩa là số mấy?',
    audio: 'Zero',
    options: [
      { text: 'Số 0', emoji: '0️⃣', correct: true },
      { text: 'Số 1', emoji: '1️⃣', correct: false },
      { text: 'Số 10', emoji: '🔟', correct: false },
      { text: 'Số 100', emoji: '💯', correct: false },
    ],
  },
  {
    id: 'num-12',
    type: 'multiple_choice',
    question: '"Hundred" có nghĩa là gì?',
    audio: 'Hundred',
    options: [
      { text: 'Một trăm (100)', emoji: '💯', correct: true },
      { text: 'Mười (10)', emoji: '🔟', correct: false },
      { text: 'Một nghìn (1000)', emoji: '🔢', correct: false },
      { text: 'Năm mươi (50)', emoji: '🔢', correct: false },
    ],
  },

  // --- Câu 13-16: fill_blank mới ---
  {
    id: 'num-13',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "I am ___ years old" (Tôi 10 tuổi)',
    audio: 'I am ten years old',
    answer: 'ten',
    hint: 't_n',
    options: ['ten', 'tan', 'tin', 'ton'],
  },
  {
    id: 'num-14',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "There are ___ months in a year" (Có 12 tháng trong một năm)',
    audio: 'There are twelve months in a year',
    answer: 'twelve',
    hint: 'tw..ve',
    options: ['twelve', 'twenty', 'twice', 'twine'],
  },
  {
    id: 'num-15',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "She has ___ cats" (Cô ấy có ba con mèo)',
    audio: 'She has three cats',
    answer: 'three',
    hint: 'thr_e',
    options: ['three', 'threw', 'tree', 'free'],
  },
  {
    id: 'num-16',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "One ___ two equals three" (Một cộng hai bằng ba)',
    audio: 'One plus two equals three',
    answer: 'plus',
    hint: 'p..s',
    options: ['plus', 'play', 'plan', 'plug'],
  },

  // --- Câu 17-20: tap_words mới ---
  {
    id: 'num-17',
    type: 'tap_words',
    question: 'Sắp xếp: "Hai cộng ba bằng năm"',
    answer: ['Two', 'plus', 'three', 'equals', 'five'],
    wordBank: ['Two', 'plus', 'three', 'equals', 'five', 'four', 'six'],
  },
  {
    id: 'num-18',
    type: 'tap_words',
    question: 'Sắp xếp: "Tôi muốn mua mười quả táo"',
    answer: ['I', 'want', 'to', 'buy', 'ten', 'apples'],
    wordBank: ['I', 'want', 'to', 'buy', 'ten', 'apples', 'five', 'oranges'],
  },
  {
    id: 'num-19',
    type: 'tap_words',
    question: 'Sắp xếp: "Lớp học có hai mươi học sinh"',
    answer: ['The', 'class', 'has', 'twenty', 'students'],
    wordBank: ['The', 'class', 'has', 'twenty', 'students', 'twelve', 'teachers'],
  },
  {
    id: 'num-20',
    type: 'tap_words',
    question: 'Sắp xếp: "Con số yêu thích của tôi là bảy"',
    answer: ['My', 'favorite', 'number', 'is', 'seven'],
    wordBank: ['My', 'favorite', 'number', 'is', 'seven', 'three', 'color'],
  },

  // --- Câu 21-24: multiple_choice nâng cao ---
  {
    id: 'num-21',
    type: 'multiple_choice',
    question: '"First" có nghĩa là gì?',
    audio: 'First',
    options: [
      { text: 'Thứ nhất / Đầu tiên', emoji: '🥇', correct: true },
      { text: 'Thứ hai', emoji: '🥈', correct: false },
      { text: 'Thứ ba', emoji: '🥉', correct: false },
      { text: 'Cuối cùng', emoji: '🏁', correct: false },
    ],
  },
  {
    id: 'num-22',
    type: 'multiple_choice',
    question: '"Second" có nghĩa là gì?',
    audio: 'Second',
    options: [
      { text: 'Thứ hai', emoji: '🥈', correct: true },
      { text: 'Thứ nhất', emoji: '🥇', correct: false },
      { text: 'Thứ ba', emoji: '🥉', correct: false },
      { text: 'Giây (thời gian)', emoji: '⏱️', correct: false },
    ],
  },
  {
    id: 'num-23',
    type: 'multiple_choice',
    question: 'Số nào đứng giữa 14 và 16?',
    options: [
      { text: 'Fifteen (15)', emoji: '🔢', correct: true },
      { text: 'Thirteen (13)', emoji: '🔢', correct: false },
      { text: 'Eleven (11)', emoji: '🔢', correct: false },
      { text: 'Seventeen (17)', emoji: '🔢', correct: false },
    ],
  },
  {
    id: 'num-24',
    type: 'multiple_choice',
    question: 'Kết quả của "Five times four" là bao nhiêu?',
    options: [
      { text: 'Twenty (20)', emoji: '🔢', correct: true },
      { text: 'Nine (9)', emoji: '9️⃣', correct: false },
      { text: 'Twelve (12)', emoji: '🔢', correct: false },
      { text: 'Fifteen (15)', emoji: '🔢', correct: false },
    ],
  },

  // --- Câu 25: match_pairs ---
  {
    id: 'num-25',
    type: 'match_pairs',
    question: 'Nối số thứ tự với nghĩa tiếng Việt',
    pairs: [
      { en: 'First', vi: 'Thứ nhất' },
      { en: 'Second', vi: 'Thứ hai' },
      { en: 'Third', vi: 'Thứ ba' },
      { en: 'Last', vi: 'Cuối cùng' },
    ],
  },
];
