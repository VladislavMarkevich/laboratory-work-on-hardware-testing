import styled from "styled-components";

export const TestResultsContainer = styled.div`
  display: grid;
  grid-template-rows: 80px 30px 100px;
  max-height: 100%;
  grid-template-columns: minmax(0, 1fr);
  max-width: 100%;
  grid-gap: 10px;
`;

export const TestSelectionContainer = styled.div`
  display: grid;
  grid-template-rows: 30px minmax(0, 1fr);
  max-height: 100%;
  grid-template-columns: minmax(0, 1fr);
  max-width: 100%;
`;

export const CaptionContainer = styled.div`
  font-size: 20px;
`;

export const StartTestButton = styled.div`
  display: grid;
  grid-template-rows: minmax(0, 1fr);
  max-height: 100%;
  grid-template-columns: minmax(0, auto);
  max-width: 100%;
  justify-content: center;

  border: 2px solid black;
  border-radius: 10px;

  line-height: 25px;
  cursor: pointer;

  &:hover {
    background-color: #dbd0a7;
  }
`;

export const ResultsCotnainer = styled.div`
  display: grid;
  grid-template-rows: 50px;
  max-height: 100%;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  grid-gap: 5px;
`;

export const ResultContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${(props) => {
    const { value = false } = props;
    return value ? "#b0ff80" : "#ff4a95";
  }};
  border: 2px solid black;
  border-radius: 10px;
`;

export const ResultTextContainer = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
