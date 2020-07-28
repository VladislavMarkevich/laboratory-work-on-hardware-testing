//@flow
import bitByType from "./bitByType";

import type { GetBit } from "../../types";

const getBit: GetBit = (bitType, { memory, value, pointer }) => {
  const newBit = { ...bitByType[bitType] };
  newBit["memory"] = memory;
  newBit["value"] = value;
  newBit["pointer"] = pointer;
  return newBit;
};

export default getBit;
