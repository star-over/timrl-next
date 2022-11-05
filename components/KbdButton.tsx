import { IPartState, IFingersKeys } from "../interfaces/interface";
import { FC } from "react";
import { cva, VariantProps } from "cva";

export interface KbdButtonProps extends VariantProps<typeof Classes>, CommonProps { };
interface CommonProps {
  isHome?: boolean;
  css?: string;
  children: string;
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
      finger: {
        [IFingersKeys.L0]: "bg-slate-300",
        [IFingersKeys.R0]: "bg-stone-300",
        [IFingersKeys.L1]: "bg-amber-300",
        [IFingersKeys.R1]: "bg-pink-300",
        [IFingersKeys.L2]: "bg-lime-300",
        [IFingersKeys.R2]: "bg-cyan-300",
        [IFingersKeys.L3]: "bg-green-300",
        [IFingersKeys.R3]: "bg-teal-300",
        [IFingersKeys.L4]: "bg-violet-300",
        [IFingersKeys.R4]: "bg-orange-300",
      },
    },
    defaultVariants: { state: IPartState.INACTIVE },
  });

export const KbdButton: FC<KbdButtonProps> = ({ state, finger, isHome, css, children }) => {
  return (
    <div className={Classes({ state, finger, class: css })}>
      <span>{children}</span>
      {isHome
        ? <div className="self-end fixed w-3 h-1.5 border-t-2 border-gray-400/50" />
        : null}
    </div>
  );
};
