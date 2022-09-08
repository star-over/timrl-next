/* eslint-disable prettier/prettier */
export enum ISide { LEFT = 'LEFT', RIGHT = 'RIGHT'};
export enum IPart { F1 = 'F1', F2 = 'F2', F3 = 'F3', F4 = 'F4', F5 = 'F5', PM = 'PM' };
export enum IPartState { ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE', ERROR = 'ERROR', HIDE = 'HIDE' };
export enum IMoveDirection { DOWN = 'DOWN', LEFT = 'LEFT', RIGHT = 'RIGHT', UP = 'UP', NONE = 'NONE' };

export type IHandState = {
  [key in IPart]?: IPartState;
};

export type IHandProps = {
  side: ISide;
  state: IHandState;
};
