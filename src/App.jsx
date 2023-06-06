import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./services/firebase";
import Login from "./components/login";
import Loading from "./components/loading";
import SideBar from "./components/sideBar";
import { Container } from "./styles/app";
import Chat from "./components/Chat";

function App() {
  const [user, loading] = useAuthState(auth);
  const [userChat, setUserChat] = useState(null);
  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set({
        email: user.email,
        photo: user.photoURL,
      });
    }
  }, [user]);
  if (loading) {
    return (
      <>
        <Loading />
        <div>app</div>
      </>
    );
  }
  if (!user) return <Login />;

  return (
    <>
      <Container>
        <SideBar setUserChat={setUserChat} userChat={userChat} />
        <Chat userChat={userChat} />
      </Container>
    </>
  );
}

export default App;
