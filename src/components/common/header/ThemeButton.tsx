import clsx from 'clsx';
import { useLayoutEffect, useState } from 'react';

// 🚨비상!🚨
// 다크 모드 적용하더 페이지 이동하면 다크모드가 풀리는 문제!!
// 문제 원인은 해더에서 다크모드의 state를 관리하기 때문
// 더 들어가서 근본적인 원인은 페이지 이동이 a태그로 이루어져서 그런듯 합니다
// 페이지 이동시마다 앱 컴포넌트가 싸악 리로드되서 그런듯
// App-HeaderLayout--Header-ThemeButton-🔖isDark
//                  |-PageComponent
//                  |-Footer
// 로컬스토리지를 통해서 관리하도록 수정해보겠슴다.

export default function ThemeButton({
  isBlueBackground,
  isMenuOpen
}: {
  isBlueBackground: boolean;
  isMenuOpen?: boolean;
}) {
  // 📌 렌더링 되면 로컬스토리지에서 다크모드가 있는지 확인/✅있으면 true 반환!
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('isDarkMode') === 'true';
  });

  // 📌 기존에 toggleTheme 안에 있던 색을 변경하는 기능을 분리했습니다다
  const applyTheme = (isDark: boolean) => {
    // 컬러가 반대로 되어있어서 수정했습니다.
    const colors = {
      '--color-surface-primary': isDark ? '#232325' : '#ffffff',
      '--color-surface-secondary': isDark ? '#303034' : '#e9f4ff',
      '--color-surface-tertiary': isDark ? '#39393b' : '#8dc2ff',
      '--color-text-primary': isDark ? '#b9d5e6' : '#288dff',
      '--color-text-secondary': isDark ? '#d2e6f2' : '#8dc2ff',
      '--color-text-invert': isDark ? '#ffffff' : '#232325'
    };

    Object.entries(colors).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });
  };

  // 📌 toggleTheme 실행되면 로컬스토리지에 먼저 다크모드 상태 저장하고
  // 📌 그 담에 모드에 맞는 스타일 싸악 전역에 먹이고
  // 📌 state 토글하면서 리렌더링 유발시키고
  // 📌 이 작업들은 모두 한 페이지 내에서 토글 버튼을 눌렀을 때에 해당하는 상황임을 알아주세용
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('isDarkMode', String(newTheme));
    applyTheme(newTheme);
  };

  // 📌 useLayoutEffect를 사용해서 화면에 페인팅되기 전에 색을 먼저 전역에 먹입니다.
  // 📌 useEffect: 페인팅 후에 작동/ useLayoutEffect: 페인팅 전에 작동
  // 📌 이 작업은 페이지 이동시 발생하는 작업입니다.
  // 📌 페이지 이동하면 싸악 리로드할 때, 여기서는 로컬스토리지에 있는지 여부로 isDark가 초기화됩니다.
  // 📌 그 다음에 페인팅하기 전에 스타일을 먹이는 겁니다.
  useLayoutEffect(() => {
    applyTheme(isDark);
  }, []);

  return (
    <div
      onClick={() => toggleTheme()}
      id="theme-button"
      className={clsx(
        'group cursor-pointer flex-shrink-0 w-[3.1rem] h-[3.1rem] flex items-center justify-center border border-primary-normal rounded-[50%]',
        isBlueBackground || isMenuOpen
          ? 'hover:bg-text-invert border-text-invert '
          : 'hover:border-text-primary  hover:bg-text-primary'
      )}
    >
      {isDark ? (
        <SunIcon isBlueBackground={isBlueBackground} isMenuOpen={isMenuOpen} />
      ) : (
        <MoonIcon isBlueBackground={isBlueBackground} isMenuOpen={isMenuOpen} />
      )}
    </div>
  );
}

