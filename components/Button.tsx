import { MouseEventHandler } from "react";
import Image from "next/image";

type Props = {
    title: string;
    leftIcon?: string | null;
    rightIcon?: string | null;
    handleClick?: MouseEventHandler;
    isSubmitting?: boolean;
    type: 'button' | 'submit';
    bgColor?: string;
    textColor?: string;
};

const Button = ({title,leftIcon,rightIcon,handleClick,isSubmitting,type,bgColor,textColor}:Props) => {
  return (
    <button type={type || 'button'} disabled={isSubmitting} className={`flexCenter gap-3 px-4 py-3 ${textColor ? textColor : 'text-white'} ${isSubmitting ? 'bg-sky-100' : bgColor ? bgColor : 'bg-sky-300'} rounded-xl text-sm font-medium max-md:w-full`} onClick={handleClick}>
      {leftIcon && (<Image src={leftIcon} width={14} height={14} alt="left" />)}
      {title}
      {rightIcon && (<Image src={rightIcon} width={14} height={14} alt="right" />)}
    </button>
  )
}

export default Button;
