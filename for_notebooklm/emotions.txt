// src/data/lessons/emotions.js
// Chủ đề 14: Cảm xúc

export default [
  // --- Câu 1-8: Giữ nguyên ---
  {
    id: 'emo-1', type: 'multiple_choice',
    question: '"Happy" có nghĩa là gì?', audio: 'Happy',
    options: [
      { text: 'Vui / Hạnh phúc', emoji: '😄', correct: true },
      { text: 'Buồn', emoji: '😢', correct: false },
      { text: 'Tức giận', emoji: '😠', correct: false },
      { text: 'Sợ hãi', emoji: '😨', correct: false },
    ],
  },
  {
    id: 'emo-2', type: 'multiple_choice',
    question: '"Sad" có nghĩa là gì?', audio: 'Sad',
    options: [
      { text: 'Buồn', emoji: '😢', correct: true },
      { text: 'Vui', emoji: '😄', correct: false },
      { text: 'Ngạc nhiên', emoji: '😲', correct: false },
      { text: 'Mệt', emoji: '😴', correct: false },
    ],
  },
  {
    id: 'emo-3', type: 'match_pairs',
    question: 'Nối cảm xúc',
    pairs: [
      { en: 'Angry 😠', vi: 'Tức giận' },
      { en: 'Scared 😨', vi: 'Sợ hãi' },
      { en: 'Surprised 😲', vi: 'Ngạc nhiên' },
      { en: 'Tired 😴', vi: 'Mệt mỏi' },
    ],
  },
  {
    id: 'emo-4', type: 'fill_blank',
    question: '"I am very ___!" (Tôi rất vui!)', audio: 'I am very happy',
    answer: 'happy', hint: 'ha..y',
    options: ['happy', 'hungry', 'hairy', 'hasty'],
  },
  {
    id: 'emo-5', type: 'multiple_choice',
    question: '"Hungry" có nghĩa là gì?', audio: 'Hungry',
    options: [
      { text: 'Đói bụng', emoji: '🍽️', correct: true },
      { text: 'Khát nước', emoji: '💧', correct: false },
      { text: 'Buồn ngủ', emoji: '😴', correct: false },
      { text: 'Đau bụng', emoji: '🤢', correct: false },
    ],
  },
  {
    id: 'emo-6', type: 'tap_words',
    question: 'Sắp xếp: "Con mèo rất hạnh phúc"',
    answer: ['The', 'cat', 'is', 'very', 'happy'],
    wordBank: ['The', 'cat', 'is', 'very', 'happy', 'sad', 'dog'],
  },
  {
    id: 'emo-7', type: 'multiple_choice',
    question: '"Excited" có nghĩa là gì?', audio: 'Excited',
    options: [
      { text: 'Hào hứng / Phấn khích', emoji: '🤩', correct: true },
      { text: 'Chán nản', emoji: '😑', correct: false },
      { text: 'Lo lắng', emoji: '😟', correct: false },
      { text: 'Xấu hổ', emoji: '😳', correct: false },
    ],
  },
  {
    id: 'emo-8', type: 'match_pairs',
    question: 'Nối thêm cảm xúc',
    pairs: [
      { en: 'Bored 😑', vi: 'Chán nản' },
      { en: 'Nervous 😟', vi: 'Lo lắng' },
      { en: 'Proud 😤', vi: 'Tự hào' },
      { en: 'Shy 😳', vi: 'Xấu hổ' },
    ],
  },

  // --- Câu 9-12: Multiple choice mới ---
  {
    id: 'emo-9', type: 'multiple_choice',
    question: '"Worried" có nghĩa là gì?', audio: 'Worried',
    options: [
      { text: 'Lo lắng / Bồn chồn', emoji: '😰', correct: true },
      { text: 'Tức giận', emoji: '😠', correct: false },
      { text: 'Buồn', emoji: '😢', correct: false },
      { text: 'Vui', emoji: '😄', correct: false },
    ],
  },
  {
    id: 'emo-10', type: 'multiple_choice',
    question: '"Lonely" có nghĩa là gì?', audio: 'Lonely',
    options: [
      { text: 'Cô đơn', emoji: '😔', correct: true },
      { text: 'Hào hứng', emoji: '🤩', correct: false },
      { text: 'Vui sướng', emoji: '😄', correct: false },
      { text: 'Tự tin', emoji: '😎', correct: false },
    ],
  },
  {
    id: 'emo-11', type: 'multiple_choice',
    question: '"Grateful" có nghĩa là gì?', audio: 'Grateful',
    options: [
      { text: 'Biết ơn', emoji: '🙏', correct: true },
      { text: 'Tức giận', emoji: '😠', correct: false },
      { text: 'Buồn bã', emoji: '😢', correct: false },
      { text: 'Sợ hãi', emoji: '😨', correct: false },
    ],
  },
  {
    id: 'emo-12', type: 'multiple_choice',
    question: '"Calm" có nghĩa là gì?', audio: 'Calm',
    options: [
      { text: 'Bình tĩnh', emoji: '😌', correct: true },
      { text: 'Hồi hộp', emoji: '😰', correct: false },
      { text: 'Tức giận', emoji: '😠', correct: false },
      { text: 'Buồn', emoji: '😢', correct: false },
    ],
  },

  // --- Câu 13-16: Fill blank mới ---
  {
    id: 'emo-13', type: 'fill_blank',
    question: '"I feel ___ when I lose my toy" (Tôi cảm thấy buồn khi mất đồ chơi)',
    audio: 'I feel sad when I lose my toy', answer: 'sad', hint: 's_d',
    options: ['sad', 'bad', 'mad', 'glad'],
  },
  {
    id: 'emo-14', type: 'fill_blank',
    question: '"She is ___ about the test" (Cô ấy lo lắng về bài kiểm tra)',
    audio: 'She is worried about the test', answer: 'worried', hint: 'wor...',
    options: ['worried', 'married', 'carried', 'hurried'],
  },
  {
    id: 'emo-15', type: 'fill_blank',
    question: '"I am so ___ to see you!" (Tôi rất vui khi gặp bạn!)',
    audio: 'I am so happy to see you', answer: 'happy', hint: 'hap...',
    options: ['happy', 'angry', 'hungry', 'heavy'],
  },
  {
    id: 'emo-16', type: 'fill_blank',
    question: '"He feels ___ because he won" (Anh ấy tự hào vì đã thắng)',
    audio: 'He feels proud because he won', answer: 'proud', hint: 'pr..d',
    options: ['proud', 'cloud', 'crowd', 'aloud'],
  },

  // --- Câu 17-20: Tap words mới ---
  {
    id: 'emo-17', type: 'tap_words',
    question: 'Sắp xếp: "Tôi cảm thấy rất phấn khích hôm nay"',
    answer: ['I', 'feel', 'very', 'excited', 'today'],
    wordBank: ['I', 'feel', 'very', 'excited', 'today', 'sad', 'yesterday', 'tired'],
  },
  {
    id: 'emo-18', type: 'tap_words',
    question: 'Sắp xếp: "Cô bé đang khóc vì rất buồn"',
    answer: ['The', 'girl', 'is', 'crying', 'because', 'she', 'is', 'sad'],
    wordBank: ['The', 'girl', 'is', 'crying', 'because', 'she', 'is', 'sad', 'happy', 'he'],
  },
  {
    id: 'emo-19', type: 'tap_words',
    question: 'Sắp xếp: "Anh ấy không sợ bóng tối"',
    answer: ['He', 'is', 'not', 'scared', 'of', 'the', 'dark'],
    wordBank: ['He', 'is', 'not', 'scared', 'of', 'the', 'dark', 'she', 'afraid', 'light'],
  },
  {
    id: 'emo-20', type: 'tap_words',
    question: 'Sắp xếp: "Tôi cảm thấy bình tĩnh và thư giãn"',
    answer: ['I', 'feel', 'calm', 'and', 'relaxed'],
    wordBank: ['I', 'feel', 'calm', 'and', 'relaxed', 'angry', 'stressed', 'we'],
  },

  // --- Câu 21-24: Multiple choice nâng cao ---
  {
    id: 'emo-21', type: 'multiple_choice',
    question: 'Khi bạn thắng một trò chơi, bạn cảm thấy gì?', audio: 'feeling when winning',
    options: [
      { text: 'Excited / Proud (Phấn khích / Tự hào)', emoji: '🏆', correct: true },
      { text: 'Sad / Lonely (Buồn / Cô đơn)', emoji: '❌', correct: false },
      { text: 'Scared / Worried (Sợ / Lo lắng)', emoji: '❌', correct: false },
      { text: 'Angry / Bored (Tức / Chán)', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'emo-22', type: 'multiple_choice',
    question: '"How do you feel?" nghĩa là gì?', audio: 'How do you feel',
    options: [
      { text: 'Bạn cảm thấy thế nào?', emoji: '✅', correct: true },
      { text: 'Bạn đang làm gì?', emoji: '❌', correct: false },
      { text: 'Bạn muốn gì?', emoji: '❌', correct: false },
      { text: 'Bạn ở đâu?', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'emo-23', type: 'multiple_choice',
    question: '"I am in a good mood" nghĩa là gì?', audio: 'I am in a good mood',
    options: [
      { text: 'Tôi đang có tâm trạng tốt', emoji: '😊', correct: true },
      { text: 'Tôi đang rất buồn', emoji: '❌', correct: false },
      { text: 'Tôi đang giận dỗi', emoji: '❌', correct: false },
      { text: 'Tôi đang lo lắng', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'emo-24', type: 'multiple_choice',
    question: 'Từ nào là trái nghĩa của "happy"?', audio: 'opposite of happy',
    options: [
      { text: 'Sad (buồn)', emoji: '😢', correct: true },
      { text: 'Excited (phấn khích)', emoji: '❌', correct: false },
      { text: 'Proud (tự hào)', emoji: '❌', correct: false },
      { text: 'Calm (bình tĩnh)', emoji: '❌', correct: false },
    ],
  },

  // --- Câu 25: Match pairs tổng hợp ---
  {
    id: 'emo-25', type: 'match_pairs',
    question: 'Nối cảm xúc với nghĩa',
    pairs: [
      { en: 'Worried 😰', vi: 'Lo lắng' },
      { en: 'Lonely 😔', vi: 'Cô đơn' },
      { en: 'Grateful 🙏', vi: 'Biết ơn' },
      { en: 'Calm 😌', vi: 'Bình tĩnh' },
    ],
  },
];
