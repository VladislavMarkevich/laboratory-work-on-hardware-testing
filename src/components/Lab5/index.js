//@flow
import * as React from "react";
import { connect } from "react-redux";
import makeLab5Props from "./selectors";

import getPoints from "./kernel/getPoints";
import { getSequence } from "./kernel";

import ResultList from "./ResultList";

import { Lab5Container, TitleContainer, StartButton } from "./styled";

import type { ComponentProps as Props, ComponentState as State } from "./types";

class Lab5 extends React.Component<Props, State> {
  handleClick = () => {
    const { getPointsDispatch } = this.props;
    if (getPointsDispatch) getPointsDispatch();
  };

  render() {
    const title = "Лабораторная работа №5";
    const { firstValue, secondValue, buffer } = this.props;
    const sequence = getSequence();
    return (
      <Lab5Container>
        <TitleContainer>{title}</TitleContainer>
        <StartButton onClick={this.handleClick}>Получить данные</StartButton>

        {firstValue && secondValue && buffer ? (
          <ResultList
            inputsCount={8}
            values={sequence}
            firstValue={firstValue}
            secondValue={secondValue}
            taktCount={buffer}
          />
        ) : null}
      </Lab5Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPointsDispatch() {
      dispatch(getPoints());
    },
  };
};

export default connect(makeLab5Props, mapDispatchToProps)(Lab5);
