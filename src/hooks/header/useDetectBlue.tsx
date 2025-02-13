import { useEffect, useState } from 'react';

const getSetBlueBackground = () => {
  const [isBlueBackground, setIsBlueBackground] = useState(false);
  const location = window.location.href;

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
      { threshold: 0.5 } // 요소가 50% 이상 보일 때 감지
    );

    const sections = document.querySelectorAll('.blueBackground');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [location]);

  return isBlueBackground;
};

const useDetectBlue = () => {
  return getSetBlueBackground();
};

export default useDetectBlue;
