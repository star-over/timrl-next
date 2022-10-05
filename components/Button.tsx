import { IPartState } from "../interfaces/interface";
import { FC } from "react";

const stateMapping = {
  ACTIVE: { bg: "bg-green-50", symbol: "text-green-800", frame: "border-stone-500" },
  INACTIVE: { bg: "bg-zinc-100", symbol: "text-zinc-500", frame: "border-stone-400" },
  ERROR: { bg: "bg-red-300", symbol: "text-red-900", frame: "border-stone-500" },
// TODO rename 'hide' mode to invisible
  HIDE: { bg: "invisible", symbol: "", frame: "" },
};

export interface IButtonProps {
  symbol?: string;
  state?: IPartState;
  isHome?: boolean;
}

export const Button: FC<IButtonProps> = ({ state = IPartState.HIDE, symbol = ".", isHome= false}) => {
  return <>
    <div
      className={`flex flex-grow justify-center rounded-lg
      ${stateMapping[state].bg} ${stateMapping[state].frame} border-2`}
    >
      <span className={`${stateMapping[state].symbol}`}>{symbol}</span>
      {isHome && <div className="fixed self-end w-3 h-1.5 border-t-2 border-gray-400/50" />}
    </div>
  </>;
};
