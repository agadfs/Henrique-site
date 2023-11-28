// atoms.js
import { atom } from 'recoil';

// Function to get dark mode preference from local storage
const getDarkModePreference = () => {
  const savedDarkMode = localStorage.getItem('darkModePreference');
  return savedDarkMode ? JSON.parse(savedDarkMode) : true;
};

export const darkModeState = atom({
  key: 'darkModeState',
  default: getDarkModePreference(),
});

// Function to set dark mode preference in local storage
export const setDarkModePreference = (value) => {
  localStorage.setItem('darkModePreference', JSON.stringify(value));
};