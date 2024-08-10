import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import ButtomSignup from "../ButtomSignUp";

const Header = () => {
    return(
        <>
        <header className="Header">
           <img src={logo} alt="Logo" />
           <nav>
                <ul>
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
