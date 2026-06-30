// src/data/lessons/city.js
// Chủ đề 17: Thành phố & Địa điểm

export default [
  // --- Câu 1-8: Giữ nguyên ---
  {
    id: 'cit-1', type: 'multiple_choice',
    question: '"Hospital" có nghĩa là gì?', audio: 'Hospital',
    options: [
      { text: 'Bệnh viện', emoji: '🏥', correct: true },
      { text: 'Trường học', emoji: '🏫', correct: false },
      { text: 'Siêu thị', emoji: '🏪', correct: false },
      { text: 'Công viên', emoji: '🌳', correct: false },
    ],
  },
  {
    id: 'cit-2', type: 'multiple_choice',
    question: '"Park" có nghĩa là gì?', audio: 'Park',
    options: [
      { text: 'Công viên', emoji: '🌳', correct: true },
      { text: 'Bãi biển', emoji: '🏖️', correct: false },
      { text: 'Rừng', emoji: '🌲', correct: false },
      { text: 'Hồ nước', emoji: '🏞️', correct: false },
    ],
  },
  {
    id: 'cit-3', type: 'match_pairs',
    question: 'Nối địa điểm',
    pairs: [
      { en: 'Bank 🏦', vi: 'Ngân hàng' },
      { en: 'Library 📚', vi: 'Thư viện' },
      { en: 'Restaurant 🍽️', vi: 'Nhà hàng' },
      { en: 'Hotel 🏨', vi: 'Khách sạn' },
    ],
  },
  {
    id: 'cit-4', type: 'fill_blank',
    question: '"Let\'s go to the ___!" (Đến công viên thôi!)',
    audio: 'Lets go to the park', answer: 'park', hint: 'p..k',
    options: ['park', 'dark', 'bark', 'mark'],
  },
  {
    id: 'cit-5', type: 'multiple_choice',
    question: '"Supermarket" có nghĩa là gì?', audio: 'Supermarket',
    options: [
      { text: 'Siêu thị', emoji: '🛒', correct: true },
      { text: 'Chợ', emoji: '🏪', correct: false },
      { text: 'Cửa hàng', emoji: '🏬', correct: false },
      { text: 'Nhà kho', emoji: '🏭', correct: false },
    ],
  },
  {
    id: 'cit-6', type: 'tap_words',
    question: 'Sắp xếp: "Bệnh viện gần trường học"',
    answer: ['The', 'hospital', 'is', 'near', 'the', 'school'],
    wordBank: ['The', 'hospital', 'is', 'near', 'the', 'school', 'far', 'park'],
  },
  {
    id: 'cit-7', type: 'multiple_choice',
    question: '"Zoo" có nghĩa là gì?', audio: 'Zoo',
    options: [
      { text: 'Vườn thú', emoji: '🦁', correct: true },
      { text: 'Vườn hoa', emoji: '🌸', correct: false },
      { text: 'Công viên nước', emoji: '💦', correct: false },
      { text: 'Rạp chiếu phim', emoji: '🎬', correct: false },
    ],
  },
  {
    id: 'cit-8', type: 'match_pairs',
    question: 'Nối thêm địa điểm',
    pairs: [
      { en: 'Airport ✈️', vi: 'Sân bay' },
      { en: 'Stadium ⚽', vi: 'Sân vận động' },
      { en: 'Museum 🏛️', vi: 'Bảo tàng' },
      { en: 'Cinema 🎬', vi: 'Rạp chiếu phim' },
    ],
  },

  // --- Câu 9-12: Multiple choice mới ---
  {
    id: 'cit-9', type: 'multiple_choice',
    question: '"Police station" có nghĩa là gì?', audio: 'Police station',
    options: [
      { text: 'Đồn cảnh sát', emoji: '🚔', correct: true },
      { text: 'Trạm xăng', emoji: '⛽', correct: false },
      { text: 'Bến xe', emoji: '🚌', correct: false },
      { text: 'Trạm cứu hỏa', emoji: '🚒', correct: false },
    ],
  },
  {
    id: 'cit-10', type: 'multiple_choice',
    question: '"Post office" có nghĩa là gì?', audio: 'Post office',
    options: [
      { text: 'Bưu điện', emoji: '📮', correct: true },
      { text: 'Văn phòng', emoji: '🏢', correct: false },
      { text: 'Cửa hàng', emoji: '🏬', correct: false },
      { text: 'Ngân hàng', emoji: '🏦', correct: false },
    ],
  },
  {
    id: 'cit-11', type: 'multiple_choice',
    question: '"Market" có nghĩa là gì?', audio: 'Market',
    options: [
      { text: 'Chợ', emoji: '🏪', correct: true },
      { text: 'Siêu thị', emoji: '🛒', correct: false },
      { text: 'Trung tâm thương mại', emoji: '🏬', correct: false },
      { text: 'Cửa hàng tiện lợi', emoji: '🏪', correct: false },
    ],
  },
  {
    id: 'cit-12', type: 'multiple_choice',
    question: '"Fire station" có nghĩa là gì?', audio: 'Fire station',
    options: [
      { text: 'Trạm cứu hỏa', emoji: '🚒', correct: true },
      { text: 'Đồn cảnh sát', emoji: '🚔', correct: false },
      { text: 'Bệnh viện', emoji: '🏥', correct: false },
      { text: 'Bưu điện', emoji: '📮', correct: false },
    ],
  },

  // --- Câu 13-16: Fill blank mới ---
  {
    id: 'cit-13', type: 'fill_blank',
    question: '"I borrow books from the ___" (Tôi mượn sách ở thư viện)',
    audio: 'I borrow books from the library', answer: 'library', hint: 'lib...',
    options: ['library', 'lottery', 'laundry', 'literacy'],
  },
  {
    id: 'cit-14', type: 'fill_blank',
    question: '"We watched a movie at the ___" (Chúng tôi xem phim ở rạp)',
    audio: 'We watched a movie at the cinema', answer: 'cinema', hint: 'cin...',
    options: ['cinema', 'camera', 'canteen', 'castle'],
  },
  {
    id: 'cit-15', type: 'fill_blank',
    question: '"The plane takes off at the ___" (Máy bay cất cánh ở sân bay)',
    audio: 'The plane takes off at the airport', answer: 'airport', hint: 'air...',
    options: ['airport', 'airmail', 'airline', 'airship'],
  },
  {
    id: 'cit-16', type: 'fill_blank',
    question: '"I send a letter at the ___" (Tôi gửi thư ở bưu điện)',
    audio: 'I send a letter at the post office', answer: 'post office', hint: 'post...',
    options: ['post office', 'police station', 'parking lot', 'power plant'],
  },

  // --- Câu 17-20: Tap words mới ---
  {
    id: 'cit-17', type: 'tap_words',
    question: 'Sắp xếp: "Tôi muốn đến bảo tàng vào Chủ Nhật"',
    answer: ['I', 'want', 'to', 'visit', 'the', 'museum', 'on', 'Sunday'],
    wordBank: ['I', 'want', 'to', 'visit', 'the', 'museum', 'on', 'Sunday', 'Monday', 'zoo'],
  },
  {
    id: 'cit-18', type: 'tap_words',
    question: 'Sắp xếp: "Siêu thị ở đâu?"',
    answer: ['Where', 'is', 'the', 'supermarket'],
    wordBank: ['Where', 'is', 'the', 'supermarket', 'how', 'school', 'hospital', 'what'],
  },
  {
    id: 'cit-19', type: 'tap_words',
    question: 'Sắp xếp: "Khách sạn rất gần sân bay"',
    answer: ['The', 'hotel', 'is', 'very', 'close', 'to', 'the', 'airport'],
    wordBank: ['The', 'hotel', 'is', 'very', 'close', 'to', 'the', 'airport', 'far', 'park'],
  },
  {
    id: 'cit-20', type: 'tap_words',
    question: 'Sắp xếp: "Chúng tôi đi mua sắm ở siêu thị"',
    answer: ['We', 'go', 'shopping', 'at', 'the', 'supermarket'],
    wordBank: ['We', 'go', 'shopping', 'at', 'the', 'supermarket', 'market', 'they', 'restaurant'],
  },

  // --- Câu 21-24: Multiple choice nâng cao ---
  {
    id: 'cit-21', type: 'multiple_choice',
    question: '"Excuse me, where is the hospital?" nghĩa là gì?',
    audio: 'Excuse me where is the hospital',
    options: [
      { text: 'Xin lỗi, bệnh viện ở đâu vậy?', emoji: '✅', correct: true },
      { text: 'Xin lỗi, trường học ở đâu vậy?', emoji: '❌', correct: false },
      { text: 'Xin lỗi, ngân hàng ở đâu vậy?', emoji: '❌', correct: false },
      { text: 'Xin lỗi, khách sạn ở đâu vậy?', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'cit-22', type: 'multiple_choice',
    question: 'Chỗ nào để gửi và nhận thư?', audio: 'post office',
    options: [
      { text: 'Post office (bưu điện)', emoji: '📮', correct: true },
      { text: 'Bank (ngân hàng)', emoji: '❌', correct: false },
      { text: 'Library (thư viện)', emoji: '❌', correct: false },
      { text: 'Museum (bảo tàng)', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'cit-23', type: 'multiple_choice',
    question: '"It is far from here" nghĩa là gì?', audio: 'It is far from here',
    options: [
      { text: 'Nó ở xa đây', emoji: '📍', correct: true },
      { text: 'Nó ở gần đây', emoji: '❌', correct: false },
      { text: 'Nó ở bên cạnh', emoji: '❌', correct: false },
      { text: 'Nó ở phía sau', emoji: '❌', correct: false },
    ],
  },
  {
    id: 'cit-24', type: 'multiple_choice',
    question: 'Địa điểm nào để mượn sách miễn phí?', audio: 'borrow books for free',
    options: [
      { text: 'Library (thư viện)', emoji: '📚', correct: true },
      { text: 'Bookstore (hiệu sách)', emoji: '❌', correct: false },
      { text: 'School (trường học)', emoji: '❌', correct: false },
      { text: 'Museum (bảo tàng)', emoji: '❌', correct: false },
    ],
  },

  // --- Câu 25: Match pairs tổng hợp ---
  {
    id: 'cit-25', type: 'match_pairs',
    question: 'Nối địa điểm với nghĩa',
    pairs: [
      { en: 'Police station 🚔', vi: 'Đồn cảnh sát' },
      { en: 'Post office 📮', vi: 'Bưu điện' },
      { en: 'Market 🏪', vi: 'Chợ' },
      { en: 'Fire station 🚒', vi: 'Trạm cứu hỏa' },
    ],
  },
];
