import React, { useEffect, useState } from 'react';
import TextBox from '../TextBox';
import { Page } from '@/pages/ApplyPage';
import SquareBtn from '../SquareBtn';

interface ApplyThirdProps {
  handlePageChange: (page: Page) => void;
}

interface InputInfo {
  value: string;
  isValid: boolean;
}

interface ApplyInput {
  track: InputInfo;
  answer1: InputInfo;
  answer2: InputInfo;
  answer3: InputInfo;
  answer4: InputInfo;
  githubLink: InputInfo;
  portpolioLink: InputInfo;
  interviewTimes: { value: number[]; isValid: boolean };
}

const ApplyThird = ({ handlePageChange }: ApplyThirdProps) => {
  const [applyInput, setApplyInput] = useState<ApplyInput>({
    track: { value: '', isValid: true },
    answer1: { value: '', isValid: true },
    answer2: { value: '', isValid: true },
    answer3: { value: '', isValid: true },
    answer4: { value: '', isValid: true },
    githubLink: { value: '', isValid: true },
    portpolioLink: { value: '', isValid: true },
    interviewTimes: { value: [], isValid: true }
  });
  const [isInputFilled, setIsInputFilled] = useState(false);

  useEffect(() => {
    let isFilled = true;
    Object.entries(applyInput).forEach(([key, value]) => {
      if (key === 'interViewTimes') {
        if (value.value.length === 0) isFilled = false;
      } else {
        if (value.value === '') isFilled = false;
      }
    });
    setIsInputFilled(isFilled);
  }, [applyInput]);

  const IsValidInput = (): boolean => {
    let res: boolean = true;
    let isValid: boolean = true;
    const newState: Partial<ApplyInput> = {};
    Object.entries(applyInput).forEach(([key, value]) => {
      const typedKey = key as keyof ApplyInput;
      switch (key) {
        case 'track':
          res = !(value.value === '');
          break;
        case 'answer1':
        case 'answer2':
        case 'answer3':
        case 'answer4':
          res = !(value.value.length > 500);
          break;
        case 'interviewTimes':
          res = value.value.length > 0;
          break;
        default:
          break;
      }
      if (!res) isValid = false;
      newState[typedKey] = { value: value.value, isValid: res };
    });
    setApplyInput({ ...applyInput, ...newState });
    return isValid;
  };

  const handleNextBtn = () => {
    console.log('pressed');

    if (!IsValidInput()) return;
    //API call
    handlePageChange(Page.APPLY_THIRD);
  };

  const handleInput = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setApplyInput({
      ...applyInput,
      [e.target.name]: { value: e.target.value, isValid: true }
    });
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
        <div className="grow-1 shrink-1 basis-0 h-[0.1rem] bg-text-primary opacity-[0.4]"></div>
        <div className="flex gap-[0.8rem] items-center justify-between opacity-[0.4]">
          <div className="flex justify-center items-center rounded-full bg-text-primary w-[2.2rem] h-[2.2rem] text-[1.2rem] text-surface-primary">
            3
          </div>
          <span>지원서 저장</span>
        </div>
      </div>
      <div
        className={
          ' flex flex-col gap-[0.6rem] grow-1 shrink-1 basis-0 text-[1.4rem]'
        }
      >
        <p className="text-primary">1. 지원 분야를 선택해 주세요.</p>
        <select
          className="border-b border-b-text-primary font-pretendard p-2 py-[1.2rem] px-0 outline-none rounded-none"
          name="track"
          value={applyInput.track.value}
          onChange={handleInput}
        >
          <option value="" disabled selected hidden>
            지원 분야
          </option>
          <option>Front-End</option>
          <option>Back-End</option>
          <option>Design</option>
        </select>
      </div>
      <TextBox
        name="answer1"
        isError={!applyInput.answer1.isValid}
        handleChange={handleInput}
        description="2. 간단한 자기소개와 함께, 다양한 IT 동아리 중에서 멋쟁이사자처럼 서강대학교 13기를 선택하고 지원하시게 된 이유를 작성해주세요. (500자 이내)"
      ></TextBox>
      <TextBox
        name="answer2"
        isError={!applyInput.answer2.isValid}
        handleChange={handleInput}
        description="3. 파트를 선택한 이유와 관련 경험을 해본 경험이 있는지 작성해주세요. 없다면!!!! 멋쟁이사자처럼에서 이 파트로 활동하면서 어떠한 성장을 희망하는지 작성해주세요. (500자 이내)"
      ></TextBox>
      <TextBox
        name="answer3"
        isError={!applyInput.answer3.isValid}
        handleChange={handleInput}
        description="4. 멋쟁이사자처럼 서강대학교는 협업과 팀워크를 중요한 가치로 생각하는 공동체입니다. 지원 분야와 관계 없이 지원자 본인이 협업과 팀워크를 진행해보았던 경험과, 그 경험을 멋쟁이사자처럼 서강대학교에서 어떻게 적용시킬 수 있을지 작성해주세요. (500자 이내) "
      ></TextBox>
      <TextBox
        name="answer4"
        isError={!applyInput.answer4.isValid}
        handleChange={handleInput}
        description="5. 실현하고 싶은 자신만의 IT 서비스 아이디어에 대해 설명해주세요. (500자 이내)"
      ></TextBox>
      <SquareBtn
        content="다음"
        handleClick={handleNextBtn}
        status={isInputFilled ? 'default' : 'disabled'}
      ></SquareBtn>
    </section>
  );
};

export default ApplyThird;
