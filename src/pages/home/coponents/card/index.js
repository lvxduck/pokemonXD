import React from 'react'
import './card.css'

export default function Card(props) {
    return (
        <div id='card_container'>
            <img src={props.data.images.small}/>
            <div id='card_hover'></div>
        </div>
    )
}
