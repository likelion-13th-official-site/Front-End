import React, { useEffect, useState } from 'react';
import TextBox from '../TextBox';
import { Page } from '@/pages/ApplyPage';
import SquareBtn from '../SquareBtn';
import FormBox from '../FormBox';

interface ApplyThirdProps {
  handlePageChange: (page: Page) => void;
}

interface InputInfo {
  value: string;
  isValid: boolean;
}

interface ApplyInput {
  // [key: string]: InputInfo | { value: number[]; isValid: boolean };
  track: InputInfo;
  answer1: InputInfo;
  answer2: InputInfo;
  answer3: InputInfo;
  answer4: InputInfo;
  githubLink: InputInfo;
  portpolioLink: InputInfo;
  interviewTimes: { value: number[]; isValid: boolean };
}

const questionProps = [
  {
    name: 'answer1',
    description:
      '2. 간단한 자기소개와 함께, 다양한 IT 동아리 중에서 멋쟁이사자처럼 서강대학교 13기를 선택하고 지원하시게 된 이유를 작성해주세요. (500자 이내)'
  },
  {
    name: 'answer2',
    description:
      '3. 파트를 선택한 이유와 관련 경험을 해본 경험이 있는지 작성해주세요. 없다면!!!! 멋쟁이사자처럼에서 이 파트로 활동하면서 어떠한 성장을 희망하는지 작성해주세요. (500자 이내)'
  },
  {
    name: 'answer3',
    description:
      '4. 멋쟁이사자처럼 서강대학교는 협업과 팀워크를 중요한 가치로 생각하는 공동체입니다. 지원 분야와 관계 없이 지원자 본인이 협업과 팀워크를 진행해보았던 경험과, 그 경험을 멋쟁이사자처럼 서강대학교에서 어떻게 적용시킬 수 있을지 작성해주세요. (500자 이내)'
  },
  {
    name: 'answer4',
    description:
      '5. 실현하고 싶은 자신만의 IT 서비스 아이디어에 대해 설명해주세요. (500자 이내)'
  }
];

const interviewProps = {
  '2025.03.10 (월)': [
    { time: '17:30 - 17:50', index: 1 },
    { time: '17:55 - 18:15', index: 2 },
    { time: '18:20 - 18:40', index: 3 },
    { time: '18:45 - 19:05', index: 4 },
    { time: '19:10 - 19:30', index: 5 },
    { time: '19:35 - 19:55', index: 6 },
    { time: '20:00 - 20:20', index: 7 },
    { time: '20:25 - 20:45', index: 8 },
    { time: '20:50 - 21:10', index: 9 }
  ],
  '2025.03.11 (화)': [
    { time: '17:30 - 17:50', index: 10 },
    { time: '17:55 - 18:15', index: 11 },
    { time: '18:20 - 18:40', index: 12 },
    { time: '18:45 - 19:05', index: 13 },
    { time: '19:10 - 19:30', index: 14 },
    { time: '19:35 - 19:55', index: 15 },
    { time: '20:00 - 20:20', index: 16 },
    { time: '20:25 - 20:45', index: 17 },
    { time: '20:50 - 21:10', index: 18 }
  ],
  '2025.03.12 (수)': [
    { time: '17:30 - 17:50', index: 19 },
    { time: '17:55 - 18:15', index: 20 },
    { time: '18:20 - 18:40', index: 21 },
    { time: '18:45 - 19:05', index: 22 },
    { time: '19:10 - 19:30', index: 23 },
    { time: '19:35 - 19:55', index: 24 },
    { time: '20:00 - 20:20', index: 25 },
    { time: '20:25 - 20:45', index: 26 },
    { time: '20:50 - 21:10', index: 27 }
  ]
};
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
      if (key === 'interviewTimes') {
        console.log(value.value.length);

        if (value.value.length === 0) isFilled = false;
      } else if (key === 'track') {
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
    handlePageChange(Page.APPLY_FOURTH);
  };

  const handleInterViewInput = (index: number) => {
    let interviewTimesArr;
    if (applyInput.interviewTimes.value.includes(index)) {
      interviewTimesArr = applyInput.interviewTimes.value.filter(
        (item) => item !== index
      );
    } else {
      interviewTimesArr = [...applyInput.interviewTimes.value, index];
    }
    setApplyInput({
      ...applyInput,
      interviewTimes: {
        value: interviewTimesArr,
        isValid: true
      }
    });
  };

  const handleInput = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
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
          // defaultValue={"지원 분야"}
        >
          <option value="" disabled selected hidden>
            지원 분야
          </option>
          <option>Front-End</option>
          <option>Back-End</option>
          <option>Design</option>
        </select>
      </div>
      {questionProps.map((item) => (
        <TextBox
          key={item.name}
          name={item.name}
          isError={!applyInput[item.name as keyof ApplyInput].isValid}
          handleChange={handleInput}
          description={item.description}
        ></TextBox>
      ))}
      <div
        className={
          ' flex flex-col gap-[1.6rem] grow-1 shrink-1 basis-0 text-[1.4rem]'
        }
      >
        <p className="text-text-primary">
          면접 가능한 날짜와 시간을 모두 선택해주세요.
        </p>
        {Object.keys(interviewProps).map((date) => (
          <div
            key={date}
            className="flex flex-col border-t-[0.1rem] border-t-text-primary"
          >
            {interviewProps[date as keyof typeof interviewProps].map(
              (item, index) => (
                <div key={item.index} className="flex mt-[0.4rem] items-center">
                  <p className="grow-1 shrink-1 basis-0">
                    {index === 0 ? date : ''}
                  </p>

                  <p className="grow-1 shrink-1 basis-0">{item.time}</p>
                  <div className="w-[2rem] h-[2rem] flex justify-center items-center">
                    <input
                      type="checkbox"
                      name="interview"
                      className="appearance-none w-[1.6rem] h-[1.6rem] border border-secondary hover:border-[2px] hover:border-text-primary checked:border-text-primary checked:bg-text-primary checked:bg-[url('./assets/image/check_icon.svg')] checked:bg-no-repeat checked:bg-center"
                      onChange={() => {
                        handleInterViewInput(item.index);
                      }}
                    />
                  </div>
                </div>
              )
            )}
          </div>
        ))}
      </div>
      <FormBox
        name={'githubLink'}
        title={'Github 링크 (선택)'}
        handleChange={handleInput}
        isError={!applyInput.githubLink.isValid}
        isExplanation={false}
        placeholder=""
      ></FormBox>
      <FormBox
        name={'portpolioLink'}
        title={'포트폴리오 링크 (디자인 파트만, 선택)'}
        handleChange={handleInput}
        isError={!applyInput.portpolioLink.isValid}
        isExplanation={true}
        explanation="pdf를 올린 구글 드라이브 링크나 본인 포트폴리오 웹사이트 링크를 첨부해주세요."
        placeholder=""
      ></FormBox>
      <SquareBtn
        content="다음"
        handleClick={handleNextBtn}
        status={isInputFilled ? 'default' : 'disabled'}
      ></SquareBtn>
      <p className="text-[1.2rem] opacity-[0.6] font-pretendard font-medium leading-normal">
        제출한 이후에도, 서류 마감 기한 전까지는 지원 페이지에서 수정이
        가능합니다.
        <br />
        서류 마감 기한(2025/0/00 23:59)이 지나면, 지원서 수정 및 조회가
        불가능합니다.
      </p>
    </section>
  );
};

export default ApplyThird;
