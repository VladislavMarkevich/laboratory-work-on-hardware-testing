//@flow
import singularCubes from "./singularCubes";

import type { PrimitiveDcubes, SingularCube, DefaultCube, ConstantSymbols } from "../types";

const mergeElements = (
  { indifferentSymbol = "", identicalValueSymbol = "", oppositeIdenticalValueSymbol = "" }: ConstantSymbols,
  firstElement: any,
  secondElement: any
): any => {
  if (firstElement === 0 && secondElement === 0) return 0;
  if (firstElement === 0 && secondElement === indifferentSymbol) return 0;
  if (firstElement === indifferentSymbol && secondElement === 0) return 0;
  if (firstElement === indifferentSymbol && secondElement === indifferentSymbol) return indifferentSymbol;

  if (firstElement === 1 && secondElement === 1) return 1;
  if (firstElement === 1 && secondElement === indifferentSymbol) return 1;
  if (firstElement === indifferentSymbol && secondElement === 1) return 1;
  if (firstElement === 1 && secondElement === 0) return identicalValueSymbol;
  if (firstElement === 0 && secondElement === 1) return oppositeIdenticalValueSymbol;

  return;
};

const mergeCubes = (constantSymbols: ConstantSymbols, firstCube: DefaultCube, secondCube: DefaultCube): DefaultCube => {
  const { inputs: fCubeInputs = [], result: fCubeResult } = firstCube;
  const { inputs: sCubeInputs = [], result: sCubeResult } = secondCube;

  const resultRet = mergeElements(constantSymbols, fCubeResult, sCubeResult);

  const inputsRet = fCubeInputs.map((fCubeInput, index) => {
    return mergeElements(constantSymbols, fCubeInput, sCubeInputs[index]);
  });

  return { result: resultRet, inputs: inputsRet };
};

const getPrimitiveDcubes = (
  constantSymbols: ConstantSymbols,
  logicElementType: string,
  inputCount: number
): PrimitiveDcubes => {
  const { indifferentSymbol = "" } = constantSymbols;
  const singularCube: SingularCube = singularCubes[logicElementType](inputCount, indifferentSymbol);

  const { resultingSets, otherResults } = singularCube;

  return resultingSets.reduce((result, resultSet) => {
    for (let index = 0; index < otherResults.length; index++) {
      const firstMergeResult = mergeCubes(constantSymbols, resultSet, otherResults[index]);

      result.push(firstMergeResult);

      const secondMergeResult = mergeCubes(constantSymbols, otherResults[index], resultSet);

      result.push(secondMergeResult);
    }

    return result;
  }, []);
};

export default getPrimitiveDcubes;
