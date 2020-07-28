//@flow
import { createSelector, createStructuredSelector } from "reselect";

import type { ResultListSelectors, OtherComponentProps } from "./types";
import type { ReduxStore, Lab1Lab2TipicalReduxStore } from "store/types/reduxStore";

const emptyObject = {};
const emptyString = "";
function makeResultListProps(): ResultListSelectors {
  const getValueState = (state: ReduxStore, props: OtherComponentProps): Lab1Lab2TipicalReduxStore => {
    const { labaNumber = 0 } = props;
    const labaNameFromState = labaNumber === 1 ? "lab1" : labaNumber === 2 ? "lab2" : "lab0";
    //$FlowFixMe
    const { [labaNameFromState]: ret = emptyObject } = state;
    return ret;
  };

  const getSelectedLogicElementProp = (state: ReduxStore, props: OtherComponentProps): string =>
    props.selectedLogicElement || emptyString;

  const getStudiedValueProp = (state: ReduxStore, props: OtherComponentProps): string =>
    props.studiedValue || emptyString;

  const getResults = createSelector([getValueState], (lab2State) => {
    const { results = emptyObject } = lab2State;
    return results;
  });

  const getKey = createSelector(
    [getSelectedLogicElementProp, getStudiedValueProp],
    (selectedLogicElementProp, studiedValueProp) => {
      return `${selectedLogicElementProp}_${studiedValueProp}`;
    }
  );

  const getResultsByKey = createSelector([getResults, getKey], (results, key) => {
    const { [key]: result } = results;
    return result;
  });

  return createStructuredSelector({
    results: getResultsByKey,
  });
}

export default makeResultListProps;
