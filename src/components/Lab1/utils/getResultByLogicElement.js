//@flow
import { getBoolean } from "kernel/formatter/getBoolean";

import type { ResultsActivationEquations } from "./getResultsActivationEquations/types";
import type { ResultsSchema } from "kernel/schema/types";
import type { Dispatch } from "store/types";

import { createActions } from "redux-actions";
import { LAB1_ADD_VALUES } from "./actionTypes";
const { lab1AddValues } = createActions(LAB1_ADD_VALUES);

const getResultByLogicElement = (
  resultsSchema: ResultsSchema,
  resultsActivationEquations: ResultsActivationEquations,
  selectedLogicElement: string,
  studiedValue: string,
  dispatch: Dispatch
): $ReadOnlyArray<string> => {
  const { maskList = [], results = {} } = resultsSchema;
  const returnResults = maskList.filter((mask) => {
    const { [mask]: { resultsOnLogicElement = {} } = {} } = results;
    const correctedValue = getBoolean(studiedValue);
    const { [selectedLogicElement]: { output } = {} } = resultsOnLogicElement;

    if (output !== correctedValue) return false;

    const {
      [selectedLogicElement]: { inputs = {}, logicElement = {} },
    } = resultsActivationEquations;

    const inputsCriteria = () => {
      const inputKeys = Object.keys(inputs);
      if (inputKeys.length === 0) return true;
      const hasIncompatibility = inputKeys.find((inputKey) => {
        const { [inputKey]: neededValue } = inputs;
        const currentValue = getBoolean(mask[parseInt(inputKey, 10)]);
        return neededValue !== currentValue;
      });
      return !Boolean(hasIncompatibility);
    };

    const logicElementCriteria = () => {
      const logicElementKeys = Object.keys(logicElement);
      if (logicElementKeys.length === 0) return true;
      const hasIncompatibility = logicElementKeys.find((logicElementKey) => {
        const { [logicElementKey]: currentValue } = logicElement;
        //for XOR
        if (typeof currentValue === "string") {
          const {
            [logicElementKey]: { output: firstValue } = {},
            [currentValue]: { output: secondValue } = {},
          } = resultsOnLogicElement;
          if (firstValue !== secondValue) return true;
        } else {
          const { [logicElementKey]: { output: neededValue } = {} } = resultsOnLogicElement;
          if (neededValue !== currentValue) return true;
        }
        return false;
      });

      return !Boolean(hasIncompatibility);
    };

    return inputsCriteria() && logicElementCriteria();
  }, []);

  dispatch(
    lab1AddValues({
      results: returnResults,
      selectedLogicElement,
      studiedValue,
    })
  );

  return returnResults;
};

export default getResultByLogicElement;
