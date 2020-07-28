//@flow

import type { Dispatch } from "store/types";
import type { ResultsSchema } from "kernel/schema/types";
import type {
  ConstantSymbols,
  IntersectionsSingularCubes,
  GetIntersectionsSingularCubes,
} from "./getGetIntersectionsSingularCubes/types";

import { createActions } from "redux-actions";

import { LAB2_ADD_VALUES } from "./actionTypes";

const { lab2AddValues } = createActions(LAB2_ADD_VALUES);

const getIsEqualIntersectionsSingularCube = (
  {
    indifferentSymbol = "",
    identicalValueSymbol = "",
    oppositeIdenticalValueSymbol = "",
    errorSymbol = "",
  }: ConstantSymbols,
  studiedValue: string,
  mask: string,
  intersectionsSingularCube: { [string]: string | number }
): boolean => {
  const hasNotEqualSymbol = mask.split("").find((inputValue, index) => {
    const indexSting = index.toString();
    if (intersectionsSingularCube[indexSting] === indifferentSymbol) return false;

    const secondIncorrectValue =
      intersectionsSingularCube[indexSting] === identicalValueSymbol
        ? "0"
        : intersectionsSingularCube[indexSting] === oppositeIdenticalValueSymbol
        ? "1"
        : intersectionsSingularCube[indexSting].toString();

    return inputValue !== secondIncorrectValue;
  });

  return !Boolean(hasNotEqualSymbol);
};

const getIsValidValue = (
  constantSymbols: ConstantSymbols,
  studiedValue: string,
  mask: string,
  intersectionsSingularCubes: IntersectionsSingularCubes
): boolean => {
  const hasEqual = intersectionsSingularCubes.find((it) => {
    return getIsEqualIntersectionsSingularCube(constantSymbols, studiedValue, mask, it);
  });
  return Boolean(hasEqual);
};

const getResults = (
  resultsSchema: ResultsSchema,
  {
    constantSymbols,
    getIntersectionsSingularCubes,
  }: {
    constantSymbols: ConstantSymbols,
    getIntersectionsSingularCubes: GetIntersectionsSingularCubes,
  },
  selectedLogicElement: string,
  studiedValue: string,
  dispatch: Dispatch
): $ReadOnlyArray<string> => {
  const intersectionsSingularCubes: IntersectionsSingularCubes = getIntersectionsSingularCubes(
    selectedLogicElement,
    studiedValue
  );

  const { maskList = [] } = resultsSchema;

  const ret = maskList.reduce((result, mask) => {
    const isValidValue = getIsValidValue(constantSymbols, studiedValue, mask, intersectionsSingularCubes);
    if (isValidValue) result.push(mask);
    return result;
  }, []);

  dispatch(lab2AddValues({ results: ret, selectedLogicElement, studiedValue }));

  return ret;
};

export default getResults;
