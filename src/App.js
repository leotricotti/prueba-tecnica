import { createGlobalStyle } from "styled-components";
import { Route, Navigate, Outlet, Routes } from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage";
import { ConstructionPage } from "./Pages/ConstructionPage";
import { UsersPage } from "./Pages/UsersPage";
import { PublicationsPage } from "./Pages/PublicationsPage";

const PrivatedRoutes = () => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<PrivatedRoutes />}>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UsersPage />} />
          <Route
            path="/users/:id/publications"
            element={<PublicationsPage />}
          />
          <Route path="*" element={<LoginPage />} />
        </Route>
        <Route path="/" element={<LoginPage />} />
        <Route path="/construction" element={<ConstructionPage />} />
      </Routes>
    </>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    position: relative;
    scroll-behavior: smooth;
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
