import { createContext, useEffect, useState } from "react";

export const UserLoginContext = createContext();

export const UserLoginContextProvider = ({ children }) => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");

  const handleData = (data) => {
    if (data.token) {
      localStorage.setItem("token", data.token);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://reqres.in/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
        const data = await response.json();
        handleData(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [email, password]);

  const value = {
    email,
    password,
    setEmail,
    setPassword,
  };

  return (
    <UserLoginContext.Provider value={value}>
      {children}
    </UserLoginContext.Provider>
  );
};
