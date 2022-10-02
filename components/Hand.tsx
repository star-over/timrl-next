import cn from "classnames";
import { IHandState, IPart, IPartState, ISide} from "../interfaces/interface";

const fillState = (state: IPartState) => (Object.keys(IPart) as [IPart])
  .reduce((acc: IHandState, key: IPart) => {
    acc[key] = state;
    return acc
  }, {} as IHandState);

const makePartsClasses = (partStates: IHandState) => {
  const stateMapping: { [key in IPartState]: string } = {
    ACTIVE: "fill-slate-500",
    INACTIVE: "fill-orange-100",
    ERROR: "fill-red-500",
    HIDE: "fill-slate-100",
  };
  const activeMapping: { [key in IPart]: string } = {
    F1: "fill-yellow-400",
    F2: "fill-purple-400",
    F3: "fill-green-500",
    F4: "fill-blue-400",
    F5: "fill-orange-400",
    PM: "fill-orange-50",
  };

  return (Object.entries(partStates) as [[IPart, IPartState]])
    .reduce((acc, [part, state]) => {
      acc[part] = state === IPartState.ACTIVE
        ? activeMapping[part]
        : stateMapping[state]
      return acc
    }, {} as { [key in IPart]: string });
}

type IHandProps = { side: ISide; state: IHandState; };
// eslint-disable-next-line import/prefer-default-export
export const Hand = ({ state: propState, side }: IHandProps) => {
  const state: IHandState = { ...fillState(IPartState.HIDE), ...propState };

  const partsCl = makePartsClasses(state);

  const svgCl = cn("w-[281px]", {
    "-scale-x-100": side === ISide.RIGHT,
  });

  return <>
    <svg
      className={svgCl}
      viewBox="0 0 281 321"
    >
      <path
        className={partsCl[IPart.F1]}
        id="F1"
        d="M146.4 228c1.3-.7 5-.8 6.2.2 4.5 5 8.3 8.7 12.4 14 3.2 4 6.8 7 12 5.5 22.8-6.7 46.5-14.5 69.2-20.3 5.4-1.1 13.8.3 18.6 2 5.2 1.7 6.5 2.4 11 6.8 6.8 6.5 5.3 15.1-3.2 19.2-2.8 1.3-6 2-9 2.8-40.2 10.1-79 23.5-112 49.8-6 4.8-13.7 8-21.2 10.3-13.5 4.1-24.8-2.3-26.7-15a53 53 0 0 1 .6-20.1c6-25 17.7-44.3 42.1-55.3Z"
      />
      <path
        className={partsCl[IPart.F2]}
        id="F2"
        d="M139.7 147.8c2-2.3 4-3.3 6.3-3.8 12.3-3 20-11.6 26.9-21.4 14.3-20.3 28.2-41 43.1-60.8A65 65 0 0 1 234.2 46c2-1.2 2.4-1.4 6.7-2.5 9.4-2.6 13.6 4 11.1 13.3a61 61 0 0 1-8.3 17c-19.5 29.9-39.3 59.5-58.9 89.4-5.1 7.9-9.4 16.4-14.3 24.5-4.3 7-6.6 6.8-10.6-.4l-20.2-36.8c-.5-.8-.4-1.8 0-2.7Z"
      />
      <path
        className={partsCl[IPart.F3]}
        id="F3"
        d="M182.9 22.3c-5.2 16.7-30.4 85.5-35.6 102.2-2.2 7.2-1.7 15.4-2.2 23-.2 2.8.3 5.5.2 8.2 0 7.1-1.8 8.7-10.9 8.4a54.7 54.7 0 0 1-31.2-17.7c-3-3.1-3.2-7-.5-10.5 11-14.6 17.6-31.4 24.1-48.2 7.3-18.8 15.8-37.2 23.8-55.7a141 141 0 0 1 6.3-13c3.2-6 8.5-11.6 14.2-14.8 4.7-2.6 10.4.2 12 5.5a22 22 0 0 1-.2 12.6Z"
      />
      <path
        className={partsCl[IPart.F4]}
        id="F4"
        d="M87.2 167.2c-12.4 1.3-26.2-7-32.6-17.1-4-6.5-3.7-10.5 2.1-15.3a23.7 23.7 0 0 0 8.8-17.6c1.8-23.8 3-47.8 5.8-71.5 1.2-10 4-20.6 8.3-29.3 2.3-4.7 7.6-8.2 13.5-6.2 5.6 1.8 7 6.8 6.8 12-.5 10.4-1.6 20.7-2 31-1 29.6-3.6 59.1 3 88.5 3.8 17.2 3.6 25.5-13.7 25.5Z"
      />
      <path
        className={partsCl[IPart.F5]}
        id="f5"
        d="M16.2 144.6c1.6-18-6.7-36.4-9.9-55.7-1.6-9.7-2-19.6-2.3-29.5-.1-6 2.7-11.4 9-12.8a11 11 0 0 1 13 7.6c3.8 11 6.5 22.4 9.2 33.7a938 938 0 0 1 8.1 37c1.3 6.3 4.5 10.5 11 12.3 5.8 1.7 7.3 5.4 3.9 10.2a60.4 60.4 0 0 1-32.3 22.3c-5.7 1.7-9.1-1.4-9.6-8.1-.4-5-.1-10-.1-17Z"
      />
      <path
        className={partsCl[IPart.PM]}
        id="PM"
        d="M57.8 137.3c13.4 0 77 2.7 88.8 7.4 23 9 30.2 24.7 23.3 48.4a95 95 0 0 0-1.7 42c.4 4.1.6 5.2.5 9.4-.5 14.4-9.6 30.7-14.5 44.2-5.9 16.2-12.7 28.9-31.6 31.2l-25.5.3-21.2-2.9c-34.4-6.2-64.3-14.9-75-52.7-.7-6.9-.4-12.8.7-20.3l.6-3.8c4.2-24 8.8-47.9 12.5-72 2.6-16.5 12.3-25.4 27.7-29.1 5-1.2 10.2-1.6 15.4-2.1Z"
      />
    </svg>
  </>;
};
