//@flow
import singularCubes from "./singularCubes";

import type { ConstantSymbols, PrimitiveDcubes } from "../types";

const getPrimitiveDCubesForDefect = (
  { indifferentSymbol = "", identicalValueSymbol = "", oppositeIdenticalValueSymbol = "" }: ConstantSymbols,
  inputsCountInLogicElement: number,
  selectedLogicElementType: string,
  studiedValue: string
): PrimitiveDcubes => {
  const singularCube = singularCubes[selectedLogicElementType](inputsCountInLogicElement, indifferentSymbol);

  const { resultingSets, otherResults } = singularCube;
  //NOTE: need ==
  const trueSetResults = resultingSets[0].result == studiedValue ? resultingSets : otherResults;

  return trueSetResults.reduce((result, it) => {
    result.push({
      ...it,
      result: it.result === 1 ? identicalValueSymbol : oppositeIdenticalValueSymbol,
    });
    return result;
  }, []);
};

export default getPrimitiveDCubesForDefect;
