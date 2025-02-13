import { useEffect, useState } from 'react';

const months = [
  { name: 'FEB', number: 2 },
  { name: 'MAR', number: 3 },
  { name: 'APR', number: 4 },
  { name: 'MAY', number: 5 },
  { name: 'JUN', number: 6 },
  { name: 'JUL', number: 7 },
  { name: 'AUG', number: 8 },
  { name: 'SEP', number: 9 },
  { name: 'OCT', number: 10 },
  { name: 'NOV', number: 11 },
  { name: 'DEC', number: 12 }
];

// 🚨 timeline 만드는데 달들을 와다다 배치하고 삼항연산자까지 쓰면 지저분할거 같아서 분리한 커스텀 훅입니다.
// 🚨 breakpoint 이하면 숫자달 아니면 영어달로 나타납니다.

// ⭐ 화면 크기에 따라 달 표시 방식을 결정해주는 함수임다
const getDisplayMonths = (isUnderBreakpoint: boolean) =>
  isUnderBreakpoint ? months.map((m) => m.number) : months.map((m) => m.name);

// ⭐ 리사이즈 핸들러
const useWindowResize = (breakpoint: number) => {
  const [isUnderBreakpoint, setIsUnderBreakpoint] = useState(
    window.innerWidth <= breakpoint
  );
  useEffect(() => {
    const handleResize = () => {
      setIsUnderBreakpoint(window.innerWidth <= breakpoint);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isUnderBreakpoint;
};

// ⭐ 짠 ⭐
const useResponsiveMonths = (breakpoint: number) => {
  const isUnderBreakpoint = useWindowResize(breakpoint);
  const displayMonths = getDisplayMonths(isUnderBreakpoint);

  return displayMonths;
};

export default useResponsiveMonths;
