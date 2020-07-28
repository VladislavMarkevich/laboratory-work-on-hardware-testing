//@flow
import type { ActivationEquationFunc } from "../../types";

export const getActivationEquation: ActivationEquationFunc = (inputCount, activatioPathSymbol, activatioPathNumber) => {
  const ret = [];
  for (let index = 0; index < inputCount; index++) ret.push(true);
  ret[activatioPathNumber] = activatioPathSymbol;
  return ret;
};
