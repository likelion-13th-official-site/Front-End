import { Page } from '@/pages/ApplyPage';
import React, { useEffect, useState } from 'react';
import SquareBtn from '../SquareBtn';
import FormBox from '../FormBox';
import InputOnlyBox from '../InputOnlyBox';

interface ApplySecondProps {
  handlePageChange: (page: Page) => void;
}

interface InputInfo {
  value: string;
  isValid: boolean;
}

interface UserInput {
  name: InputInfo;
  studentNum: InputInfo;
  major: InputInfo;
  phone: InputInfo;
  email: InputInfo;
  emailAuth: InputInfo;
  password: InputInfo;
  path: InputInfo;
}

const ApplySecond = ({ handlePageChange }: ApplySecondProps) => {
  const [userInput, setUserInput] = useState<UserInput>({
    name: { value: '', isValid: true },
    studentNum: { value: '', isValid: true },
    major: { value: '', isValid: true },
    phone: { value: '', isValid: true },
    email: { value: '', isValid: true },
    emailAuth: { value: '', isValid: true },
    password: { value: '', isValid: true },
    path: { value: '', isValid: true }
  });
  const [emailState, setEmailState] = useState({
    isSent: false,
    isAuth: false
  });
  const [isInputFilled, setIsInputFilled] = useState(false);

  useEffect(() => {
    let isFilled = true;
    Object.values(userInput).forEach((item) => {
      console.log(item.value, isFilled);

      if (item.value === '') isFilled = false;
    });
    setIsInputFilled(isFilled);
  }, [userInput]);

  const IsValidInput = (): boolean => {
    let res: boolean = true;
    let isValid: boolean = true;
    const newState: Partial<UserInput> = {};
    Object.entries(userInput).forEach(([key, value]) => {
      const typedKey = key as keyof UserInput;
      switch (key) {
        case 'name':
        case 'studentNum':
        case 'major':
        case 'path':
          res = !(value.value === '');
          break;
        case 'phone':
          res = !(
            value.value === '' || !/^\d{3}-\d{3,4}-\d{4}$/.test(value.value)
          );
          break;
        case 'email':
          res =
            emailState.isSent === true && value.value.endsWith('@sogang.ac.kr');
          break;
        case 'emailAuth':
          res = emailState.isAuth === true;
          break;
        case 'password':
          res = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*]{8,20}$/.test(
            value.value
          );
          break;
        default:
          break;
      }
      if (!res) isValid = false;
      newState[typedKey] = { value: value.value, isValid: res };
    });
    setUserInput({ ...userInput, ...newState });
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
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setUserInput({
      ...userInput,
      [e.target.name]: { value: e.target.value, isValid: true }
    });
  };

  const handleEmailBtn = (action: string) => {
    if (action === 'isSent') {
      const res = userInput.email.value.endsWith('@sogang.ac.kr');
      if (!res) {
        alert('@sogang.ac.kr로 끝나는 이메일만 등록 가능합니다.');
        return;
      }
      setEmailState({ ...emailState, isSent: true });
      setUserInput({ ...userInput, emailAuth: { value: '', isValid: true } });
    }

    if (action === 'isAuth') {
      //api call
      setEmailState({ ...emailState, isAuth: true });
    }
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
        <div className="grow-1 shrink-1 basis-0 h-[0.1rem] bg-text-primary opacity-[0.4]"></div>
        <div className="flex gap-[0.8rem] items-center justify-between opacity-[0.4]">
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
      <FormBox
        name={'name'}
        title={'이름'}
        handleChange={handleInput}
        isError={!userInput.name.isValid}
        isExplanation={!userInput.name.isValid}
        placeholder=""
        explanation="이름을 입력해주세요."
      ></FormBox>
      <FormBox
        name={'studentNum'}
        title={'학번'}
        handleChange={handleInput}
        isError={!userInput.studentNum.isValid}
        isExplanation={!userInput.studentNum.isValid}
        placeholder=""
        explanation="학번을 입력해주세요."
      ></FormBox>
      <FormBox
        name={'major'}
        title={'학과'}
        handleChange={handleInput}
        isError={!userInput.major.isValid}
        isExplanation={!userInput.major.isValid}
        placeholder=""
        explanation="학과를 입력해주세요."
      ></FormBox>
      <FormBox
        name={'phone'}
        title={'전화번호'}
        handleChange={handleInput}
        isError={!userInput.phone.isValid}
        isExplanation={!userInput.phone.isValid}
        explanation="010-1234-5678와 같은 형식으로 입력해주세요."
        placeholder="010-1234-5678와 같은 형식으로 입력해주세요."
      ></FormBox>
      <div className="flex flex-col gap-[0.6rem]">
        <p>EMAIL</p>
        <div className="flex gap-[0.8rem]">
          <InputOnlyBox
            name={'email'}
            handleChange={handleInput}
            isError={!userInput.email.isValid}
            isExplanation={!userInput.email.isValid}
            placeholder="@sogang.ac.kr로 끝나는 이메일 주소만 가능합니다."
            explanation="인증번호를 발송해주세요."
          ></InputOnlyBox>
          {userInput.email.value != '' && (
            <div className="w-[12.2rem]">
              <SquareBtn
                content="인증번호 발송"
                handleClick={() => {
                  handleEmailBtn('isSent');
                }}
                status="default"
              ></SquareBtn>
            </div>
          )}
        </div>
        {emailState.isSent && (
          <div className="flex gap-[0.8rem]">
            <InputOnlyBox
              name={'emailAuth'}
              handleChange={handleInput}
              isError={!userInput.emailAuth.isValid}
              isExplanation={false}
              placeholder="이메일로 발송된 인증 번호를 입력해주세요."
            ></InputOnlyBox>
            <div className="w-[12.2rem]">
              <SquareBtn
                content="인증"
                handleClick={() => {
                  handleEmailBtn('isAuth');
                }}
                status="default"
              ></SquareBtn>
            </div>
          </div>
        )}
      </div>
      <FormBox
        name={'password'}
        title={'PASSWORD'}
        handleChange={handleInput}
        isError={!userInput.password.isValid}
        isExplanation={true}
        inputType="password"
        placeholder=""
        explanation="비밀번호는 8~20자의 영문, 숫자를 혼합하여 설정해주세요."
      ></FormBox>
      <div
        className={
          ' flex flex-col gap-[0.6rem] grow-1 shrink-1 basis-0 text-[1.4rem]'
        }
      >
        <p className="text-primary">모집 공고를 접한 경로</p>
        <select
          className="border-b border-b-text-primary font-pretendard p-2 py-[1.2rem] px-0 outline-none rounded-none"
          name="path"
          value={userInput.path.value}
          onChange={handleInput}
        >
          <option value="" disabled selected hidden>
            모집 경로를 선택해주세요.
          </option>
          <option>멋쟁이사자처럼 홈페이지</option>
          <option>SNS (인스타그램)</option>
          <option>지인</option>
        </select>
      </div>
      <SquareBtn
        content="다음"
        handleClick={handleNextBtn}
        status={isInputFilled ? 'default' : 'disabled'}
      ></SquareBtn>
    </section>
  );
};

export default ApplySecond;
