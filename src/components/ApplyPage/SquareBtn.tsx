import clsx from 'clsx';

interface SquareBtnProps {
  content: string;
  handleClick: () => void;
  status: 'default' | 'default2' | 'hovered' | 'disabled';
}

const SquareBtn = ({ content, handleClick, status }: SquareBtnProps) => {
  return (
    <button
      className={clsx('flex justify-center items-center w-full p-[1.2rem]', {
        'cursor-pointer border border-transparent bg-surface-secondary text-text-primary hover:bg-text-primary hover:text-text-invert hover:border-text-primary':
          status === 'default',
        'bg-transparent border-text-primary text-text-primary border cursor-pointer hover:bg-text-primary hover:text-text-invert hover:border-text-primary':
          status === 'default2',
        'cursor-not-allowed border border-text-secondary text-text-secondary bg-transparent':
          status === 'disabled'
      })}
      onClick={() => {
        if (status !== 'disabled') {
          handleClick();
        }
      }}
    >
      {content}
    </button>
  );
};

export default SquareBtn;
