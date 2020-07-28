//@flow
import * as React from "react";
import Lab1 from "components/Lab1";
import Lab2 from "components/Lab2";
import Lab3 from "components/Lab3";
import Lab4 from "components/Lab4";
import Lab5 from "components/Lab5";
import styled from "styled-components";

const SiteContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, 500px);
  max-height: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 500px));
  max-width: 100%;
  grid-gap: 20px;
`;

function App(): any {
  return (
    <SiteContainer>
      <Lab1 />
      <Lab2 />
      <Lab3 />
      <Lab4 />
      <Lab5 />
    </SiteContainer>
  );
}

export default App;
