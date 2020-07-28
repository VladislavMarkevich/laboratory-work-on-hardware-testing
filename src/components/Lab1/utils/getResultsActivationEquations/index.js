//@flow
import getActivationPaths from "kernel/schema/getActivationPaths";

import pathActivationEquations from "./pathActivationEquations";

import type { NormalizedSchema } from "kernel/schema/types";
import type { PathActivationEquations, ResultsActivationEquations } from "./types";

const getResultsActivationEquations = (
  normalizedSchema: NormalizedSchema,
  activatioPathSymbol: string,
  lastLogicElementName: string
): ResultsActivationEquations => {
  const activationPaths = getActivationPaths(normalizedSchema, lastLogicElementName);
  return Object.keys(normalizedSchema).reduce((result, it) => {
    const {
      [it]: { logicElementName = "" },
    } = normalizedSchema;

    const resultInputs = {};
    const resultLogicElement = {};
    let logicElementBuffer = logicElementName;
    const activationPath = activationPaths[logicElementName];
    activationPath.forEach((analyzedLogicElement) => {
      const { [analyzedLogicElement]: { inputs = [], logicElementType = "" } = {} } = normalizedSchema;

      const pathActivationEquation: PathActivationEquations = pathActivationEquations[logicElementType](
        inputs.length,
        activatioPathSymbol,
        inputs.indexOf(logicElementBuffer)
      );

      inputs.forEach((element, index) => {
        const value = pathActivationEquation[index];
        if (value === activatioPathSymbol) return;
        if (typeof element === "number") resultInputs[element] = value;
        else {
          if (value === "xor") resultLogicElement[element] = logicElementBuffer;
          else resultLogicElement[element] = value;
        }
      });

      logicElementBuffer = analyzedLogicElement;
    });

    result[logicElementName] = {
      inputs: resultInputs,
      logicElement: resultLogicElement,
    };
    return result;
  }, {});
};

export default getResultsActivationEquations;
