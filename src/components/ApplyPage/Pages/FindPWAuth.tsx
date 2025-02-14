import { Page } from '@/pages/ApplyPage';
import React, { useState } from 'react';
import SquareBtn from '../SquareBtn';
import FormBox from '../FormBox';

interface FindPWEmailProps {
  handlePageChange: (page: Page) => void;
}

const FindPWAuth = ({ handlePageChange }: FindPWEmailProps) => {
  const [code, setCode] = useState('');
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handleRequestBtn = () => {
    //API call
    handlePageChange(Page.FIND_PW_RESET);
  };

  return (
    <section className="flex flex-col gap-[4.8rem] text-[1.4rem]  ">
      <div>
        <p className="font-bold">
          비밀번호를 재설정을 위해 사용자 확인을 진행합니다.
        </p>
        <p className="font-normal">
          03leesun@gmail.com으로 발송된 메일에 첨부된 인증 번호를 입력해주세요.
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
        status={code === '' ? 'disabled' : 'default'}
      ></SquareBtn>
    </section>
  );
};

export default FindPWAuth;
