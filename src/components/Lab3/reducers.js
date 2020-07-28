//@flow
import {
  LAB3_CHANGE_IS_BUSY_CREATE_MEMORY_OBJECTS,
  LAB3_START_TESTING_MEMORY_LIST,
  LAB3_FINISHED_TESTING_MEMORY_LIST,
} from "./actionTypes";
import { handleActions } from "redux-actions";

import type { ReducerAction } from "store/types";
import type { Lab3Lab4TipicalReduxStore } from "store/types/reduxStore";

const defaultState = {
  isBusyCreateMemoryObjects: false,
  isBusyTesting: false,
  results: [],
};

const lab3 = handleActions(
  {
    [LAB3_CHANGE_IS_BUSY_CREATE_MEMORY_OBJECTS]: (state: Lab3Lab4TipicalReduxStore, action: ReducerAction<boolean>) => {
      const { payload: newIsBusy = false } = action;
      return {
        ...state,
        isBusyCreateMemoryObjects: newIsBusy,
        results: [],
      };
    },
    [LAB3_START_TESTING_MEMORY_LIST]: (state: Lab3Lab4TipicalReduxStore, action: ReducerAction<number>) => {
      const { payload: memoryObjectsCount = 0 } = action;
      const results = new Array(memoryObjectsCount);
      return {
        ...state,
        isBusyTesting: true,
        results,
      };
    },
    [LAB3_FINISHED_TESTING_MEMORY_LIST]: (
      state: Lab3Lab4TipicalReduxStore,
      action: ReducerAction<$ReadOnlyArray<boolean>>
    ) => {
      const { payload: results = [] } = action;
      return {
        ...state,
        isBusyTesting: false,
        results,
      };
    },
  },
  defaultState
);

export default lab3;
