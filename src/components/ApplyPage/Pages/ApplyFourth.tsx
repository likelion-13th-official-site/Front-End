import { Page } from '@/pages/ApplyPage';
import { useState } from 'react';
import SquareBtn from '../SquareBtn';

interface ApplyFirstProps {
  handlePageChange: (page: Page) => void;
}

const ApplyFourth = ({ handlePageChange }: ApplyFirstProps) => {
  const handleNextBtn = () => {
    //API call
    handlePageChange(Page.HOME);
  };

  return (
    <section className="flex flex-col gap-[4.8rem] text-[1.4rem]">
      <div className="flex gap-[1.2rem] items-center">
        <div className="flex gap-[0.8rem] items-center justify-between">
          <div className="flex justify-center items-center rounded-full bg-text-primary w-[2.2rem] h-[2.2rem] text-[1.2rem] text-surface-primary">
            1
          </div>
          <span>인적사항 입력</span>
        </div>
        <div className="grow-1 shrink-1 basis-0 h-[0.1rem] bg-text-primary"></div>
        <div className="flex gap-[0.8rem] items-center justify-between">
          <div className="flex justify-center items-center rounded-full bg-text-primary w-[2.2rem] h-[2.2rem] text-[1.2rem] text-surface-primary">
            2
          </div>
          <span>지원서 작성</span>
        </div>
        <div className="grow-1 shrink-1 basis-0 h-[0.1rem] bg-text-primary"></div>
        <div className="flex gap-[0.8rem] items-center justify-between">
          <div className="flex justify-center items-center rounded-full bg-text-primary w-[2.2rem] h-[2.2rem] text-[1.2rem] text-surface-primary">
            3
          </div>
          <span>지원서 저장</span>
        </div>
      </div>
      <div className="flex flex-col gap-[0.4rem]">
        <p className="font-bold">이선명 님, 지원서 저장이 완료되었습니다.</p>
        <p>지원 페이지에서 지원서를 수정할 수 있습니다.</p>
      </div>
      <SquareBtn
        content="지원 페이지 바로 가기"
        handleClick={handleNextBtn}
        status="default"
      ></SquareBtn>
    </section>
  );
};

export default ApplyFourth;
