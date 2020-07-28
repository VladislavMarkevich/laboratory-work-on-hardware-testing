import styled from "styled-components";

export const Lab5Container = styled.div`
  display: grid;
  grid-template-rows: auto 30px minmax(0, 1fr);
  height: 300px;
  max-height: 100%;
  grid-template-columns: minmax(0, 1fr);
  max-width: 100%;
  grid-gap: 20px;

  padding: 10px;

  border: 2px solid black;
`;

export const TitleContainer = styled.div`
  text-align: center;
  font-size: 30px;
`;

export const StartButton = styled.div`
  display: grid;
  grid-template-rows: minmax(0, auto);
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
