import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const RoundTwoMotion = () => {
  const threeContainerRef = useRef<HTMLDivElement>(null);
  const gltfRef = useRef<THREE.Object3D | null>(null); // 3D 모델을 저장할 ref
  const animationFrameRef = useRef<number | null>(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    threeContainerRef.current?.appendChild(renderer.domElement);

    // const ambientLight = new THREE.AmbientLight(0xffffff, 1000); // 전체적인 밝기
    // scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
    directionalLight.position.set(0, 0, 10);
    directionalLight.castShadow = false;
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    loader.load(
      '/logo3d.gltf',
      function (gltf) {
        const model = gltf.scene;
        model.position.set(0, 0, -12);
        model.rotateY((Math.PI / 180) * 90);
        model.scale.set(1.5, 1.5, 1.5); // 크기 조절
        scene.add(model);
        scene.rotation.y -= (Math.PI / 180) * 30;

        gltfRef.current = scene;
        requestAnimationFrame(animate);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    let lastRenderTime = 0;
    const frameRate = 30; // 30FPS로 제한
    const frameInterval = 1000 / frameRate;

    function animate(currentTime: number) {
      if (!gltfRef.current) return;
      if (currentTime - lastRenderTime >= frameInterval) {
        lastRenderTime = currentTime;
        if (gltfRef.current) {
          gltfRef.current.rotation.y += (Math.PI / 180) * 1;
        }
        renderer.render(scene, camera);
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    return () => {
      renderer.dispose(); // ✅ 메모리 정리
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current); // 애니메이션 프레임 취소
      }
    };
  }, []);
  return (
    <>
      <DotLottieReact
        className="fixed left-0 top-0 w-[100vw] h-[100vh] z-1"
        src="/confetti.lottie"
        autoplay
      />
      <div
        ref={threeContainerRef}
        className="fixed left-0 top-0 w-screen h-screen transition: animate-logo-fadeInOut z-2"
      />
    </>
  );
};

export default RoundTwoMotion;
