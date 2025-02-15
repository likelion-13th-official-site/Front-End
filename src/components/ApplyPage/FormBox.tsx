import React, { useState } from 'react';
import passwordEyeOpened from '../../assets/image/password_eye_opened.svg?url';
import passwordEyeClosed from '../../assets/image/password_eye_closed.svg?url';

import clsx from 'clsx';

interface FormBoxProps {
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
  isExplanation: boolean;
  placeholder?: string;
  inputType?: string;
  explanation?: string;
  title: string;
}

const FormBox = ({
  name,
  title,
  handleChange,
  isError,
  isExplanation,
  placeholder,
  inputType,
  explanation
}: FormBoxProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div
      className={
        ' flex flex-col gap-[0.6rem] grow-1 shrink-1 basis-0 text-[1.4rem]'
      }
    >
      <div className="relative">
        <p className="text-primary">{title}</p>
        <input
          className={clsx(
            'py-[1.2rem] border-b w-full font-pretendard font-medium focus:outline-none',
            {
              'border-status-negative text-status-negative': isError,
              'border-text-primary text-text-primary': !isError
            }
          )}
          placeholder={placeholder}
          type={
            inputType === 'password' && isPasswordVisible ? 'text' : inputType
          }
          onChange={handleChange}
          name={name}
        ></input>
        {inputType === 'password' && (
          <img
            src={isPasswordVisible ? passwordEyeOpened : passwordEyeClosed}
            alt="Password Eye"
            className="absolute right-0 top-[50%]"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          />
        )}
      </div>

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

export default FormBox;
