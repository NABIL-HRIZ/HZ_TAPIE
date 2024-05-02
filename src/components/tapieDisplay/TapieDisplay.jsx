import React, { useContext } from 'react'
import './tapieDisplay.css'
import { StoreContext } from '../context/StoreContext'
import TapieItem from '../tapieItem/TapieItem';
const TapieDisplay = ({ category }) => {
    const { tapie_list } = useContext(StoreContext);
    return (
        <div className='tapie_display' id='tapie_display'>

            <h2>Meilleurs Tapis Près De <span>Chez Vous </span></h2>

            <div className='tapie_display_item'>
                {tapie_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return (
                            <TapieItem key={index} id={item.id} image={item.image} description={item.description} price={item.price} />
                        )
                    }

                })}

            </div>

        </div>
    )
}

export default TapieDisplay
