import React from 'react';
import './header.css';
import back from '../../../assets/backg.mp4';
import { GoMoveToTop } from "react-icons/go";

const Header = () => {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <>
            <div className='header-container'>
                <video autoPlay muted loop id="header-video">
                    <source src={back} type="video/mp4" />
                </video>
                <div className='header-content'>
                    <h3>Tapis Marocains</h3>
                    <p>Découvrez la beauté et la richesse culturelle des tapis marocains sur notre site. Explorez des œuvres d'art uniques, tissées avec savoir-faire et imprégnées de tradition. Plongez dans cet univers coloré et laissez-vous envoûter par la magie des motifs et des techniques ancestrales</p>
                </div>
            </div>
            <button onClick={scrollToTop} id="scrollToTopBtn"><GoMoveToTop /></button>
        </>
    );
}

export default Header;
