export enum IHandSide { LEFT = 'LEFT', RIGHT = 'RIGHT'};
export enum IHandPart { F1 = 'F1', F2 = 'F2', F3 = 'F3', F4 = 'F4', F5 = 'F5', PM = 'PM' };
export enum IPartState { ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE', ERROR = 'ERROR', HIDE = 'HIDE' };
export enum IMoveDirection { DOWN = 'DOWN', LEFT = 'LEFT', RIGHT = 'RIGHT', UP = 'UP', NONE = 'NONE' };

export type IHandPartProps = {
  side: IHandSide;
  part: IHandPart;
  state: IPartState;
}

export type IHandStates = {
  [key in IHandPart]: IPartState;
};

export type IHandProps = {
  side: IHandSide;
  state: IHandStates;
}

