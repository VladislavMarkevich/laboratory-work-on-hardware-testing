import styled from "styled-components";

export const Lab1Lab2Container = styled.div`
  display: grid;
  grid-template-rows: auto 100px 60px 1fr;
  max-height: 500px;
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
