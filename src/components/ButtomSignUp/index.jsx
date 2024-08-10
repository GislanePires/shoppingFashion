import React from "react";
import { useNavigate } from "react-router-dom";

const ButtomSignup = () => {
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('signup');
    }
    return(
        <button
        onClick={handleSignUp}>
            Sign Up
        </button>
    );
};
export default ButtomSignup;