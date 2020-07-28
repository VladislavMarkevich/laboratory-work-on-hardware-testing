//@flow
import type { NormalizedSchema, ShemaElements } from "kernel/schema/types";

export const inputsCount: number = 6;
export const lastLogicElementName: string = "F_5";

export const possibleValuesForStudiedValue: $ReadOnlyArray<{
  key: string,
  displayName: string,
}> = [
  { key: "1", displayName: "0" },
  { key: "0", displayName: "1" },
];

export const schemaConst: $ReadOnlyArray<ShemaElements> = [
  { logicElementName: "F_1", logicElementType: "and", inputs: [0, 1] },
  { logicElementName: "F_2", logicElementType: "orNo", inputs: [3, 4] },
  { logicElementName: "F_3", logicElementType: "andNo", inputs: ["F_2", 5] },
  { logicElementName: "F_4", logicElementType: "and", inputs: [2, "F_3"] },
  { logicElementName: "F_5", logicElementType: "or", inputs: ["F_1", "F_4"] },
];

export const normalizedSchema: NormalizedSchema = schemaConst.reduce((result, it) => {
  const { logicElementName = "" } = it;
  result[logicElementName] = it;
  return result;
}, {});
