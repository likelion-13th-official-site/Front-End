import React from 'react';
import SquareBtn from './SquareBtn';
import FormBox from './FormBox';

const Home = () => {
  return (
    <section className="flex flex-col gap-[8rem]">
      <div className="flex flex-col gap-[1.2rem]">
        <p className="font-bold">처음 지원서를 작성하신다면,</p>
        <SquareBtn
          content="지원서 생성하기"
          handleClick={() => {}}
          status="default"
        ></SquareBtn>
      </div>
      <div className="flex flex-col gap-[4.8rem]">
        <p className="font-bold">이미 작성하던 지원서가 있으시다면,</p>
        <FormBox></FormBox>
      </div>
    </section>
  );
};

export default Home;
