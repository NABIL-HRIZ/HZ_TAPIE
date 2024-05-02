import React, { useState } from 'react';
import './tapieItem.css';

const TapieItem = ({ id, image, description, price }) => {
    const [selectedSize, setSelectedSize] = useState('medium');


    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const calculateAdjustedPrice = () => {
        let adjustedPrice = parseFloat(price);

        if (selectedSize === 'small') {
            adjustedPrice -= 200;
        } else if (selectedSize === 'large') {
            adjustedPrice += 200;
        }

        return adjustedPrice.toFixed(2);
    };

    return (
        <div className='tapie_item'>
            <div className='tapie_item_container' key={id}>
                <img src={image} alt="tapie_item" />
            </div>
            <div className='tapie_item_info'>
                <p className='description'>{description}</p>
                <div className='tapie_item_infos'>
                    <div className='size'>
                        <button onClick={() => handleSizeSelect('small')}>Petite</button>
                        <button onClick={() => handleSizeSelect('medium')} className='meduim'>Moyenne</button>
                        <button onClick={() => handleSizeSelect('large')}>Grande</button>
                    </div>
                    <p className='price'><span>Prix : </span> {calculateAdjustedPrice()} MAD</p>
                </div>
            </div>
        </div>
    );
}

export default TapieItem;
