//@flow
import type { Constans } from "../constans";

export type ComponentProps = {
  constans: Constans,
  possibleValueTests: $ReadOnlyArray<{ key: string, displayName: string }>,
  isBusyCreateMemoryObjects: boolean,
  isBusyTesting: boolean,
  results: $ReadOnlyArray<?string>,
  onChangeIsBusyCreateMemoryObjects: (any) => void,
  onStartTestingMemoryList: (any) => void,
  onFinishedTestingMemoryList: (any) => void,

  //mapDispatchToProps
  onStartTest: (string) => void,
};

export type ComponentState = {
  selectedTest: string,
};
