import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { loginUser, registerUser } from "../services/api";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    const data = await loginUser(email, password);
    if (data.token) {
      setUser(data.user);
      setToken(data.token);
      navigate("/");
    }
    return data;
  };

  const register = async (name, email, password) => {
    const data = await registerUser(name, email, password);
    if (data.token) {
      setUser(data.user);
      setToken(data.token);
      navigate("/");
    }
    return data;
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};