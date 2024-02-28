import React from 'react';

type Props = {
  bgColor: string;
  textColor: string;
  text: string;

};

const Button = ({ bgColor, textColor, text }: Props) => {

  const onClick = () => {
    // Logic
  };

  return (
    <button
      className={`bg-${bgColor} text-${textColor} text-xs m-auto px-5 py-2 rounded-md shadow-lg hover:bg-emerald-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
