import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../services/firebase";
import { Container, Name, Avatar } from "./styles";
import { MdPerson } from "react-icons/md";

const getUser = (users, userLogged) =>
  users?.filter((user) => user !== userLogged?.email)[0];

const SideBarChatsItem = ({ id, users, user, setUserChat, active }) => {
  const [getUserItem] = useCollection(
    db.collection("users").where("email", "==", getUser(users, user))
  );

  const avatar = getUserItem?.docs?.[0]?.data();
  const item = getUser(users, user);

  const handleNewChat = () => {
    const userChat = {
      chatId: id,
      name: item.split("@")[0],
      photoURL: avatar?.photoURL,
    };

    setUserChat(userChat);
  };
  return (
    <>
      <Container onClick={handleNewChat} className={active}>
        {avatar ? <Avatar src={avatar?.photoURL} /> : <MdPerson />}
        <Name>{item.split("@")[0]}</Name>
      </Container>
    </>
  );
};

export default SideBarChatsItem;
