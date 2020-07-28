//@flow
import { createSelector, createStructuredSelector } from "reselect";

import type { TestResultsSelectors } from "./types";
import type { ReduxStore, Lab3Lab4TipicalReduxStore } from "store/types/reduxStore";

const emptyObject = {};
const emptyArray = [];
function makeLab4Props(): TestResultsSelectors {
  const getLab4State = (state: ReduxStore): Lab3Lab4TipicalReduxStore => state.lab4 || emptyObject;

  const getIsBusyCreateMemoryObjectsState = createSelector(
    [getLab4State],
    (lab4State: Lab3Lab4TipicalReduxStore): boolean => {
      const { isBusyCreateMemoryObjects = false } = lab4State;
      return isBusyCreateMemoryObjects;
    }
  );

  const getIsBusyTestingState = createSelector([getLab4State], (lab4State: Lab3Lab4TipicalReduxStore): boolean => {
    const { isBusyTesting = false } = lab4State;
    return isBusyTesting;
  });

  const getResultsState = createSelector(
    [getLab4State],
    (lab4State: Lab3Lab4TipicalReduxStore): $ReadOnlyArray<?boolean> => {
      const { results = emptyArray } = lab4State;
      return results;
    }
  );

  return createStructuredSelector({
    isBusyCreateMemoryObjects: getIsBusyCreateMemoryObjectsState,
    isBusyTesting: getIsBusyTestingState,
    results: getResultsState,
  });
}

export default makeLab4Props;
