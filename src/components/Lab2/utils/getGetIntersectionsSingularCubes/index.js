//@flow

import getActivationPaths from "kernel/schema/getActivationPaths";

import singularCubes from "./getPrimitiveDcubes/singularCubes";
import getPrimitiveDcubes from "./getPrimitiveDcubes";
import getPrimitiveDCubesForDefect from "./getPrimitiveDcubes/getPrimitiveDCubesForDefect";

import type { NormalizedSchema } from "kernel/schema/types"; // "../../kernel/schema/types";
import type {
  SingularCube,
  DefaultCube,
  PrimitiveDcubes,
  GetIntersectionsSingularCubes,
  ConstantSymbols,
} from "./types";

const getFormattedSingularCube = (
  { indifferentSymbol = "" }: ConstantSymbols,
  normalizedSchema: NormalizedSchema,
  inputsCount: number,
  currentLogicElementName: string,
  singularCube: DefaultCube
): { [string]: string | number } => {
  const logicElementNames = Object.keys(normalizedSchema);
  const {
    [currentLogicElementName]: { inputs = [] },
  } = normalizedSchema;
  const startValue = {};
  for (let index = 0; index < inputsCount; index++) startValue[index] = indifferentSymbol;

  logicElementNames.forEach((logicElementName) => {
    startValue[logicElementName] = indifferentSymbol;
  });

  const { inputs: inputsSingularCube = [], result: resultSingularCube } = singularCube;
  startValue[currentLogicElementName] = resultSingularCube;
  inputs.forEach((value, index) => {
    startValue[value] = inputsSingularCube[index];
  });

  return startValue;
};

const mergeSingularCubes = (
  constantSymbols: ConstantSymbols,
  normalizedSchema: NormalizedSchema,
  inputsCount: number,
  formattedFirstCube: { [string]: string | number },
  secondLogicElementName: string,
  secondCube: DefaultCube
): { [string]: string | number } => {
  const { indifferentSymbol = "", errorSymbol = "" } = constantSymbols;

  const formattedSecondCube = getFormattedSingularCube(
    constantSymbols,
    normalizedSchema,
    inputsCount,
    secondLogicElementName,
    secondCube
  );

  return Object.keys(formattedFirstCube).reduce((result, key) => {
    const firtsValue = formattedFirstCube[key];
    const secondValue = formattedSecondCube[key];
    if (firtsValue === secondValue) {
      result[key] = firtsValue;
      return result;
    }
    if (firtsValue === indifferentSymbol) {
      result[key] = secondValue;
      return result;
    }
    if (secondValue === indifferentSymbol) {
      result[key] = firtsValue;
      return result;
    }
    result[key] = errorSymbol;
    return result;
  }, {});
};

const mergeFormattedCubeWithPrimitiveDcubes = (
  constantSymbols: ConstantSymbols,
  normalizedSchema: NormalizedSchema,
  inputsCount: number,
  formattedFirstCube: { [string]: number | string },
  secondLogicElementName: string,
  secondCubes: PrimitiveDcubes
): { [string]: string | number } => {
  const { errorSymbol = "" } = constantSymbols;

  for (let index = 0; index < secondCubes.length; index++) {
    const cube = secondCubes[index];

    const mergedCube = mergeSingularCubes(
      constantSymbols,
      normalizedSchema,
      inputsCount,
      formattedFirstCube,
      secondLogicElementName,
      cube
    );
    const hasErrorSymbol = Object.keys(mergedCube).find((it) => {
      const value = mergedCube[it];
      return value === errorSymbol;
    });
    if (!hasErrorSymbol) return mergedCube;
  }

  return formattedFirstCube;
};

