import * as React from "react";
import data from "../data/data.json";
import { useState } from "react";
export const LoginContext = React.createContext<LoginContextType | null>(null);
export type LoginContextType = {
  token: string;
  username: string;
  password: string;
  login: (uname: string, pass: string) => string;
  logout: () => void;
};
const LoginProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // const [todos, setTodos] = React.useState<string>("sai");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const login = (uname: string, pass: string) => {
    // console.log(data);
    const user = data.find((user: { username: string; password: string }) => {
      return user.username === uname && user.password === pass;
    });
    try {
      if (user) {
        setUsername(user.username);
        setPassword(user.password);
        setToken(user.username);
        return user.username;
      }
    } catch (e: any) {
      return e;
    }

    return "";
  };
  const logout = () => {
    setUsername("");
    setPassword("");
    setToken("");
  };

  return (
    <LoginContext.Provider value={{ token, username, password, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
