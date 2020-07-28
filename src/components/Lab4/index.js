//@flow
import * as React from "react";
import { connect } from "react-redux";
import makeLab4Props from "./selectors";
import constans from "../constans/Lab4";

import {
  lab4ChangeIsBusyCreateMemoryObjects,
  lab4StartTestingMemoryList,
  lab4FinishedTestingMemoryList,
} from "./actions";

import Lab3Lab4Control from "../Lab3Lab4Control";

import type { ComponentProps as Props, ComponentState as State } from "./types";

class Lab4 extends React.Component<Props, State> {
  render() {
    const { isBusyCreateMemoryObjects, isBusyTesting, results } = this.props;
    const title = "Лабораторная работа №4";
    const possibleValueTests = [
      { key: "March U-R", displayName: "March U-R" },
      { key: "March PS", displayName: "March PS" },
    ];
    return (
      <Lab3Lab4Control
        title={title}
        constans={constans}
        possibleValueTests={possibleValueTests}
        isBusyCreateMemoryObjects={isBusyCreateMemoryObjects}
        isBusyTesting={isBusyTesting}
        results={results}
        onChangeIsBusyCreateMemoryObjects={lab4ChangeIsBusyCreateMemoryObjects}
        onStartTestingMemoryList={lab4StartTestingMemoryList}
        onFinishedTestingMemoryList={lab4FinishedTestingMemoryList}
      />
    );
  }
}

export default connect(makeLab4Props)(Lab4);
