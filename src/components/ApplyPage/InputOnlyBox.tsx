import React from 'react';
import clsx from 'clsx';

interface InputOnlyBoxProps {
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
  isExplanation: boolean;
  placeholder?: string;
  inputType?: string;
  explanation?: string;
}

const InputOnlyBox = ({
  name,
  handleChange,
  isError,
  isExplanation,
  placeholder,
  explanation
}: InputOnlyBoxProps) => {
  return (
    <div
      className={
        'flex flex-col gap-[0.6rem] grow-1 shrink-1 basis-0 text-[1.4rem]'
      }
    >
      <input
        className={clsx(
          'py-[1.2rem] border-b w-full font-pretendard font-medium focus:outline-none',
          {
            'border-status-negative text-status-negative': isError,
            'border-text-primary text-text-primary': !isError
          }
        )}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
      ></input>

      {isExplanation && (
        <p
          className={clsx(
            'text-[1.2rem] opacity-[0.6] font-pretendard font-medium',
            { 'text-status-negative': isError, 'text-text-primary': !isError }
          )}
        >
          {explanation}
        </p>
      )}
    </div>
  );
};

export default InputOnlyBox;
