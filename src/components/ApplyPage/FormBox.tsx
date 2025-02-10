import React, { useState } from 'react';
import passwordEyeOpened from '../../assets/image/password_eye_opened.svg';
import passwordEyeClosed from '../../assets/image/password_eye_closed.svg';

interface FormBoxProps {
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
  isExplanation: boolean;
  placeholder?: string;
  inputType?: string;
  explanation?: string;
}

const FormBox = ({
  name,
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
        (isError
          ? 'border-negative text-negative'
          : 'border-primary text-primary') +
        ' flex flex-col gap-[0.6rem] w-full text-[1.4rem]'
      }
    >
      <div className="relative">
        <p className="text-primary">{name}</p>
        <input
          className="py-[1.2rem] border-b w-full focus:outline-none"
          placeholder={placeholder}
          type={
            inputType === 'password' && isPasswordVisible ? 'text' : inputType
          }
          onChange={handleChange}
          name={name}
        ></input>
        {inputType === 'password' && (
          <img
            src={isPasswordVisible ? passwordEyeClosed : passwordEyeOpened}
            alt="Password Eye"
            className="absolute right-0 top-[50%]"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          />
        )}
      </div>

      {isExplanation && (
        <p className="text-[1.2rem] opacity-[0.6]">{explanation}</p>
      )}
    </div>
  );
};

export default FormBox;
