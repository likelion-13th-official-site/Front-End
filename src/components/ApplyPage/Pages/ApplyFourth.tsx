import { Page } from '@/pages/ApplyPage';
import React, { useState } from 'react';
import SquareBtn from '../SquareBtn';
import checkIcon from '../../assets/image/check_icon.svg';

interface ApplyFirstProps {
  handlePageChange: (page: Page) => void;
}

interface IsChecked {
  first: boolean;
  second: boolean;
}

const ApplyFourth = ({ handlePageChange }: ApplyFirstProps) => {
  const [isChecked, setIsChecked] = useState<IsChecked>({
    first: false,
    second: false
  });

  const handleNextBtn = () => {
    //API call
    handlePageChange(Page.HOME);
  };

  return (
    <section className="flex flex-col gap-[4.8rem] text-[1.4rem]  ">
      <p className="font-bold p-[1.2rem] border border-primary font-pretendard leading-[2.1rem]">
        지원 안내
        <br />
        제출 버튼을 누른 후에도 서류 마감 기한 전까지는 지원 페이지에서 수정이
        가능합니다.
        <br />
        지원서는 다음과 같은 구성으로 되어있습니다. 모든 사항을 빠짐없이
        작성해주세요!
        <br />
        안내 사항 동의
        <br />
        인적사항 기입
        <br />
        자기소개서 제출 및 면접 시간 선택
        <br />
        면접 촬영 및 개인정보 수집 안내
        <br />
        면접은 대면으로 진행되며, 공정한 면접 평가를 위해 면접 내용을 촬영 및
        수집할 예정입니다. 수집한 면접 영상은 선발 과정에서만 활용되며, 최종
        선발 이후 즉시 폐기됩니다.
        <br />
        운영비 안내
        <br />
        서강대학교 멋쟁이 사자처럼 13기에서는 원활한 동아리 운영을 위해 모든
        부원이 운영비 6만원을 납부하게 됩니다. 회비 운영은 투명하게 공개되며
        어쩌구…
        <br />
        공식 홈페이지, 인스타그램
        <br />
        서강대학교 멋쟁이사자처럼 공식 홈페이지와 @likelion_sg 공식
        인스타그램에서 커리큘럼, 활동 일정 등 다양한 정보를 확인하실 수
        있습니다.
        <br />
        문의사항
        <br />
        회장 윤예은: 010-2222-2222
        <br />
        인스타그램: @likelion_sogang
      </p>
      <div className="flex flex-col gap-[1.2rem]">
        <div className="flex justify-between items-center">
          <span>위 내용을 꼼꼼히 읽어보셨나요?</span>
          <input
            type="checkbox"
            className="appearance-none w-[1.6rem] h-[1.6rem] border border-secondary hover:border-[2px] hover:border-text-primary   checked:border-text-primary checked:bg-text-primary checked:bg-[url('./assets/image/check_icon.svg')] checked:bg-no-repeat checked:bg-center"
            onChange={() =>
              setIsChecked({ ...isChecked, first: !isChecked.first })
            }
          ></input>
        </div>
        <div className="flex justify-between items-center">
          <span>멋쟁이사자처럼 서강대학교의 모든 활동에 참여 가능한가요?</span>
          <input
            type="checkbox"
            className="appearance-none w-[1.6rem] h-[1.6rem] border border-secondary hover:border-[2px] hover:border-text-primary   checked:border-text-primary checked:bg-text-primary checked:bg-[url('./assets/image/check_icon.svg')] checked:bg-no-repeat checked:bg-center"
            onChange={() =>
              setIsChecked({ ...isChecked, second: !isChecked.second })
            }
          ></input>
        </div>
      </div>

      <SquareBtn
        content="다음"
        handleClick={handleNextBtn}
        status={
          isChecked.first === true && isChecked.second === true
            ? 'default'
            : 'disabled'
        }
      ></SquareBtn>
    </section>
  );
};

export default ApplyFourth;
