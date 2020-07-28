//@flow
import * as React from "react";
import isEmpty from "kernel/system/isEmpty";
import getGetIntersectionsSingularCubes from "./utils/getGetIntersectionsSingularCubes";
import getResults from "./utils/getResults";

import {
  schemaConst,
  normalizedSchema,
  lastLogicElementName,
  inputsCount,
  possibleValuesForStudiedValue,
} from "components/constans/Lab1_Lab2/variant";
// } from "components/constans/Lab1_Lab2/example";

import { constantSymbols } from "./constans";

import Lab1Lab2Control from "../Lab1Lab2Control";

type Props = {};

type State = {
  resutlListData: any,
};

class Lab2 extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      resutlListData: {},
    };
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    const { resutlListData } = state;

    if (!isEmpty(resutlListData)) return null;

    const newResutlListData = getGetIntersectionsSingularCubes(
      constantSymbols,
      normalizedSchema,
      lastLogicElementName,
      inputsCount
    );

    return {
      resutlListData: {
        constantSymbols,
        getIntersectionsSingularCubes: newResutlListData,
      },
    };
  }

  render() {
    const { resutlListData } = this.state;
    const title = "Лабораторная работа №2";
    const labaNumber = 2;
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
        getResults={getResults}
      />
    );
  }
}

export default Lab2;
