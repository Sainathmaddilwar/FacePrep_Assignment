import React from "react";
import { Button } from "@mui/material";
import style from "./Navbar.module.css";
const Navbar: React.FC = () => {
  return (
    <div className={style.navbar}>
      <h3>FacePrep</h3>
      <Button className={style.button} variant="contained">
        LOGOUT
      </Button>
    </div>
  );
};

export default Navbar;
