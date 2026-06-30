// src/data/lessons/weather.js
// Chủ đề 7: Thời tiết

export default [
  // --- Câu 1-6: Giữ nguyên câu cũ (weather chỉ có 6) ---
  {
    id: 'wea-1',
    type: 'multiple_choice',
    question: '"Sunny" có nghĩa là gì?',
    audio: 'Sunny',
    options: [
      { text: 'Trời nắng', emoji: '☀️', correct: true },
      { text: 'Trời mưa', emoji: '🌧️', correct: false },
      { text: 'Trời lạnh', emoji: '❄️', correct: false },
      { text: 'Trời nhiều mây', emoji: '⛅', correct: false },
    ],
  },
  {
    id: 'wea-2',
    type: 'multiple_choice',
    question: '"Rainy" có nghĩa là gì?',
    audio: 'Rainy',
    options: [
      { text: 'Trời mưa', emoji: '🌧️', correct: true },
      { text: 'Trời nắng', emoji: '☀️', correct: false },
      { text: 'Trời gió', emoji: '💨', correct: false },
      { text: 'Trời tuyết', emoji: '❄️', correct: false },
    ],
  },
  {
    id: 'wea-3',
    type: 'match_pairs',
    question: 'Nối từ thời tiết',
    pairs: [
      { en: 'Hot 🥵', vi: 'Nóng' },
      { en: 'Cold ❄️', vi: 'Lạnh' },
      { en: 'Windy 💨', vi: 'Có gió' },
      { en: 'Cloudy ⛅', vi: 'Nhiều mây' },
    ],
  },
  {
    id: 'wea-4',
    type: 'fill_blank',
    question: '"Today is very ___" (Hôm nay trời rất nóng)',
    audio: 'Today is very hot',
    answer: 'hot',
    hint: 'h_t',
    options: ['hot', 'hat', 'hit', 'hut'],
  },
  {
    id: 'wea-5',
    type: 'multiple_choice',
    question: '"Snow" có nghĩa là gì?',
    audio: 'Snow',
    options: [
      { text: 'Tuyết', emoji: '❄️', correct: true },
      { text: 'Mưa', emoji: '🌧️', correct: false },
      { text: 'Sương mù', emoji: '🌫️', correct: false },
      { text: 'Cầu vồng', emoji: '🌈', correct: false },
    ],
  },
  {
    id: 'wea-6',
    type: 'tap_words',
    question: 'Sắp xếp: "Trời hôm nay đẹp lắm"',
    answer: ['The', 'weather', 'is', 'nice', 'today'],
    wordBank: ['The', 'weather', 'is', 'nice', 'today', 'bad', 'rain'],
  },

  // --- Câu 7-8: bổ sung để đủ 8 câu đầu ---
  {
    id: 'wea-7',
    type: 'multiple_choice',
    question: '"Cloudy" có nghĩa là gì?',
    audio: 'Cloudy',
    options: [
      { text: 'Nhiều mây', emoji: '⛅', correct: true },
      { text: 'Trời nắng', emoji: '☀️', correct: false },
      { text: 'Trời mưa', emoji: '🌧️', correct: false },
      { text: 'Trời gió', emoji: '💨', correct: false },
    ],
  },
  {
    id: 'wea-8',
    type: 'multiple_choice',
    question: '"Windy" có nghĩa là gì?',
    audio: 'Windy',
    options: [
      { text: 'Trời có gió', emoji: '💨', correct: true },
      { text: 'Trời nắng', emoji: '☀️', correct: false },
      { text: 'Trời mưa', emoji: '🌧️', correct: false },
      { text: 'Trời tuyết', emoji: '❄️', correct: false },
    ],
  },

  // --- Câu 9-12: multiple_choice mới ---
  {
    id: 'wea-9',
    type: 'multiple_choice',
    question: '"Foggy" có nghĩa là gì?',
    audio: 'Foggy',
    options: [
      { text: 'Trời sương mù', emoji: '🌫️', correct: true },
      { text: 'Trời nắng', emoji: '☀️', correct: false },
      { text: 'Trời mưa', emoji: '🌧️', correct: false },
      { text: 'Trời bão', emoji: '🌪️', correct: false },
    ],
  },
  {
    id: 'wea-10',
    type: 'multiple_choice',
    question: '"Storm" có nghĩa là gì?',
    audio: 'Storm',
    options: [
      { text: 'Bão', emoji: '🌪️', correct: true },
      { text: 'Mưa nhỏ', emoji: '🌦️', correct: false },
      { text: 'Nắng nhẹ', emoji: '🌤️', correct: false },
      { text: 'Tuyết rơi', emoji: '🌨️', correct: false },
    ],
  },
  {
    id: 'wea-11',
    type: 'multiple_choice',
    question: '"Temperature" có nghĩa là gì?',
    audio: 'Temperature',
    options: [
      { text: 'Nhiệt độ', emoji: '🌡️', correct: true },
      { text: 'Thời tiết', emoji: '⛅', correct: false },
      { text: 'Mùa', emoji: '🍂', correct: false },
      { text: 'Độ ẩm', emoji: '💧', correct: false },
    ],
  },
  {
    id: 'wea-12',
    type: 'multiple_choice',
    question: '"Rainbow" có nghĩa là gì?',
    audio: 'Rainbow',
    options: [
      { text: 'Cầu vồng', emoji: '🌈', correct: true },
      { text: 'Mưa đá', emoji: '🧊', correct: false },
      { text: 'Sấm sét', emoji: '⚡', correct: false },
      { text: 'Tuyết', emoji: '❄️', correct: false },
    ],
  },

  // --- Câu 13-16: fill_blank mới ---
  {
    id: 'wea-13',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "It is ___ outside" (Ngoài trời đang mưa)',
    audio: 'It is raining outside',
    answer: 'raining',
    hint: 'r...ing',
    options: ['raining', 'running', 'reading', 'riding'],
  },
  {
    id: 'wea-14',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "In ___, it snows a lot" (Vào mùa đông, tuyết rơi nhiều)',
    audio: 'In winter, it snows a lot',
    answer: 'winter',
    hint: 'w...r',
    options: ['winter', 'water', 'winner', 'wonder'],
  },
  {
    id: 'wea-15',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "What is the ___?" (Nhiệt độ là bao nhiêu?)',
    audio: 'What is the temperature?',
    answer: 'temperature',
    hint: 'temp...',
    options: ['temperature', 'telephone', 'temporary', 'telescope'],
  },
  {
    id: 'wea-16',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "Spring is my favorite ___" (Mùa xuân là mùa yêu thích của tôi)',
    audio: 'Spring is my favorite season',
    answer: 'season',
    hint: 'se..on',
    options: ['season', 'reason', 'lesson', 'person'],
  },

  // --- Câu 17-20: tap_words mới ---
  {
    id: 'wea-17',
    type: 'tap_words',
    question: 'Sắp xếp: "Hôm nay trời lạnh và có gió"',
    answer: ['Today', 'is', 'cold', 'and', 'windy'],
    wordBank: ['Today', 'is', 'cold', 'and', 'windy', 'hot', 'sunny'],
  },
  {
    id: 'wea-18',
    type: 'tap_words',
    question: 'Sắp xếp: "Tôi thích thời tiết nắng ấm"',
    answer: ['I', 'love', 'sunny', 'and', 'warm', 'weather'],
    wordBank: ['I', 'love', 'sunny', 'and', 'warm', 'weather', 'cold', 'rainy'],
  },
  {
    id: 'wea-19',
    type: 'tap_words',
    question: 'Sắp xếp: "Trời đang mưa to lắm"',
    answer: ['It', 'is', 'raining', 'very', 'heavily'],
    wordBank: ['It', 'is', 'raining', 'very', 'heavily', 'snowing', 'lightly'],
  },
  {
    id: 'wea-20',
    type: 'tap_words',
    question: 'Sắp xếp: "Thời tiết hôm nay thế nào?"',
    answer: ['How', 'is', 'the', 'weather', 'today'],
    wordBank: ['How', 'is', 'the', 'weather', 'today', 'tomorrow', 'what'],
  },

  // --- Câu 21-24: multiple_choice nâng cao ---
  {
    id: 'wea-21',
    type: 'multiple_choice',
    question: 'Mùa nào thường có tuyết?',
    options: [
      { text: 'Winter (Mùa đông)', emoji: '❄️', correct: true },
      { text: 'Spring (Mùa xuân)', emoji: '🌸', correct: false },
      { text: 'Summer (Mùa hè)', emoji: '☀️', correct: false },
      { text: 'Autumn (Mùa thu)', emoji: '🍂', correct: false },
    ],
  },
  {
    id: 'wea-22',
    type: 'multiple_choice',
    question: 'Khi hỏi "Hôm nay thời tiết thế nào?", ta dùng câu nào?',
    options: [
      { text: 'What\'s the weather like today?', emoji: '⛅', correct: true },
      { text: 'How old are you today?', emoji: '🎂', correct: false },
      { text: 'Where do you live?', emoji: '🏠', correct: false },
      { text: 'What time is it?', emoji: '🕐', correct: false },
    ],
  },
  {
    id: 'wea-23',
    type: 'multiple_choice',
    question: '"It\'s boiling hot!" nghĩa là gì?',
    options: [
      { text: 'Trời nóng như thiêu như đốt', emoji: '🥵', correct: true },
      { text: 'Trời đang mưa to', emoji: '🌧️', correct: false },
      { text: 'Trời rất lạnh', emoji: '🥶', correct: false },
      { text: 'Trời nhiều mây', emoji: '⛅', correct: false },
    ],
  },
  {
    id: 'wea-24',
    type: 'multiple_choice',
    question: '"Forecast" trong "weather forecast" có nghĩa là gì?',
    options: [
      { text: 'Dự báo', emoji: '📡', correct: true },
      { text: 'Báo cáo', emoji: '📋', correct: false },
      { text: 'Tin tức', emoji: '📰', correct: false },
      { text: 'Lịch sử', emoji: '📚', correct: false },
    ],
  },

  // --- Câu 25: match_pairs ---
  {
    id: 'wea-25',
    type: 'match_pairs',
    question: 'Nối các mùa với nghĩa tiếng Việt',
    pairs: [
      { en: 'Spring 🌸', vi: 'Mùa xuân' },
      { en: 'Summer ☀️', vi: 'Mùa hè' },
      { en: 'Autumn 🍂', vi: 'Mùa thu' },
      { en: 'Winter ❄️', vi: 'Mùa đông' },
    ],
  },
];
