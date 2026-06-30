// src/data/lessons/family.js
// Chủ đề 5: Gia đình

export default [
  // --- Câu 1-8: Giữ nguyên câu cũ ---
  {
    id: 'fam-1',
    type: 'multiple_choice',
    question: '"Mother" có nghĩa là gì?',
    audio: 'Mother',
    options: [
      { text: 'Mẹ / Má', emoji: '👩', correct: true },
      { text: 'Bố / Ba', emoji: '👨', correct: false },
      { text: 'Bà', emoji: '👵', correct: false },
      { text: 'Chị gái', emoji: '👧', correct: false },
    ],
  },
  {
    id: 'fam-2',
    type: 'multiple_choice',
    question: '"Father" có nghĩa là gì?',
    audio: 'Father',
    options: [
      { text: 'Bố / Ba', emoji: '👨', correct: true },
      { text: 'Mẹ / Má', emoji: '👩', correct: false },
      { text: 'Ông', emoji: '👴', correct: false },
      { text: 'Anh trai', emoji: '👦', correct: false },
    ],
  },
  {
    id: 'fam-3',
    type: 'match_pairs',
    question: 'Nối từ với nghĩa',
    pairs: [
      { en: 'Brother 👦', vi: 'Anh/em trai' },
      { en: 'Sister 👧', vi: 'Chị/em gái' },
      { en: 'Grandfather 👴', vi: 'Ông' },
      { en: 'Grandmother 👵', vi: 'Bà' },
    ],
  },
  {
    id: 'fam-4',
    type: 'multiple_choice',
    question: 'Gia đình trong tiếng Anh là gì?',
    options: [
      { text: 'Family', emoji: '👨‍👩‍👧', correct: true },
      { text: 'Friend', emoji: '👫', correct: false },
      { text: 'Team', emoji: '👥', correct: false },
      { text: 'Group', emoji: '👨‍👩‍👦', correct: false },
    ],
  },
  {
    id: 'fam-5',
    type: 'fill_blank',
    question: '"She is my ___" (Cô ấy là mẹ tôi)',
    audio: 'She is my mother',
    answer: 'mother',
    hint: 'm...r',
    options: ['mother', 'brother', 'father', 'sister'],
  },
  {
    id: 'fam-6',
    type: 'tap_words',
    question: 'Sắp xếp: "Anh trai tôi tên là Nam"',
    answer: ['My', 'brother', 'is', 'Nam'],
    wordBank: ['My', 'brother', 'is', 'Nam', 'sister', 'mother', 'father'],
  },
  {
    id: 'fam-7',
    type: 'multiple_choice',
    question: '"Baby" có nghĩa là gì?',
    audio: 'Baby',
    options: [
      { text: 'Em bé', emoji: '👶', correct: true },
      { text: 'Trẻ em', emoji: '🧒', correct: false },
      { text: 'Người lớn', emoji: '👨', correct: false },
      { text: 'Thanh niên', emoji: '🧑', correct: false },
    ],
  },
  {
    id: 'fam-8',
    type: 'multiple_choice',
    question: '"Uncle" có nghĩa là gì?',
    audio: 'Uncle',
    options: [
      { text: 'Chú / Cậu', emoji: '👨', correct: true },
      { text: 'Cô / Dì', emoji: '👩', correct: false },
      { text: 'Anh trai', emoji: '👦', correct: false },
      { text: 'Em gái', emoji: '👧', correct: false },
    ],
  },

  // --- Câu 9-12: multiple_choice mới ---
  {
    id: 'fam-9',
    type: 'multiple_choice',
    question: '"Aunt" có nghĩa là gì?',
    audio: 'Aunt',
    options: [
      { text: 'Cô / Dì', emoji: '👩', correct: true },
      { text: 'Chú / Cậu', emoji: '👨', correct: false },
      { text: 'Bà', emoji: '👵', correct: false },
      { text: 'Chị gái', emoji: '👧', correct: false },
    ],
  },
  {
    id: 'fam-10',
    type: 'multiple_choice',
    question: '"Cousin" có nghĩa là gì?',
    audio: 'Cousin',
    options: [
      { text: 'Anh/chị/em họ', emoji: '👦', correct: true },
      { text: 'Anh trai', emoji: '🧑', correct: false },
      { text: 'Em gái', emoji: '👧', correct: false },
      { text: 'Bạn thân', emoji: '👫', correct: false },
    ],
  },
  {
    id: 'fam-11',
    type: 'multiple_choice',
    question: '"Parents" có nghĩa là gì?',
    audio: 'Parents',
    options: [
      { text: 'Bố mẹ', emoji: '👨‍👩‍👧', correct: true },
      { text: 'Ông bà', emoji: '👴👵', correct: false },
      { text: 'Anh chị em', emoji: '👫', correct: false },
      { text: 'Họ hàng', emoji: '👥', correct: false },
    ],
  },
  {
    id: 'fam-12',
    type: 'multiple_choice',
    question: '"Children" có nghĩa là gì?',
    audio: 'Children',
    options: [
      { text: 'Trẻ em / Con cái', emoji: '🧒', correct: true },
      { text: 'Người lớn', emoji: '👨', correct: false },
      { text: 'Ông bà', emoji: '👴', correct: false },
      { text: 'Bạn bè', emoji: '👫', correct: false },
    ],
  },

  // --- Câu 13-16: fill_blank mới ---
  {
    id: 'fam-13',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "He is my ___" (Anh ấy là chú tôi)',
    audio: 'He is my uncle',
    answer: 'uncle',
    hint: 'u..le',
    options: ['uncle', 'ankle', 'circle', 'ample'],
  },
  {
    id: 'fam-14',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "My ___ loves me" (Bà tôi yêu tôi)',
    audio: 'My grandmother loves me',
    answer: 'grandmother',
    hint: 'grand...',
    options: ['grandmother', 'grandfather', 'mother', 'father'],
  },
  {
    id: 'fam-15',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "I have one ___ and two sisters" (Tôi có một anh trai và hai chị gái)',
    audio: 'I have one brother and two sisters',
    answer: 'brother',
    hint: 'br...r',
    options: ['brother', 'bother', 'mother', 'father'],
  },
  {
    id: 'fam-16',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống: "We are a happy ___" (Chúng tôi là một gia đình hạnh phúc)',
    audio: 'We are a happy family',
    answer: 'family',
    hint: 'f...ly',
    options: ['family', 'fairly', 'finely', 'fully'],
  },

  // --- Câu 17-20: tap_words mới ---
  {
    id: 'fam-17',
    type: 'tap_words',
    question: 'Sắp xếp: "Gia đình tôi có bốn người"',
    answer: ['My', 'family', 'has', 'four', 'members'],
    wordBank: ['My', 'family', 'has', 'four', 'members', 'two', 'five'],
  },
  {
    id: 'fam-18',
    type: 'tap_words',
    question: 'Sắp xếp: "Bố tôi là bác sĩ"',
    answer: ['My', 'father', 'is', 'a', 'doctor'],
    wordBank: ['My', 'father', 'is', 'a', 'doctor', 'mother', 'teacher'],
  },
  {
    id: 'fam-19',
    type: 'tap_words',
    question: 'Sắp xếp: "Mẹ tôi nấu ăn rất ngon"',
    answer: ['My', 'mother', 'cooks', 'very', 'well'],
    wordBank: ['My', 'mother', 'cooks', 'very', 'well', 'father', 'badly'],
  },
  {
    id: 'fam-20',
    type: 'tap_words',
    question: 'Sắp xếp: "Ông bà tôi sống ở nông thôn"',
    answer: ['My', 'grandparents', 'live', 'in', 'the', 'countryside'],
    wordBank: ['My', 'grandparents', 'live', 'in', 'the', 'countryside', 'city', 'town'],
  },

  // --- Câu 21-24: multiple_choice nâng cao ---
  {
    id: 'fam-21',
    type: 'multiple_choice',
    question: 'Con của chú/cô là gì trong tiếng Anh?',
    options: [
      { text: 'Cousin', emoji: '👦', correct: true },
      { text: 'Nephew', emoji: '🧒', correct: false },
      { text: 'Niece', emoji: '👧', correct: false },
      { text: 'Sibling', emoji: '👫', correct: false },
    ],
  },
  {
    id: 'fam-22',
    type: 'multiple_choice',
    question: '"Grandparents" có nghĩa là gì?',
    audio: 'Grandparents',
    options: [
      { text: 'Ông bà', emoji: '👴👵', correct: true },
      { text: 'Bố mẹ', emoji: '👨‍👩‍👧', correct: false },
      { text: 'Chú bác', emoji: '👥', correct: false },
      { text: 'Anh chị em', emoji: '👫', correct: false },
    ],
  },
  {
    id: 'fam-23',
    type: 'multiple_choice',
    question: 'Khi giới thiệu người thân, ta dùng cụm từ nào?',
    options: [
      { text: 'This is my...', emoji: '👋', correct: true },
      { text: 'Nice to meet...', emoji: '🤝', correct: false },
      { text: 'Where is...', emoji: '📍', correct: false },
      { text: 'I like...', emoji: '❤️', correct: false },
    ],
  },
  {
    id: 'fam-24',
    type: 'multiple_choice',
    question: '"Sibling" có nghĩa là gì?',
    audio: 'Sibling',
    options: [
      { text: 'Anh chị em ruột', emoji: '👫', correct: true },
      { text: 'Bạn thân', emoji: '🤝', correct: false },
      { text: 'Họ hàng', emoji: '👥', correct: false },
      { text: 'Hàng xóm', emoji: '🏠', correct: false },
    ],
  },

  // --- Câu 25: match_pairs ---
  {
    id: 'fam-25',
    type: 'match_pairs',
    question: 'Nối từ gia đình với nghĩa tiếng Việt',
    pairs: [
      { en: 'Aunt 👩', vi: 'Cô / Dì' },
      { en: 'Cousin 👦', vi: 'Anh/chị/em họ' },
      { en: 'Parents 👨‍👩‍👧', vi: 'Bố mẹ' },
      { en: 'Children 🧒', vi: 'Trẻ em / Con cái' },
    ],
  },
];
