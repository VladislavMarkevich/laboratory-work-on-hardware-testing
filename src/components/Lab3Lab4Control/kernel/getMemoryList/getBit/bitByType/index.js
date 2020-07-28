//@flow
import defaultBit from "./bits/default";
import AFBit from "./bits/AF";
import SAFBit from "./bits/SAF";
import CFinBit from "./bits/CFin";
import CFidBit from "./bits/CFid";

import type { BitByType } from "../../../../kernel/types";

const bitByType: BitByType = {
  default: defaultBit,
  AF: AFBit,
  SAF: SAFBit,
  CFin: CFinBit,
  CFid: CFidBit
};

export default bitByType;
