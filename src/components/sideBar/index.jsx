import { Container } from "./styles";
import SideBarHeader from "../sideBarHeader";
import SideBarChats from "../sideBarChats";

const SideBar = ({ setUserChat, userChat }) => {
  return (
    <>
      <Container>
        <SideBarHeader setUserChat={setUserChat}></SideBarHeader>
        <SideBarChats
          setUserChat={setUserChat}
          userChat={userChat}
        ></SideBarChats>
      </Container>
    </>
  );
};

export default SideBar;
