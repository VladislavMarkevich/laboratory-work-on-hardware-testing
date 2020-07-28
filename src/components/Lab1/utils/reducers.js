//@flow
import { LAB1_ADD_VALUES } from "./actionTypes";
import { handleActions } from "redux-actions";

import type { ReducerAction } from "store/types";
import type { Lab1Lab2TipicalReduxStore } from "store/types/reduxStore";

const defaultState = {
  results: {},
};

const lab1 = handleActions(
  {
    [LAB1_ADD_VALUES]: (
      state: Lab1Lab2TipicalReduxStore,
      action: ReducerAction<{
        results: [string],
        selectedLogicElement: string,
        studiedValue: string,
      }>
    ) => {
      const { payload: { results: newResults = [], selectedLogicElement = "", studiedValue = "" } = {} } = action;

      const { results: oldResults = {} } = state;

      const newKey = `${selectedLogicElement}_${studiedValue}`;

      const hasResultsWithNewKey = oldResults[newKey];
      if (hasResultsWithNewKey) return state;
      const newResultsForState = { ...oldResults, [newKey]: newResults };
      return {
        results: newResultsForState,
      };
    },
  },
  defaultState
);

export default lab1;
