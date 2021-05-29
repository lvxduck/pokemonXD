import { React, useState } from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom';
import logo from '../../../../assets/logo.png';
import { FiMenu, FiX } from 'react-icons/fi'

export default function NavBar() {
    const [shouldShowNavBar, setshouldShowNavBar] = useState(false);
    const handleNavBar = () => {
        console.log("Hamburger click");
        setshouldShowNavBar(!shouldShowNavBar);
    }
    return (
        <div className='navContainer'>
            <NavLink to='/' >
                <img src={ logo } id='logo'/>
            </NavLink>
            <div className='navResponsive'>
                <div className='hamburger'>
                {
                    shouldShowNavBar
                        ? <FiX size='24px' onClick={ handleNavBar } />
                        : <FiMenu size='24px' onClick={ handleNavBar } />
                }
                </div>
                <div className={ shouldShowNavBar ? 'navMenu' : 'navMenu navMenuHide' }>
                    <NavLink to='/' className='navLink' onClick={ handleNavBar }>
                        Home
                    </NavLink>
                    <NavLink to='/advance' className='navLink' onClick={ handleNavBar }>
                        advance
                    </NavLink>
                    <NavLink to='/about' className='navLink' onClick={ handleNavBar }>
                        About
                </NavLink>
                </div>
            </div>
        </div>
    )
}
