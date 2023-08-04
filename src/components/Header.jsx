import React from "react";
import logo from "../assets/hrnet-logo.png"
import avatar from "../assets/avatar.jpg"
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
            <div className="entete_page__icon_list">
                <NavLink className="entete_page__icon" to="/"><i className="fa-regular fa-calendar"></i></NavLink>
                <NavLink className="entete_page__icon" to="/"><i className="fa-regular fa-bell"></i></NavLink>
                <NavLink className="entete_page__icon" to="/"><i className="fa-regular fa-message"></i></NavLink>
                <div className="user_profile">
                    <img src={avatar} alt="Avatar"/>
                    <p>John Doe</p>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
            </div>
        </header>
    )
}