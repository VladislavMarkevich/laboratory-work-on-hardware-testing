//@flow
import type { Selector } from "store/types";
import type { ResultsSchema } from "kernel/schema/types";

export type OtherComponentProps = {
  labaNumber: Number,
  inputsCount: number,
  resultsSchema: ResultsSchema,
  data: any,
  selectedLogicElement: string,
  studiedValue: string,
  getResults: ?(ResultsSchema, any, string, string) => $ReadOnlyArray<string>,

  //mapDisparchToProps
  onGetResults: (ResultsSchema, any, string, string) => $ReadOnlyArray<string>,
};

type ResultSelector = {
  results: $ReadOnlyArray<string>,
};

export type ResultListSelectors = Selector<OtherComponentProps, ResultSelector>;

export type ComponentProps = OtherComponentProps & ResultSelector;

export type ComponentState = {
  value: $ReadOnlyArray<string>,
  getHasAllRequiredData: (ComponentProps) => boolean,
  hasScroll: boolean,
};
