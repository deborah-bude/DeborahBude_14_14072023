import React from "react";
import logo from "../assets/hrnet-logo.png"
import {NavLink} from "react-router-dom";

export function Header() {


    return (
        <header className="entete_page">
            <div className="entete_page__row">
                <img className="" src={logo} alt="Logo HR Net"/>

                <nav className="entete_page__nav">
                    <NavLink className="entete_page__nav-item" to="/">Home</NavLink>
                    <NavLink className="entete_page__nav-item" to="/employees-list">Employees list</NavLink>
                </nav>
            </div>
        </header>
    )
}