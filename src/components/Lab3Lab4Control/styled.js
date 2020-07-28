import styled from "styled-components";

export const Lab3Container = styled.div`
  display: grid;
  grid-template-rows: auto 200px;
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
