import React from 'react'
import './footer.css'
import {ReactComponent as LogoXD} from '../../assets/logo_xd2.svg'
import  Psyduck from '../../assets/pokemon/psyduck.png'

export default function Footer() {
    return (
        <div id='footer_container'>
            <img id='psy_duck' src= {Psyduck}/>
            <p>
                <span style={{fontSize: '18px', fontWeight: 'bold'}}>
                PokemonXD
                </span> created by 
                <a href='https://xduck.com' target='_blank'> XDUCK</a> 
                <LogoXD height='62px' width='58px'/>
            </p>
            <p>All data made available by the <a href='https://pokemontcg.io/'target='_blank'>Pokémon TCG API</a></p>
            <p>This website is not produced, endorsed, supported, or affiliated with Nintendo or The Pokémon Company.</p>
           
        </div>
    )
}
