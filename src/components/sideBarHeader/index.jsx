import { Container, AvatarContainer, Options } from "./styles";
import { MdDonutLarge, MdChat, MdMoreVert } from "react-icons/md";
import * as EmailValidator from "email-validator";
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

const SideBarHeader = ({ setUserChat }) => {
  const [user] = useAuthState(auth);
  const refChat = db
    .collection("chats")
    .where("users", "array-contains", user.email);
  const [chatSnapshot] = useCollection(refChat);

  const handleCreateChat = () => {
    const emailInput = prompt("digite seu email");
    if (!emailInput) return;

    if (!EmailValidator.validate(emailInput)) {
      return alert("E-mail invalido");
    } else if (emailInput === user.email) {
      return alert("insira um E-mail diferente do seu");
    } else if (chatExists(emailInput)) {
      return alert("E-mail ja existe");
    }
    db.collection("chats").add({
      users: [user.email, emailInput],
    });
  };

  const chatExists = (emailchat) => {
    return !!chatSnapshot?.docs.find(
      (chat) => chat.data().users.find((user) => user === emailchat)?.length > 0
    );
  };
  return (
    <Container>
      <AvatarContainer
        src={user?.photoURL}
        onClick={() => [auth.signOut(), setUserChat(null)]}
      />
      <Options>
        <MdDonutLarge />
        <MdChat onClick={handleCreateChat} />
        <MdMoreVert />
      </Options>
    </Container>
  );
};

export default SideBarHeader;
