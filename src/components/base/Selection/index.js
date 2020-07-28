//@flow
import * as React from "react";
import { SelectionContainer, ItemContainer, TextContainer } from "./styled";

type PossibleValue = { key: string, displayName: string };

type ItemProps = {
  value: PossibleValue,
  isSelected: boolean,
  onClick: (string) => void,
};

class Item extends React.PureComponent<ItemProps> {
  handleClick = (): void => {
    const { onClick, value: { key = "" } = {} } = this.props;
    if (onClick) onClick(key);
  };

  render() {
    const { value: { displayName = "" } = {}, isSelected = false } = this.props;
    return (
      <ItemContainer onClick={this.handleClick} isSelected={isSelected}>
        <TextContainer>{displayName}</TextContainer>
      </ItemContainer>
    );
  }
}

type SelectionProps = {
  possibleValues: $ReadOnlyArray<PossibleValue>,
  value: string,
  onChange: (string) => void,
};

class Selection extends React.Component<SelectionProps> {
  render() {
    const { possibleValues = [], value = "", onChange } = this.props;
    return (
      <SelectionContainer>
        {possibleValues.map((it) => {
          const { key = "" } = it;
          const isSelected = key === value;
          return <Item key={key} value={it} isSelected={isSelected} onClick={onChange} />;
        })}
      </SelectionContainer>
    );
  }
}

export default Selection;