const SunIcon = ({
  isBlueBackground,
  isMenuOpen
}: {
  isBlueBackground: boolean;
  isMenuOpen?: boolean;
}) => (
  <svg
    className="w-[1.6rem] h-[1.6rem]"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 1C8.27614 1 8.5 1.22386 8.5 1.5V3C8.5 3.27614 8.27614 3.5 8 3.5C7.72386 3.5 7.5 3.27614 7.5 3V1.5C7.5 1.22386 7.72386 1 8 1ZM3.0502 3.0502C3.24546 2.85493 3.56204 2.85493 3.7573 3.0502L4.81793 4.11082C5.01319 4.30608 5.01319 4.62267 4.81793 4.81793C4.62267 5.01319 4.30608 5.01319 4.11082 4.81793L3.0502 3.7573C2.85493 3.56204 2.85493 3.24546 3.0502 3.0502ZM12.9498 3.0502C13.1451 3.24546 13.1451 3.56204 12.9498 3.7573L11.8892 4.81793C11.6939 5.01319 11.3773 5.01319 11.1821 4.81793C10.9868 4.62267 10.9868 4.30608 11.1821 4.11082L12.2427 3.0502C12.438 2.85493 12.7545 2.85493 12.9498 3.0502ZM1 8C1 7.72386 1.22386 7.5 1.5 7.5H3C3.27614 7.5 3.5 7.72386 3.5 8C3.5 8.27614 3.27614 8.5 3 8.5H1.5C1.22386 8.5 1 8.27614 1 8ZM12.5 8C12.5 7.72386 12.7239 7.5 13 7.5H14.5C14.7761 7.5 15 7.72386 15 8C15 8.27614 14.7761 8.5 14.5 8.5H13C12.7239 8.5 12.5 8.27614 12.5 8ZM4.81793 11.1821C5.01319 11.3773 5.01319 11.6939 4.81793 11.8892L3.7573 12.9498C3.56204 13.1451 3.24546 13.1451 3.0502 12.9498C2.85493 12.7545 2.85493 12.438 3.0502 12.2427L4.11082 11.1821C4.30608 10.9868 4.62267 10.9868 4.81793 11.1821ZM11.1821 11.1821C11.3773 10.9868 11.6939 10.9868 11.8892 11.1821L12.9498 12.2427C13.1451 12.438 13.1451 12.7545 12.9498 12.9498C12.7545 13.1451 12.438 13.1451 12.2427 12.9498L11.1821 11.8892C10.9868 11.6939 10.9868 11.3773 11.1821 11.1821ZM8 12.5C8.27614 12.5 8.5 12.7239 8.5 13V14.5C8.5 14.7761 8.27614 15 8 15C7.72386 15 7.5 14.7761 7.5 14.5V13C7.5 12.7239 7.72386 12.5 8 12.5Z"
      className={clsx(
        isBlueBackground || isMenuOpen
          ? 'fill-text-invert group-hover:fill-text-primary'
          : 'fill-text-primary group-hover:fill-text-invert'
      )}
    />
    <path
      d="M8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6ZM5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8Z"
      className={clsx(
        isBlueBackground || isMenuOpen
          ? 'fill-text-invert group-hover:fill-text-primary'
          : 'fill-text-primary group-hover:fill-text-invert'
      )}
    />
  </svg>
);

const MoonIcon = ({
  isBlueBackground,
  isMenuOpen
}: {
  isBlueBackground: boolean;
  isMenuOpen?: boolean;
}) => (
  <svg
    className="w-[1.6rem] h-[1.6rem]"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="react-icons">
      <path
        id="Vector"
        d="M8.75 15.5001C6.82718 15.5001 4.98311 14.7362 3.62348 13.3766C2.26384 12.017 1.5 10.1729 1.5 8.25008C1.5 5.31258 3.1875 2.67883 5.80031 1.54164C5.8924 1.50151 5.99444 1.49004 6.09313 1.50874C6.19183 1.52743 6.2826 1.57542 6.35363 1.64645C6.42466 1.71748 6.47265 1.80825 6.49134 1.90695C6.51004 2.00564 6.49857 2.10768 6.45844 2.19977C6.15844 2.88852 6 3.7707 6 4.75008C6 8.19633 8.80375 11.0001 12.25 11.0001C13.2294 11.0001 14.1116 10.8416 14.8003 10.5416C14.8924 10.5015 14.9944 10.49 15.0931 10.5087C15.1918 10.5274 15.2826 10.5754 15.3536 10.6464C15.4247 10.7175 15.4726 10.8083 15.4913 10.9069C15.51 11.0056 15.4986 11.1077 15.4584 11.1998C14.3213 13.8126 11.6875 15.5001 8.75 15.5001Z"
        className={clsx(
          isBlueBackground || isMenuOpen
            ? 'fill-text-invert group-hover:fill-text-primary'
            : 'fill-text-primary group-hover:fill-text-invert'
        )}
      />
    </g>
  </svg>
);
