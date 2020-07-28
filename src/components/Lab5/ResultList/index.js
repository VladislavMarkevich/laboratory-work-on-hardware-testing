import * as React from "react";

import { ResultListContainer, ContentContainer, RowContainer, TextContainer, CountContainer } from "./styled";

type Props = {
  inputsCount: number,
  values: $ReadOnlyArray<number>,
  firstValue: number,
  secondValue: number,
  taktCount: number,
};

type State = {
  hasScroll: boolean,
};

class ResultList extends React.Component<Props, State> {
  contentContainerRef: ?Element;

  constructor() {
    super();
    this.state = {
      hasScroll: false,
    };
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
    const { values = [], firstValue, secondValue, inputsCount } = this.props;
    return values.map((it) => {
      const ret = [];
      const bitValue = it.toString(2).padStart(inputsCount, "0");
      for (let index = 0; index < inputsCount; index++) {
        const key = `${it}_${index}`;
        ret.push(<TextContainer key={key}>{bitValue[index]}</TextContainer>);
      }
      const isFirstValue = it === secondValue;
      const isSecondValue = it === firstValue;

      return (
        <RowContainer key={it} isFirstValue={isFirstValue} isSecondValue={isSecondValue}>
          {ret}
        </RowContainer>
      );
    });
  };

  getCountContainer = (): React.Node => {
    const { taktCount = [] } = this.props;
    const controlValue = `Количество тактов: ${255 - taktCount}`;
    return <CountContainer>{controlValue}</CountContainer>;
  };

  componentDidUpdate() {
    if (!this.contentContainerRef) return;
    const { hasScroll = false } = this.state;
    const newHasScroll = this.contentContainerRef.scrollHeight > this.contentContainerRef.clientHeight;
    if (hasScroll !== newHasScroll) this.setState({ hasScroll: newHasScroll });
  }

  render() {
    return (
      <ResultListContainer>
        {this.getHeaderRow()}

        <ContentContainer
          ref={(ref) => {
            this.contentContainerRef = ref;
          }}
        >
          {this.getContentRows()}
        </ContentContainer>

        {this.getCountContainer()}
      </ResultListContainer>
    );
  }
}

export default ResultList;
