import { useState, useEffect } from 'react';

export default function AsciiTheme({ isClicked }: { isClicked: boolean }) {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('isDarkMode') === 'true';
  });

  // 📌 기존에 toggleTheme 안에 있던 색을 변경하는 기능을 분리했습니다다
  const applyTheme = (isDark: boolean) => {
    const colors = {
      '--color-surface-primary': isDark ? '#232325' : '#ffffff',
      '--color-surface-secondary': isDark ? '#303034' : '#e9f4ff',
      '--color-surface-tertiary': isDark ? '#39393b' : '#8dc2ff',
      '--color-text-primary': isDark ? '#b9d5e6' : '#288dff',
      '--color-text-secondary': isDark ? '#d2e6f2' : '#8dc2ff',
      '--color-text-invert': isDark ? '#232325' : '#ffffff'
    };

    Object.entries(colors).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });
  };

  useEffect(() => {
    // Run the theme toggle when isClicked changes
    if (isClicked) {
      const newTheme = !isDark;
      setIsDark(newTheme);
      localStorage.setItem('isDarkMode', String(newTheme));
      applyTheme(newTheme);
    }
  }, [isClicked, isDark]); // Run whenever isClicked or isDark changes

  return null; // No UI, only theme effect
}
