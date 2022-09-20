import {IVirtualKey} from "../interfaces/virtual-key";
import {IFingers, IFingersKeys, ISide} from "../interfaces/interface";

interface IMovements {
  vKey: IVirtualKey
  finger: keyof typeof IFingers
  home: boolean;
}


// link to how to improve it https://stackoverflow.com/a/66696535/87713
const standard: IMovements[]  = [
    {vKey: IVirtualKey.KeyQ, finger:"L1", home: false },

  ]
