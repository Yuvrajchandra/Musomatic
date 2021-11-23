import React from 'react';
import "./button.css";

const Button = (props) => {
    return (
        <button className="btn btn-primary shadow-sm submit-btn">
            <span>{props.children}<i className="fas fa-angle-double-right"></i></span>
        </button>
    )
}

export default Button;