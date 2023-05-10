import React from 'react'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/logo.svg'
import {useState} from "react";

// naming is done using BEM Block Element modifier
// gpt3__navbar-links
// means navbar is an element of gpt3 and links modify navbar
// __means is in or an elemento of - means it's describig
const Navbar = () => {
    const [toggleMenu, setToggleMenu]=useState(false);
    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className='gpt3__navbar-links_logo'>
                   <img src={logo} alt="logo"/>
                </div>
                <div className='gpt3__navbar-links_container'>
                    <p><a href="#home">Home</a></p>
                    <p><a href="#wgpt">What is GPT?</a></p>
                    <p><a href="#possibility">Open AI</a></p>
                    <p><a href="#features">Case Studies</a></p>
                    <p><a href="#blog">Library</a></p>
                </div>
                <div className="gpt3__navbar-sign">
                    <p>Sign in</p>
                    <button type="button">Sign up</button>
                </div>
                <div className="gpt3__navbar-menu">
                    {
                        toggleMenu
                        ?<RiCloseLine color="#fff" size={27} onClick={}/>
                    }
                </div>
            </div>
        </div>
    )
}
export default Navbar
