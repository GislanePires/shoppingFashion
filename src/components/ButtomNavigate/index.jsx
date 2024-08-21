import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const ButtomNavigate = ({route, label, className, style}) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(route);
    };

    return (
        <button 
        className={`buttom-navigate ${className}`}
        style={style}
        onClick={handleNavigate}>
            {label}
        </button>
    );
};
export default ButtomNavigate;