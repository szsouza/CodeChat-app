import React from "react";
import { Container } from "./styles";
import ChatBody from "../ChatBody";
import ChatHeader from "../ChatHeader";
import ChatFooter from "../ChatFooter";
import Default from "../Default";

const Chat = ({ userChat }) => {
  if (!userChat) return <Default />;
  return (
    <Container>
      <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} />
      <ChatBody chatId={userChat?.chatId} />
      <ChatFooter chatId={userChat?.chatId} />
    </Container>
  );
};

export default Chat;
