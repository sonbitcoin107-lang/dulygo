// src/data/lessons/weather.js
// Chủ đề 7: Thời tiết

export default [
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
];
