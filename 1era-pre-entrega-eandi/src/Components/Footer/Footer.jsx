import './Footer.css'
import React from 'react'
import { Link } from "react-router-dom"
import imgTwitter from "../../icons/twitter.svg";
import imgFacebok from "../../icons/facebook.svg";
import imgInstagram from "../../icons/instagram.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className='contentFooter'>

                <nav className='contentNav'>
                    <Link to={"https://www.twitter.com"} target="_blank"><img className="imgRedes" src={imgTwitter} alt="twitter" /></Link>
                    <Link to={"https://www.facebook.com"} target="_blank"><img className="imgRedes" src={imgFacebok} alt="facebook" /></Link>
                    <Link to={"https://www.instagram.com"} target="_blank"><img className="imgRedes" src={imgInstagram} alt="instagram" /></Link>
                </nav>
                <p>Todos los derechos reservados a Shared Company</p>
            </div>
        </footer>
    )
}

export default Footer