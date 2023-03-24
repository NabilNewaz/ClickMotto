import React, { useState } from 'react';
import './css/Navmenu.css';
import { Link, NavLink } from 'react-router-dom';
import logo from './images/clickmottologo.png';
import dots from './images/threedots.png';
import arrow from './images/arrow.png';

import fb from './images/fb.png';
import int from './images/int.png';
import tw from './images/tw.png';
import m from './images/m.png';
import vm from './images/vm.png';
import pn from './images/pn.png';



const Navmenu = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <div className='nav-bar'>
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <div className='nav-menus'>
                <NavLink className='nav-link' to=''>Explore</NavLink>
                <NavLink className='nav-link' to=''>Discover</NavLink>
                <NavLink className='nav-link' to=''>For Professionals</NavLink>
                <button onClick={toggle ? () => setToggle(false) : () => setToggle(true)} className='dots-button'><img src={dots} alt="dots" /></button>
                <div className={(toggle ? `d-none` : `d-block`)}>
                    <img className='drop-arrow' src={arrow} alt="" />
                    <div className='dropdown-nav'>
                        <Link className='drop-link'>About Click Motto</Link>
                        <Link className='drop-link'>Pricing</Link>
                        <Link className='drop-link'>License</Link>
                        <Link className='drop-link'>License</Link>
                        <Link className='drop-link'>Blog</Link>
                        <Link className='drop-link'>Help</Link>
                        <div className='social-icon'>
                            <img src={fb} alt="" />
                            <img src={tw} alt="" />
                            <img src={int} alt="" />
                            <img src={pn} alt="" />
                            <img src={vm} alt="" />
                            <img src={m} alt="" />
                        </div>
                    </div>
                </div>

                <div className='mobile-toggle'>
                    <div className={(toggle ? `d-none` : `d-block`)}>
                        <img className='drop-arrow' src={arrow} alt="" />
                        <div className='dropdown-nav'>
                            <NavLink className='nav-link' to=''>Explore</NavLink>
                            <NavLink className='nav-link' to=''>Discover</NavLink>
                            <NavLink className='nav-link' to=''>For Professionals</NavLink>
                            <Link className='drop-link'>About Click Motto</Link>
                            <Link className='drop-link'>Pricing</Link>
                            <Link className='drop-link'>License</Link>
                            <Link className='drop-link'>License</Link>
                            <Link className='drop-link'>Blog</Link>
                            <Link className='drop-link'>Help</Link>
                            <div className='social-icon'>
                                <img src={fb} alt="" />
                                <img src={tw} alt="" />
                                <img src={int} alt="" />
                                <img src={pn} alt="" />
                                <img src={vm} alt="" />
                                <img src={m} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <button className='submit-button'>Submit Photos</button>
                <div className='vertical-line'></div>
                <NavLink className='login-button'>Login</NavLink>
                <NavLink className='join-button'>Join Free</NavLink>
            </div>
        </div>
    );
};

export default Navmenu;