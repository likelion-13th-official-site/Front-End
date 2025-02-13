interface RoundBtnProps {
  content: string;
  handleClick: () => void;
}

const RoundBtn = ({ content, handleClick }: RoundBtnProps) => {
  return (
    <button
      className="flex justify-center items-center py-[0.4rem] px-[1.2rem] rounded-[3.2rem] border cursor-pointer italic"
      onClick={() => {
        handleClick();
      }}
    >
      {content}
    </button>
  );
};

export default RoundBtn;
