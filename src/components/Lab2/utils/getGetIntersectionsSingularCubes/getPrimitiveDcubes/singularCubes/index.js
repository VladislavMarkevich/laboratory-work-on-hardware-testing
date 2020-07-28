//@flow
import { getSingularCube as andFunc } from "./elements/and";
import { getSingularCube as andNoFunc } from "./elements/andNo";
import { getSingularCube as noFunc } from "./elements/no";
import { getSingularCube as orFunc } from "./elements/or";
import { getSingularCube as orNoFunc } from "./elements/orNo";
import { getSingularCube as xorFunc } from "./elements/xor";

import type { getSingularCubeByLogicElement } from "../../types";

const singularCubes: getSingularCubeByLogicElement = {
  and: andFunc,
  andNo: andNoFunc,
  no: noFunc,
  or: orFunc,
  orNo: orNoFunc,
  xor: xorFunc,
};

export default singularCubes;
