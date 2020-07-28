//@flow
import * as React from "react";
import Selection from "components/base/Selection";
import { StudiedValueSelectionContainer, CaptionContainer } from "./styled";

type Props = {
  possibleValues: $ReadOnlyArray<{ key: string, displayName: string }>,
  onChange: (string) => void,
  value: string,
};

class StudiedValueSelection extends React.Component<Props> {
  render() {
    const { possibleValues, value = "", onChange } = this.props;
    return (
      <StudiedValueSelectionContainer>
        <CaptionContainer>Выберите исследуемое значение:</CaptionContainer>
        <Selection possibleValues={possibleValues} value={value} onChange={onChange} />
      </StudiedValueSelectionContainer>
    );
  }
}

export default StudiedValueSelection;
