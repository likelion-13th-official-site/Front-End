import { Application, initialApplication, Page } from '@/pages/ApplyPage';
import React, { useState } from 'react';
import SquareBtn from '../SquareBtn';
import FormBox from '../FormBox';
import { instance } from '@/api/instance';
import { AxiosError } from 'axios';

interface FindPWEmailProps {
  handlePageChange: (page: Page) => void;
  handleToastRender: (text: string) => void;
  getApplicationData: (data: Application) => void;
}

const FindPWEmail = ({
  handlePageChange,
  handleToastRender,
  getApplicationData
}: FindPWEmailProps) => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isPending, setIsPending] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // let res = true;
    // res = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
    // setIsValid(res);
    setIsValid(true);
    setEmail(e.target.value);
  };

  const handleRequestBtn = async () => {
    if (isPending) return;
    try {
      setIsPending(true);
      const body = { email: email };
      const res = await instance.post('/auth/send-code/reset', body);
      if (res?.data?.success) {
        handleToastRender(res.data.message);
        getApplicationData({ ...initialApplication, email: email });
        handlePageChange(Page.FIND_PW_AUTH);
      }
    } catch (err: unknown) {
      if (
        err instanceof AxiosError &&
        err?.response?.status &&
        err?.response?.status >= 400
      ) {
        handleToastRender(err.response.data.message);
        setIsValid(false);
      }
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section className="flex flex-col gap-[4.8rem] text-[1.4rem]  ">
      <div>
        <p className="font-bold">비밀번호를 재설정합니다.</p>
        <p className="font-normal">
          비밀번호를 재설정할 이메일을 입력해주세요.
        </p>
      </div>
      <FormBox
        name={'EMAIL'}
        title={'EMAIL'}
        handleChange={handleInput}
        isError={!isValid}
        isExplanation={false}
        // explanation="이메일 형식이 잘못되었습니다."
        placeholder=""
      ></FormBox>
      <SquareBtn
        content={isPending ? '인증번호 발송 중' : '인증 요청'}
        handleClick={handleRequestBtn}
        status={email === '' || isPending ? 'disabled' : 'default'}
      ></SquareBtn>
    </section>
  );
};

export default FindPWEmail;
