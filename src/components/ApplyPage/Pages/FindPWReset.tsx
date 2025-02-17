import { Application, Page } from '@/pages/ApplyPage';
import React, { useState } from 'react';
import SquareBtn from '../SquareBtn';
import FormBox from '../FormBox';
import { instance } from '@/api/instance';
import { AxiosError } from 'axios';

interface FindPWEmailProps {
  handlePageChange: (page: Page) => void;
  handleToastRender: (text: string) => void;
  application: Application;
}

const FindPWReset = ({
  handlePageChange,
  handleToastRender,
  application
}: FindPWEmailProps) => {
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let res = true;
    res =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()\-_+=])[A-Za-z\d!@#$%^&*()\-_+=]{8,20}$/.test(
        e.target.value
      );
    setIsValid(res);
    setPassword(e.target.value);
  };

  const handleRequestBtn = async () => {
    try {
      const body = { email: application.email, password: password };
      const res = await instance.post('/auth/reset-password', body);
      if (res?.data?.success) {
        handleToastRender(res.data.message);
        handlePageChange(Page.HOME);
      }
    } catch (err: unknown) {
      if (
        err instanceof AxiosError &&
        err?.response?.status &&
        err?.response?.status >= 400
      ) {
        handleToastRender(err.response.data.message);
      }
    }
  };

  return (
    <section className="flex flex-col gap-[4.8rem] text-[1.4rem]  ">
      <p className="font-bold">
        사용자 인증이 완료되었습니다. 새 비밀번호를 입력해주세요.
      </p>

      <FormBox
        name={'NEW PASSWORD'}
        title={'NEW PASSWORD'}
        handleChange={handleInput}
        isError={!isValid}
        isExplanation={true}
        placeholder=""
        inputType="password"
        explanation="비밀번호는 8~20자의 영문, 숫자를 혼합하여 설정해주세요."
      ></FormBox>
      <SquareBtn
        content="완료"
        handleClick={handleRequestBtn}
        status={password === '' ? 'disabled' : 'default'}
      ></SquareBtn>
    </section>
  );
};

export default FindPWReset;
