// src/data/lessons/animals.js
// Chủ đề 3: Động vật

export default [
  // --- Câu 1-8: Giữ nguyên câu cũ ---
  {
    id: 'ani-1',
    type: 'multiple_choice',
    question: '"Dog" có nghĩa là gì?',
    audio: 'Dog',
    options: [
      { text: 'Con chó', emoji: '🐶', correct: true },
      { text: 'Con mèo', emoji: '🐱', correct: false },
      { text: 'Con thỏ', emoji: '🐰', correct: false },
      { text: 'Con gấu', emoji: '🐻', correct: false },
    ],
  },
  {
    id: 'ani-2',
    type: 'multiple_choice',
    question: '"Cat" có nghĩa là gì?',
    audio: 'Cat',
    options: [
      { text: 'Con mèo', emoji: '🐱', correct: true },
      { text: 'Con chó', emoji: '🐶', correct: false },
      { text: 'Con chuột', emoji: '🐭', correct: false },
      { text: 'Con hổ', emoji: '🐯', correct: false },
    ],
  },
  {
    id: 'ani-3',
    type: 'multiple_choice',
    question: 'Con voi trong tiếng Anh là gì?',
    options: [
      { text: 'Elephant', emoji: '🐘', correct: true },
      { text: 'Hippo', emoji: '🦛', correct: false },
      { text: 'Rhino', emoji: '🦏', correct: false },
      { text: 'Bear', emoji: '🐻', correct: false },
    ],
  },
  {
    id: 'ani-4',
    type: 'match_pairs',
    question: 'Nối động vật với tên tiếng Anh',
    pairs: [
      { en: 'Dog 🐶', vi: 'Con chó' },
      { en: 'Cat 🐱', vi: 'Con mèo' },
      { en: 'Fish 🐟', vi: 'Con cá' },
      { en: 'Bird 🐦', vi: 'Con chim' },
    ],
  },
  {
    id: 'ani-5',
    type: 'multiple_choice',
    question: '"Lion" có nghĩa là gì?',
    audio: 'Lion',
    options: [
      { text: 'Con sư tử', emoji: '🦁', correct: true },
      { text: 'Con hổ', emoji: '🐯', correct: false },
      { text: 'Con gấu', emoji: '🐻', correct: false },
      { text: 'Con chó sói', emoji: '🐺', correct: false },
    ],
  },
  {
    id: 'ani-6',
    type: 'fill_blank',
    question: 'Con thỏ: "R___it"',
    audio: 'Rabbit',
    answer: 'Rabbit',
    hint: 'R...t',
    options: ['Rabbit', 'Robot', 'Rapid', 'Racket'],
  },
  {
    id: 'ani-7',
    type: 'tap_words',
    question: 'Sắp xếp: "Con chó ăn xương"',
    answer: ['The', 'dog', 'eats', 'a', 'bone'],
    wordBank: ['The', 'dog', 'eats', 'a', 'bone', 'cat', 'fish'],
  },
  {
    id: 'ani-8',
    type: 'multiple_choice',
    question: '"Monkey" có nghĩa là gì?',
    audio: 'Monkey',
    options: [
      { text: 'Con khỉ', emoji: '🐒', correct: true },
      { text: 'Con vẹt', emoji: '🦜', correct: false },
      { text: 'Con hươu', emoji: '🦌', correct: false },
      { text: 'Con gà', emoji: '🐔', correct: false },
    ],
  },

  // --- Câu 9-12: multiple_choice mới ---
  {
    id: 'ani-9',
    type: 'multiple_choice',
    question: '"Tiger" có nghĩa là gì?',
    audio: 'Tiger',
    options: [
      { text: 'Con hổ', emoji: '🐯', correct: true },
      { text: 'Con sư tử', emoji: '🦁', correct: false },
      { text: 'Con báo', emoji: '🐆', correct: false },
      { text: 'Con gấu', emoji: '🐻', correct: false },
    ],
  },
  {
    id: 'ani-10',
    type: 'multiple_choice',
    question: '"Horse" có nghĩa là gì?',
    audio: 'Horse',
    options: [
      { text: 'Con ngựa', emoji: '🐴', correct: true },
      { text: 'Con bò', emoji: '🐄', correct: false },
      { text: 'Con cừu', emoji: '🐑', correct: false },
      { text: 'Con dê', emoji: '🐐', correct: false },
    ],
  },
  {
    id: 'ani-11',
    type: 'multiple_choice',
    question: '"Snake" có nghĩa là gì?',
    audio: 'Snake',
    options: [
      { text: 'Con rắn', emoji: '🐍', correct: true },
      { text: 'Con thằn lằn', emoji: '🦎', correct: false },
      { text: 'Con ếch', emoji: '🐸', correct: false },
      { text: 'Con rùa', emoji: '🐢', correct: false },
    ],
  },
  {
    id: 'ani-12',
    type: 'multiple_choice',
    question: '"Duck" có nghĩa là gì?',
    audio: 'Duck',
    options: [
      { text: 'Con vịt', emoji: '🦆', correct: true },
      { text: 'Con gà', emoji: '🐔', correct: false },
      { text: 'Con chim cánh cụt', emoji: '🐧', correct: false },
      { text: 'Con thiên nga', emoji: '🦢', correct: false },
    ],
  },

  // --- Câu 13-16: fill_blank mới ---
  {
    id: 'ani-13',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "The ___ roars loudly" (Con sư tử gầm to)',
    audio: 'The lion roars loudly',
    answer: 'lion',
    hint: 'l..n',
    options: ['lion', 'loin', 'lime', 'line'],
  },
  {
    id: 'ani-14',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "I have a pet ___" (Tôi có một con mèo cưng)',
    audio: 'I have a pet cat',
    answer: 'cat',
    hint: 'c_t',
    options: ['cat', 'bat', 'hat', 'rat'],
  },
  {
    id: 'ani-15',
    type: 'fill_blank',
    question: 'Con bướm: "_utterfly"',
    audio: 'Butterfly',
    answer: 'Butterfly',
    hint: 'B...y',
    options: ['Butterfly', 'Bumblebee', 'Dragonfly', 'Firefly'],
  },
  {
    id: 'ani-16',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "The ___ swims in the river" (Con cá bơi dưới sông)',
    audio: 'The fish swims in the river',
    answer: 'fish',
    hint: 'f..h',
    options: ['fish', 'dish', 'wish', 'rich'],
  },

  // --- Câu 17-20: tap_words mới ---
  {
    id: 'ani-17',
    type: 'tap_words',
    question: 'Sắp xếp: "Con mèo ngủ trên ghế"',
    answer: ['The', 'cat', 'sleeps', 'on', 'the', 'chair'],
    wordBank: ['The', 'cat', 'sleeps', 'on', 'the', 'chair', 'dog', 'bed'],
  },
  {
    id: 'ani-18',
    type: 'tap_words',
    question: 'Sắp xếp: "Con chim hót trên cây"',
    answer: ['The', 'bird', 'sings', 'in', 'the', 'tree'],
    wordBank: ['The', 'bird', 'sings', 'in', 'the', 'tree', 'fish', 'river'],
  },
  {
    id: 'ani-19',
    type: 'tap_words',
    question: 'Sắp xếp: "Tôi thích động vật"',
    answer: ['I', 'love', 'animals'],
    wordBank: ['I', 'love', 'animals', 'hate', 'plants', 'food'],
  },
  {
    id: 'ani-20',
    type: 'tap_words',
    question: 'Sắp xếp: "Con voi sống ở rừng"',
    answer: ['The', 'elephant', 'lives', 'in', 'the', 'forest'],
    wordBank: ['The', 'elephant', 'lives', 'in', 'the', 'forest', 'ocean', 'city'],
  },

  // --- Câu 21-24: multiple_choice nâng cao ---
  {
    id: 'ani-21',
    type: 'multiple_choice',
    question: 'Con vật nào sống dưới nước?',
    options: [
      { text: 'Fish (Cá)', emoji: '🐟', correct: true },
      { text: 'Horse (Ngựa)', emoji: '🐴', correct: false },
      { text: 'Tiger (Hổ)', emoji: '🐯', correct: false },
      { text: 'Monkey (Khỉ)', emoji: '🐒', correct: false },
    ],
  },
  {
    id: 'ani-22',
    type: 'multiple_choice',
    question: 'Con vật nào biết bay?',
    options: [
      { text: 'Bird (Chim)', emoji: '🐦', correct: true },
      { text: 'Dog (Chó)', emoji: '🐶', correct: false },
      { text: 'Snake (Rắn)', emoji: '🐍', correct: false },
      { text: 'Rabbit (Thỏ)', emoji: '🐰', correct: false },
    ],
  },
  {
    id: 'ani-23',
    type: 'multiple_choice',
    question: '"Cow" có nghĩa là gì?',
    audio: 'Cow',
    options: [
      { text: 'Con bò', emoji: '🐄', correct: true },
      { text: 'Con dê', emoji: '🐐', correct: false },
      { text: 'Con cừu', emoji: '🐑', correct: false },
      { text: 'Con lợn', emoji: '🐷', correct: false },
    ],
  },
  {
    id: 'ani-24',
    type: 'multiple_choice',
    question: 'Con vật nào là "vua của rừng xanh"?',
    options: [
      { text: 'Lion (Sư tử)', emoji: '🦁', correct: true },
      { text: 'Tiger (Hổ)', emoji: '🐯', correct: false },
      { text: 'Elephant (Voi)', emoji: '🐘', correct: false },
      { text: 'Bear (Gấu)', emoji: '🐻', correct: false },
    ],
  },

  // --- Câu 25: match_pairs ---
  {
    id: 'ani-25',
    type: 'match_pairs',
    question: 'Nối động vật với tên tiếng Việt',
    pairs: [
      { en: 'Horse 🐴', vi: 'Con ngựa' },
      { en: 'Snake 🐍', vi: 'Con rắn' },
      { en: 'Duck 🦆', vi: 'Con vịt' },
      { en: 'Cow 🐄', vi: 'Con bò' },
    ],
  },
];
