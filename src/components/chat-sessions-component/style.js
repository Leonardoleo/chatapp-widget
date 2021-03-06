import styled from "styled-components";

export const ChatSessionsWrapper = styled.div`
  width: 13vw;
  background-color: #f6f6f6;
`;

export const Title = styled.div`
  font-size: 1.5em;
  
  color: ${props => props.color};
  
  margin: 13% 0 0 8%;
`;

export const ChatListHolder = styled.div`
  margin: 36% 0 0 0;
  height: 86vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const NoMessages = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  position: absolute;
  top: 10%;
`;

export const Text = styled.span`
  font-size: 26px;
`;