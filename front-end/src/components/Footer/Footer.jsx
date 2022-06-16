import React from 'react'
import logo from "../../pictures/logo.svg"
import './Footer.scss'
import {RiFacebookCircleLine, RiInstagramLine, RiLinkedinBoxLine, RiYoutubeLine} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer>
        <div className='footer-first-layer'>
            <img src={logo} alt=''/>
            <div>
                <h2>HEAD OFFICE</h2>
                <p>Auckland Property Management Ltd </p>
                <p>145 Manukau Road, Epsom, 1023, Auckland</p>
                <p>Hours: Open from 8:30am - 5:30pm Monday - Friday</p>
            </div>
            <div>
                <h2>Contact</h2>
                <p>Ph: (09) 638 2500</p>
                <p>Email: reception@apm.kiwi</p>
            </div>
        </div>
        <div className='footer-second-layer'>
            <div className='newsletter'>
                <h2>Subscribe to our NewsLetter</h2>
                <input type={'email'} placeholder='Input your email address'></input>
            </div>
            <div className='socials'>
                <RiFacebookCircleLine className='socials-icons'/>
                <RiInstagramLine  className='socials-icons'/>
                <RiLinkedinBoxLine  className='socials-icons'/>
                <RiYoutubeLine  className='socials-icons'/>
            </div>
        </div>

    </footer>
  )
}

export default Footer