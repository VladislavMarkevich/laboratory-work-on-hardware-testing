//@flow
import type { Selector } from "store/types";

type OtherComponentProps = {
  //mapDispatchToProps
  getPointsDispatch: () => void,
};

type ResultSelector = {
  firstValue: ?number,
  secondValue: ?number,
  buffer: ?number,
};

export type TestResultsSelectors = Selector<OtherComponentProps, ResultSelector>;

export type ComponentProps = OtherComponentProps & ResultSelector;

export type ComponentState = {};
