//@flow
import type { ActivationEquationFunc } from "../../types";

export const getActivationEquation: ActivationEquationFunc = (inputCount, activatioPathSymbol, activatioPathNumber) => {
  const ret = [];
  for (let index = 0; index < inputCount; index++) ret.push(false);
  ret[activatioPathNumber] = activatioPathSymbol;
  return ret;
};
