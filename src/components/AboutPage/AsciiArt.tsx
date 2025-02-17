import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { AsciiEffect } from './AsciiEffect';
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';
import Lottie from 'lottie-react';
import ScrollDownLottie from '@/assets/lottie/scrolldown.json';
export default function AsciiArt() {
  const mountRef = useRef<HTMLDivElement>(null);
  // const mouseX = useRef(0); // useRef로 변경
  // const mouseY = useRef(0);
  const svgGroupRef = useRef<THREE.Group | null>(null); // SVG 그룹을 저장할 useRef 추가
  //
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('isDarkMode') === 'true';
  });
  useEffect(() => {
    if (!mountRef.current) return;

    //넓이, 높이 설정
    const width = window.innerWidth;
    const height = window.innerHeight / 2;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000);
    camera.position.set(0, 550, 500);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.setClearColor(0xf0f0f0);

    //무슨 문자를 넣을건지? invert는 반전
    const effect = new AsciiEffect(renderer, ' .:-+*=%@#', {
      invert: false //True로 하면 반전되어 나온다
    });
    effect.setSize(width, height);

    if (mountRef.current) {
      mountRef.current.appendChild(effect.domElement);
    }

    // Lights
    const light1 = new THREE.PointLight(0xffffff, 1);
    light1.position.set(0, 500, 500);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xff0000, 0.25);
    light2.position.set(0, -500, -500);
    scene.add(light2);

    const light3 = new THREE.PointLight(0xff0000, 0.5); // Red light with moderate intensity
    light3.position.set(0, 1000, 1000);
    scene.add(light3);

    //SVG
    const loader = new SVGLoader();
    loader.load('/ascii2.svg', function (data) {
      const paths = data.paths;
      const group = new THREE.Group();

      paths.forEach((path) => {
        const material = new THREE.MeshLambertMaterial({
          color: 0xff0000,
          side: THREE.DoubleSide,
          depthWrite: false
        });

        const shapes = SVGLoader.createShapes(path);

        shapes.forEach((shape) => {
          const geometry = new THREE.ShapeGeometry(shape);
          const mesh = new THREE.Mesh(geometry, material);
          group.add(mesh);
        });
      });
      svgGroupRef.current = group; // useRef에 저장
      scene.add(group);
      group.position.y = height * 2.2; // 기존 height * 2 → 1.2로 줄여서 중앙 정렬
      group.position.x = -100; // x 축 정렬
      group.scale.set(2.2, 2.2, 2.2);
      group.rotateX(Math.PI);
    });

    // const onMouseMove = (event: MouseEvent) => {
    //   mouseX.current = (event.clientX / window.innerWidth) * 2 - 1;
    //   mouseY.current = -(event.clientY / window.innerHeight) * 2 + 1;
    // };

    // document.addEventListener('mousemove', onMouseMove);

    // Resize handling
    const onWindowResize = () => {
      const newWidth = window.innerWidth;
      const newHeight =
        newWidth > 1100 ? (window.innerHeight / 4) * 3 : window.innerHeight / 2;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      effect.setSize(newWidth, newHeight);
    };

    // Animation loop
    const start = Date.now();
    const animate = () => {
      requestAnimationFrame(animate);
      const timer = Date.now() - start;

      if (svgGroupRef.current) {
        const moveSpeed = 0.00009;
        const maxX = -2100; // 최대 이동 범위
        const minX = 0; // 최소 이동 범위

        svgGroupRef.current.position.x =
          Math.sin(timer * moveSpeed) * (maxX - minX) - 3000;
      }
      effect.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      mountRef.current?.removeChild(effect.domElement);
    };
  }, []);

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
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('isDarkMode', String(newTheme));
    applyTheme(newTheme);
  };

  const mouseFollow = document.querySelector('.mouse-follow') as HTMLElement;
  document.addEventListener('mousemove', (e) => {
    if (mouseFollow) {
      mouseFollow.style.top = e.clientY + 'px';
      mouseFollow.style.left = e.clientX + 'px';
    }
  });

  return (
    <div className="flex items-center justify-center overflow-hidden absolute pt-[5.752rem]   blueBackground w-full h-full bg-gradient-to-r from-surface-tertiary from-0% via-[#D3E8FF] via-27% to-text-primary to-90%">
      <div
        id="ascii_container"
        className="text-text-invert font-[900] cursor-pointer flex items-center"
        ref={mountRef}
      />
      <div className="top-[5.752rem] md:top-[18.2rem] 2xl:top-[5.752rem] w-full h-full absolute" />
      {/* <span
        onClick={() => toggleTheme()}
        className="font-d2 text-[1.5rem] text-text-invert absolute top-[1rem] left-[1rem] mouse-follow w-[5rem] h-[5rem]"
      >
        click
      </span> */}
      <Lottie
        className="absolute bottom-0 left-[50vw] mx-auto transform -translate-x-1/2"
        // style={{ height: "50%" }}
        loop={true}
        animationData={ScrollDownLottie}
      />
    </div>
  );
}
