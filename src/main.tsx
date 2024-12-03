import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import "./index.css";
import App from "./components/App.tsx";
import TodosContextProvider from "./contexts/TodosContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <KindeProvider
      clientId="3f26eb0a2ab446d1bc6a20e12b4fe470"
      domain="https://carabetcorneliu.kinde.com"
      redirectUri={
        process.env.NODE_ENV === "production"
          ? "https://todo-app-orpin-eta-35.vercel.app/"
          : "http://localhost:5173"
      }
      logoutUri={
        process.env.NODE_ENV === "production"
          ? "https://todo-app-orpin-eta-35.vercel.app/"
          : "http://localhost:5173"
      }
    >
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </KindeProvider>
  </StrictMode>
);
