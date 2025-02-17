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

  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('isDarkMode') === 'true';
  });

  const calculateHeight = (width: number) => {
    if (width > 1100) {
      return (window.innerHeight / 3) * 2;
    } else if (width > 700) {
      return (window.innerHeight / 3) * 2;
    }
    return window.innerHeight / 2;
  };

  const calculateSVGPosition = (width: number, height: number) => {
    if (width > 1100) {
      return height * 1.5;
    } else if (width > 700) {
      return height * 1.3;
    }
    return height;
  };

  const setCameraPosition = (
    camera: THREE.PerspectiveCamera,
    width: number
  ) => {
    if (width > 1100) {
      camera.position.set(0, 750, 500);
    } else if (width > 700) {
      camera.position.set(0, 600, 500);
    } else {
      camera.position.set(0, 450, 500);
    }
  };

  useEffect(() => {
    if (!mountRef.current) return;

    const width = window.innerWidth;
    const height = calculateHeight(width);

    // Scene, Camera, Renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000);
    setCameraPosition(camera, width);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.setClearColor(0xf0f0f0);

    const effect = new AsciiEffect(renderer, ' .:-+*=%@#', {
      invert: false
    });
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
      group.position.y = calculateSVGPosition(width, height);
      group.position.x = -100;
      group.scale.set(2.2, 2.2, 2.2);
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
      const newHeight = calculateHeight(newWidth);

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      setCameraPosition(camera, newWidth);

      renderer.setSize(newWidth, newHeight);
      effect.setSize(newWidth, newHeight);

      if (svgGroupRef.current) {
        svgGroupRef.current.position.y = calculateSVGPosition(
          newWidth,
          newHeight
        );
      }
    };

    window.addEventListener('resize', onWindowResize);

    // Force initial resize
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);

    // Animation loop
    const start = Date.now();
    const animate = () => {
      requestAnimationFrame(animate);
      const timer = Date.now() - start;

      if (svgGroupRef.current) {
        const moveSpeed = 0.0001;
        const maxX = -2300;
        const minX = 0;

        if (width > 1100) {
          svgGroupRef.current.position.x =
            Math.sin(timer * moveSpeed) * (maxX - minX) - 3100;
        } else {
          svgGroupRef.current.position.x =
            Math.sin(timer * moveSpeed) * (maxX - minX) - 2600;
        }
      }
      effect.render(scene, camera);
    };
    animate();

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
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-none overflow-hidden relative pt-[5.752rem] blueBackground w-full h-full bg-gradient-to-r from-surface-tertiary from-0% via-[#D3E8FF] via-27% to-text-primary to-90%">
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
        click
      </span>
      <Lottie
        className="absolute bottom-0 left-[50vw] mx-auto transform -translate-x-1/2"
        loop={true}
        animationData={ScrollDownLottie}
      />
    </div>
  );
}
