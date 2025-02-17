import React, { useState } from 'react';
import clsx from 'clsx';

interface TextBoxProps {
  description: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isError: boolean;
  name: string;
  value: string;
}

const TextBox = ({
  description,
  handleChange,
  isError,
  name,
  value
}: TextBoxProps) => {
  const [textLength, setTextLength] = useState(0);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTextLength = e.target.value.length;
    setTextLength(newTextLength);
    handleChange(e);
  };

  return (
    <div className="flex flex-col gap-[1.2rem] grow-1 shrink-1 basis-0 text-[1.4rem] leading-[140%]">
      <p>{description}</p>
      <textarea
        className={clsx(
          'p-[1.2rem] border w-full font-pretendard min-h-[24rem] font-medium focus:outline-none resize-none',
          {
            'border-status-negative text-status-negative':
              isError || textLength > 500,
            'border-text-primary text-text-primary':
              !isError && textLength <= 500
          }
        )}
        onChange={handleInput}
        name={name}
        value={value}
      ></textarea>
      <p className="text-right text-[1.2rem]">{`${textLength}/500`}</p>
    </div>
  );
};

export default TextBox;
