import MoonIcon from '@/assets/svg/moon.svg?react';

export default function ThemeButton() {
  return (
    <div
      id="theme-button"
      className="w-[3.1rem] h-[3.1rem] flex items-center justify-center border border-primary-normal rounded-[50%]"
    >
      <MoonIcon className="w-[1.6rem] h-[1.6rem]" />
    </div>
  );
}
