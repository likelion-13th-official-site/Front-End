import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { AsciiEffect } from './AsciiEffect';

export default function AsciiArt() {
  const mountRef = useRef<HTMLDivElement>(null);

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
      invert: true //True로 하면 반전되어 나온다
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

    // Sphere
    const sphereGeometry = new THREE.SphereGeometry(200, 20, 10);
    const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x909090 });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Plane
    const planeGeometry = new THREE.PlaneGeometry(400, 400);
    const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xe0e0e0 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.position.y = -200;
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);

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
      sphere.position.y = Math.abs(Math.sin(timer * 0.002)) * 150;
      sphere.rotation.x = timer * 0.0003;
      sphere.rotation.z = timer * 0.0002;
      // controls.update();
      effect.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      mountRef.current?.removeChild(effect.domElement);
    };
  }, []);

  return <div className="text-text-primary" ref={mountRef} />;
}
