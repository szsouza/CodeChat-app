import { Container, Button } from "./styles";
import { auth, provider } from "../../services/firebase";

export default function Login() {
  const handleSignIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <>
      <Container>
        <Button onClick={handleSignIn}>Login com o Google</Button>
      </Container>
    </>
  );
}
