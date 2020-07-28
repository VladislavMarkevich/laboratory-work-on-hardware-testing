//@flow
import * as React from "react";
import styled from "styled-components";

const MessageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const MessageContainer = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  white-space: nowrap;
  font-size: 25px;
`;

type Props = {
  displayName?: string,
};

const Message = ({ displayName = "" }: Props) => {
  return (
    <MessageWrapper>
      <MessageContainer> {displayName} </MessageContainer>
    </MessageWrapper>
  );
};

export default Message;
