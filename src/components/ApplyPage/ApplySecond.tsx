import { Page } from '@/pages/ApplyPage';
import React, { useState } from 'react';
import SquareBtn from './SquareBtn';
import checkIcon from '../../assets/image/check_icon.svg';
import FormBox from './FormBox';
import InputOnlyBox from './InputOnlyBox';

interface ApplySecondProps {
  handlePageChange: (page: Page) => void;
}

interface InputInfo {
  value: string;
  isValid: boolean;
}

interface UserInput {
  name: InputInfo;
  student_num: InputInfo;
  department: InputInfo;
  phone_num: InputInfo;
  email: InputInfo;
  email_auth: InputInfo;
  password: InputInfo;
  recruit_path: InputInfo;
}

// interface IsValidInput {
//   name: boolean;
//   student_num: boolean;
//   department: boolean;
//   phone_num: boolean;
//   email: boolean;
//   email_auth: boolean;
//   password: boolean;
//   recruit_path: boolean;
// }

const ApplySecond = ({ handlePageChange }: ApplySecondProps) => {
  const [userInput, setUserInput] = useState<UserInput>({
    name: { value: '', isValid: true },
    student_num: { value: '', isValid: true },
    department: { value: '', isValid: true },
    phone_num: { value: '', isValid: true },
    email: { value: '', isValid: true },
    email_auth: { value: '', isValid: true },
    password: { value: '', isValid: true },
    recruit_path: { value: '', isValid: true }
  });
  const [emailState, setEmailState] = useState({
    isSent: false,
    isAuth: false
  });

  const IsValidInput = (): boolean => {
    let res: boolean = true;
    let isValid: boolean = true;
    const newState: Partial<UserInput> = {};
    Object.entries(userInput).forEach(([key, value]) => {
      const typedKey = key as keyof UserInput;
      switch (key) {
        case 'name':
        case 'student_num':
        case 'department':
        case 'recruit_path':
          res = !(value.value === '');
          break;
        case 'phone_num':
          res = !(
            value.value === '' || !/^\d{3}-\d{3,4}-\d{4}$/.test(value.value)
          );
          break;
        case 'email':
          res =
            emailState.isSent === true && value.value.endwith('@sogang.ac.kr');
          break;
        case 'email_auth':
          res = emailState.isAuth === true;
          break;
        case 'password':
          res =
            value.value === '' ||
            /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/.test(value.value);
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
    if (!IsValidInput()) return;
    //API call
    handlePageChange(Page.APPLY_THIRD);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputNameMap: { [key: string]: keyof UserInput } = {
      이름: 'name',
      학번: 'student_num',
      학과: 'department',
      전화번호: 'phone_num',
      EMAIL: 'email',
      EMAIL_AUTH: 'email_auth',
      비밀번호: 'password',
      지원경로: 'recruit_path'
    };

    const inputKey = inputNameMap[e.target.name];
    if (inputKey) {
      setUserInput({
        ...userInput,
        [inputKey]: { value: e.target.value, isValid: true }
      });
    }
  };

  const handleEmailBtn = (action: string) => {
    if (action === 'isSent') {
      setEmailState({ ...emailState, isSent: true });
      setUserInput({ ...userInput, email_auth: { value: '', isValid: true } });
    }
    //api call
    if (action === 'isAuth') setEmailState({ ...emailState, isAuth: true });
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
        name={'이름'}
        handleChange={handleInput}
        isError={!userInput.name.isValid}
        isExplanation={false}
        placeholder=""
      ></FormBox>
      <FormBox
        name={'학번'}
        handleChange={handleInput}
        isError={!userInput.student_num.isValid}
        isExplanation={false}
        placeholder=""
      ></FormBox>
      <FormBox
        name={'학과'}
        handleChange={handleInput}
        isError={!userInput.department.isValid}
        isExplanation={false}
        placeholder=""
      ></FormBox>
      <FormBox
        name={'전화번호'}
        handleChange={handleInput}
        isError={!userInput.phone_num.isValid}
        isExplanation={false}
        placeholder="010-1234-5678와 같은 형식으로 입력해주세요."
      ></FormBox>
      <div className="flex flex-col gap-[0.6rem]">
        <p>EMAIL</p>
        <div className="flex gap-[0.8rem]">
          <InputOnlyBox
            name={'EMAIL'}
            handleChange={handleInput}
            isError={!userInput.email.isValid}
            isExplanation={false}
            placeholder="@sogang.ac.kr로 끝나는 이메일 주소만 가능합니다."
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
              name={'EMAIL'}
              handleChange={handleInput}
              isError={!userInput.email_auth.isValid}
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
        name={'PASSWORD'}
        handleChange={handleInput}
        isError={!userInput.password.isValid}
        isExplanation={true}
        inputType="password"
        placeholder=""
        explanation="비밀번호는 8~20자의 영문, 숫자를 혼합하여 설정해주세요."
      ></FormBox>
      <FormBox
        name={'모집 공고를 접한 경로'}
        handleChange={handleInput}
        isError={!userInput.recruit_path.isValid}
        isExplanation={true}
        inputType="select"
        placeholder=""
        explanation="비밀번호는 8~20자의 영문, 숫자를 혼합하여 설정해주세요."
      ></FormBox>
      <SquareBtn
        content="다음"
        handleClick={handleNextBtn}
        status={'default'}
      ></SquareBtn>
    </section>
  );
};

export default ApplySecond;
