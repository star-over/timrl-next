/* eslint-disable prettier/prettier */
export enum ISide {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}
export enum IPart {
  F1 = "F1",
  F2 = "F2",
  F3 = "F3",
  F4 = "F4",
  F5 = "F5",
  PM = "PM",
}
export enum IPartState {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  ERROR = "ERROR",
  HIDE = "HIDE",
}
export enum IMoveDirection {
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  UP = "UP",
  NONE = "NONE",
}

export type IHandState = {
  [key in IPart]?: IPartState;
};

export const IFingers = {
  L1: { hand: ISide.LEFT, part: IPart.F1 },
  L2: { hand: ISide.LEFT, part: IPart.F2 },
  L3: { hand: ISide.LEFT, part: IPart.F3 },
  L4: { hand: ISide.LEFT, part: IPart.F4 },
  L5: { hand: ISide.LEFT, part: IPart.F5 },
  R1: { hand: ISide.RIGHT, part: IPart.F1 },
  R2: { hand: ISide.RIGHT, part: IPart.F2 },
  R3: { hand: ISide.RIGHT, part: IPart.F3 },
  R4: { hand: ISide.RIGHT, part: IPart.F4 },
  R5: { hand: ISide.RIGHT, part: IPart.F5 },
};
export type IFingersKeys = keyof typeof IFingers;
