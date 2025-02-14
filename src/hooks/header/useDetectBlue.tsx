import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const GetSetBlueBackground = () => {
  const [isBlueBackground, setIsBlueBackground] = useState(false);
  const location = useLocation();
  const threshold = location.pathname !== '/people' ? 0.5 : 0;
  // 🚨변경사항
  // 기존에는 옵저버의 threshold가 0.5라서 blueBackground가 적용된 people페이지에서도 blueBackground를 가진요소가 50%이상 보이면
  // 해더의 색이 바뀌기 때문에 useLocation을 이용해서 people 페이지에서는 threshold를 0으로 하여 예외처리하였습니다.
  // 더 좋은 방법있으면 추천 받습니다.

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsBlueBackground(
              entry.target.classList.contains('blueBackground')
            );
          } else {
            setIsBlueBackground(false);
          }
        });
      },
      { threshold: threshold } // 요소가 50% 이상 보일 때 감지
    );

    const sections = document.querySelectorAll('.blueBackground');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [location.pathname]);

  return isBlueBackground;
};

const useDetectBlue = () => {
  return GetSetBlueBackground();
};

export default useDetectBlue;
