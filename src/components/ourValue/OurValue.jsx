import React, { useState, useEffect } from 'react';
import './ourValue.css';
import { FaStar } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { ImHappy2 } from "react-icons/im";

const AnimatedNumber = ({ value }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (displayValue < value) {
                setDisplayValue(prevValue => prevValue + 10);
            } else {
                clearInterval(interval);
            }
        }, 10);

        return () => clearInterval(interval);
    }, [value, displayValue]);

    return <p>{displayValue}</p>;
};

const OurValue = () => {
    return (
        <div className='ourValue_container'>
            <div className="value_content">
                <div className='icon'>
                    <span><FaStar /></span>
                </div>
                <div className='content'>
                    <h4>NOTRE EXPÉRIENCE</h4>
                    <AnimatedNumber value={10000} />
                </div>
            </div>

            <div className="value_content">
                <div className='icon'>
                    <span><GiTeamIdea /></span>
                </div>
                <div className='content'>
                    <h4>SPÉCIALISTE DES TAPIS</h4>
                    <AnimatedNumber value={1000} />
                </div>
            </div>

            <div className="value_content">
                <div className='icon'>
                    <span><IoCheckmarkDoneCircle /></span>
                </div>
                <div className='content'>
                    <h4>PROJET COMPLET</h4>
                    <AnimatedNumber value={10000} />
                </div>
            </div>

            <div className="value_content">
                <div className='icon'>
                    <span><ImHappy2 /></span>
                </div>
                <div className='content'>
                    <h4>CLIENTS SATISFAITS</h4>
                    <AnimatedNumber value={10000} />
                </div>
            </div>
        </div>
    );
};

export default OurValue;
