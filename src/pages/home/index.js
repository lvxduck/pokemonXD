import React, { Component, useEffect, useState } from 'react'
import './home.css'
import Input from './coponents/input'
import Pikachu from '../../assets/pokemon/pikachu.png'
import CardService from '../../services/cardService'
import Card from './coponents/card'
// import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

export default function Home() {
    const [cards, setCards] = useState([]);
    const cardService = new CardService();
    useEffect(() => {
        console.log("get all data");
        console.log(cards);
        if (cards.length <1)
            cardService.getAllCards().then(response => {
                console.log("response");
                console.log(response);
                setCards(response.data.slice(0,10));
            })
    });
 

    return (
        <div className='HomeContainer'>
            <p style={ { color: '#C9D1D9', fontSize: '36px', fontWeight: 'bold', margin: '100px 0px 0px' } }>PokemonXD</p>
            <p style={ { color: '#818A93', fontSize: '22px', margin: '0px 0px 26px' } }>The Ultimate Pokemon Information</p>
            <Input />
            <img
                style={ { zIndex: '-1', height: '200px', position: 'absolute', left: '10%', top: '46px' } }
                src={ Pikachu } />
            <div>
            {
                cards.map((card,index)=> <Card data={card} key={index}/>)
            } 
            </div>
           
        </div>
    )
}