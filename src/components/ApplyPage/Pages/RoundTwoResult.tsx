import { Page, Result } from '@/pages/ApplyPage';
import SquareBtn from '../SquareBtn';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

interface RoundTwoResultProps {
  handlePageChange: (page: Page) => void;
  result: Result;
}

const RoundTwoResult = ({ handlePageChange, result }: RoundTwoResultProps) => {
  const [renderAnimation, setRenderAnimation] = useState(true);
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

    // const ambientLight = new THREE.AmbientLight(0xffffff, 500); // 전체적인 밝기
    // scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
    directionalLight.position.set(0, 0, 10);
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
        animate();
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    function animate() {
      console.log('animate');

      if (!gltfRef.current) return;
      if (gltfRef.current) {
        gltfRef.current.rotation.y += (Math.PI / 180) * 1;
      }
      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    const timer = setTimeout(() => {
      setRenderAnimation(false);
      if (threeContainerRef.current) {
        threeContainerRef.current.innerHTML = ''; // Three.js DOM 제거
      }
      renderer.dispose(); // ✅ 메모리 정리
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current); // 애니메이션 프레임 취소
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current); // 애니메이션 프레임 취소
      }
    };
  }, []);

  const handleNextBtn = () => {
    handlePageChange(Page.HOME);
  };
  result.status = '최종합격';

  return (
    <section className="flex flex-col gap-[4.8rem] text-[1.4rem] relative">
      <div className="flex flex-col gap-[2.4rem]">
        <p className="font-bold">
          {result.status === '최종합격'
            ? `${result.name}님, 멋쟁이사자처럼 서강대학교 13기 최종 합격을 축하드려요!🎉`
            : `멋쟁이사자처럼 서강대학교에서 ${result.name}님의 최종 결과를 안내 드립니다.`}
        </p>
        <p className="p-[1.2rem] border border-text-primary font-pretendard leading-[2.1rem]">
          {result.status === '최종합격' ? (
            <>
              안녕하세요, 멋쟁이사자처럼 서강대학교 13기 운영진입니다.
              <br />
              13기 멋쟁이사자처럼 서강대학교 {result.track} 파트
              <strong> 최종 합격</strong>을 축하드립니다.
              <br />
              13기 아기사자 활동을 시작하기에 앞서 첫 번째 공지사항을
              전달드립니다.
              <br />
              <br />
              📌 <strong>정규 세션 시간</strong>
              <br />• 매주 <strong>월요일 / 목요일 19:00~21:00</strong>
              <br />
              <br />
              📌 <strong>오리엔테이션 일정</strong>
              <br />• <strong>날짜</strong>: 3월 17일 (월요일)
              <br />• <strong>시간</strong>: 19:00
              <br />• <strong>장소</strong>: 마포 프론트원 - 공덕 ICT COC
              <br />
              <br />
              📌 <strong>강의 자료 및 과제 업로드</strong>
              <br />• Notion과 Github을 사용합니다.
              <br />• Notion에 가입해주시고, Notion에 가입한 이메일을 아래{' '}
              <strong>구글폼</strong>에 기재하여 제출해주세요.
              <br />
              <br />
              📌 <strong>회비 안내</strong>
              <br />• 멋쟁이사자처럼 서강대학교는 <strong>회칙 제 11조</strong>
              에 따라 본회의 유지 및 운영에 필요한 경비 <strong>6만원</strong>을
              회비로 정하고 있습니다.
              <br />• <strong>13기 총무 계좌</strong>:
              <br />
              <p className="pl-[2rem]">
                ‣ <strong>계좌번호</strong>: 3333329268292
                <br />‣ <strong>은행</strong>: 카카오뱅크
                <br />‣ <strong>예금주</strong>: 박정주
              </p>
              <br />
              📌 <strong>회원 정보 수합</strong>
              <br />
              • 멋쟁이사자처럼 13기 회원 정보를 수합합니다.
              <br />• 추가로{' '}
              <strong>회비 입금 내역, 이후 일정 참가 여부</strong> 등에 대한
              정보를 아래 <strong>구글폼</strong>에 입력해주시면 감사하겠습니다.
              <br />• <strong>제출 마감</strong>: 3월 15일 (토) 오후 11:59까지
              <br />• <strong>구글폼 링크</strong>:{' '}
              <a href="" target="_blank" className="underline">
                ???
              </a>
              <br />
              <br />
              다시 한 번 <strong>멋쟁이사자처럼 서강대학교 아기사자</strong>가
              되신 것을 축하드리며, 앞으로 여러분과 함께 하게 될 수많은 시간을
              기대하고 있겠습니다!
              <br />
              <br />
              🐯 <strong>POSSIBILITY TO REALITY</strong> 🐯
            </>
          ) : (
            <>
              안녕하세요, 멋쟁이사자처럼 서강대학교 13기 운영진입니다.
              <br />
              우선 멋쟁이사자처럼 서강대학교에 많은 관심을 보내주셔서
              감사합니다.
              <br />
              <br />
              제한된 선발 인원으로 인해 이번에는 아쉽게도 좋은 소식을 전하지
              못하게 되었습니다.
              <br />
              좋은 역량을 가지신 분임에도 불구하고, 불합격 소식을 알려 드리게
              되어 무거운 마음입니다.
              <br />
              <br />
              귀한 시간 내어 지원해주셔서 감사드리고,
              <br /> 다음 기회에 더 좋은 인연으로 함께할 수 있기를 진심으로
              바라겠습니다.
              <br />
              <br />
              감사합니다.
            </>
          )}
        </p>
      </div>

      <SquareBtn
        content="최종 결과 확인 페이지로 돌아가기"
        handleClick={handleNextBtn}
        status="default"
      ></SquareBtn>
      {renderAnimation && (
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
      )}
    </section>
  );
};

export default RoundTwoResult;
