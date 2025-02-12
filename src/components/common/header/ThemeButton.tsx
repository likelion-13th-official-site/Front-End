import MoonIcon from '@/assets/svg/moon.svg?react';
import { useState } from 'react';

export default function ThemeButton() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const colors = {
      '--color-surface-primary': isDark ? '#ffffff' : '#232325',
      '--color-surface-secondary': isDark ? '#e9f4ff' : '#303034',
      '--color-surface-tertiary': isDark ? '#8dc2ff' : '#39393b',
      '--color-text-primary': isDark ? '#288dff' : '#b9d5e6',
      '--color-text-secondary': isDark ? '#8dc2ff' : '#d2e6f2',
      '--color-text-invert': isDark ? '#ffffff' : '#232325'
    };

    Object.entries(colors).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });

    setIsDark(!isDark);
  };

  return (
    <div
      onClick={() => toggleTheme()}
      id="theme-button"
      className="flex-shrink-0 w-[3.1rem] h-[3.1rem] flex items-center justify-center border border-primary-normal rounded-[50%]"
    >
      <MoonIcon className="w-[1.6rem] h-[1.6rem]" />
    </div>
  );
}
