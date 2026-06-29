// src/utils/audio.js
// Web Audio API for sound effects

let audioCtx = null;

const getCtx = () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
};

const playTone = (frequency, duration, type = 'sine', volume = 0.3) => {
  try {
    const ctx = getCtx();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);
    gainNode.gain.setValueAtTime(volume, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
  } catch {}
};

export const playCorrect = () => {
  // Happy ascending arpeggio
  playTone(523, 0.1, 'sine', 0.2);
  setTimeout(() => playTone(659, 0.1, 'sine', 0.2), 100);
  setTimeout(() => playTone(784, 0.15, 'sine', 0.2), 200);
  setTimeout(() => playTone(1047, 0.25, 'sine', 0.2), 300);
};

export const playWrong = () => {
  // Low descending thud
  playTone(220, 0.15, 'sawtooth', 0.15);
  setTimeout(() => playTone(180, 0.2, 'sawtooth', 0.1), 120);
};

export const playClick = () => {
  playTone(440, 0.05, 'sine', 0.1);
};

export const playSuccess = () => {
  // Victory fanfare
  [523, 659, 784, 1047, 1319].forEach((freq, i) => {
    setTimeout(() => playTone(freq, 0.15, 'sine', 0.2), i * 80);
  });
};

export const playHeartLost = () => {
  playTone(300, 0.1, 'sawtooth', 0.2);
  setTimeout(() => playTone(250, 0.2, 'sawtooth', 0.15), 100);
};

export const playLevelUp = () => {
  [262, 330, 392, 523, 659, 784].forEach((freq, i) => {
    setTimeout(() => playTone(freq, 0.2, 'sine', 0.25), i * 60);
  });
};

// Text-to-speech for English words
export const speakEnglish = (text) => {
  if (!window.speechSynthesis) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.85;
  utterance.pitch = 1.1;
  utterance.volume = 0.9;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
};
