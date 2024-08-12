import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import ButtomSignup from "../ButtomSignUp";
import "./style.css";

const Header = () => {
    return(
        <>
        <header className="container-header">
           <img src={logo} class="imagem-logo" alt="Logo" />
           <nav class="nav-home">
                <ul class="lista-home">
                <li>
                        <NavLink to="/catalogue" className={({ isActive }) => isActive ? "active" : ""}>CATALOGUE</NavLink>
                    </li> 
                    <li>
                        <NavLink to="/fashion" className={({ isActive }) => isActive ? "active" : ""}>FASHION</NavLink>
                    </li>
                    <li>
                        <NavLink to="/favourite" className={({ isActive }) => isActive ? "active" : ""}>FAVOURITE</NavLink>
                    </li>
                    <li>
                        <NavLink to="/lifestyle" className={({ isActive }) => isActive ? "active" : ""}>LIFESTYLE</NavLink>
                    </li>
                    <li>
                        <ButtomSignup to="/signup" />
                    </li>
                </ul>
           </nav>
        </header>
        

        </>
    );
};

export default Header;
