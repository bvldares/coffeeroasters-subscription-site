import React from "react";
import { Link } from "react-router-dom";
import facebookIcon from "../assets/shared/desktop/icon-facebook.svg"
import instagramIcon from "../assets/shared/desktop/icon-instagram.svg"
import twitterIcon from "../assets/shared/desktop/icon-twitter.svg"
import logo from "../assets/shared/desktop/logo-footer.svg"
import "../Css/Footer.css"

export default function Footer(){
    return ( 
        <footer>
            <img src={logo} alt="cofferoasters logo" className="footer-logo" />
            <ul className="footer-list">
                <li className="footer-list-item"> <Link to="/" className="footer-links">Home</Link> </li>
                <li className="footer-list-item"> <Link to="/about" className="footer-links">About us</Link> </li>
                <li className="footer-list-item"> <Link to="/createplan" className="footer-links">Create your plan</Link> </li>
            </ul>

            <ul className="footer-socials">
                <li className="footer-social"><img src={facebookIcon} alt="facebook icon" /></li>
                <li className="footer-social"><img src={twitterIcon} alt="twitter icon" /></li>
                <li className="footer-social"><img src={instagramIcon} alt="instagram icon" /></li>
            </ul>
        </footer>
    )
}