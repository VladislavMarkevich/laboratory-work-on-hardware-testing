//@flow
import { LAB5_CHANGE_VALUE } from "./actionTypes";
import { handleActions } from "redux-actions";

import type { ReducerAction } from "store/types";
import type { Lab5TipicalReduxStore } from "store/types/reduxStore";

const defaultState = {
  value: {},
};

const lab5 = handleActions(
  {
    [LAB5_CHANGE_VALUE]: (state: Lab5TipicalReduxStore, action: ReducerAction<any>) => {
      const { payload: newValue = {} } = action;
      return {
        ...state,
        value: newValue,
      };
    },
  },
  defaultState
);

export default lab5;
