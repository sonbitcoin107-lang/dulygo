// src/data/lessons/home.js
// Chủ đề 11: Ngôi nhà & Phòng ốc

export default [
  // --- Câu 1-8: Giữ nguyên ---
  {
    id: 'hom-1', type: 'multiple_choice',
    question: '"Kitchen" có nghĩa là gì?', audio: 'Kitchen',
    options: [
      { text: 'Nhà bếp', emoji: '🍳', correct: true },
      { text: 'Phòng ngủ', emoji: '🛏️', correct: false },
      { text: 'Phòng khách', emoji: '🛋️', correct: false },
      { text: 'Nhà vệ sinh', emoji: '🚿', correct: false },
    ],
  },
  {
    id: 'hom-2', type: 'multiple_choice',
    question: '"Bedroom" có nghĩa là gì?', audio: 'Bedroom',
    options: [
      { text: 'Phòng ngủ', emoji: '🛏️', correct: true },
      { text: 'Nhà bếp', emoji: '🍳', correct: false },
      { text: 'Phòng tắm', emoji: '🚿', correct: false },
      { text: 'Sân vườn', emoji: '🌿', correct: false },
    ],
  },
  {
    id: 'hom-3', type: 'match_pairs',
    question: 'Nối phòng với tên tiếng Anh',
    pairs: [
      { en: 'Living room 🛋️', vi: 'Phòng khách' },
      { en: 'Bathroom 🚿', vi: 'Phòng tắm' },
      { en: 'Garden 🌿', vi: 'Sân vườn' },
      { en: 'Garage 🚗', vi: 'Nhà để xe' },
    ],
  },
  {
    id: 'hom-4', type: 'multiple_choice',
    question: '"Door" có nghĩa là gì?', audio: 'Door',
    options: [
      { text: 'Cái cửa', emoji: '🚪', correct: true },
      { text: 'Cái cửa sổ', emoji: '🪟', correct: false },
      { text: 'Cái bàn', emoji: '🪑', correct: false },
      { text: 'Cái ghế', emoji: '🛋️', correct: false },
    ],
  },
  {
    id: 'hom-5', type: 'fill_blank',
    question: '"I sleep in my ___" (Tôi ngủ trong phòng ngủ)',
    audio: 'I sleep in my bedroom', answer: 'bedroom', hint: 'bed...',
    options: ['bedroom', 'bathroom', 'kitchen', 'garden'],
  },
  {
    id: 'hom-6', type: 'multiple_choice',
    question: '"Table" có nghĩa là gì?', audio: 'Table',
    options: [
      { text: 'Cái bàn', emoji: '🪑', correct: true },
      { text: 'Cái ghế', emoji: '💺', correct: false },
      { text: 'Cái đèn', emoji: '💡', correct: false },
      { text: 'Cái tủ', emoji: '🗄️', correct: false },
    ],
  },
  {
    id: 'hom-7', type: 'tap_words',
    question: 'Sắp xếp: "Nhà tôi có 3 phòng ngủ"',
    answer: ['My', 'house', 'has', 'three', 'bedrooms'],
    wordBank: ['My', 'house', 'has', 'three', 'bedrooms', 'two', 'kitchen'],
  },
  {
    id: 'hom-8', type: 'match_pairs',
    question: 'Nối đồ vật trong nhà',
    pairs: [
      { en: 'Sofa 🛋️', vi: 'Ghế sofa' },
      { en: 'Lamp 💡', vi: 'Đèn' },
      { en: 'Mirror 🪞', vi: 'Gương' },
      { en: 'Bed 🛏️', vi: 'Cái giường' },
    ],
  },

  // --- Câu 9-12: Multiple choice mới ---
  {
    id: 'hom-9', type: 'multiple_choice',
    question: '"Window" có nghĩa là gì?', audio: 'Window',
    options: [
      { text: 'Cái cửa sổ', emoji: '🪟', correct: true },
      { text: 'Cái cửa', emoji: '🚪', correct: false },
      { text: 'Cái tường', emoji: '🧱', correct: false },
      { text: 'Cái trần', emoji: '🏠', correct: false },
    ],
  },
  {
    id: 'hom-10', type: 'multiple_choice',
    question: '"Roof" có nghĩa là gì?', audio: 'Roof',
    options: [
      { text: 'Mái nhà', emoji: '🏠', correct: true },
      { text: 'Sàn nhà', emoji: '🪵', correct: false },
      { text: 'Tường nhà', emoji: '🧱', correct: false },
      { text: 'Cầu thang', emoji: '🪜', correct: false },
    ],
  },
  {
    id: 'hom-11', type: 'multiple_choice',
    question: '"Furniture" có nghĩa là gì?', audio: 'Furniture',
    options: [
      { text: 'Đồ nội thất', emoji: '🛋️', correct: true },
      { text: 'Đồ điện tử', emoji: '📺', correct: false },
      { text: 'Đồ ăn uống', emoji: '🍽️', correct: false },
      { text: 'Quần áo', emoji: '👕', correct: false },
    ],
  },
  {
    id: 'hom-12', type: 'multiple_choice',
    question: '"Stairs" có nghĩa là gì?', audio: 'Stairs',
    options: [
      { text: 'Cầu thang', emoji: '🪜', correct: true },
      { text: 'Cái cửa', emoji: '🚪', correct: false },
      { text: 'Hành lang', emoji: '🏠', correct: false },
      { text: 'Tầng hầm', emoji: '🏚️', correct: false },
    ],
  },

  // --- Câu 13-16: Fill blank mới ---
  {
    id: 'hom-13', type: 'fill_blank',
    question: '"Please open the ___" (Xin hãy mở cửa sổ ra)',
    audio: 'Please open the window', answer: 'window', hint: 'win...',
    options: ['window', 'winter', 'winner', 'wisdom'],
  },
  {
    id: 'hom-14', type: 'fill_blank',
    question: '"The ___ is very bright" (Căn phòng rất sáng sủa)',
    audio: 'The room is very bright', answer: 'room', hint: 'r..m',
    options: ['room', 'roof', 'root', 'rope'],
  },
  {
    id: 'hom-15', type: 'fill_blank',
    question: '"We cook in the ___" (Chúng tôi nấu ăn trong bếp)',
    audio: 'We cook in the kitchen', answer: 'kitchen', hint: 'kit...',
    options: ['kitchen', 'chicken', 'kitten', 'kicking'],
  },
  {
    id: 'hom-16', type: 'fill_blank',
    question: '"The ___ is next to the bedroom" (Phòng tắm ở cạnh phòng ngủ)',
    audio: 'The bathroom is next to the bedroom', answer: 'bathroom', hint: 'bath...',
    options: ['bathroom', 'bedroom', 'ballroom', 'backroom'],
  },

  // --- Câu 17-20: Tap words mới (4-5 từ) ---
  {
    id: 'hom-17', type: 'tap_words',
    question: 'Sắp xếp: "Phòng bếp rất sạch sẽ"',
    answer: ['The', 'kitchen', 'is', 'very', 'clean'],
    wordBank: ['The', 'kitchen', 'is', 'very', 'clean', 'dirty', 'bedroom', 'big'],
  },
  {
    id: 'hom-18', type: 'tap_words',
    question: 'Sắp xếp: "Tôi đọc sách trong phòng khách"',
    answer: ['I', 'read', 'books', 'in', 'the', 'living', 'room'],
    wordBank: ['I', 'read', 'books', 'in', 'the', 'living', 'room', 'kitchen', 'bedroom'],
  },
  {
    id: 'hom-19', type: 'tap_words',
    question: 'Sắp xếp: "Cửa sổ trong phòng tôi rất lớn"',
    answer: ['The', 'window', 'in', 'my', 'room', 'is', 'big'],
    wordBank: ['The', 'window', 'in', 'my', 'room', 'is', 'big', 'small', 'door'],
  },
  {
    id: 'hom-20', type: 'tap_words',
    question: 'Sắp xếp: "Sân vườn nhà tôi có nhiều hoa"',
    answer: ['My', 'garden', 'has', 'many', 'flowers'],
    wordBank: ['My', 'garden', 'has', 'many', 'flowers', 'trees', 'your', 'few'],
  },

  // --- Câu 21-24: Multiple choice nâng cao ---
  {
    id: 'hom-21', type: 'multiple_choice',
    question: 'Câu nào đúng về phòng ngủ?', audio: 'We sleep in the bedroom',
    options: [
      { text: 'We sleep in the bedroom', emoji: '✅', correct: true },
      { text: 'We cook in the bedroom', emoji: '❌', correct: false },
      { text: 'We swim in the bedroom', emoji: '❌', correct: false },
      { text: 'We park in the bedroom', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'hom-22', type: 'multiple_choice',
    question: 'Chỗ nào dùng để rửa mặt / tắm?', audio: 'bathroom',
    options: [
      { text: 'Bathroom', emoji: '🚿', correct: true },
      { text: 'Kitchen', emoji: '🍳', correct: false },
      { text: 'Garage', emoji: '🚗', correct: false },
      { text: 'Garden', emoji: '🌿', correct: false },
    ],
  },
  {
    id: 'hom-23', type: 'multiple_choice',
    question: '"There is a sofa in the living room" nghĩa là gì?',
    audio: 'There is a sofa in the living room',
    options: [
      { text: 'Có một ghế sofa trong phòng khách', emoji: '✅', correct: true },
      { text: 'Có một cái bàn trong phòng ngủ', emoji: '❌', correct: false },
      { text: 'Có một cái giường trong nhà bếp', emoji: '❌', correct: false },
      { text: 'Có một cái gương trong nhà để xe', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'hom-24', type: 'multiple_choice',
    question: 'Từ nào KHÔNG phải đồ vật trong nhà bếp?', audio: 'kitchen items',
    options: [
      { text: 'Pillow (gối ngủ)', emoji: '✅', correct: true },
      { text: 'Fridge (tủ lạnh)', emoji: '❌', correct: false },
      { text: 'Stove (bếp ga)', emoji: '❌', correct: false },
      { text: 'Pot (nồi)', emoji: '❌', correct: false },
    ],
  },

  // --- Câu 25: Match pairs tổng hợp ---
  {
    id: 'hom-25', type: 'match_pairs',
    question: 'Nối từ với nghĩa tiếng Việt',
    pairs: [
      { en: 'Window 🪟', vi: 'Cửa sổ' },
      { en: 'Roof 🏠', vi: 'Mái nhà' },
      { en: 'Stairs 🪜', vi: 'Cầu thang' },
      { en: 'Garage 🚗', vi: 'Nhà để xe' },
    ],
  },
];
