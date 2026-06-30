// src/data/lessons/nature.js
// Chủ đề 19: Thiên nhiên

export default [
  // --- Câu 1-8: Giữ nguyên ---
  {
    id: 'nat-1', type: 'multiple_choice',
    question: '"Sun" có nghĩa là gì?', audio: 'Sun',
    options: [
      { text: 'Mặt trời', emoji: '☀️', correct: true },
      { text: 'Mặt trăng', emoji: '🌙', correct: false },
      { text: 'Ngôi sao', emoji: '⭐', correct: false },
      { text: 'Đám mây', emoji: '☁️', correct: false },
    ],
  },
  {
    id: 'nat-2', type: 'match_pairs',
    question: 'Nối thiên nhiên',
    pairs: [
      { en: 'Moon 🌙', vi: 'Mặt trăng' },
      { en: 'Star ⭐', vi: 'Ngôi sao' },
      { en: 'Cloud ☁️', vi: 'Đám mây' },
      { en: 'Rain 🌧️', vi: 'Cơn mưa' },
    ],
  },
  {
    id: 'nat-3', type: 'multiple_choice',
    question: '"Ocean" có nghĩa là gì?', audio: 'Ocean',
    options: [
      { text: 'Đại dương', emoji: '🌊', correct: true },
      { text: 'Hồ', emoji: '🏞️', correct: false },
      { text: 'Sông', emoji: '🏔️', correct: false },
      { text: 'Suối', emoji: '💧', correct: false },
    ],
  },
  {
    id: 'nat-4', type: 'fill_blank',
    question: '"I see a beautiful ___" (Tôi nhìn thấy một ngọn núi đẹp)',
    audio: 'I see a beautiful mountain', answer: 'mountain', hint: 'mou...',
    options: ['mountain', 'fountain', 'counting', 'mounting'],
  },
  {
    id: 'nat-5', type: 'multiple_choice',
    question: '"Forest" có nghĩa là gì?', audio: 'Forest',
    options: [
      { text: 'Rừng', emoji: '🌲', correct: true },
      { text: 'Đồng cỏ', emoji: '🌾', correct: false },
      { text: 'Sa mạc', emoji: '🏜️', correct: false },
      { text: 'Bãi biển', emoji: '🏖️', correct: false },
    ],
  },
  {
    id: 'nat-6', type: 'tap_words',
    question: 'Sắp xếp: "Bầu trời ban đêm có nhiều ngôi sao"',
    answer: ['The', 'night', 'sky', 'has', 'many', 'stars'],
    wordBank: ['The', 'night', 'sky', 'has', 'many', 'stars', 'clouds', 'day'],
  },
  {
    id: 'nat-7', type: 'match_pairs',
    question: 'Nối địa hình thiên nhiên',
    pairs: [
      { en: 'River 🏞️', vi: 'Con sông' },
      { en: 'Desert 🏜️', vi: 'Sa mạc' },
      { en: 'Island 🏝️', vi: 'Hòn đảo' },
      { en: 'Waterfall 💦', vi: 'Thác nước' },
    ],
  },
  {
    id: 'nat-8', type: 'multiple_choice',
    question: '"Rainbow" có nghĩa là gì?', audio: 'Rainbow',
    options: [
      { text: 'Cầu vồng', emoji: '🌈', correct: true },
      { text: 'Sấm sét', emoji: '⚡', correct: false },
      { text: 'Tuyết', emoji: '❄️', correct: false },
      { text: 'Gió', emoji: '💨', correct: false },
    ],
  },

  // --- Câu 9-12: Multiple choice mới ---
  {
    id: 'nat-9', type: 'multiple_choice',
    question: '"Wind" có nghĩa là gì?', audio: 'Wind',
    options: [
      { text: 'Gió', emoji: '💨', correct: true },
      { text: 'Mưa', emoji: '🌧️', correct: false },
      { text: 'Tuyết', emoji: '❄️', correct: false },
      { text: 'Sương mù', emoji: '🌫️', correct: false },
    ],
  },
  {
    id: 'nat-10', type: 'multiple_choice',
    question: '"Flower" có nghĩa là gì?', audio: 'Flower',
    options: [
      { text: 'Hoa', emoji: '🌸', correct: true },
      { text: 'Cây', emoji: '🌳', correct: false },
      { text: 'Lá', emoji: '🍃', correct: false },
      { text: 'Cỏ', emoji: '🌿', correct: false },
    ],
  },
  {
    id: 'nat-11', type: 'multiple_choice',
    question: '"Lightning" có nghĩa là gì?', audio: 'Lightning',
    options: [
      { text: 'Sấm sét / Tia chớp', emoji: '⚡', correct: true },
      { text: 'Cầu vồng', emoji: '🌈', correct: false },
      { text: 'Gió', emoji: '💨', correct: false },
      { text: 'Cơn bão', emoji: '🌀', correct: false },
    ],
  },
  {
    id: 'nat-12', type: 'multiple_choice',
    question: '"Snow" có nghĩa là gì?', audio: 'Snow',
    options: [
      { text: 'Tuyết', emoji: '❄️', correct: true },
      { text: 'Mưa', emoji: '🌧️', correct: false },
      { text: 'Sương', emoji: '🌫️', correct: false },
      { text: 'Băng', emoji: '🧊', correct: false },
    ],
  },

  // --- Câu 13-16: Fill blank mới ---
  {
    id: 'nat-13', type: 'fill_blank',
    question: '"The ___ shines at night" (Mặt trăng chiếu sáng vào ban đêm)',
    audio: 'The moon shines at night', answer: 'moon', hint: 'm..n',
    options: ['moon', 'boon', 'noon', 'loon'],
  },
  {
    id: 'nat-14', type: 'fill_blank',
    question: '"I planted a ___ in my garden" (Tôi trồng một cái cây trong vườn)',
    audio: 'I planted a tree in my garden', answer: 'tree', hint: 'tr..',
    options: ['tree', 'free', 'three', 'see'],
  },
  {
    id: 'nat-15', type: 'fill_blank',
    question: '"The ___ is very strong today" (Gió hôm nay rất mạnh)',
    audio: 'The wind is very strong today', answer: 'wind', hint: 'wi.d',
    options: ['wind', 'find', 'kind', 'mind'],
  },
  {
    id: 'nat-16', type: 'fill_blank',
    question: '"We can see a beautiful ___ after the rain" (Chúng ta có thể thấy cầu vồng đẹp sau cơn mưa)',
    audio: 'We can see a beautiful rainbow after the rain', answer: 'rainbow', hint: 'rain...',
    options: ['rainbow', 'rainfall', 'raindrop', 'rainstorm'],
  },

  // --- Câu 17-20: Tap words mới ---
  {
    id: 'nat-17', type: 'tap_words',
    question: 'Sắp xếp: "Cánh đồng hoa rất đẹp vào mùa xuân"',
    answer: ['The', 'flower', 'field', 'is', 'beautiful', 'in', 'spring'],
    wordBank: ['The', 'flower', 'field', 'is', 'beautiful', 'in', 'spring', 'winter', 'ugly'],
  },
  {
    id: 'nat-18', type: 'tap_words',
    question: 'Sắp xếp: "Con sông chảy ra biển"',
    answer: ['The', 'river', 'flows', 'to', 'the', 'sea'],
    wordBank: ['The', 'river', 'flows', 'to', 'the', 'sea', 'lake', 'goes', 'mountain'],
  },
  {
    id: 'nat-19', type: 'tap_words',
    question: 'Sắp xếp: "Trời đang mưa và có gió"',
    answer: ['It', 'is', 'raining', 'and', 'windy'],
    wordBank: ['It', 'is', 'raining', 'and', 'windy', 'sunny', 'snowing', 'but'],
  },
  {
    id: 'nat-20', type: 'tap_words',
    question: 'Sắp xếp: "Ngọn núi phủ đầy tuyết trắng"',
    answer: ['The', 'mountain', 'is', 'covered', 'with', 'white', 'snow'],
    wordBank: ['The', 'mountain', 'is', 'covered', 'with', 'white', 'snow', 'green', 'cloud'],
  },

  // --- Câu 21-24: Multiple choice nâng cao ---
  {
    id: 'nat-21', type: 'multiple_choice',
    question: '"It is raining cats and dogs" nghĩa thực sự là gì?',
    audio: 'It is raining cats and dogs',
    options: [
      { text: 'Trời đang mưa rất to', emoji: '🌧️', correct: true },
      { text: 'Mèo và chó đang chơi', emoji: '❌', correct: false },
      { text: 'Trời có gió mạnh', emoji: '❌', correct: false },
      { text: 'Trời đang có sấm sét', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'nat-22', type: 'multiple_choice',
    question: '"What is the weather like today?" nghĩa là gì?',
    audio: 'What is the weather like today',
    options: [
      { text: 'Thời tiết hôm nay như thế nào?', emoji: '✅', correct: true },
      { text: 'Hôm nay là mấy độ?', emoji: '❌', correct: false },
      { text: 'Mùa gì bây giờ?', emoji: '❌', correct: false },
      { text: 'Trời sẽ mưa không?', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'nat-23', type: 'multiple_choice',
    question: 'Từ nào liên quan đến NƯỚC?', audio: 'water related words',
    options: [
      { text: 'River, Ocean, Rain (sông, đại dương, mưa)', emoji: '💧', correct: true },
      { text: 'Sun, Cloud, Wind (mặt trời, mây, gió)', emoji: '❌', correct: false },
      { text: 'Tree, Flower, Grass (cây, hoa, cỏ)', emoji: '❌', correct: false },
      { text: 'Mountain, Desert, Island (núi, sa mạc, đảo)', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'nat-24', type: 'multiple_choice',
    question: '"Under the tree" nghĩa là gì?', audio: 'Under the tree',
    options: [
      { text: 'Dưới gốc cây', emoji: '🌳', correct: true },
      { text: 'Trên ngọn cây', emoji: '❌', correct: false },
      { text: 'Bên cạnh cây', emoji: '❌', correct: false },
      { text: 'Sau cây', emoji: '❌', correct: false },
    ],
  },

  // --- Câu 25: Match pairs tổng hợp ---
  {
    id: 'nat-25', type: 'match_pairs',
    question: 'Nối từ thiên nhiên với nghĩa',
    pairs: [
      { en: 'Wind 💨', vi: 'Gió' },
      { en: 'Flower 🌸', vi: 'Hoa' },
      { en: 'Lightning ⚡', vi: 'Sấm sét' },
      { en: 'Snow ❄️', vi: 'Tuyết' },
    ],
  },
];
