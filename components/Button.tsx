/* eslint-disable react/no-unknown-property */

import { IButtonProps } from '../interfaces/interface';


export const Button = ({ state, symbol }: IButtonProps) => {
  console.log(state, symbol);
  return (
    <>
      <div className="w-10 relative m-5">
        <span className="absolute bottom-0 top-0 left-0 right-0 text-center align-text-bottom text-slate-500 text-3xl">A</span>

        <svg
          className=""
          viewBox="0 0 40 40"
          // width="40"
          // height="40"
        >
          <rect
            width="40"
            height="40"
            fill="#EAE9E0"
            fillOpacity=".8"
            rx="8"
          />
          <path
            fill="#6D7163"
            fillRule="evenodd"
            d="M8 0a8 8 0 0 0-8 8v24a8 8 0 0 0 8 8h24a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8H8Zm1 2a7 7 0 0 0-7 7v19a7 7 0 0 0 7 7h22a7 7 0 0 0 7-7V9a7 7 0 0 0-7-7H9Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </>
  );
};
