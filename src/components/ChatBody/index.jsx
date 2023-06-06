import React, { useEffect, useRef } from "react";
import { db } from "../../services/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { Container } from "./styles";
import Message from "../Message";
const ChatBody = ({ chatId }) => {
  const [MessagesRes] = useCollection(
    db
      .collection("chats")
      .doc(chatId)
      .collection("messages")
      .orderBy("timestamp", "asc")
  );

  const refBody = useRef("");

  useEffect(() => {
    if (refBody.current.scrollHeigth > refBody.current.offsetHeigth) {
      refBody.current.scrollTop =
        refBody.current.scrollHeigth - refBody.current.offsetHeigth;
    }
  }, [MessagesRes]);

  return (
    <Container ref={refBody}>
      {MessagesRes?.docs.map((message) => (
        <Message
          key={message.id}
          user={message.data().user}
          message={{
            message: message.data().message,
            timestamp: message.data().timestamp?.toDate().getTime(),
          }}
        />
      ))}
    </Container>
  );
};

export default ChatBody;
