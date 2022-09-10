import { IButtonProps, IPartState } from '../interfaces/interface';

const stateMapping = {
  ACTIVE: { bg: "fill-green-50", symbol: "text-green-800", frame: "fill-stone-500"},
  INACTIVE: { bg: "fill-zinc-100", symbol: "text-zinc-500", frame: "fill-stone-400"},
  ERROR: { bg: "fill-red-300", symbol: "text-red-900", frame: "fill-stone-500"},
  HIDE: { bg: "fill-zinc-100", symbol: "text-zinc-200", frame: "fill-stone-200"},
};

export const Button = ({ state: propState, symbol: propSymbol }: IButtonProps) => {
  const state: IPartState = propState ?? IPartState.HIDE;
  const symbol: string = propSymbol ?? ".";

  return (
    <>
      <div className="w-10 relative m-3">
        <div className="absolute bottom-0 top-0 left-0 right-0 font-mono text-center align-text-bottom text-2xl">
          <span className={stateMapping[state].symbol}>
            {symbol}
          </span>
        </div>

        <svg
          viewBox="0 0 40 40"
        >
          <rect
            width="40"
            height="40"
            className={stateMapping[state].bg}
            // fillOpacity=".8"
            rx="8"
          />
          <path
            className={stateMapping[state].frame}
            fillRule="evenodd"
            d="M8 0a8 8 0 0 0-8 8v24a8 8 0 0 0 8 8h24a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8H8Zm1 2a7 7 0 0 0-7 7v19a7 7 0 0 0 7 7h22a7 7 0 0 0 7-7V9a7 7 0 0 0-7-7H9Z"
          />
        </svg>
      </div>
    </>
  );
};
