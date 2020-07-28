//@flow
import type { Selector } from "store/types";

type OtherComponentProps = {};

type ResultSelector = {
  isBusyCreateMemoryObjects: boolean,
  isBusyTesting: boolean,
  results: $ReadOnlyArray<?string>,
};

export type TestResultsSelectors = Selector<OtherComponentProps, ResultSelector>;

export type ComponentProps = OtherComponentProps & ResultSelector;

export type ComponentState = {};
