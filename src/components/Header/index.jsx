import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import ButtomNavigate from "../ButtomNavigate";
import "./style.scss";

const Header = () => {
    return(
        <>
        <header className="container-header">
            <NavLink to="/">
                <img src={logo} className="imagem-logo" alt="Logo" />
           </NavLink>
           <nav className="nav-home">
                <ul className="lista-home">
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
                        <ButtomNavigate route="signup" label="SIGN UP" />
                    </li>
                </ul>
           </nav>
        </header>
        

        </>
    );
};

export default Header;
