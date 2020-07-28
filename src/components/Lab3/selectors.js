//@flow
import { createSelector, createStructuredSelector } from "reselect";

import type { TestResultsSelectors } from "./types";
import type { ReduxStore, Lab3Lab4TipicalReduxStore } from "store/types/reduxStore";

const emptyObject = {};
const emptyArray = [];
function makeLab3Props(): TestResultsSelectors {
  const getLab3State = (state: ReduxStore): Lab3Lab4TipicalReduxStore => state.lab3 || emptyObject;

  const getIsBusyCreateMemoryObjectsState = createSelector(
    [getLab3State],
    (lab3State: Lab3Lab4TipicalReduxStore): boolean => {
      const { isBusyCreateMemoryObjects = false } = lab3State;
      return isBusyCreateMemoryObjects;
    }
  );

  const getIsBusyTestingState = createSelector([getLab3State], (lab3State: Lab3Lab4TipicalReduxStore): boolean => {
    const { isBusyTesting = false } = lab3State;
    return isBusyTesting;
  });

  const getResultsState = createSelector(
    [getLab3State],
    (lab3State: Lab3Lab4TipicalReduxStore): $ReadOnlyArray<?boolean> => {
      const { results = emptyArray } = lab3State;
      return results;
    }
  );

  return createStructuredSelector({
    isBusyCreateMemoryObjects: getIsBusyCreateMemoryObjectsState,
    isBusyTesting: getIsBusyTestingState,
    results: getResultsState,
  });
}

export default makeLab3Props;
