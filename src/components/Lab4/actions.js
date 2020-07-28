//@flow

import { createActions } from "redux-actions";

import {
  LAB4_CHANGE_IS_BUSY_CREATE_MEMORY_OBJECTS,
  LAB4_START_TESTING_MEMORY_LIST,
  LAB4_FINISHED_TESTING_MEMORY_LIST,
} from "./actionTypes";

export const {
  lab4ChangeIsBusyCreateMemoryObjects,
  lab4StartTestingMemoryList,
  lab4FinishedTestingMemoryList,
} = createActions(
  LAB4_CHANGE_IS_BUSY_CREATE_MEMORY_OBJECTS,
  LAB4_START_TESTING_MEMORY_LIST,
  LAB4_FINISHED_TESTING_MEMORY_LIST
);
