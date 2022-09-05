import React, { FC } from 'react';
// import { F0svg, F1svg, F2svg, F3svg, F4svg, PMsvg} from '../assets/svg';
import { IHandPartProps } from '../interfaces/interface';
import cn from 'classnames';



const HandPart: FC<IHandPartProps> = ({ side, part, state }) => {

  const stateClasses = {
    ACTIVE: 'fill-slate-500',
    INACTIVE: 'fill-slate-200',
    ERROR: 'fill-slate-900',
    HIDE: 'fill-slate-100',
  };

  const classes = cn('max-h-20', stateClasses[state], {
    '-scale-x-100': side === 'RIGHT',
  });
  const PMsvg = <svg className={classes}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173 184">
  <path fill="#000000" d="M57.8.3c13.4 0 77 2.7 88.8 7.4 23 9 30.2 24.7 23.3 48.4a95 95 0 0 0-1.7 42c.4 4.1.6 5.2.5 9.4-.5 14.4-9.6 30.7-14.5 44.2-5.9 16.2-12.7 28.9-31.6 31.2l-25.5.3-21.2-2.9c-34.4-6.2-64.3-14.9-75-52.7-.7-6.9-.4-12.8.7-20.3l.6-3.8c4.2-24 8.8-47.9 12.5-72C17.3 15 27 6.2 42.4 2.5 47.4 1.2 52.6.8 57.8.3Z"/>
  </svg>

  const F4svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 125">
  <path fill="#000000" clip-rule="evenodd" d="M12.2 98.6c1.6-18-6.7-36.4-9.9-55.7C.7 33.2.3 23.3 0 13.4 0 7.4 2.7 2 9 .6a11 11 0 0 1 13 7.6c3.8 11 6.5 22.4 9.2 33.7a938 938 0 0 1 8.1 37c1.3 6.3 4.5 10.5 11 12.3 5.8 1.7 7.3 5.4 3.9 10.2a60.4 60.4 0 0 1-32.3 22.3c-5.7 1.7-9.1-1.4-9.6-8.1-.4-5-.1-10-.1-17Z"/>
  </svg>

  const F3svg =<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 159">
  <path fill="#000000" d="M36.2 158.2c-12.4 1.3-26.2-7-32.6-17.1-4-6.5-3.7-10.5 2.1-15.3a23.7 23.7 0 0 0 8.8-17.6c1.8-23.8 3-47.8 5.8-71.5 1.2-10 4-20.6 8.3-29.3 2.3-4.7 7.6-8.2 13.5-6.2 5.6 1.8 7 6.8 6.8 12-.5 10.4-1.6 20.7-2 31-1 29.6-3.6 59.1 3 88.5 3.8 17.2 3.6 25.5-13.7 25.5Z"/>
  </svg>

  const F2svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 162">
  <path fill="#000000" d="M82.9 19.3C77.7 36 52.5 104.8 47.3 121.5c-2.2 7.2-1.7 15.4-2.2 23-.2 2.8.3 5.5.2 8.2 0 7.1-1.8 8.7-10.9 8.4a54.7 54.7 0 0 1-31.2-17.7c-3-3.1-3.2-7-.5-10.5 11-14.6 17.6-31.4 24.1-48.2C34.1 65.9 42.6 47.5 50.6 29a141 141 0 0 1 6.3-13c3.2-6 8.5-11.6 14.2-14.8 4.7-2.6 10.4.2 12 5.5a22 22 0 0 1-.2 12.6Z"/>
  </svg>

  const F1svg =<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114 151">
  <path fill="#000000" d="M.7 105.8c2-2.3 4-3.3 6.3-3.8 12.3-3 20-11.6 26.9-21.4C48.2 60.3 62 39.6 77 19.8A65 65 0 0 1 95.2 4c2-1.2 2.4-1.4 6.7-2.5 9.4-2.6 13.6 4 11.1 13.3a61 61 0 0 1-8.3 17c-19.5 29.9-39.3 59.5-58.9 89.4-5.1 7.9-9.4 16.4-14.3 24.5-4.3 7-6.6 6.8-10.6-.4L.7 108.5c-.5-.8-.4-1.8 0-2.7Z"/>
  </svg>

  const F0svg =<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 178 93">
  <path fill="#000000" d="M43.4 1c1.3-.7 5-.8 6.2.2 4.5 5 8.3 8.7 12.4 14 3.2 4 6.8 7 12 5.5C96.8 14 120.5 6.2 143.2.4c5.4-1.1 13.8.3 18.6 2 5.2 1.7 6.5 2.4 11 6.8 6.8 6.5 5.3 15.1-3.2 19.2-2.8 1.3-6 2-9 2.8-40.2 10.1-79 23.5-112 49.8-6 4.8-13.7 8-21.2 10.3C14 95.4 2.6 89 .7 76.3a53 53 0 0 1 .6-20.1C7.3 31.2 19 11.9 43.4.9Z"/>
  </svg>

  const handParts = {
    F0: F0svg,
    F1: F1svg,
    F2: F2svg,
    F3: F3svg,
    F4: F4svg,
    PM: PMsvg,
  };
  const Tag = handParts[part];

  return <>{Tag}</>
  // <Tag className={classes} />
};

export default HandPart;
