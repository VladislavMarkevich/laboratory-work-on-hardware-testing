//@flow
import getMemoryList from "../kernel/getMemoryList";
import tests from "../kernel/tests";

import type { Dispatch } from "store/types";
import type { MemoryList, Memory } from "../kernel/types";
import type { Constans } from "../constans";

type StartTestProps = { constans: Constans, testName: string };
type ActionsProps = {
  onChangeIsBusyCreateMemoryObjects: (any) => void,
  onStartTestingMemoryList: (any) => void,
  onFinishedTestingMemoryList: (any) => void,
};
export const startTest = (
  { constans, testName }: StartTestProps,
  { onChangeIsBusyCreateMemoryObjects, onStartTestingMemoryList, onFinishedTestingMemoryList }: ActionsProps
) => (dispatch: Dispatch): void => {
  dispatch(onChangeIsBusyCreateMemoryObjects(true));
  setTimeout(() => {
    const memoryList: MemoryList = getMemoryList(constans);
    dispatch(onChangeIsBusyCreateMemoryObjects(false));

    const { [testName]: test } = tests;
    const memoryCount = memoryList.length;

    dispatch(onStartTestingMemoryList(memoryCount));

    setTimeout(async () => {
      const results = memoryList.map((memory: Memory) => test(memory));
      dispatch(onFinishedTestingMemoryList(results));
    }, 100);
  }, 100);
};
