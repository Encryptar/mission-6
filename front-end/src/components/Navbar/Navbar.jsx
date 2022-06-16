import React from 'react'
import './Navbar.scss'
import {BsSearch} from "react-icons/bs"
import logo from "../../pictures/logo.svg"

const Navbar = () => {
  return (
    <nav>
        <ul className='left-nav-list'>
            <img src={logo} alt="logo"/>
            <li>Residential</li>
            <li>Commercial</li>
            <li>Body Corporate</li>
        </ul>
        
        <ul className='right-nav-list'>
            <li>Why Us?</li>
            <li>About Us?</li>
            <li>Client Resources</li>
            <li>Contact Us</li>
            <li><BsSearch className='nav-icons'/></li>
        </ul>

    </nav>
  )
}

export default Navbar 