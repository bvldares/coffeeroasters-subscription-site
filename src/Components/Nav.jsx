import React, {useState} from "react";
import "../App.css"
import { Link } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg"
import hamburger from "../assets/shared/mobile/icon-hamburger.svg"
import close from "../assets/shared/mobile/icon-close.svg"


export default function Nav(){

    const[isOpen, setIsOpen] = useState(false)



    return (
        <nav>
            <img src={logo} alt="cofferoasters logo" className="logo" />

            <img src={isOpen ? close : hamburger} onClick={()=>setIsOpen(prev => !prev)} alt="menu icons" className="hamburger" />

            <ul className="nav-list" style={{transform: isOpen ? "translateY(0)" : ""}}>
                <li className="nav-list-item"> <Link to="/" className="nav-links">Home</Link> </li>
                <li className="nav-list-item"> <Link to="/about" className="nav-links">About us</Link> </li>
                <li className="nav-list-item"> <Link to="/createplan" className="nav-links">Create your plan</Link> </li>
            </ul>
        </nav>
    )
}