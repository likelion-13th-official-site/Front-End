import { Application, Page } from '@/pages/ApplyPage';
import React, { useEffect, useState } from 'react';
import SquareBtn from '../SquareBtn';
import FormBox from '../FormBox';
import InputOnlyBox from '../InputOnlyBox';
import { instance } from '@/api/instance';
import { AxiosError } from 'axios';
interface ApplySecondProps {
  handlePageChange: (page: Page) => void;
  saveApplicationData: (data: object) => void;
  handleToastRender: (text: string) => void;
  application: Application;
  isEdit: boolean;
}

interface InputInfo {
  value: string;
  isValid: boolean;
}

export interface UserInput {
  name: InputInfo;
  studentNum: InputInfo;
  major: InputInfo;
  phone: InputInfo;
  email: InputInfo;
  emailAuth: InputInfo;
  password: InputInfo;
  path: InputInfo;
}

const ApplySecond = ({
  handlePageChange,
  saveApplicationData,
  handleToastRender,
  isEdit,
  application
}: ApplySecondProps) => {
  const [userInput, setUserInput] = useState<UserInput>({
    name: { value: application.name, isValid: true },
    studentNum: { value: application.studentNum, isValid: true },
    major: { value: application.major, isValid: true },
    phone: { value: application.phone, isValid: true },
    email: { value: application.email, isValid: true },
    emailAuth: { value: '', isValid: true },
    password: { value: application.password, isValid: true },
    path: { value: application.path, isValid: true }
  });
  const [emailState, setEmailState] = useState({
    isSent: false,
    isAuth: false
  });
  const [isInputFilled, setIsInputFilled] = useState(false);

  useEffect(() => {
    const viewApplication = async () => {};
    viewApplication();
    if (isEdit === true) {
      setEmailState({ isSent: true, isAuth: true });
    }
  }, []);

  useEffect(() => {
    let isFilled = true;
    Object.entries(userInput).forEach((item) => {
      if (item[0] !== 'emailAuth' && item[1].value === '') isFilled = false;
    });
    setIsInputFilled(isFilled);
  }, [userInput]);

  window.onbeforeunload = function () {
    return '이 페이지를 떠나시겠습니까? 변경사항이 저장되지 않을 수 있습니다.';
  };

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
          res =
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()\-_+=])[A-Za-z\d!@#$%^&*()\-_+=]{8,20}$/.test(
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
    if (!IsValidInput()) {
      handleToastRender('모든 항목을 올바르게 입력해주세요.');
      return;
    }
    const newInput: Record<string, string> = {};
    Object.keys(userInput).map((key) => {
      newInput[key] = userInput[key as keyof UserInput].value;
    });
    saveApplicationData(newInput);
    handlePageChange(Page.APPLY_THIRD);
  };

  const handleInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    let res = true;
    if (e.target.name === 'password') {
      res =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()\-_+=])[A-Za-z\d!@#$%^&*()\-_+=]{8,20}$/.test(
          e.target.value
        );
    } else if (e.target.name === 'phone') {
      res = /^\d{3}-\d{3,4}-\d{4}$/.test(e.target.value);
    } else if (e.target.name === 'email') {
      res = e.target.value.endsWith('@sogang.ac.kr');
    }
    setUserInput({
      ...userInput,
      [e.target.name]: { value: e.target.value, isValid: res }
    });
  };

  const handleEmailBtn = async (action: string) => {
    if (action === 'isSent') {
      try {
        const body = { email: userInput.email.value };
        const res = await instance.post('/auth/send-code/signup', body);
        if (res?.data?.success) {
          handleToastRender(res.data.message);
          setEmailState({ ...emailState, isSent: true });
          setUserInput({
            ...userInput,
            email: { ...userInput.email, isValid: true }
          });
        }
      } catch (err: unknown) {
        if (err instanceof AxiosError && err?.response?.status === 400) {
          handleToastRender(err.response.data.message);
          setUserInput({
            ...userInput,
            email: { value: userInput.email.value, isValid: false }
          });
        }
      }
    }

    if (action === 'isAuth') {
      // setEmailState({ ...emailState, isAuth: true });
      // return;

      if (isNaN(Number(userInput.emailAuth.value))) {
        handleToastRender('인증번호는 숫자로만 입력해주세요.');
        return;
      }
      try {
        const body = {
          email: userInput.email.value,
          code: userInput.emailAuth.value
        };
        const res = await instance.post('/auth/verify-code', body);
        if (res?.data?.success) {
          handleToastRender(res.data.message);
          setEmailState({ ...emailState, isAuth: true });
          // setUserInput({
          //   ...userInput,
          //   emailAuth: { value: userInput.emailAuth.value, isValid: true }
          // });
        }
      } catch (err: unknown) {
        if (err instanceof AxiosError && err?.response?.status === 400) {
          handleToastRender(err.response.data.message);
          setUserInput({
            ...userInput,
            emailAuth: { ...userInput.emailAuth, isValid: false }
          });
        }
      }
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
        value={userInput.name.value}
      ></FormBox>
      <FormBox
        name={'studentNum'}
        title={'학번'}
        handleChange={handleInput}
        isError={!userInput.studentNum.isValid}
        isExplanation={!userInput.studentNum.isValid}
        placeholder=""
        explanation="학번을 입력해주세요."
        value={userInput.studentNum.value}
      ></FormBox>
      <FormBox
        name={'major'}
        title={'학과'}
        handleChange={handleInput}
        isError={!userInput.major.isValid}
        isExplanation={!userInput.major.isValid}
        placeholder=""
        explanation="학과를 입력해주세요."
        value={userInput.major.value}
      ></FormBox>
      <FormBox
        name={'phone'}
        title={'전화번호'}
        handleChange={handleInput}
        isError={!userInput.phone.isValid}
        isExplanation={!userInput.phone.isValid}
        explanation="010-1234-5678와 같은 형식으로 입력해주세요."
        placeholder="010-1234-5678와 같은 형식으로 입력해주세요."
        value={userInput.phone.value}
      ></FormBox>
      <div className="flex flex-col gap-[0.6rem]">
        <p>EMAIL</p>
        <div className="flex gap-[0.8rem]">
          <InputOnlyBox
            name={'email'}
            handleChange={handleInput}
            isError={!userInput.email.isValid}
            isExplanation={!userInput.email.value.endsWith('@sogang.ac.kr')}
            explanation={
              isEdit
                ? '이메일은 수정이 불가능합니다'
                : '@sogang.ac.kr로 끝나는 이메일 주소만 가능합니다.'
            }
            placeholder="@sogang.ac.kr로 끝나는 이메일 주소만 가능합니다."
            isDisabled={
              isEdit ? true : emailState.isAuth === true ? true : false
            }
            value={userInput.email.value}
          ></InputOnlyBox>
          {userInput.email.value != '' && (
            <div className="w-[12.2rem]">
              <SquareBtn
                content="인증번호 발송"
                handleClick={() => {
                  handleEmailBtn('isSent');
                }}
                status={
                  isEdit
                    ? 'disabled'
                    : emailState.isAuth === true
                      ? 'disabled'
                      : 'default'
                }
              ></SquareBtn>
            </div>
          )}
        </div>
        {emailState.isSent && !isEdit && (
          <div className="flex gap-[0.8rem]">
            <InputOnlyBox
              name={'emailAuth'}
              handleChange={handleInput}
              isError={!userInput.emailAuth.isValid}
              isExplanation={false}
              placeholder="이메일로 발송된 인증 번호를 입력해주세요."
              isDisabled={emailState.isAuth === true ? true : false}
            ></InputOnlyBox>
            <div className="w-[12.2rem]">
              <SquareBtn
                content="인증"
                handleClick={() => {
                  handleEmailBtn('isAuth');
                }}
                status={emailState.isAuth === true ? 'disabled' : 'default'}
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
        explanation={
          isEdit
            ? '비밀번호는 수정이 불가능합니다'
            : '비밀번호는 8~20자의 영문, 숫자, 특수문자(!@#$%^&*()-_+=)를 혼합하여 설정해주세요.'
        }
        isDisabled={isEdit ? true : false}
        value={userInput.password.value}
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
