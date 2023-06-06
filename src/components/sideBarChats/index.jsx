import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../services/firebase";
import { Container, Content } from "./styles";
import { useCollection } from "react-firebase-hooks/firestore";
import SideBarChatsItem from "../SideBarChatsItem";

const SideBarChats = ({ setUserChat, userChat }) => {
  const [user] = useAuthState(auth);

  const refChat = db
    .collection("chats")
    .where("users", "array-contains", user.email);

  const [chatSnaphot] = useCollection(refChat);
  return (
    <Container>
      {chatSnaphot?.docs.map((item, index) => (
        <Content key={index}>
          <SideBarChatsItem
            id={item.id}
            users={item.data().users}
            user={user}
            setUserChat={setUserChat}
            active={userChat?.chatId === item.id ? "active" : ""}
          />
        </Content>
      ))}
    </Container>
  );
};

export default SideBarChats;
