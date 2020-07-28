//@flow

import { createActions } from "redux-actions";

import {
  LAB3_CHANGE_IS_BUSY_CREATE_MEMORY_OBJECTS,
  LAB3_START_TESTING_MEMORY_LIST,
  LAB3_FINISHED_TESTING_MEMORY_LIST,
} from "./actionTypes";

export const {
  lab3ChangeIsBusyCreateMemoryObjects,
  lab3StartTestingMemoryList,
  lab3FinishedTestingMemoryList,
} = createActions(
  LAB3_CHANGE_IS_BUSY_CREATE_MEMORY_OBJECTS,
  LAB3_START_TESTING_MEMORY_LIST,
  LAB3_FINISHED_TESTING_MEMORY_LIST
);
