import { useState, useEffect, useRef } from 'react';
import { parse } from 'svg-parser';

function AsciiArt() {
  const [isDark, setIsDark] = useState(false);
  const [asciiArt, setAsciiArt] = useState('');

  const characters = [
    ' ',
    '.',
    ',',
    ':',
    ';',
    'i',
    'l',
    '!',
    '>',
    '<',
    '~',
    '+',
    '*',
    '?',
    '$',
    '#',
    '@'
  ];

  //ref 선언
  const asciiArtRef = useRef<HTMLDivElement>(null);

  const toggleTheme = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  async function loadSVG(url: string): Promise<string | null> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.text();
    } catch (error) {
      console.error('SVG를 가져오는 중 오류 발생:', error);
      return null;
    }
  }

  function svgToAscii(svgText: string, width: number, height: number): string {
    try {
      const parsed = parse(svgText);

      // SVG 요소 찾기
      const svgElement = parsed.children.find(
        (child: any) => child.tagName === 'svg'
      );

      if (!svgElement) {
        console.error('SVG 요소가 없습니다.');
        return '';
      }

      let pathData = '';

      const paths = (svgElement as any).children?.filter(
        (child: any) => child.tagName === 'path'
      ) as any[];

      if (paths) {
        paths.forEach((path: any) => {
          const d = path.properties.d as string;
          if (d) {
            pathData += d + ' ';
          }
        });
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return '';

      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = 'black';

      if (pathData) {
        ctx.beginPath();
        const path = new Path2D(pathData);
        ctx.fill(path);
      }

      const imageData = ctx.getImageData(0, 0, width, height).data;
      let asciiImage = '';

      for (let i = 0; i < imageData.length; i += 4) {
        const r = imageData[i];
        const g = imageData[i + 1];
        const b = imageData[i + 2];
        const brightness = (r + g + b) / 3;
        const charIndex = Math.floor(
          (brightness / 255) * (characters.length - 1)
        );
        asciiImage += characters[charIndex];
        if ((i / 4 + 1) % width === 0) {
          asciiImage += '\n';
        }
      }

      return asciiImage;
    } catch (error) {
      console.error('SVG를 ASCII 아트로 변환하는 중 오류 발생:', error);
      return '';
    }
  }

  useEffect(() => {
    const generateAsciiArt = async () => {
      const svgUrl = 'https://aino.agency/aino-white.svg';
      const svgText = await loadSVG(svgUrl);

      if (svgText) {
        const newAsciiArt = svgToAscii(svgText, 140, 30);
        setAsciiArt(newAsciiArt);
      } else {
        setAsciiArt('Failed to load SVG.');
      }
    };

    generateAsciiArt();
  }, [isDark]);

  // CSS 스타일을 적용하는 useEffect
  useEffect(() => {
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

    // ASCII 아트 컨테이너의 색상 변경
    if (asciiArtRef.current) {
      asciiArtRef.current.style.color = isDark ? '#288dff' : '#b9d5e6';
    }
  }, [isDark]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundColor: `var(--color-surface-primary)` }}
    >
      <div
        ref={asciiArtRef}
        onClick={toggleTheme}
        className="cursor-pointer font-mono text-3xl transition-all whitespace-pre"
      >
        {asciiArt}
      </div>
    </div>
  );
}

export default AsciiArt;
