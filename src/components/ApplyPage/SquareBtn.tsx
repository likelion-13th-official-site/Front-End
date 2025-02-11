import React, { useState } from 'react';

interface SquareBtnProps {
  content: string;
  handleClick: () => void;
  status: 'default' | 'default2' | 'hovered' | 'disabled';
}

const SquareBtn = ({ content, handleClick, status }: SquareBtnProps) => {
  const [curStatus, setCurStatus] = useState(status);
  return (
    <button
      className={
        (() => {
          switch (curStatus) {
            case 'default':
              return 'cursor-pointer border-surface-secondary border bg-secondary text-primary';
            case 'default2':
              return 'bg-transparent border-primary text-primary border cursor-pointer';
            case 'hovered':
              return 'cursor-pointer text-invert bg-text-primary border border-primary';
            case 'disabled':
              return 'cursor-not-allowed border border-secondary text-secondary bg-transparent ';
            default:
              return '';
          }
        })() + 'flex justify-center items-center w-full p-[1.2rem]'
      }
      onClick={() => {
        if (status !== 'disabled') {
          handleClick();
        }
      }}
      onMouseEnter={() => {
        if (status !== 'disabled') setCurStatus('hovered');
      }}
      onMouseLeave={() => setCurStatus(status)}
    >
      {content}
    </button>
  );
};

export default SquareBtn;
