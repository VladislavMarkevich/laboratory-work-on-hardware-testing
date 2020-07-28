//@flow
import type { ResultOnLogicElement, ResultSchema, NormalizedSchema } from "../types";
import logicElements from "./logiсElements";

const recursion = (
  values: $ReadOnlyArray<number>,
  normalizedSchema: NormalizedSchema,
  elementKey: string,
  resultsOnLogicElement: { [string]: ResultOnLogicElement }
) => {
  const { [elementKey]: { logicElementName = "", logicElementType = "", inputs = [] } = {} } = normalizedSchema;

  const inputsData = inputs.map((it) =>
    typeof it === "string" ? recursion(values, normalizedSchema, it, resultsOnLogicElement) : values[it]
  );

  const layerLogicElement = logicElements[logicElementType];
  const resutlOnLogicElement = layerLogicElement.apply(this, inputsData);
  resultsOnLogicElement[logicElementName] = {
    inputsData,
    output: resutlOnLogicElement,
  };
  return resutlOnLogicElement;
};

function runSchema(
  normalizedSchema: NormalizedSchema,
  lastLogicElementName: string,
  signalsOnInputs: $ReadOnlyArray<number>
): ResultSchema {
  const resultsOnLogicElement = {};
  const result = recursion(signalsOnInputs, normalizedSchema, lastLogicElementName, resultsOnLogicElement);

  return { resultsOnLogicElement, result };
}

export default runSchema;
