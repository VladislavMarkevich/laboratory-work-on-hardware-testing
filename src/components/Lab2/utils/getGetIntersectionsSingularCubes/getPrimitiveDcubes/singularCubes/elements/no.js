//@flow
import type { SingularCube } from "../../../types";

export function getSingularCube(inputsCount: number, indifferentSymbol: string): SingularCube {
  const otherResults = [{ result: 0, inputs: [1] }];
  const resultingSets = [{ result: 1, inputs: [0] }];

  return { resultingSets, otherResults };
}
