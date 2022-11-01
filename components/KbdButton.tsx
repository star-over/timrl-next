import { IPartState } from "../interfaces/interface";
import { FC } from "react";
import { cva, VariantProps } from "cva";

export interface KbdButtonProps extends VariantProps<typeof Classes>, CommonProps { };
interface CommonProps {
  symbol?: string;
  isHome?: boolean;
  css?: string
};

const Classes = cva("flex flex-grow justify-center rounded-lg border-2",
  {
    variants: {
      state: {
        [IPartState.ACTIVE]: "bg-green-50 border-stone-500 text-green-800",
        [IPartState.INACTIVE]: "bg-zinc-100 border-stone-400 text-zinc-500",
        [IPartState.ERROR]: "bg-red-300 border-stone-500 text-red-900",
        [IPartState.INVISIBLE]: "invisible",
      },
    },
    defaultVariants: { state: IPartState.INACTIVE },
  });

export const KbdButton: FC<KbdButtonProps> = ({ state, symbol = ".", isHome = false, css }) => (
  <div className={Classes({ state, class: css })} >
    <span>{symbol}</span>
    {isHome
      ? <div className="self-end fixed w-3 h-1.5 border-t-2 border-gray-400/50" />
      : null}
  </div>
);
