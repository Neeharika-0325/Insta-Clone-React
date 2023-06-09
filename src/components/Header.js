import React from "react";
import logo from "../img/icon.png";
import cam from "../img/camera.png";
import { useNavigate } from 'react-router-dom';
import "../header.css"


const Header = () => {
    const navigate = useNavigate('/')
    const navigatePost = () => {
        navigate('/Post')
    }
const navigateInsta = () => {
        navigate('/login')
    }
    return (
        <header className="container">
            <img className="insta-logo" src={logo} alt="insta" onClick={navigateInsta} />
            <h3 onClick={navigateInsta}>INSTACLONE</h3>
            <img src={cam} alt="camera" className="camera" onClick={navigatePost} />
        </header>
    )

}
export default Header;