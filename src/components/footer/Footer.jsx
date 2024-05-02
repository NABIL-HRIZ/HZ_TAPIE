import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='footer_container'>
            <div className='footer_left'>
                <h2>HZ _TAPIE</h2>
                <p>Découvrez l'excellence de l'artisanat marocain . Notre boutique en ligne vous offre une sélection soigneusement choisie de tapis marocains authentiques, alliant tradition et modernité</p>
                <div className="footer_icons">
                    <span><FaFacebookF /></span>
                    <span><RiInstagramFill /></span>
                    <span><FaYoutube /></span>
                </div>
            </div>
            <div className="footer_company">
                <h3>Nos Liens</h3>
                <ul>
                    <li><Link to='/'>Acceil </Link></li>
                    <li><Link to='/aboutus'>    A propos De Nous </Link></li>
                    <li><a href="#explore_tapis">Notre Produits</a></li>
                    <li><a href="#">Conditions D'utilisation</a></li>

                </ul>

            </div>
            <div className="footer_right">
                <h3>Contactez-nous</h3>
                <div className="contact_infos">
                    <div className='local_info'>
                        <span><FaLocationDot style={{ color: 'hsl(164, 40%, 63%)', marginRight: "10px" }} />    Casablanca , Maroc</span>
                    </div>
                    <div className='phone_info'>
                        <span><FaPhoneAlt style={{ color: 'hsl(164, 40%, 63%)', marginRight: "10px" }} />    +212543234543</span>

                    </div>
                    <div className='gmail_info'>
                        <span><SiGmail style={{ color: 'hsl(164, 40%, 63%)', marginRight: "10px" }} />    HZ_TAPIE@GMAIL.COM</span>

                    </div>
                </div>



            </div>
        </div>
    )
}

export default Footer
