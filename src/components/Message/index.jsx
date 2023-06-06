import React from "react";
import { Container, Content, Line, Messages, MessageData } from "./styles";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";

const Message = ({ user, message }) => {
  const [userLoggedIn] = useAuthState(auth);

  return (
    <Container>
      <Line className={userLoggedIn?.email === user ? "me" : ""}>
        <Content>
          <Messages>{message.message}</Messages>
          <MessageData>
            {new Date(message?.timestamp).toLocaleString()}
          </MessageData>
        </Content>
      </Line>
    </Container>
  );
};

export default Message;
