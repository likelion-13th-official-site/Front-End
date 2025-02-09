import React from 'react';

interface SquareBtnProps {
  content: string;
  handleClick: () => void;
  status: 'default' | 'default2' | 'hovered' | 'disabled';
}

const SquareBtn = ({ content, handleClick, status }: SquareBtnProps) => {
  return (
    <button
      className={`${status === 'default' ? 'bg-secondary border-0' : 'bg-white border'} flex justify-center items-center p-[1.2rem] cursor-pointer`}
      onClick={() => {
        handleClick();
      }}
    >
      {content}
    </button>
  );
};

export default SquareBtn;
