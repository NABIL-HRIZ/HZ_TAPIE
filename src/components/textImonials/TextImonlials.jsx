
import React from 'react';
import './Textimonlials.css'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import pers1 from '../../assets/pers1.jpg'
import pers2 from '../../assets/pers2.jpg'
import pers3 from '../../assets/pers3.jpg'
import pers4 from '../../assets/pers4.jpg'
import pers5 from '../../assets/pers5.jpg'



const Textimonlials = () => {
    return (
        <div className="textimonials_container">
            <section class="team">
                <h2 class="section-heading">Ce Que Nos Clients Ont <span>Dit</span></h2>
                <div class="container">
                    <div class="profile">
                        <img src={pers1} alt="" /><span class="name">Magnifique</span>
                    </div>
                    <div class="profile">
                        <img src={pers2} alt="" /><span class="name">Qualité exceptionnelle.</span>

                    </div>

                    <div class="profile">
                        <img src={pers3} alt="" /><span class="name">Élégance authentique</span>

                    </div>
                    <div class="profile">
                        <img src={pers4} alt="" /><span class="name">Exactement comme sur la photo</span>

                    </div>
                    <div class="profile">
                        <img src={pers5} alt="" /><span class="name">Un vrai chef-d'œuvre.</span>

                    </div>
                    <div class="profile">
                        <img src={pers1} alt="" /><span class="name">J'adore tes tapis ! </span>
                    </div>


                </div>
            </section>
        </div>
    )
}

export default Textimonlials
