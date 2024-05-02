import React from 'react'
import './aboutUs.css'
import pic_1 from '../../assets/aboutus_1.jpg'
import pic_2 from '../../assets/aboutus_2.jpg'
import pic_3 from '../../assets/aboutus_3.jpg'

import brand_1 from '../../assets/brand_1.jpg'
import brand_2 from '../../assets/brand_2.jpg'
import brand_3 from '../../assets/brand_3.jpg'
import brand_4 from '../../assets/brand_4.jpg'
import brand_5 from '../../assets/brand_5.jpg'
import { GoMoveToTop } from "react-icons/go";

const AboutUs = () => {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className='aboutUs_container'>
            <div className='row' data-aos="fade-up" data-aos-duration="2000"
                data-aos-easing="ease-in-out">
                <div className="left">
                    <h3>Qui sommes-nous ?</h3>
                    <p>Nous sommes une boutique passionnée par l'artisanat marocain et dédiée à la vente de tapis marocains authentiques. Notre magasin propose une vaste sélection de tapis de haute qualité, allant des traditionnels tapis berbères aux élégants tapis de ville. Chaque tapis que nous proposons est soigneusement sélectionné pour sa beauté, son artisanat exceptionnel et son histoire unique. Nous nous engageons à offrir à nos clients une expérience de shopping inoubliable, où la tradition rencontre l'élégance moderne. Découvrez notre collection et laissez-vous séduire par la richesse et la diversité des tapis marocains</p>
                </div>
                <div className='right'>
                    <img src={pic_2} alt="" />

                </div>
            </div>
            <button onClick={scrollToTop} id="scrollToTopBtn"><GoMoveToTop /></button>


            <div className='row' data-aos="fade-right" data-aos-duration="2000"
                data-aos-easing="ease-in-out" >
                <div className="left">
                    <h3>Notre Histoire</h3>
                    <p>Notre histoire est étroitement liée à notre amour pour l'artisanat marocain et notre fascination pour les tapis traditionnels. Tout a commencé avec une passion partagée pour la beauté et la richesse culturelle des tapis marocains. Guidés par notre désir de partager cette passion avec le monde, nous avons fondé [Nom de votre entreprise] dans le but de créer un espace où la tradition et la qualité se rencontrent.

                        Depuis nos débuts modestes, nous nous sommes engagés à parcourir les régions du Maroc à la recherche des meilleurs artisans et des tapis les plus extraordinaires. Chaque tapis que nous sélectionnons raconte une histoire unique et incarne des siècles de savoir-faire artisanal transmis de génération en génération.

                        Aujourd'hui, nous sommes fiers de partager notre collection exceptionnelle avec nos clients du monde entier. Notre mission reste inchangée : offrir des tapis marocains de la plus haute qualité, tout en préservant et en célébrant l'authenticité et la tradition de cet art millénaire.</p>
                </div>
                <div className='right'>
                    <img src={pic_1} alt="" />

                </div>
            </div>


            <div className='row' data-aos="fade-down" data-aos-duration="2000"
                data-aos-easing="ease-in-out">
                <div className="left">
                    <h3>Nos Valeurs</h3>
                    <p>Qualité Exceptionnelle : Nous sélectionnons uniquement des tapis marocains de la plus haute qualité, garantissant ainsi une beauté intemporelle et un artisanat exceptionnel.
                        Authenticité : Chaque tapis que nous proposons est authentique, reflétant la tradition artisanale marocaine et notre engagement envers l'authenticité culturelle.
                        Respect des Artisans : Nous valorisons le travail des artisans marocains et nous nous engageons à maintenir des relations équitables et durables avec eux.
                        Service Clientèle Exceptionnel : Nous plaçons nos clients au cœur de nos préoccupations, offrant un service personnalisé et attentif à chaque étape de leur expérience d'achat.
                        Responsabilité Sociale et Environnementale : Nous agissons de manière responsable sur le plan social et environnemental, en cherchant à minimiser notre impact environnemental et à contribuer positivement aux communautés locales.</p>
                </div>
                <div className='right'>
                    <img src={pic_3} alt="" />

                </div>
            </div>


            <div className='brands'>

                <h3>Quelques Marques Internationales Proposant Nos Tapis</h3>
                <div className='our_brand'>
                    <img src={brand_1} alt="" srcset="" />
                    <img src={brand_2} alt="" srcset="" />
                    <img src={brand_3} alt="" srcset="" />
                    <img src={brand_4} alt="" srcset="" />
                    <img src={brand_5} alt="" srcset="" />





                </div>


            </div>


        </div>
    )
}

export default AboutUs
