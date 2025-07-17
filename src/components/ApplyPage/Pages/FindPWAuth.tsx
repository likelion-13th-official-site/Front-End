import { Application } from '@/pages/ApplyPage';
import React, { useState } from 'react';
import SquareBtn from '../SquareBtn';
import FormBox from '../FormBox';
import { instance } from '@/api/instance';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

interface FindPWEmailProps {
  handleToastRender: (text: string) => void;
  application: Application;
}

const FindPWAuth = ({
  handleToastRender,
  application
}: FindPWEmailProps) => {
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [isPending, setIsPending] = useState(false);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handleRequestBtn = async () => {
    if (isPending) return;
    try {
      setIsPending(true);
      const body = { email: application.email, code: code };
      const res = await instance.post('/auth/verify-code', body);
      if (res?.data?.success) {
        handleToastRender(res.data.message);
        navigate('/apply/find-pw-reset');
      }
    } catch (err: unknown) {
      if (
        err instanceof AxiosError &&
        err?.response?.status &&
        err?.response?.status >= 400
      ) {
        handleToastRender(err.response.data.message);
      }
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section className="flex flex-col gap-[4.8rem] text-[1.4rem]  ">
      <div>
        <p className="font-bold">
          비밀번호를 재설정을 위해 사용자 확인을 진행합니다.
        </p>
        <p className="font-normal">
          {application?.email}으로 발송된 메일에 첨부된 인증 번호를
          입력해주세요.
        </p>
      </div>
      <FormBox
        name={'CODE'}
        title={'CODE'}
        handleChange={handleInput}
        isError={false}
        isExplanation={false}
        placeholder=""
      ></FormBox>
      <SquareBtn
        content="다음"
        handleClick={handleRequestBtn}
        status={code === '' ? 'disabled' : isPending ? 'disabled' : 'default'}
      ></SquareBtn>
    </section>
  );
};

export default FindPWAuth;
