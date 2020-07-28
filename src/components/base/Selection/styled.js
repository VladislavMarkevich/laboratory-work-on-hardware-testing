//@flow
import styled from "styled-components";

export const SelectionContainer = styled.div`
  display: grid;
  grid-template-rows: minmax(0, 1fr);
  max-height: 100%;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  max-width: 100%;
  grid-auto-flow: column;
  grid-gap: 10px;
`;

export const ItemContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  ${(props) => {
    const { isSelected = false } = props;
    return isSelected ? `background-color: #afdbd1;` : ``;
  }}

  cursor: pointer;
  border: 2px solid black;
  border-radius: 10px;
`;

export const TextContainer = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  user-select: none;
`;
