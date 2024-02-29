import { twMerge } from 'tailwind-merge'

const Button = ({ text, onClick, className }: TButtonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={twMerge(`text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm  text-center dark:bg-blue-600 dark:hover:bg-blue-700 ${className} `)}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
