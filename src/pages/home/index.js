import React, { Component } from 'react'
import './home.css'
import Input from './coponents/input'

export default function Home() {
    
    return (
        <div className='HomeContainer'>
            <p style={{color: '#C9D1D9', fontSize: '36px', fontWeight: 'bold', margin: '52px 0px 0px'}}>PokemonXD</p>
            <p style={{color: '#818A93', fontSize: '22px', margin: '0px 0px 26px'}}>The Ultimate Pokemon Information</p>
            <Input />
        </div>
    )
}