import React, { useState } from 'react';
import passwordEyeOpened from '../../assets/image/password_eye_opened.svg';
import passwordEyeClosed from '../../assets/image/password_eye_closed.svg';
import SquareBtn from './SquareBtn';

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
  inputType,
  explanation
}: InputOnlyBoxProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div
      className={
        (isError
          ? 'border-negative text-negative'
          : 'border-primary text-primary') +
        ' flex flex-col gap-[0.6rem] grow-1 shrink-1 basis-0 text-[1.4rem]'
      }
    >
      <input
        className="py-[1.2rem] border-b w-full font-pretendard font-medium focus:outline-none"
        placeholder={placeholder}
        type={
          inputType === 'password' && isPasswordVisible ? 'text' : inputType
        }
        onChange={handleChange}
        name={name}
      ></input>

      {isExplanation && (
        <p className="text-[1.2rem] opacity-[0.6]">{explanation}</p>
      )}
    </div>
  );
};

export default InputOnlyBox;
