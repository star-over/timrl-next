import { KbdGrid } from "../components/KbdGrid";
import { kbdUsStandart } from "../data/kbdLayout";
import { EN_QWERTY } from "../data/lngLayout";
import { asdf } from "../data/fingersLayout";

const testHandPage = () => <>
  <h1 className="font-bold text-xl p-3">Grid testing</h1>
  <hr />
  <KbdGrid kbdLayout={kbdUsStandart} lngLayout={EN_QWERTY} fingersLayout={asdf}/>
</>;

export default testHandPage;
