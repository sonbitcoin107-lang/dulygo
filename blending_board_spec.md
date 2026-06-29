# Technical Specification: Interactive Blending Board (Cỗ Máy Ghép Vần)
---
**Product Target:** Children 4–7 Years Old (Giai đoạn Phonics cơ bản)
**Goal:** Chuyển đổi từ nhận diện âm tiết đơn lẻ sang kỹ năng tự động hóa ghép vần (Blending) từ trái sang phải mà không học vẹt.

---

## 1. TRIẾT LÝ SƯ PHẠM VÀ UX FLOW (USER EXPERIENCE)

Trong Jolly Phonics, ghép vần (Blending) là kỹ năng cốt lõi để trẻ tự giải mã chữ viết. Trẻ không đọc vẹt cả từ, mà nhìn từng chữ cái, phát âm từng âm đơn lẻ rồi hòa quyện chúng lại với nhau để tạo thành từ hoàn chỉnh.

### Giao diện "Cỗ Máy Ghép Vần" gồm 3 khu vực chính:
1.  **Khay chữ cái (Letter Dock - Bottom):** Chứa các quân bài chữ cái (Tiles) mà trẻ đã được mở khóa (Ví dụ Nhóm 1: `s, a, t, i, p, n`).
2.  **Khung ghép vần (Active Slots - Middle):** Gồm 3 ô trống (đại diện cho cấu trúc từ ngắn CVC - Phụ âm - Nguyên âm - Phụ âm).
3.  **Thanh trượt liên kết (Swipe Blending Bar - Below Active Slots):** Một thanh chạy dài dưới 3 ô ghép. Khi bé dùng ngón tay vuốt một đường mượt mà từ trái sang phải, âm thanh hòa quyện (blended sound) sẽ vang lên kèm hiệu ứng ánh sáng chạy dọc theo đường tay bé vuốt.

---

## 2. LUỒNG TƯƠNG TÁC CHI TIẾT (INTERACTION FLOW)

```
[Bé kéo chữ 's'] ----> [Thả vào Slot 1] ----> Phát âm /s/ đơn lẻ (Short Sound)
[Bé kéo chữ 'a'] ----> [Thả vào Slot 2] ----> Phát âm /æ/ đơn lẻ (Short Sound)
[Bé kéo chữ 't'] ----> [Thả vào Slot 3] ----> Phát âm /t/ đơn lẻ (Short Sound)

[Bé vuốt ngón tay từ Trái sang Phải trên thanh Swipe Bar]
  ├─> Đèn LED dưới chân chữ 's' sáng -> Loa phát: "/ssss/"
  ├─> Đèn LED dưới chân chữ 'a' sáng -> Loa phát: "/ææ/"
  ├─> Đèn LED dưới chân chữ 't' sáng -> Loa phát: "/t/"
  └─> Hiệu ứng bùng nổ (Sparkle) ------> Loa phát từ hoàn chỉnh: "/sæt/! SAT!"
```

---

## 3. CƠ SỞ DỮ LIỆU ĐỒNG BỘ (DATA STRUCTURE)

AI Code cần cấu trúc dữ liệu sau để quản lý các chữ cái (Phonemes) và bộ từ điển kiểm tra từ có nghĩa (Valid Blending Dictionary).

### 3.1. Phoneme Schema (Cơ sở dữ liệu âm đơn)
```json
{
  "phonemes": [
    { "letter": "s", "sound_file": "audio/phonemes/s.mp3", "color": "#FF5733" },
    { "letter": "a", "sound_file": "audio/phonemes/a.mp3", "color": "#33FF57" },
    { "letter": "t", "sound_file": "audio/phonemes/t.mp3", "color": "#3357FF" },
    { "letter": "i", "sound_file": "audio/phonemes/i.mp3", "color": "#F3FF33" },
    { "letter": "p", "sound_file": "audio/phonemes/p.mp3", "color": "#FF33F3" },
    { "letter": "n", "sound_file": "audio/phonemes/n.mp3", "color": "#33FFF0" }
  ]
}
```

