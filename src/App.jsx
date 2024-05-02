import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import AboutUs from './pages/aboutUs/AboutUs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactUs from './components/contactUs/ContactUs';
AOS.init();

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />

        </Routes>
      </div>
      <Footer />
    </>


  )
}

export default App
