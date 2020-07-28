//@flow
import type { SingularCube } from "../../../types";

export function getSingularCube(inputsCount: number, indifferentSymbol: string): SingularCube {
  const otherResults = [];
  const resultingSets = [{ result: 1, inputs: Array(inputsCount).fill(0) }];

  for (let index = 0; index < inputsCount; index++) {
    const inputs = Array(inputsCount).fill(indifferentSymbol);
    inputs[index] = 1;
    otherResults.push({ result: 0, inputs });
  }

  return { resultingSets, otherResults };
}
