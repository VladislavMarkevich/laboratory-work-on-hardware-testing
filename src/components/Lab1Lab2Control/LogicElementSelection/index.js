//@flow
import * as React from "react";
import isEmpty from "kernel/system/isEmpty";
import Selection from "components/base/Selection";
import { LogicElementSelectionContainer, CaptionContainer } from "./styled";

import type { ShemaElements } from "kernel/schema/types";

type Props = {
  value: string,
  schema: $ReadOnlyArray<ShemaElements>,
  onChange: (string) => void,
};

type SelectionPossibleValue = { key: string, displayName: string };
type State = {
  possibleValues?: $ReadOnlyArray<SelectionPossibleValue>,
};

class LogicElementSelection extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      possibleValues: [],
    };
  }

  static getDerivedStateFromProps(props: Props, state: State): ?State {
    const { schema = {} } = props;
    const { possibleValues: oldPossibleValues = [] } = state;

    if (!isEmpty(oldPossibleValues)) return null;

    const newPossibleValues = schema.reduce((result, it) => {
      const { logicElementName = "" } = it;
      result.push({ key: logicElementName, displayName: logicElementName });
      return result;
    }, []);

    return { possibleValues: newPossibleValues };
  }

  render() {
    const { value = "", onChange } = this.props;
    const { possibleValues = [] } = this.state;
    return (
      <LogicElementSelectionContainer>
        <CaptionContainer>Выберите исследуемый логический элемент:</CaptionContainer>
        <Selection value={value} possibleValues={possibleValues} onChange={onChange} />
      </LogicElementSelectionContainer>
    );
  }
}

export default LogicElementSelection;
