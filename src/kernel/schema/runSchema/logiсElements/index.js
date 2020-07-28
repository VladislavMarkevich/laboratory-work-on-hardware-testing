//@flow
import type { LogicElements } from "../../types";
import { getLogicElementResult as getNoResult } from "./elements/no";
import { getLogicElementResult as getAndResult } from "./elements/and";
import { getLogicElementResult as getOrResult } from "./elements/or";
import { getLogicElementResult as getAndNoResult } from "./elements/andNo";
import { getLogicElementResult as getOrNoResult } from "./elements/orNo";
import { getLogicElementResult as getXorResult } from "./elements/xor";

const logicElements: LogicElements = {
  no: getNoResult,
  and: getAndResult,
  or: getOrResult,
  andNo: getAndNoResult,
  orNo: getOrNoResult,
  xor: getXorResult,
};

export default logicElements;
