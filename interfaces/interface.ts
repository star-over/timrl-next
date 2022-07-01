export type handSide = 'LEFT' | 'RIGHT';
export type handPart = 'F0' | 'F1' | 'F2' | 'F3' |'F4' |'PM';
export type partState = 'ACTIVE' | 'INACTIVE' | 'ERROR' | 'HIDE';
export type moveDirection = 'DOWN' | 'LEFT' | 'RIGHT' | 'UP' | 'NONE';
export interface IHandPartProps {
  side: handSide;
  part: handPart;
  state: partState;
};