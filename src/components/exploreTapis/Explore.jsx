import React from 'react'
import './explore.css'
import { tapis_list } from './tapis_list'
const Explore = ({ category, setCategory }) => {
    return (
        <div className='explore_tapis' id='explore_tapis'>
            <h2>Explorez Notre <span>Tapis</span></h2>
            <p>Découvrez la richesse et la diversité des tapis marocains avec notre sélection soigneusement choisie. Explorez notre collection de tapis tissés à la main, chacun racontant une histoire unique de tradition, d'artisanat et de culture. Des motifs vibrants aux couleurs riches, chaque tapis est une œuvre d'art en soi, capturant l'essence de l'artisanat marocain. Plongez dans notre univers de tapis et laissez-vous inspirer par la beauté intemporelle de ces pièces emblématiques</p>
            <div className='tapis_list'>
                {tapis_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.tapie_name ? 'All' : item.tapie_name)} key={index} className='tapis_list_item'>
                            <img className={category === item.tapie_name ? "active" : ""} src={item.tapie_image} alt="tapie_image" />
                            <h4>{item.tapie_name}</h4>
                        </div>

                    )
                })}

            </div>
            <hr />
        </div>
    )
}

export default Explore
