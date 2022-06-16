import React from 'react'
import banner from '../../pictures/banner.svg'
import './Banner.scss'

const Banner = () => {
  return (
    <div className='banner-container'>
        <img src={banner} alt='banner'/>
        <div className='find-rental-button'>
            <p>Find your Rental!</p>
        </div>
    </div>
  )
}

export default Banner