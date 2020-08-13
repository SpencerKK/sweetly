import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="navbar-content">
                <h1>SWEETLY</h1>
                <input className="navbar-btn" type="checkbox" id="navbar-btn" />
                <label className="navbar-icon" for="navbar-btn">
                    <i className="fas fa-bars"></i>
                </label>
                <ul className="navbar-ul">
                    <li>
                        <a href="./Work">Work</a>
                    </li>
                    <li>
                        <a href="./Contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
