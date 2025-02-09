import React from 'react';

interface StackItemProps {
  imageName: string;
  name: string;
  description: string;
}

const StackItem = ({ imageName, name, description }: StackItemProps) => {
  const imagePath = new URL(`../../assets/image/${imageName}`, import.meta.url)
    .href;
  return (
    <div className="w-full border-t-[0.1rem] border-solid border-(--color-primary-normal) pt-[0.8rem]">
      <div className="flex items-start">
        <img
          src={imagePath}
          className="w-[7.2rem] h-[7.2rem] mr-[5.6rem]"
        ></img>
        <p className="grow-1 shrink-1 basis-0 text-[1.4rem] font-bold leading-[1.96rem]">
          {name}
        </p>
        <p className="grow-1 shrink-1 basis-0 text-[1.4rem] font-normal leading-[1.96rem]">
        {description}
      </p>
      </div>

    </div>
  );
};

export default StackItem;
