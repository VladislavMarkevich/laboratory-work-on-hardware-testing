//@flow
import * as React from "react";
import { connect } from "react-redux";
import makeLab3Props from "./selectors";
import constans from "components/constans/Lab3";
import {
  lab3ChangeIsBusyCreateMemoryObjects,
  lab3StartTestingMemoryList,
  lab3FinishedTestingMemoryList,
} from "./actions";

import Lab3Lab4Control from "../Lab3Lab4Control";

import type { ComponentProps as Props, ComponentState as State } from "./types";

class Lab3 extends React.Component<Props, State> {
  render() {
    const { isBusyCreateMemoryObjects, isBusyTesting, results } = this.props;
    const title = "Лабораторная работа №3";
    const possibleValueTests = [
      { key: "GALPAT", displayName: "GALPAT" },
      { key: "MarchY", displayName: "MarchY" },
    ];
    return (
      <Lab3Lab4Control
        title={title}
        constans={constans}
        possibleValueTests={possibleValueTests}
        isBusyCreateMemoryObjects={isBusyCreateMemoryObjects}
        isBusyTesting={isBusyTesting}
        results={results}
        onChangeIsBusyCreateMemoryObjects={lab3ChangeIsBusyCreateMemoryObjects}
        onStartTestingMemoryList={lab3StartTestingMemoryList}
        onFinishedTestingMemoryList={lab3FinishedTestingMemoryList}
      />
    );
  }
}

export default connect(makeLab3Props)(Lab3);
