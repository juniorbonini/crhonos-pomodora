import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "./theme/global.css";
import "./theme/theme.css";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
  </>,
);