const getResultAfterMergeNestedLogicElemtns = (
  constantSymbols: ConstantSymbols,
  normalizedSchema: NormalizedSchema,
  inputsCount: number,
  rootLogicElementName: string,
  rootResultAfterMerge: { [string]: string | number }
): { [string]: string | number } => {
  const { [rootLogicElementName]: { inputs: rootLogicElementInput = [] } = {} } = normalizedSchema;

  const nestedLogicElements = rootLogicElementInput.reduce((newResult, it) => {
    if (typeof it === "number") return newResult;
    newResult.push(it);
    return newResult;
  }, []);

  if (nestedLogicElements.length === 0) return rootResultAfterMerge;

  return nestedLogicElements.reduce((nestedLogicElementsResult, nestedLogicElementKey) => {
    const { indifferentSymbol = "" } = constantSymbols;
    const {
      [nestedLogicElementKey]: { logicElementType: nestedLogicElementType, inputs: nestedLogicElementInputs = [] } = {},
    } = normalizedSchema;
    const nestedLogicElementSingularCube: SingularCube = singularCubes[nestedLogicElementType](
      nestedLogicElementInputs.length,
      indifferentSymbol
    );

    const { resultingSets, otherResults } = nestedLogicElementSingularCube;

    const commonNestedLogicElementSingularCube = [].concat(resultingSets).concat(otherResults);

    const nestedLogicElementResultAfterMerge = mergeFormattedCubeWithPrimitiveDcubes(
      constantSymbols,
      normalizedSchema,
      inputsCount,
      nestedLogicElementsResult,
      nestedLogicElementKey,
      commonNestedLogicElementSingularCube
    );

    return getResultAfterMergeNestedLogicElemtns(
      constantSymbols,
      normalizedSchema,
      inputsCount,
      nestedLogicElementKey,
      nestedLogicElementResultAfterMerge
    );
  }, rootResultAfterMerge);
};

const getGetIntersectionsSingularCubes = (
  constantSymbols: ConstantSymbols,
  normalizedSchema: NormalizedSchema,
  lastLogicElementName: string,
  inputsCount: number
): GetIntersectionsSingularCubes => {
  const activationPaths = getActivationPaths(normalizedSchema, lastLogicElementName);

  return (selectedLogicElement: string, studiedValue: string): $ReadOnlyArray<{ [string]: string | number }> => {
    const activationPath = activationPaths[selectedLogicElement];

    const {
      [selectedLogicElement]: { logicElementType = "", inputs: selectedLogicElementInputs } = {},
    } = normalizedSchema;
    const primitiveDCubesForDefect = getPrimitiveDCubesForDefect(
      constantSymbols,
      selectedLogicElementInputs.length,
      logicElementType,
      studiedValue
    );

    return primitiveDCubesForDefect.reduce((primitiveDCubesForDefectResult, primitiveDCubeForDefect) => {
      const formattedPrimitiveDCubeForDefect = getFormattedSingularCube(
        constantSymbols,
        normalizedSchema,
        inputsCount,
        selectedLogicElement,
        primitiveDCubeForDefect
      );

      const rootResultMerge = activationPath.reduce((rootResult, logicElementNameFromPath) => {
        const {
          [logicElementNameFromPath]: {
            inputs: logicElementInputsFromPath = [],
            logicElementType: logicElementTypeFromPath = "",
          },
        } = normalizedSchema;

        const primitiveDcubesElementsPath = getPrimitiveDcubes(
          constantSymbols,
          logicElementTypeFromPath,
          logicElementInputsFromPath.length
        );

        const rootResultAfterMerge = mergeFormattedCubeWithPrimitiveDcubes(
          constantSymbols,
          normalizedSchema,
          inputsCount,
          rootResult,
          logicElementNameFromPath,
          primitiveDcubesElementsPath
        );

        const newResult = getResultAfterMergeNestedLogicElemtns(
          constantSymbols,
          normalizedSchema,
          inputsCount,
          logicElementNameFromPath,
          rootResultAfterMerge
        );

        return newResult;
      }, formattedPrimitiveDCubeForDefect);

      primitiveDCubesForDefectResult.push(rootResultMerge);
      return primitiveDCubesForDefectResult;
    }, []);
  };
};

export default getGetIntersectionsSingularCubes;
