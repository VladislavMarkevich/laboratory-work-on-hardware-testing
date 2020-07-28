//@flow
import type { NormalizedSchema, ShemaElements } from "kernel/schema/types";

export const inputsCount: number = 7;
export const lastLogicElementName: string = "F_6";

export const possibleValuesForStudiedValue: $ReadOnlyArray<{
  key: string,
  displayName: string,
}> = [
  { key: "1", displayName: "0" },
  { key: "0", displayName: "1" },
];

export const schemaConst: $ReadOnlyArray<ShemaElements> = [
  { logicElementName: "F_1", logicElementType: "orNo", inputs: [0, 1] },
  { logicElementName: "F_2", logicElementType: "no", inputs: [2] },
  { logicElementName: "F_3", logicElementType: "and", inputs: [4, 5] },
  {
    logicElementName: "F_4",
    logicElementType: "orNo",
    inputs: [3, "F_3", 6],
  },
  {
    logicElementName: "F_5",
    logicElementType: "xor",
    inputs: ["F_2", "F_4"],
  },
  { logicElementName: "F_6", logicElementType: "or", inputs: ["F_1", "F_5"] },
];

export const normalizedSchema: NormalizedSchema = schemaConst.reduce((result, it) => {
  const { logicElementName = "" } = it;
  result[logicElementName] = it;
  return result;
}, {});

//Вывод: чем сложнее уравнение активизации пути для логического элемента, тем меньше теcтовых наборов
