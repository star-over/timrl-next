import { IPartState, IFingersIds } from "../interfaces/interface";
import { FC } from "react";
import { cva, VariantProps } from "cva";

export interface KbdButtonProps extends VariantProps<typeof Classes>, CommonProps { };
interface CommonProps {
  homie?: boolean;
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
        [IFingersIds.L0]: "bg-slate-200",
        [IFingersIds.L4]: "bg-pink-200",
        [IFingersIds.L3]: "bg-green-200",
        [IFingersIds.L2]: "bg-yellow-200",
        [IFingersIds.L1]: "bg-lime-200",
        [IFingersIds.R1]: "bg-violet-200",
        [IFingersIds.R2]: "bg-cyan-200",
        [IFingersIds.R3]: "bg-orange-200",
        [IFingersIds.R4]: "bg-blue-200",
        [IFingersIds.R0]: "bg-stone-200",
      },
      base: {
        true: "border-4 border-zinc-900/50",
      },
    },
    defaultVariants: { state: IPartState.INACTIVE },
  });

export const KbdButton: FC<KbdButtonProps> = ({ state, finger, base, homie, css, children }) => {
  return (
    <div className={Classes({ state, finger, base, class: css })}>
      <span>{children}</span>
      {homie
        ? <div className="self-end fixed w-3 h-1.5 border-t-2 border-gray-400/50" />
        : null}
    </div>
  );
};
