// src/data/lessons/transport.js
// Chủ đề 10: Phương tiện giao thông

export default [
  {
    id: 'tra-1',
    type: 'multiple_choice',
    question: '"Car" có nghĩa là gì?',
    audio: 'Car',
    options: [
      { text: 'Ô tô', emoji: '🚗', correct: true },
      { text: 'Xe đạp', emoji: '🚲', correct: false },
      { text: 'Xe máy', emoji: '🛵', correct: false },
      { text: 'Xe buýt', emoji: '🚌', correct: false },
    ],
  },
  {
    id: 'tra-2',
    type: 'multiple_choice',
    question: '"Bicycle" có nghĩa là gì?',
    audio: 'Bicycle',
    options: [
      { text: 'Xe đạp', emoji: '🚲', correct: true },
      { text: 'Xe máy', emoji: '🛵', correct: false },
      { text: 'Ô tô', emoji: '🚗', correct: false },
      { text: 'Xe tải', emoji: '🚛', correct: false },
    ],
  },
  {
    id: 'tra-3',
    type: 'match_pairs',
    question: 'Nối phương tiện',
    pairs: [
      { en: 'Bus 🚌', vi: 'Xe buýt' },
      { en: 'Train 🚂', vi: 'Tàu hỏa' },
      { en: 'Plane ✈️', vi: 'Máy bay' },
      { en: 'Ship 🚢', vi: 'Tàu thủy' },
    ],
  },
  {
    id: 'tra-4',
    type: 'fill_blank',
    question: '"I go to school by ___" (Tôi đến trường bằng xe buýt)',
    audio: 'I go to school by bus',
    answer: 'bus',
    hint: 'b_s',
    options: ['bus', 'car', 'bike', 'boat'],
  },
  {
    id: 'tra-5',
    type: 'multiple_choice',
    question: '"Airplane" có nghĩa là gì?',
    audio: 'Airplane',
    options: [
      { text: 'Máy bay', emoji: '✈️', correct: true },
      { text: 'Trực thăng', emoji: '🚁', correct: false },
      { text: 'Tên lửa', emoji: '🚀', correct: false },
      { text: 'Khinh khí cầu', emoji: '🎈', correct: false },
    ],
  },
  {
    id: 'tra-6',
    type: 'tap_words',
    question: 'Sắp xếp: "Bố lái xe đến nơi làm việc"',
    answer: ['Dad', 'drives', 'a', 'car', 'to', 'work'],
    wordBank: ['Dad', 'drives', 'a', 'car', 'to', 'work', 'rides', 'bike'],
  },
  {
    id: 'tra-7',
    type: 'multiple_choice',
    question: '"Boat" có nghĩa là gì?',
    audio: 'Boat',
    options: [
      { text: 'Thuyền', emoji: '⛵', correct: true },
      { text: 'Tàu hỏa', emoji: '🚂', correct: false },
      { text: 'Xe đạp', emoji: '🚲', correct: false },
      { text: 'Ô tô', emoji: '🚗', correct: false },
    ],
  },
  {
    id: 'tra-8',
    type: 'match_pairs',
    question: 'Nối thêm phương tiện',
    pairs: [
      { en: 'Taxi 🚕', vi: 'Taxi' },
      { en: 'Helicopter 🚁', vi: 'Trực thăng' },
      { en: 'Truck 🚛', vi: 'Xe tải' },
      { en: 'Ambulance 🚑', vi: 'Xe cấp cứu' },
    ],
  },
];
