import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext, LoginContextType } from "../../Context/LoginContex";
import style from "./Navbar.module.css";
const Navbar: React.FC = () => {
  const { logout } = useContext(LoginContext) as LoginContextType;
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className={style.navbar}>
      <h3 className={style.title}>FacePrep</h3>
      <Button
        className={style.button}
        variant="contained"
        onClick={handleLogout}
      >
        LOGOUT
      </Button>
    </div>
  );
};

export default Navbar;
