import { createRoot } from "react-dom/client";
import GlobalStyle from "./styles/global.js";
import App from "./App.jsx";

const root = createRoot(document.querySelector("#root"));
root.render(
  <>
    <App />
    <GlobalStyle />
  </>
);
