import React from "react";
import { useState } from "react";
import style from "./Login.module.css";
import { LoginContext, LoginContextType } from "../../Context/LoginContex";
import { Button, Stack, TextField } from "@mui/material";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useContext(LoginContext) as LoginContextType;
  const navigate = useNavigate();
  const handleLogin = () => {
    // const { dispatch } = context;
    const user = {
      username,
      password,
    };
    const token = login(username, password);
    if (token) {
      console.log("loggedIn");
      navigate("/");
    } else {
      alert("type correct username or password");
      console.log("failed");
    }
    // console.log(username, password);
    localStorage.setItem("user", JSON.stringify(user));
  };
  return (
    <div>
      <Box className={style.content}>
        <Stack spacing={2} className={style.form}>
          <h3 className={style.title}>Login</h3>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            title="Username"
            name="username"
            placeholder="Enter Username"
            fullWidth
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="password"
            variant="outlined"
            label="Password"
            name="password"
            type="password"
            fullWidth
            placeholder="Enter a password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className={style.button}
            onClick={handleLogin}
            variant="contained"
          >
            LOGIN
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default Login;