### 3.2. Blending Dictionary Schema (Từ điển ghép vần hợp lệ)
Khi trẻ xếp các chữ cái tạo thành một từ có nghĩa, ứng dụng sẽ kích hoạt phần thưởng tương ứng (Emoji + Tranh vẽ + Phát âm từ hoàn chỉnh).
```json
{
  "words": [
    {
      "combination": ["s", "a", "t"],
      "blended_word": "sat",
      "audio_file": "audio/words/sat.mp3",
      "emoji": "🪑",
      "vi": "đã ngồi xuống"
    },
    {
      "combination": ["p", "a", "t"],
      "blended_word": "pat",
      "audio_file": "audio/words/pat.mp3",
      "emoji": "👋",
      "vi": "vỗ nhẹ nhẹ"
    },
    {
      "combination": ["t", "a", "p"],
      "blended_word": "tap",
      "audio_file": "audio/words/tap.mp3",
      "emoji": "🚰",
      "vi": "vòi nước"
    },
    {
      "combination": ["p", "i", "n"],
      "blended_word": "pin",
      "audio_file": "audio/words/pin.mp3",
      "emoji": "📌",
      "vi": "cái ghim giấy"
    }
  ]
}
```

---

## 4. CODE MẪU "CHÌA KHÓA TRAO TAY" (REACT NATIVE / EXPO)

Dưới đây là đoạn mã nguồn React Native hoàn chỉnh sử dụng thư viện cử chỉ `react-native-gesture-handler` và `react-native-reanimated` để tạo trải nghiệm kéo thả mượt mà cho bé. Hãy đưa thẳng đoạn code này cho AI Code của bạn:

