import { Hand } from "../components/Hand";
import { ISide, IPartState } from "../interfaces/interface";

const testHandPage = () => {
  return (
    <>
      <Hand
        side={ISide.LEFT}
        state={{ F1: IPartState.ACTIVE, F5: IPartState.ERROR }}
      />
      <Hand
        side={ISide.RIGHT}
        state={{ F1: IPartState.ACTIVE, F2: IPartState.ERROR, F3: IPartState.INACTIVE }}
      />
    </>
  );
};

export default testHandPage;
