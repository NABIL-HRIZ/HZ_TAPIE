import React, { useState } from 'react'
import './home.css'
import Header from '../../components/navbar/header/Header'
import Explore from '../../components/exploreTapis/Explore'
import TapieDisplay from '../../components/tapieDisplay/TapieDisplay'
import Textimonlials from '../../components/textImonials/TextImonlials'
import OurValue from '../../components/ourValue/OurValue'
import Faqs from '../../components/faqs/Faqs'
import ContactUs from '../../components/contactUs/ContactUs'
const Home = () => {

    const [category, setCategory] = useState('All');

    return (
        <div>
            <Header />
            <OurValue />
            <Explore category={category} setCategory={setCategory} />
            <TapieDisplay category={category} />
            <Faqs />
            <Textimonlials />
            <ContactUs />
        </div>
    )
}

export default Home
