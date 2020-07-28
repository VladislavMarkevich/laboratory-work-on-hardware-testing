//@flow
import runSchema from "./runSchema";

import type { ResultsSchema, NormalizedSchema } from "./types";

const getResultsSchema = (
  normalizedSchema: NormalizedSchema,
  lastLogicElementName: string,
  inputsCount: number
): ResultsSchema => {
  const numberOfpossibleValues = Math.pow(2, inputsCount) - 1;
  const results = {};
  const maskList = [];
  for (let index = 0; index <= numberOfpossibleValues; index++) {
    const maskSignals = index.toString(2).padStart(inputsCount, "0");
    const signalsOnInputs = maskSignals.split("").map((it) => parseInt(it, 10));

    const resultSchema = runSchema(normalizedSchema, lastLogicElementName, signalsOnInputs);
    results[maskSignals] = resultSchema;
    maskList.push(maskSignals);
  }
  return { maskList, results };
};

export default getResultsSchema;
