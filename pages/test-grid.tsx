import { Grid } from '../components/Grid';
import { KbdGrid } from "../components/KbdGrid";
import { kbdUsStandart } from "../data/kbdLayout";
import { EN_QWERTY } from "../data/lngLayout";

const testHandPage = () => <>
  <h1 className="font-bold text-xl p-3">Grid testing</h1>
  <hr />
  <Grid />
  <hr />
  <KbdGrid kbdLayout={kbdUsStandart} lngLayout={EN_QWERTY} />
</>;

export default testHandPage;
