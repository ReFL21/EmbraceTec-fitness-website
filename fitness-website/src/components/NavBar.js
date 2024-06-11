import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Appbar.module.css";


export default function NavigationBar(){
  return (
    <div>
    <nav className={`navbar navbar-expand navbar-dark bg-dark ${styles.navbar}`}>
      <div className="navbar-nav mr-auto">
        <li className={`nav-item ${styles.navbaritem}`}>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className={`nav-item ${styles.navbaritem}`}>
          <Link to="/exercises" className="nav-link">Exercises</Link>
        </li>
        <li className={`nav-item ${styles.navbaritem}`}>
          <Link to="/food" className="nav-link">Food</Link>
        </li>
        <li className={`nav-item ${styles.navbaritem}`}>
          <Link to="/MBT" className="nav-link">My Progress</Link>
        </li>
      </div>
    </nav>
  </div>
  );

}
