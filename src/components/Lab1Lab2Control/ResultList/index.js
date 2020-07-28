//@flow
import * as React from "react";
import {
  ResultListContainer,
  MessageContainer,
  ContentContainer,
  RowContainer,
  TextContainer,
  CountContainer,
} from "./styled";

import { connect } from "react-redux";
import makeResultListProps from "./selectors";

import type { ComponentProps as Props, ComponentState as State } from "./types";

class ResultList extends React.Component<Props, State> {
  contentContainerRef: ?Element;

  constructor() {
    super();
    this.state = {
      value: [],
      getHasAllRequiredData: this.getHasAllRequiredData,
      hasScroll: false,
    };
  }

  getHasAllRequiredData = (props: Props) => {
    const { selectedLogicElement = "", studiedValue = "" } = props;

    return selectedLogicElement !== "" && studiedValue !== "";
  };

  static getDerivedStateFromProps(props: Props, state: State): { value: $ReadOnlyArray<string> } {
    const {
      resultsSchema,
      data,
      selectedLogicElement,
      studiedValue,
      getResults, //NOTE: specially for the condition
      onGetResults,
    } = props;
    const { getHasAllRequiredData } = state;
    if (!getHasAllRequiredData(props) || !getResults || !data) return { value: [] };

    const newValue = onGetResults(resultsSchema, data, selectedLogicElement, studiedValue);
    return { value: newValue };
  }

  getHeaderRow = (): React.Node => {
    const { inputsCount = 0 } = this.props;
    const { hasScroll = false } = this.state;
    const ret = [];
    for (let index = 0; index < inputsCount; index++) {
      const key = `headerElement_${index}`;
      ret.push(<TextContainer key={key}>{index + 1}</TextContainer>);
    }
    return (
      <RowContainer hasScroll={hasScroll} isHeader>
        {ret}
      </RowContainer>
    );
  };

  getContentRows = (): $ReadOnlyArray<React.Node> => {
    const { results = [] } = this.props;
    return results.map((it) => {
      const ret = [];
      for (let index = 0; index < it.length; index++) {
        const key = `${it}_${index}`;
        ret.push(<TextContainer key={key}>{it[index]}</TextContainer>);
      }
      return <RowContainer key={it}>{ret}</RowContainer>;
    });
  };

  getCountContainer = (): React.Node => {
    const { results = [] } = this.props;
    const controlValue = `Количество тестовых наборов: ${results.length}`;
    return <CountContainer>{controlValue}</CountContainer>;
  };

  componentDidUpdate() {
    if (!this.contentContainerRef) return;
    const { hasScroll = false } = this.state;
    const newHasScroll = this.contentContainerRef.scrollHeight > this.contentContainerRef.clientHeight;
    if (hasScroll !== newHasScroll) this.setState({ hasScroll: newHasScroll });
  }

  render() {
    const { results = [] } = this.props;
    return (
      <ResultListContainer>
        {this.getHeaderRow()}

        {!this.getHasAllRequiredData(this.props) ? (
          <MessageContainer>Заполните все данные</MessageContainer>
        ) : (
          <ContentContainer
            ref={(ref) => {
              this.contentContainerRef = ref;
            }}
          >
            {results.length === 0 ? <MessageContainer>Тестовых наборов нет</MessageContainer> : this.getContentRows()}
          </ContentContainer>
        )}
        {this.getCountContainer()}
      </ResultListContainer>
    );
  }
}

const mapDispatchToProps = (dispatch, { getResults }) => {
  return {
    onGetResults(resultsSchema, data, selectedLogicElement, studiedValue) {
      getResults(resultsSchema, data, selectedLogicElement, studiedValue, dispatch);
    },
  };
};

export default connect(makeResultListProps, mapDispatchToProps)(ResultList);
