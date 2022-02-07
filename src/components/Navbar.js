import React from "react";
import Logo from "../assets/logo.png";

const Navbar = ({ brand }) => {
  return (
    <nav className="navbar navbar-dark ">
      <div className="container justify-content-center">       
        <img src={Logo} alt="Logo de Rick & Morty"/>
      </div>
    </nav>
  );
};

export default Navbar;
