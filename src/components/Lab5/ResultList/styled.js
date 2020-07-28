import styled from "styled-components";

const defaultScrollSize = `17px`;

export const ResultListContainer = styled.div`
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  max-height: 100%;
  grid-template-columns: minmax(200px, 400px);
  max-width: 100%;
  align-content: center;

  justify-content: center;
  overflow: auto;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;

  overflow: auto;
`;

const headerStyles = `
    background-color: #baf5ca;
`;

export const RowContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => {
    const { hasScroll = false } = props;
    const lastBlock = hasScroll ? defaultScrollSize : "";
    return `repeat(auto-fit, minmax(0, 1fr)) ${lastBlock}`;
  }};
  max-height: 100%;
  grid-template-rows: 35px;
  max-width: 100%;
  grid-auto-flow: column;

  justify-items: center;
  align-items: center;

  ${(props) => {
    const { isHeader = false } = props;
    return isHeader ? headerStyles : ``;
  }}

  ${(props) => {
    const { isFirstValue = false, isSecondValue = false } = props;
    if (isFirstValue) return `background-color: #f6f7a6`;
    if (isSecondValue) return `background-color: #50d999`;
  }}
`;

export const TextContainer = styled.div`
  display: inline-block;
`;

export const CountContainer = styled.div`
  font-size: 20px;
  text-align: center;
`;
