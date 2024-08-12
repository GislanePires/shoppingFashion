import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const ButtomNavigate = ({route, label}) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(route);
    };

    return (
        <button onClick={handleNavigate}>
            {label}
        </button>
    );
};
export default ButtomNavigate;