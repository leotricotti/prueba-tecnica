import { useState, useEffect, createContext } from "react";

export const UsersListContext = createContext();

export const UsersListContextProvider = ({ children }) => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = fetch("https://reqres.in/api/users");
        const response2 = fetch("https://reqres.in/api/users?page=2");

        const [data1, data2] = await Promise.all([response1, response2]).then(
          (responses) => Promise.all(responses.map((res) => res.json()))
        );

        setUsersList([...data1.data, ...data2.data]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <UsersListContext.Provider value={{ usersList, setUsersList }}>
      {children}
    </UsersListContext.Provider>
  );
};
