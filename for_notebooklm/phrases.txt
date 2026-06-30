// src/data/lessons/phrases.js
// Chủ đề 20: Câu giao tiếp hàng ngày

export default [
  // --- Câu 1-8: Giữ nguyên ---
  {
    id: 'phr-1', type: 'multiple_choice',
    question: '"How old are you?" nghĩa là gì?', audio: 'How old are you',
    options: [
      { text: 'Bạn bao nhiêu tuổi?', emoji: '🎂', correct: true },
      { text: 'Bạn tên gì?', emoji: '👤', correct: false },
      { text: 'Bạn ở đâu?', emoji: '📍', correct: false },
      { text: 'Bạn khỏe không?', emoji: '💪', correct: false },
    ],
  },
  {
    id: 'phr-2', type: 'multiple_choice',
    question: '"Where are you from?" nghĩa là gì?', audio: 'Where are you from',
    options: [
      { text: 'Bạn từ đâu đến?', emoji: '🗺️', correct: true },
      { text: 'Bạn đang ở đâu?', emoji: '📍', correct: false },
      { text: 'Bạn đang đi đâu?', emoji: '🚶', correct: false },
      { text: 'Bạn muốn gì?', emoji: '🤔', correct: false },
    ],
  },
  {
    id: 'phr-3', type: 'match_pairs',
    question: 'Nối câu với nghĩa',
    pairs: [
      { en: 'I am fine 😊', vi: 'Tôi khỏe' },
      { en: 'Me too! 🙋', vi: 'Tôi cũng vậy!' },
      { en: "I don't know 🤷", vi: 'Tôi không biết' },
      { en: 'Of course! ✅', vi: 'Tất nhiên rồi!' },
    ],
  },
  {
    id: 'phr-4', type: 'fill_blank',
    question: '"___ you speak English?" (Bạn có nói tiếng Anh không?)',
    audio: 'Can you speak English', answer: 'Can', hint: 'C_n',
    options: ['Can', 'Are', 'Do', 'Is'],
  },
  {
    id: 'phr-5', type: 'multiple_choice',
    question: '"What time is it?" nghĩa là gì?', audio: 'What time is it',
    options: [
      { text: 'Mấy giờ rồi?', emoji: '⏰', correct: true },
      { text: 'Hôm nay thứ mấy?', emoji: '📅', correct: false },
      { text: 'Bạn làm gì?', emoji: '🤔', correct: false },
      { text: 'Bạn thích gì?', emoji: '❤️', correct: false },
    ],
  },
  {
    id: 'phr-6', type: 'tap_words',
    question: 'Sắp xếp: "Tên tôi là Minh, tôi 7 tuổi"',
    answer: ['My', 'name', 'is', 'Minh', 'I', 'am', 'seven'],
    wordBank: ['My', 'name', 'is', 'Minh', 'I', 'am', 'seven', 'eight', 'your'],
  },
  {
    id: 'phr-7', type: 'multiple_choice',
    question: '"Excuse me" nghĩa là gì?', audio: 'Excuse me',
    options: [
      { text: 'Xin lỗi / Cho tôi hỏi', emoji: '🙋', correct: true },
      { text: 'Cảm ơn', emoji: '🙏', correct: false },
      { text: 'Tạm biệt', emoji: '👋', correct: false },
      { text: 'Chào buổi sáng', emoji: '🌅', correct: false },
    ],
  },
  {
    id: 'phr-8', type: 'match_pairs',
    question: 'Nối câu giao tiếp',
    pairs: [
      { en: 'Well done! 🏆', vi: 'Làm tốt lắm!' },
      { en: 'Be careful! ⚠️', vi: 'Cẩn thận!' },
      { en: 'Come here! 👋', vi: 'Lại đây!' },
      { en: 'Hurry up! 🏃', vi: 'Nhanh lên!' },
    ],
  },

  // --- Câu 9-12: Multiple choice mới ---
  {
    id: 'phr-9', type: 'multiple_choice',
    question: '"I need help" nghĩa là gì?', audio: 'I need help',
    options: [
      { text: 'Tôi cần giúp đỡ', emoji: '🙏', correct: true },
      { text: 'Tôi muốn ăn', emoji: '❌', correct: false },
      { text: 'Tôi đang khỏe', emoji: '❌', correct: false },
      { text: 'Tôi không biết', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'phr-10', type: 'multiple_choice',
    question: '"How much is it?" nghĩa là gì?', audio: 'How much is it',
    options: [
      { text: 'Cái này bao nhiêu tiền?', emoji: '💰', correct: true },
      { text: 'Cái này ở đâu?', emoji: '❌', correct: false },
      { text: 'Cái này là gì?', emoji: '❌', correct: false },
      { text: 'Cái này của ai?', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'phr-11', type: 'multiple_choice',
    question: '"Let\'s go!" nghĩa là gì?', audio: 'Lets go',
    options: [
      { text: 'Đi thôi!', emoji: '🚶', correct: true },
      { text: 'Dừng lại!', emoji: '❌', correct: false },
      { text: 'Ngồi xuống!', emoji: '❌', correct: false },
      { text: 'Im lặng!', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'phr-12', type: 'multiple_choice',
    question: '"Nice to meet you!" nghĩa là gì?', audio: 'Nice to meet you',
    options: [
      { text: 'Rất vui được gặp bạn!', emoji: '🤝', correct: true },
      { text: 'Chúc ngủ ngon!', emoji: '❌', correct: false },
      { text: 'Tạm biệt!', emoji: '❌', correct: false },
      { text: 'Chúc mừng!', emoji: '❌', correct: false },
    ],
  },

  // --- Câu 13-16: Fill blank mới ---
  {
    id: 'phr-13', type: 'fill_blank',
    question: '"___ is the nearest hospital?" (Bệnh viện gần nhất ở đâu?)',
    audio: 'Where is the nearest hospital', answer: 'Where', hint: 'Wh..e',
    options: ['Where', 'When', 'What', 'Who'],
  },
  {
    id: 'phr-14', type: 'fill_blank',
    question: '"___ I sit here?" (Tôi có thể ngồi đây không?)',
    audio: 'Can I sit here', answer: 'Can', hint: 'C_n',
    options: ['Can', 'Do', 'Am', 'Is'],
  },
  {
    id: 'phr-15', type: 'fill_blank',
    question: '"___ much does this cost?" (Cái này giá bao nhiêu?)',
    audio: 'How much does this cost', answer: 'How', hint: 'H..w',
    options: ['How', 'Who', 'Why', 'What'],
  },
  {
    id: 'phr-16', type: 'fill_blank',
    question: '"I am ___" (Tôi xin lỗi)',
    audio: 'I am sorry', answer: 'sorry', hint: 'sor...',
    options: ['sorry', 'happy', 'ready', 'angry'],
  },

  // --- Câu 17-20: Tap words mới ---
  {
    id: 'phr-17', type: 'tap_words',
    question: 'Sắp xếp: "Rất vui được gặp bạn!"',
    answer: ['Nice', 'to', 'meet', 'you'],
    wordBank: ['Nice', 'to', 'meet', 'you', 'see', 'him', 'glad', 'happy'],
  },
  {
    id: 'phr-18', type: 'tap_words',
    question: 'Sắp xếp: "Bạn có thể giúp tôi không?"',
    answer: ['Can', 'you', 'help', 'me', 'please'],
    wordBank: ['Can', 'you', 'help', 'me', 'please', 'I', 'he', 'them'],
  },
  {
    id: 'phr-19', type: 'tap_words',
    question: 'Sắp xếp: "Xin lỗi, tôi không hiểu"',
    answer: ['Sorry', 'I', 'do', 'not', 'understand'],
    wordBank: ['Sorry', 'I', 'do', 'not', 'understand', 'know', 'can', 'excuse'],
  },
  {
    id: 'phr-20', type: 'tap_words',
    question: 'Sắp xếp: "Cảm ơn bạn rất nhiều!"',
    answer: ['Thank', 'you', 'very', 'much'],
    wordBank: ['Thank', 'you', 'very', 'much', 'so', 'please', 'excuse', 'sorry'],
  },

  // --- Câu 21-24: Multiple choice nâng cao ---
  {
    id: 'phr-21', type: 'multiple_choice',
    question: 'Khi gặp người lần đầu, bạn nói gì?', audio: 'first meeting phrase',
    options: [
      { text: '"Nice to meet you!" (Rất vui được gặp bạn!)', emoji: '🤝', correct: true },
      { text: '"See you later!" (Hẹn gặp lại!)', emoji: '❌', correct: false },
      { text: '"Good night!" (Chúc ngủ ngon!)', emoji: '❌', correct: false },
      { text: '"Happy birthday!" (Chúc mừng sinh nhật!)', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'phr-22', type: 'multiple_choice',
    question: '"Could you repeat that, please?" nghĩa là gì?',
    audio: 'Could you repeat that please',
    options: [
      { text: 'Bạn có thể nói lại được không?', emoji: '✅', correct: true },
      { text: 'Bạn có thể nói chậm hơn không?', emoji: '❌', correct: false },
      { text: 'Bạn có thể viết ra không?', emoji: '❌', correct: false },
      { text: 'Bạn có thể dịch cho tôi không?', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'phr-23', type: 'multiple_choice',
    question: '"I\'m lost. Can you help me?" nghĩa là gì?',
    audio: 'I am lost can you help me',
    options: [
      { text: 'Tôi bị lạc. Bạn có thể giúp tôi không?', emoji: '🗺️', correct: true },
      { text: 'Tôi đang tìm kiếm bạn', emoji: '❌', correct: false },
      { text: 'Tôi cần một tấm bản đồ', emoji: '❌', correct: false },
      { text: 'Tôi không biết đường về', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'phr-24', type: 'multiple_choice',
    question: 'Cách nói "Không có chi" khi được cảm ơn là gì?', audio: 'response to thank you',
    options: [
      { text: '"You\'re welcome!" (Không có chi!)', emoji: '✅', correct: true },
      { text: '"Excuse me!" (Xin lỗi!)', emoji: '❌', correct: false },
      { text: '"I\'m sorry!" (Tôi xin lỗi!)', emoji: '❌', correct: false },
      { text: '"No problem!" cũng sai ý', emoji: '❌', correct: false },
    ],
  },

  // --- Câu 25: Match pairs tổng hợp ---
  {
    id: 'phr-25', type: 'match_pairs',
    question: 'Nối câu giao tiếp với nghĩa',
    pairs: [
      { en: 'I need help 🙏', vi: 'Tôi cần giúp đỡ' },
      { en: "How much? 💰", vi: 'Bao nhiêu tiền?' },
      { en: "Let's go! 🚶", vi: 'Đi thôi!' },
      { en: "Nice to meet you 🤝", vi: 'Rất vui được gặp bạn' },
    ],
  },
];
