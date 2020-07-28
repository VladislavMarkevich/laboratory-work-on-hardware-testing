//@flow
import * as React from "react";
import { connect } from "react-redux";
import Selection from "components/base/Selection";
import { startTest } from "./actions";
import Message from "components/base/Message";

import {
  TestResultsContainer,
  TestSelectionContainer,
  CaptionContainer,
  StartTestButton,
  ResultsCotnainer,
  ResultContainer,
  ResultTextContainer,
} from "./styled";

import type { ComponentProps as Props, ComponentState as State } from "./types";

class TestResults extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      selectedTest: "",
    };
  }

  onChangeSelectedTestState = (newValue: string): void => {
    const { selectedTest: oldValue = "" } = this.state;
    const value = oldValue === newValue ? "" : newValue;
    this.setState({ selectedTest: value });
  };

  handleClickOnStartButton = (): void => {
    const { onStartTest } = this.props;
    const { selectedTest = "" } = this.state;
    if (onStartTest && selectedTest !== "") onStartTest(selectedTest);
  };

  getResultsContent = (): React.Node => {
    const { results = [] } = this.props;
    return (
      <ResultsCotnainer>
        {results.map((value, index) => {
          const key = `result_${index}_value`;
          return (
            <ResultContainer key={key} value={value}>
              <ResultTextContainer>{index + 1}</ResultTextContainer>
            </ResultContainer>
          );
        })}
      </ResultsCotnainer>
    );
  };

  render() {
    const {
      isBusyCreateMemoryObjects = false,
      isBusyTesting = false,
      results = [],
      possibleValueTests = [],
    } = this.props;
    const { selectedTest = "" } = this.state;

    const endAllTests = results.length !== 0 ? results.every((value) => value !== "undefined") : false;

    return (
      <TestResultsContainer>
        <TestSelectionContainer>
          <CaptionContainer>Выберите тест:</CaptionContainer>
          <Selection
            possibleValues={possibleValueTests}
            value={selectedTest}
            onChange={this.onChangeSelectedTestState}
          />
        </TestSelectionContainer>
        <StartTestButton onClick={this.handleClickOnStartButton}>Начать тест</StartTestButton>
        {isBusyCreateMemoryObjects ? <Message displayName="Создание объектов памяти..." /> : null}
        {isBusyTesting ? <Message displayName="Идёт тестирование..." /> : null}
        {endAllTests ? this.getResultsContent() : null}
      </TestResultsContainer>
    );
  }
}

const mapDispatchToProps = (
  dispatch,
  { constans, onChangeIsBusyCreateMemoryObjects, onStartTestingMemoryList, onFinishedTestingMemoryList }
) => {
  return {
    onStartTest(testName) {
      dispatch(
        startTest(
          { constans, testName },
          {
            onChangeIsBusyCreateMemoryObjects,
            onStartTestingMemoryList,
            onFinishedTestingMemoryList,
          }
        )
      );
    },
  };
};

export default connect(undefined, mapDispatchToProps)(TestResults);
