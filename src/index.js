import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserLoginContextProvider } from "./Contexts/UserLoginContext";
import { UsersListContextProvider } from "./Contexts/UsersListContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserLoginContextProvider>
      <UsersListContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UsersListContextProvider>
    </UserLoginContextProvider>
  </React.StrictMode>
);
