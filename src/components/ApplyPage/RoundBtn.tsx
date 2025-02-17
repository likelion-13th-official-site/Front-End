interface RoundBtnProps {
  content: string;
  handleClick: () => void;
}

const RoundBtn = ({ content, handleClick }: RoundBtnProps) => {
  return (
    <button
      className="flex justify-center items-center  px-[1.2rem] rounded-[3.2rem] border cursor-pointer italic hover:text-text-invert hover:bg-text-primary"
      onClick={() => {
        handleClick();
      }}
    >
      {content}
    </button>
  );
};

export default RoundBtn;
