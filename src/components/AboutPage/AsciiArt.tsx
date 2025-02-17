import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { AsciiEffect } from './AsciiEffect';
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';
// import AsciiTheme from './asciiTheme';
export default function AsciiArt() {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0); // useRef로 변경
  const mouseY = useRef(0);
  const svgGroupRef = useRef<THREE.Group | null>(null); // SVG 그룹을 저장할 useRef 추가
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    //넓이, 높이 설정
    const width = window.innerWidth;
    const height =
      width > 1000 ? (window.innerHeight / 4) * 3 : window.innerHeight / 2;

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
      group.position.y = width > 1000 ? height * 2 : height * 3;
      group.scale.set(2.5, 2.5, 2.5);
      group.rotateX(Math.PI);
    });

    // const loader2 = new SVGLoader();
    // loader2.load('/logo2.svg', function (data) {
    //   const paths = data.paths;
    //   const group = new THREE.Group();

    //   paths.forEach((path) => {
    //     const material = new THREE.MeshLambertMaterial({
    //       color: 0xffff00,
    //       side: THREE.DoubleSide,
    //       depthWrite: false
    //     });

    //     const shapes = SVGLoader.createShapes(path);

    //     shapes.forEach((shape) => {
    //       const geometry = new THREE.ShapeGeometry(shape);
    //       const mesh = new THREE.Mesh(geometry, material);
    //       group.add(mesh);
    //     });
    //   });
    //   setGroup2(group);
    //   group.position.y = height * 2;
    //   group.scale.set(4.2, 4.2, 4.2);
    //   group.rotateX(Math.PI);

    //   groupRef.current = group; // useRef에 저장
    //   scene.add(group);
    // });

    const onMouseMove = (event: MouseEvent) => {
      mouseX.current = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY.current = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    document.addEventListener('mousemove', onMouseMove);

    // Resize handling
    const onWindowResize = () => {
      const newWidth = window.innerWidth;
      const newHeight =
        newWidth > 1000 ? (window.innerHeight / 4) * 3 : window.innerHeight / 2;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      effect.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', onWindowResize);

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
        // scene.add(group);
      }

      // if (groupRef.current) {
      //   groupRef.current.position.x = mouseX.current * 3000; // 마우스 좌표 적용
      //   groupRef.current.position.y = mouseY.current * 3000;
      // }
      effect.render(scene, camera);
    };
    animate();
    const handleDivClick = () => {
      console.log('clicked');
      setIsClicked(!isClicked);
    };
    mountRef.current?.addEventListener('click', handleDivClick);

    return () => {
      window.removeEventListener('resize', onWindowResize);
      mountRef.current?.removeChild(effect.domElement);
    };
  }, []);

  return (
    <div className="cursor-[url(/click.svg),_pointer] pt-[5.752rem] md:pt-[18.2rem] 2xl:pt-[5.752rem]  blueBackground w-full h-full bg-gradient-to-r from-surface-tertiary from-0% via-[#D3E8FF] via-27% to-text-primary to-90%">
      <div
        id="ascii"
        className="text-text-invert font-[900] cursor-pointer"
        ref={mountRef}
      />
    </div>
  );
}
