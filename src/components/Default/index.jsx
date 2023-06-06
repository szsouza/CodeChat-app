import React from "react";
import { Container, Info, Title } from "./styles";
import { MdMessage } from "react-icons/md";

const Default = () => {
  return (
    <Container>
      <MdMessage />
      <Title>Chat App</Title>
      <Info>
        Agora você pode se comunicar sem precisar utilizar o seu celular
      </Info>
    </Container>
  );
};

export default Default;
