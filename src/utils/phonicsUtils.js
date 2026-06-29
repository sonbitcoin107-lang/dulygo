export const JOLLY_PHONICS_PATTERNS = [
  "oo", "ai", "oa", "ie", "ee", "or", "ng", "ch", "sh", "th", "qu", "ou", "oi", "ue", "er", "ar", // Âm kép (Digraphs)
  "s", "a", "t", "i", "p", "n", "c", "k", "e", "h", "r", "m", "d", "g", "o", "u", "l", "f", "b", "z", "w", "v", "y", "x", "j" // Âm đơn (Monophthongs) - added 'j' which was missing in user's prompt
];

/**
 * Hàm phân rã một từ tiếng Anh thành các mảnh ghép vần chuẩn Phonics
 * Ví dụ: "boat" -> ["b", "oa", "t"]
 */
export const decomposeToPhonemes = (word) => {
  let temp = word.toLowerCase().trim();
  const phonemes = [];

  while (temp.length > 0) {
    let matched = false;
    for (const pattern of JOLLY_PHONICS_PATTERNS) {
      if (temp.startsWith(pattern)) {
        phonemes.push(pattern);
        temp = temp.slice(pattern.length);
        matched = true;
        break;
      }
    }
    if (!matched) {
      phonemes.push(temp[0]);
      temp = temp.slice(1);
    }
  }
  return phonemes;
};

/**
 * Hàm trộn ngẫu nhiên rổ chữ cái (Shuffle)
 */
export const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};
