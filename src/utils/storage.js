// src/utils/storage.js
// Handles all localStorage persistence

const KEY = 'dulygo_state';
const PROFILE_KEY = 'dulygo_profile';

export const saveState = (state) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {}
};

export const loadState = () => {
  try {
    const data = localStorage.getItem(KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

export const saveProfile = (profile) => {
  try {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  } catch {}
};

export const loadProfile = () => {
  try {
    const data = localStorage.getItem(PROFILE_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

export const clearAll = () => {
  localStorage.removeItem(KEY);
  localStorage.removeItem(PROFILE_KEY);
};

// Check if user has completed onboarding
export const hasOnboarded = () => {
  return !!loadProfile();
};
