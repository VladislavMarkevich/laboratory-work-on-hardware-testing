//@flow
import type { PathActivationEquations } from "../types";
import { getActivationEquation as getNoEquation } from "./elements/no";
import { getActivationEquation as getAndEquation } from "./elements/and";
import { getActivationEquation as getOrEquation } from "./elements/or";
import { getActivationEquation as getAndNoEquation } from "./elements/andNo";
import { getActivationEquation as getOrNoEquation } from "./elements/orNo";
import { getActivationEquation as getXorEquation } from "./elements/xor";

const pathActivationEquations: PathActivationEquations = {
  no: getNoEquation,
  and: getAndEquation,
  or: getOrEquation,
  andNo: getAndNoEquation,
  orNo: getOrNoEquation,
  xor: getXorEquation,
};

export default pathActivationEquations;
