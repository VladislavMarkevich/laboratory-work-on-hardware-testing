//@flow
import { createSelector, createStructuredSelector } from "reselect";

import type { TestResultsSelectors } from "./types";
import type { ReduxStore, Lab5TipicalReduxStore } from "store/types/reduxStore";

const emptyObject = {};

function makeLab5Props(): TestResultsSelectors {
  const getLab5State = (state: ReduxStore): Lab5TipicalReduxStore => state.lab5 || emptyObject;

  const getValue = createSelector([getLab5State], (lab5State) => {
    const { value = emptyObject } = lab5State;
    return value;
  });

  const getFirstValue = createSelector([getValue], (value) => {
    const { firstValue } = value;
    return firstValue;
  });

  const getSecondValue = createSelector([getValue], (value) => {
    const { secondValue } = value;
    return secondValue;
  });

  const getBuffer = createSelector([getValue], (value) => {
    const { buffer } = value;
    return buffer;
  });

  return createStructuredSelector({
    firstValue: getFirstValue,
    secondValue: getSecondValue,
    buffer: getBuffer,
  });
}

export default makeLab5Props;
