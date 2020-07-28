//@flow
import * as React from "react";
import isEmpty from "kernel/system/isEmpty";

import getResultsActivationEquations from "./utils/getResultsActivationEquations";
import type { ResultsActivationEquations } from "./utils/getResultsActivationEquations/types";

import getResultByLogicElement from "./utils/getResultByLogicElement";

import {
  schemaConst,
  normalizedSchema,
  lastLogicElementName,
  inputsCount,
  possibleValuesForStudiedValue,
} from "../constans/Lab1_Lab2/variant";
// } from "../constans/Lab1_Lab2/example";

import Lab1Lab2Control from "../Lab1Lab2Control";

type Props = {
  activatioPathSymbol: string,
};

type State = {
  resutlListData: ResultsActivationEquations,
};

class Lab1 extends React.Component<Props, State> {
  static defaultProps = {
    activatioPathSymbol: "x",
  };
  constructor() {
    super();
    this.state = {
      resutlListData: {},
    };
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    const { activatioPathSymbol } = props;
    const { resutlListData } = state;

    if (!isEmpty(resutlListData)) return null;

    const newResutlListData = getResultsActivationEquations(
      normalizedSchema,
      activatioPathSymbol,
      lastLogicElementName
    );

    return { resutlListData: newResutlListData };
  }

  render() {
    const { resutlListData } = this.state;
    const title = "Лабораторная работа №1";
    const labaNumber = 1;
    return (
      <Lab1Lab2Control
        labaNumber={labaNumber}
        schemaConst={schemaConst}
        normalizedSchema={normalizedSchema}
        lastLogicElementName={lastLogicElementName}
        inputsCount={inputsCount}
        possibleValuesForStudiedValue={possibleValuesForStudiedValue}
        title={title}
        resutlListData={resutlListData}
        getResults={getResultByLogicElement}
      />
    );
  }
}

export default Lab1;
