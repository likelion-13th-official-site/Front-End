import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { AsciiEffect } from './AsciiEffect';
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import AsciiTheme from './asciiTheme';
export default function AsciiArt() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [group, setGroup] = useState<THREE.Group | null>(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    //넓이, 높이 설정
    const width = window.innerWidth;
    const height = 400;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000);
    camera.position.set(0, 150, 500);

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

    //드래그해서 컨트롤 하는건데 필요 없겠지? 어차피 깃허브에도 없음
    // // Controls
    // const controls = new OrbitControls(camera, effect.domElement);
    // controls.enableDamping = true;
    // controls.dampingFactor = 0.05;
    // controls.rotateSpeed = 0.5;

    // Lights
    const light1 = new THREE.PointLight(0xffffff, 1);
    light1.position.set(500, 500, 500);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xffffff, 0.25);
    light2.position.set(-500, -500, -500);
    scene.add(light2);

    const light3 = new THREE.PointLight(0xff0000, 0.5); // Red light with moderate intensity
    light3.position.set(0, 1000, 1000);
    scene.add(light3);

    // Sphere
    // const sphereGeometry = new THREE.SphereGeometry(200, 20, 10);
    // const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
    // const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    // scene.add(sphere);

    // Plane
    // const circleGeometry = new THREE.CircleGeometry(400, 400);
    // const circleMaterial = new THREE.MeshBasicMaterial({ color: 0xe0e0e0 });
    // const circle = new THREE.Mesh(circleGeometry, circleMaterial);
    // circle.position.y = 200;
    // scene.add(circle);

    //SVG
    const loader = new SVGLoader();
    loader.load('/ascii2.svg', function (data) {
      const paths = data.paths;
      const group = new THREE.Group();

      paths.forEach((path) => {
        const material = new THREE.MeshLambertMaterial({
          color: 0x000000,
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
      setGroup(group);
      // group.position.x = -1200;
      group.position.y = height + 100;
      group.scale.set(2.5, 2.5, 2.5);
      group.rotateX(Math.PI);
      // scene.add(group);
    });

    // 2. 마우스 움직임에 따라 따라다닐 텍스트 만들기
    const fontLoader = new FontLoader();
    let textMesh: THREE.Mesh | null = null;

    fontLoader.load(
      'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
      (font) => {
        const textGeometry = new TextGeometry('Hello, world!', {
          font: font,
          size: 1
        });

        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        textMesh = new THREE.Mesh(textGeometry, material);
        scene.add(textMesh);
      }
    );

    // 3. 마우스 위치 추적
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      console.log('move');

      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    document.addEventListener('mousemove', onMouseMove);

    // Resize handling
    const onWindowResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
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

      if (group) {
        const moveSpeed = 0.00005;
        const maxX = -2100; // 최대 이동 범위
        const minX = 0; // 최소 이동 범위

        group.position.x = Math.sin(timer * moveSpeed) * (maxX - minX) - 3000;
        scene.add(group);
      }

      if (textMesh) {
        textMesh.position.x = mouseX * 5;
        textMesh.position.y = -mouseY * 5;
      }
      // controls.update();
      effect.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      mountRef.current?.removeChild(effect.domElement);
    };
  }, []);

  const handleDivClick = () => {
    console.log('clicked');

    setIsClicked(!isClicked);
  };

  return (
    <div className="w-full relative">
      <div className="text-text-primary" ref={mountRef} />
    </div>
  );
}
