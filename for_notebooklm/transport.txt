// src/data/lessons/transport.js
// Chủ đề 10: Phương tiện giao thông

export default [
  // --- Câu 1-8: Giữ nguyên câu cũ ---
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

  // --- Câu 9-12: multiple_choice mới ---
  {
    id: 'tra-9',
    type: 'multiple_choice',
    question: '"Motorcycle" có nghĩa là gì?',
    audio: 'Motorcycle',
    options: [
      { text: 'Xe máy', emoji: '🛵', correct: true },
      { text: 'Xe đạp', emoji: '🚲', correct: false },
      { text: 'Ô tô', emoji: '🚗', correct: false },
      { text: 'Xe tải', emoji: '🚛', correct: false },
    ],
  },
  {
    id: 'tra-10',
    type: 'multiple_choice',
    question: '"Helicopter" có nghĩa là gì?',
    audio: 'Helicopter',
    options: [
      { text: 'Trực thăng', emoji: '🚁', correct: true },
      { text: 'Máy bay', emoji: '✈️', correct: false },
      { text: 'Khinh khí cầu', emoji: '🎈', correct: false },
      { text: 'Tên lửa', emoji: '🚀', correct: false },
    ],
  },
  {
    id: 'tra-11',
    type: 'multiple_choice',
    question: '"Station" có nghĩa là gì?',
    audio: 'Station',
    options: [
      { text: 'Nhà ga / Trạm', emoji: '🚉', correct: true },
      { text: 'Sân bay', emoji: '🛫', correct: false },
      { text: 'Bến cảng', emoji: '⚓', correct: false },
      { text: 'Bến xe', emoji: '🚌', correct: false },
    ],
  },
  {
    id: 'tra-12',
    type: 'multiple_choice',
    question: '"Traffic" có nghĩa là gì?',
    audio: 'Traffic',
    options: [
      { text: 'Giao thông', emoji: '🚦', correct: true },
      { text: 'Đường phố', emoji: '🛣️', correct: false },
      { text: 'Vỉa hè', emoji: '🚶', correct: false },
      { text: 'Biển báo', emoji: '🪧', correct: false },
    ],
  },

  // --- Câu 13-16: fill_blank mới ---
  {
    id: 'tra-13',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "The ___ flies in the sky" (Máy bay bay trên bầu trời)',
    audio: 'The airplane flies in the sky',
    answer: 'airplane',
    hint: 'air...',
    options: ['airplane', 'airborne', 'airport', 'airmail'],
  },
  {
    id: 'tra-14',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "We take the ___ to the city" (Chúng tôi đi tàu hỏa vào thành phố)',
    audio: 'We take the train to the city',
    answer: 'train',
    hint: 'tr..n',
    options: ['train', 'trail', 'drain', 'brain'],
  },
  {
    id: 'tra-15',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "There is a lot of ___ in the morning" (Sáng nào cũng kẹt xe)',
    audio: 'There is a lot of traffic in the morning',
    answer: 'traffic',
    hint: 'tr...ic',
    options: ['traffic', 'tragic', 'tropic', 'trifle'],
  },
  {
    id: 'tra-16',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "I ride my ___ to school" (Tôi đi xe đạp đến trường)',
    audio: 'I ride my bicycle to school',
    answer: 'bicycle',
    hint: 'bi..cle',
    options: ['bicycle', 'biscuit', 'binocle', 'bicycle'],
  },

  // --- Câu 17-20: tap_words mới ---
  {
    id: 'tra-17',
    type: 'tap_words',
    question: 'Sắp xếp: "Tôi đi máy bay đến Hà Nội"',
    answer: ['I', 'fly', 'to', 'Hanoi', 'by', 'airplane'],
    wordBank: ['I', 'fly', 'to', 'Hanoi', 'by', 'airplane', 'train', 'drive'],
  },
  {
    id: 'tra-18',
    type: 'tap_words',
    question: 'Sắp xếp: "Xe buýt dừng lại ở trạm"',
    answer: ['The', 'bus', 'stops', 'at', 'the', 'station'],
    wordBank: ['The', 'bus', 'stops', 'at', 'the', 'station', 'train', 'starts'],
  },
  {
    id: 'tra-19',
    type: 'tap_words',
    question: 'Sắp xếp: "Đường phố rất đông xe cộ"',
    answer: ['The', 'road', 'is', 'very', 'busy'],
    wordBank: ['The', 'road', 'is', 'very', 'busy', 'quiet', 'school', 'empty'],
  },
  {
    id: 'tra-20',
    type: 'tap_words',
    question: 'Sắp xếp: "Phương tiện nào nhanh nhất?"',
    answer: ['Which', 'transport', 'is', 'the', 'fastest'],
    wordBank: ['Which', 'transport', 'is', 'the', 'fastest', 'slowest', 'vehicle'],
  },

  // --- Câu 21-24: multiple_choice nâng cao ---
  {
    id: 'tra-21',
    type: 'multiple_choice',
    question: 'Phương tiện nào đi dưới đường hầm?',
    options: [
      { text: 'Subway/Metro (Tàu điện ngầm)', emoji: '🚇', correct: true },
      { text: 'Bus (Xe buýt)', emoji: '🚌', correct: false },
      { text: 'Airplane (Máy bay)', emoji: '✈️', correct: false },
      { text: 'Ship (Tàu thủy)', emoji: '🚢', correct: false },
    ],
  },
  {
    id: 'tra-22',
    type: 'multiple_choice',
    question: 'Khi muốn hỏi đường, ta nói gì?',
    options: [
      { text: 'Excuse me, where is...?', emoji: '📍', correct: true },
      { text: 'How old are you?', emoji: '🎂', correct: false },
      { text: 'What is your name?', emoji: '👤', correct: false },
      { text: 'Good morning!', emoji: '🌅', correct: false },
    ],
  },
  {
    id: 'tra-23',
    type: 'multiple_choice',
    question: '"Road" có nghĩa là gì?',
    audio: 'Road',
    options: [
      { text: 'Con đường', emoji: '🛣️', correct: true },
      { text: 'Cầu', emoji: '🌉', correct: false },
      { text: 'Sân bay', emoji: '🛫', correct: false },
      { text: 'Ga tàu', emoji: '🚉', correct: false },
    ],
  },
  {
    id: 'tra-24',
    type: 'multiple_choice',
    question: 'Phương tiện nào chạy trên đường ray?',
    options: [
      { text: 'Train (Tàu hỏa)', emoji: '🚂', correct: true },
      { text: 'Car (Ô tô)', emoji: '🚗', correct: false },
      { text: 'Boat (Thuyền)', emoji: '⛵', correct: false },
      { text: 'Bicycle (Xe đạp)', emoji: '🚲', correct: false },
    ],
  },

  // --- Câu 25: match_pairs ---
  {
    id: 'tra-25',
    type: 'match_pairs',
    question: 'Nối phương tiện giao thông với nghĩa tiếng Việt',
    pairs: [
      { en: 'Motorcycle 🛵', vi: 'Xe máy' },
      { en: 'Helicopter 🚁', vi: 'Trực thăng' },
      { en: 'Station 🚉', vi: 'Nhà ga / Trạm' },
      { en: 'Road 🛣️', vi: 'Con đường' },
    ],
  },
];
