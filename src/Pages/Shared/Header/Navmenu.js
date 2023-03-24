import React from 'react';
import './css/Navmenu.css';
import { NavLink } from 'react-router-dom';
import logo from './images/clickmottologo.png';
import dots from './images/threedots.png';

const Navmenu = () => {
    return (
        <div className='nav-bar'>
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <div className='nav-menus'>
                <NavLink className='nav-link' to=''>Explore</NavLink>
                <NavLink className='nav-link' to=''>Discover</NavLink>
                <NavLink className='nav-link' to=''>For Professionals</NavLink>
                <button className='dots-button'><img src={dots} alt="dots" /></button>
                <button className='submit-button'>Submit Photos</button>
                <div className='vertical-line'></div>
                <NavLink className='login-button'>Login</NavLink>
                <NavLink className='join-button'>Join Free</NavLink>
            </div>
        </div>
    );
};

export default Navmenu;