//@flow
import * as React from "react";
import isEmpty from "kernel/system/isEmpty";

import getResultsSchema from "kernel/schema/getResultsSchema";
import type { ShemaElements, ResultsSchema, NormalizedSchema } from "kernel/schema/types";

import LogicElementSelection from "./LogicElementSelection";
import ResultList from "./ResultList";
import StudiedValueSelection from "./StudiedValueSelection";

import { Lab1Lab2Container, TitleContainer } from "./styled";

import type { Dispatch } from "store/types";

type Props = {
  schemaConst: $ReadOnlyArray<ShemaElements>,
  normalizedSchema: NormalizedSchema,
  lastLogicElementName: string,
  inputsCount: number,
  possibleValuesForStudiedValue: $ReadOnlyArray<{
    key: string,
    displayName: string,
  }>,

  labaNumber: number,
  title: string,
  resutlListData: any,
  getResults: (ResultsSchema, any, string, string, Dispatch) => $ReadOnlyArray<string>,
};

type State = {
  resultsSchema: ResultsSchema,
  selectedLogicElement: string,
  studiedValue: string,
};

class Lab1Lab2Control extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      resultsSchema: {},
      selectedLogicElement: "",
      studiedValue: "",
    };
  }

  onChangeSelectedLogicElementState = (newValue: string): void => {
    const { selectedLogicElement: oldValue = "" } = this.state;
    const value = oldValue === newValue ? "" : newValue;
    this.setState({ selectedLogicElement: value });
  };

  onChangeStudiedValue = (newValue: string): void => {
    const { studiedValue: oldValue = "" } = this.state;
    const value = oldValue === newValue ? "" : newValue;
    this.setState({ studiedValue: value });
  };

  componentDidMount() {
    const { normalizedSchema, lastLogicElementName, inputsCount } = this.props;
    const resultsSchema = getResultsSchema(normalizedSchema, lastLogicElementName, inputsCount);
    this.setState({
      resultsSchema,
    });
  }

  render() {
    const {
      title,
      resutlListData,
      getResults,
      schemaConst,
      inputsCount,
      possibleValuesForStudiedValue,
      labaNumber,
    } = this.props;
    const {
      resultsSchema = {},
      resultsSchema: { results = {} } = {},
      selectedLogicElement = "",
      studiedValue = "",
    } = this.state;
    if (isEmpty(results)) return null;
    return (
      <Lab1Lab2Container>
        <TitleContainer>{title}</TitleContainer>
        <LogicElementSelection
          value={selectedLogicElement}
          onChange={this.onChangeSelectedLogicElementState}
          schema={schemaConst}
        />
        <StudiedValueSelection
          possibleValues={possibleValuesForStudiedValue}
          onChange={this.onChangeStudiedValue}
          value={studiedValue}
        />
        <ResultList
          labaNumber={labaNumber}
          inputsCount={inputsCount}
          resultsSchema={resultsSchema}
          data={resutlListData}
          getResults={getResults}
          selectedLogicElement={selectedLogicElement}
          studiedValue={studiedValue}
        />
      </Lab1Lab2Container>
    );
  }
}

export default Lab1Lab2Control;
