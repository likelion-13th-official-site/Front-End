import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { AsciiEffect } from './AsciiEffect';
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';
import Lottie from 'lottie-react';
import ScrollDownLottie from '@/assets/lottie/scrolldown.json';

export default function AsciiArt() {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const svgGroupRef = useRef<THREE.Group | null>(null);
  const [showClick, setShowClick] = useState(false);

  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('isDarkMode') === 'true';
  });

  const calculateHeight = () => window.innerHeight;

  const calculateSVGPosition = (height: number) => height / 2 + 350;

  const setCameraPosition = (
    camera: THREE.PerspectiveCamera,
    height: number
  ) => {
    camera.position.set(0, height / 2, 500);
  };

  useEffect(() => {
    if (!mountRef.current) return;

    const width = window.innerWidth;
    const height = calculateHeight();

    // Scene, Camera, Renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000);
    setCameraPosition(camera, height);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.setClearColor(0xf0f0f0);

    const effect = new AsciiEffect(renderer, ' .:-+*=%@#', { invert: false });
    effect.setSize(width, height);

    if (mountRef.current) {
      mountRef.current.appendChild(effect.domElement);
    }

    // Lights setup
    const light1 = new THREE.PointLight(0xffffff, 1);
    light1.position.set(0, 500, 500);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xff0000, 0.25);
    light2.position.set(0, -500, -500);
    scene.add(light2);

    const light3 = new THREE.PointLight(0xff0000, 0.5);
    light3.position.set(0, 1000, 1000);
    scene.add(light3);

    // SVG Loading
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

      svgGroupRef.current = group;
      scene.add(group);
      group.position.y = calculateSVGPosition(height);
      group.position.x = -100;
      group.scale.set(1.8, 1.8, 1.8);
      group.rotateX(Math.PI);
    });

    const onMouseMove = (event: MouseEvent) => {
      mouseX.current = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY.current = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    document.addEventListener('mousemove', onMouseMove);

    // Resize handling
    const onWindowResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = calculateHeight();

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      setCameraPosition(camera, newHeight);

      renderer.setSize(newWidth, newHeight);
      effect.setSize(newWidth, newHeight);

      if (svgGroupRef.current) {
        svgGroupRef.current.position.y = calculateSVGPosition(newHeight);
      }
    };

    window.addEventListener('resize', onWindowResize);

    // Force initial resize
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);

    // Animation loop
    const targetFPS = 30; // ✅ 프레임을 144FPS로 증가 (60FPS로 하고 싶으면 60으로 변경)
    const frameInterval = 1000 / targetFPS; // ✅ 프레임 간격 조절
    let lastFrameTime = 0;

    const start = Date.now();
    const animate = (time: number) => {
      requestAnimationFrame(animate);

      if (time - lastFrameTime < frameInterval) return; // ✅ 프레임 제한 적용
      lastFrameTime = time;

      const timer = Date.now() - start;

      if (svgGroupRef.current) {
        const moveSpeed = 0.0001; // ✅ 기존보다 빠르게 설정
        const maxX = -1300;
        const minX = 0;

        svgGroupRef.current.position.x =
          Math.sin(timer * moveSpeed) * (maxX - minX) - 3200;
      }

      effect.render(scene, camera);
    };
    animate(0);

    return () => {
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('mousemove', onMouseMove);
      mountRef.current?.removeChild(effect.domElement);
    };
  }, []);

  const applyTheme = (isDark: boolean) => {
    const colors = {
      '--color-surface-primary': isDark ? '#232325' : '#ffffff',
      '--color-surface-secondary': isDark ? '#303034' : '#e4edf7',
      '--color-surface-tertiary': isDark ? '#39393b' : '#5c8cc2',
      '--color-text-primary': isDark ? '#bad5e6' : '#0e54a4',
      '--color-text-secondary': isDark ? '#7c8e99' : '#5c8cc2',
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

  useEffect(() => {
    const mouseFollow = document.querySelector('.mouse-follow') as HTMLElement;
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseFollow) {
        mouseFollow.style.top = e.clientY + 'px';
        mouseFollow.style.left = e.clientX + 'px';
      }

      if (!showClick) setShowClick(true);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="horizontal_gradient cursor-none overflow-hidden relative pt-[5.752rem] blueBackground w-full h-full">
      <div
        id="ascii_container"
        className="text-text-invert font-[900] cursor-pointer"
        ref={mountRef}
      />
      <div
        onClick={toggleTheme}
        className="top-[5.752rem] md:top-[18.2rem] 2xl:top-[5.752rem] w-full h-full absolute"
      />

      <span
        onClick={toggleTheme}
        className="font-d2 text-[1.5rem] text-text-invert absolute top-[50vh] left-[25vw] mouse-follow w-[5rem] h-[5rem]"
      >
        {showClick && (
          <div className=" h-[50px] flex items-center justify-center text-text-primary bg-text-invert rounded-full">
            {showClick && 'click'}
          </div>
        )}
      </span>

      <div className="lottie-container [&_svg]:text-text-secondary [&_svg]:fill-current [&_svg]:stroke-current">
        <Lottie
          rendererSettings={{
            preserveAspectRatio: 'xMidYMid slice',
            progressiveLoad: true
          }}
          className="absolute bottom-0 left-[50vw] mx-auto transform -translate-x-1/2"
          loop={true}
          animationData={ScrollDownLottie}
        />
      </div>
    </div>
  );
}
