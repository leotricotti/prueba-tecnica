import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false); // State to track loading status
  const navigate = useNavigate();

  // Function to handle the login process
  const handleLogin = (email, password) => {
    if (!email || !password) {
      alert("Por favor complete todos los campos."); // Alert if fields are empty
      return;
    }

    setTimeout(() => {
      setIsLoading(false); // Stop loading
      const token = localStorage.getItem("token");
      if (token) {
        navigate("/users"); // Redirect to "/users" if token exists
      } else {
        alert("Incorrect username or password."); // Alert if login fails
      }
    }, 1500); // Simulate API delay
  };

  return { isLoading, handleLogin, setIsLoading };
};
