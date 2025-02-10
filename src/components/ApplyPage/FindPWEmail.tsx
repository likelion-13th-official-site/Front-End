import { Page } from '@/pages/ApplyPage';
import React, { useState } from 'react';
import SquareBtn from './SquareBtn';
import FormBox from './FormBox';

interface FindPWEmailProps {
  handlePageChange: (page: Page) => void;
}

const FindPWEmail = ({ handlePageChange }: FindPWEmailProps) => {
  const [email, setEmail] = useState('');
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleRequestBtn = () => {
    //API call
    handlePageChange(Page.FIND_PW_AUTH);
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
        handleChange={handleInput}
        isError={false}
        isExplanation={false}
        placeholder=""
      ></FormBox>
      <SquareBtn
        content="인증 요청"
        handleClick={handleRequestBtn}
        status={email === '' ? 'disabled' : 'default'}
      ></SquareBtn>
    </section>
  );
};

export default FindPWEmail;
