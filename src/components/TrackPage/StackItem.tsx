interface StackItemProps {
  imageName: string;
  name: string;
  description: string;
}

const StackItem = ({ imageName, name, description }: StackItemProps) => {
  const imagePath = new URL(`../../assets/image/${imageName}`, import.meta.url)
    .href;
  return (
    <div className="w-full border-t-[0.1rem] border-solid border-primary pt-[0.8rem]">
      <div className="flex flex-col gap-[2rem] md:grid grid-cols-2 items-start">
        <div className="flex items-start gap-[1.6rem]">
          <img src={imagePath} className="w-[7.2rem] h-[7.2rem]"></img>
          <p className="text-[1.4rem] font-bold leading-[1.96rem]">{name}</p>
        </div>
        <p className="text-[1.4rem] font-normal leading-[1.96rem] break-keep">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StackItem;
