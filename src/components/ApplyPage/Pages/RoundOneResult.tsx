import { Page } from '@/pages/ApplyPage';
import SquareBtn from '../SquareBtn';
import { useState } from 'react';

interface RoundTwoResultProps {
  handlePageChange: (page: Page) => void;
}

const RoundOneResult = ({ handlePageChange }: RoundTwoResultProps) => {
  const [isPass, setIsPass] = useState(false);
  const handleNextBtn = () => {
    //API call
    handlePageChange(Page.HOME);
  };

  return (
    <section className="flex flex-col gap-[4.8rem] text-[1.4rem]  ">
      <div className="flex flex-col gap-[2.4rem]">
        <p className="font-bold">
          {isPass
            ? '축하합니다, 이선명 님. 멋쟁이사자처럼 서강대학교 13기 1차 서류 전형에 합격하셨습니다.'
            : '멋쟁이사자처럼 서강대학교에서 이선명 님의 1차 서류 결과를 안내 드립니다.'}
        </p>
        <p className="font-bold p-[1.2rem] border border-text-primary font-pretendard leading-[2.1rem]">
          {isPass ? (
            <>
              안녕하세요, 멋쟁이사자처럼 서강대학교 13기 운영진입니다.
              <br />
              멋쟁이사자처럼 서강대학교 13기 1차 서류 합격을 축하드립니다!
              <br />
              <br />
              아래 공지 사항을 꼼꼼히 읽고 2차 면접 전형에 참여해주시기
              바랍니다.
              <br />
              <br />
              이후 관련 내용...
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
        content="1차 결과 확인 페이지로 돌아가기"
        handleClick={handleNextBtn}
        status="default"
      ></SquareBtn>
    </section>
  );
};

export default RoundOneResult;
