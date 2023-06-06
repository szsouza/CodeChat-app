import React from "react";
import {
  Container,
  NameContent,
  Name,
  Options,
  UserInfo,
  Avatar,
} from "./styles";

import { MdPerson, MdSearch, MdMoreVert } from "react-icons/md";

const ChatHeader = ({ photoURL, name }) => {
  return (
    <Container>
      <UserInfo>
        {photoURL ? <Avatar src={photoURL} alt="Avatar" /> : <MdPerson />}
        <NameContent>
          <Name>{name}</Name>
        </NameContent>
      </UserInfo>
      <Options>
        <MdSearch />
        <MdMoreVert />
      </Options>
    </Container>
  );
};

export default ChatHeader;
