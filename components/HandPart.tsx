import { FC } from 'react';
import { F0svg, F1svg, F2svg, F3svg, F4svg, PMsvg } from '../assets/svg';
import { IHandPartProps } from '../interfaces/interface';
import cn from 'classnames';

const HandPart: FC<IHandPartProps> = ({ side, part, state }) => {
  const handParts = {
    F0: F0svg,
    F1: F1svg,
    F2: F2svg,
    F3: F3svg,
    F4: F4svg,
    PM: PMsvg
  };
  const stateClasses = {
    ACTIVE: 'fill-slate-500',
    INACTIVE: 'fill-slate-200',
    ERROR: 'fill-slate-900',
    HIDE: 'fill-slate-100'
  };
  const classes = cn('max-h-20', stateClasses[state], { '-scale-x-100': side === 'RIGHT' });
  const Tag = handParts[part];

  return <Tag className={classes} />;
};

export default HandPart;