```tsx
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { GestureHandlerRootView, GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, runOnJS } from 'react-native-reanimated';
import { Audio } from 'expo-av';

const { width } = Dimensions.get('window');
const SLOT_SIZE = 80;
const TILE_SIZE = 70;

interface LetterTileProps {
  letter: string;
  index: number;
  onDrop: (letter: string, slotIndex: number) => void;
}

// Chữ cái có thể kéo thả
const DraggableTile = ({ letter, index, onDrop }: LetterTileProps) => {
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);

  const dragGesture = Gesture.Pan()
    .onUpdate((event) => {
      translationX.value = event.translationX;
      translationY.value = event.translationY;
    })
    .onEnd((event) => {
      // Logic kiểm tra vị trí thả rơi (vị trí tương đối của Slots)
      const dropX = event.absoluteX;
      const dropY = event.absoluteY;
      
      // Giả lập kiểm tra xem có thả trúng 3 ô Slots ở giữa màn hình không
      let targetSlot = -1;
      if (dropY > 250 && dropY < 400) {
        if (dropX > width/2 - 130 && dropX < width/2 - 50) targetSlot = 0;
        else if (dropX > width/2 - 40 && dropX < width/2 + 40) targetSlot = 1;
        else if (dropX > width/2 + 50 && dropX < width/2 + 130) targetSlot = 2;
      }

      if (targetSlot !== -1) {
        // Gọi hàm xử lý nạp chữ vào slot
        runOnJS(onDropSuccess)(letter, targetSlot);
      }

      // Trả quân bài về vị trí ban đầu với hiệu ứng lò xo mượt mà
      translationX.value = withSpring(0);
      translationY.value = withSpring(0);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translationX.value },
      { translateY: translationY.value },
    ],
  }));

  return (
    <GestureDetector gesture={dragGesture}>
      <Animated.View style={[styles.tile, animatedStyle]}>
        <Text style={styles.tileText}>{letter}</Text>
      </Animated.View>
    </GestureDetector>
  );
};

export default function BlendingBoard() {
  const [slots, setSlots] = useState<(string | null)[]>([null, null, null]);
  const [resultWord, setResultWord] = useState<string | null>(null);

  const playSound = async (uri: string) => {
    const { sound } = await Audio.Sound.createAsync({ uri });
    await sound.playAsync();
  };

  const onDropSuccess = (letter: string, slotIndex: number) => {
    const newSlots = [...slots];
    newSlots[slotIndex] = letter;
    setSlots(newSlots);
    
    // Phát âm thanh đơn lẻ của chữ cái vừa thả
    playSound(`https://yourdomain.com/audio/phonemes/${letter}.mp3`);

    // Kiểm tra xem đã đủ 3 chữ cái chưa để check từ điển ghép vần
    if (newSlots.every(s => s !== null)) {
      const word = newSlots.join('');
      // Giả sử có hàm check từ điển
      checkWord(word);
    }
  };

  const checkWord = (word: string) => {
    const dictionary: Record<string, { vi: string, emoji: string }> = {
      "sat": { vi: "đã ngồi xuống", emoji: "🪑" },
      "tap": { vi: "vòi nước", emoji: "🚰" },
      "pat": { vi: "vỗ nhẹ", emoji: "👋" },
    };

    if (dictionary[word]) {
      setResultWord(`${dictionary[word].emoji} ${word.toUpperCase()}: ${dictionary[word].vi}`);
      // Phát âm thanh hòa quyện (blended word)
      playSound(`https://yourdomain.com/audio/words/${word}.mp3`);
    } else {
      setResultWord("❌ Thử lại từ khác bé nhé!");
    }
  };

  const resetBoard = () => {
    setSlots([null, null, null]);
    setResultWord(null);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <Text style={styles.title}>CỖ MÁY GHÉP VẦN</Text>
      
      {/* 3 Ô trống Slots để ghép chữ */}
      <View style={valueStyle.slotsContainer}>
        {slots.map((char, index) => (
          <View key={index} style={styles.slot}>
            {char ? (
              <Text style={styles.slotText}>{char}</Text>
            ) : (
              <Text style={styles.slotPlaceholder}>?</Text>
            )}
          </View>
        ))}
      </View>

      {/* Hiển thị kết quả */}
      {resultWord && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>{resultWord}</Text>
        </View>
      )}

      {/* Khay chứa chữ cái phía dưới để kéo lên */}
      <View style={styles.dock}>
        {['s', 'a', 't', 'i', 'p', 'n'].map((letter, idx) => (
          <MouthShapeTile key={idx} letter={letter} index={idx} onDrop={onDropSuccess} />
        ))}
      </View>

      <Text style={styles.resetButton} onPress={resetBoard}>Làm sạch bảng 🧹</Text>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFEE0', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#FF7F50', marginBottom: 40 },
  slotsContainer: { flexDirection: 'row', justifyContent: 'space-between', width: width - 80, marginBottom: 50 },
  slot: { width: SLOT_SIZE, height: SLOT_SIZE, borderWidth: 3, borderStyle: 'dashed', borderColor: '#FF7F50', borderRadius: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF' },
  slotText: { fontSize: 36, fontWeight: 'bold', color: '#333' },
  slotPlaceholder: { fontSize: 24, color: '#DDD' },
  dock: { flexDirection: 'row', width: width - 40, justifyContent: 'space-around', backgroundColor: '#FFEDCC', padding: 15, borderRadius: 20 },
  tile: { width: TILE_SIZE, height: TILE_SIZE, backgroundColor: '#FF7F50', borderRadius: 15, alignItems: 'center', justifyContent: 'center', shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 3, elevation: 5 },
  tileText: { fontSize: 32, fontWeight: 'bold', color: '#FFF' },
  resultBox: { padding: 15, backgroundColor: '#E4FCE3', borderRadius: 15, marginBottom: 20 },
  resultText: { fontSize: 18, color: '#277025', fontWeight: 'bold' },
  resetButton: { marginTop: 30, fontSize: 16, color: '#007AFF', textDecorationLine: 'underline' }
});
```

---

## 5. THỜI GIAN & GIẢI THUẬT ÂM THANH BLENDING

Để việc học ghép vần tự nhiên và không tốn chi phí thu âm cho hàng nghìn từ ghép ngẫu nhiên, hệ thống âm thanh cần áp dụng cơ chế ghép nối động (Dynamic Sound Stitching):

1.  **Hệ số khoảng cách âm (Pitch & Interval Gap):** 
    *   *Lần quét 1 (Chậm):* Phát âm tiết 1 -> nghỉ 0.5s -> phát âm tiết 2 -> nghỉ 0.5s -> phát âm tiết 3.
    *   *Lần quét 2 (Nhanh):* Phát âm tiết 1 -> nghỉ 0.2s -> phát âm tiết 2 -> nghỉ 0.2s -> phát âm tiết 3.
    *   *Lần quét 3 (Hòa quyện hoàn toàn):* Phát file pre-recorded từ hoàn chỉnh (Ví dụ: `sat.mp3`).
2.  **Khử nhiễu khoảng lặng (Fade-In/Fade-Out):** Các file mp3 âm đơn phải được nén sạch, loại bỏ khoảng lặng 0.05s ở đầu và cuối file để khi hệ thống ghép nối các âm đơn lại bằng code, âm thanh không bị giật hoặc đứt quãng.
