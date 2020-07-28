//@flow
import * as React from "react";
import TestResults from "./TestResults";

import { Lab3Container, TitleContainer } from "./styled";
import type { Constans } from "./types";

type Props = {
  title?: string,
  constans: Constans,
  possibleValueTests: $ReadOnlyArray<{ key: string, displayName: string }>,
  isBusyCreateMemoryObjects: boolean,
  isBusyTesting: boolean,
  results: $ReadOnlyArray<?string>,
  onChangeIsBusyCreateMemoryObjects: (any) => void,
  onStartTestingMemoryList: (any) => void,
  onFinishedTestingMemoryList: (any) => void,
};

type State = {};

class Lab3 extends React.Component<Props, State> {
  render() {
    const {
      title = "",
      constans = {},
      possibleValueTests = [],
      isBusyCreateMemoryObjects,
      isBusyTesting,
      results,
      onChangeIsBusyCreateMemoryObjects,
      onStartTestingMemoryList,
      onFinishedTestingMemoryList,
    } = this.props;
    return (
      <Lab3Container>
        <TitleContainer>{title}</TitleContainer>
        <TestResults
          constans={constans}
          possibleValueTests={possibleValueTests}
          isBusyCreateMemoryObjects={isBusyCreateMemoryObjects}
          isBusyTesting={isBusyTesting}
          results={results}
          onChangeIsBusyCreateMemoryObjects={onChangeIsBusyCreateMemoryObjects}
          onStartTestingMemoryList={onStartTestingMemoryList}
          onFinishedTestingMemoryList={onFinishedTestingMemoryList}
        />
      </Lab3Container>
    );
  }
}

export default Lab3;
