import React from 'react'
import {IoIosBed} from 'react-icons/io'
import {MdShower} from 'react-icons/md'
import {FaWarehouse, FaDog} from 'react-icons/fa'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import './LatestProperty.scss'

const LatestProperty = (props) => {
    console.log(props["ImageURI"])
  return (
    <div className='property-wrapper'>
        <h3 className='location-text'><HiOutlineLocationMarker/>{props["Suburb"]}</h3>
        <img src={ props["ImageURI"] } alt='house'/>
        <div>
            <div>
                <h1>
                    {props["Name"]}
                </h1>
                <h1>
                    <IoIosBed className='property-icons'/> {props['Bedrooms']}
                    <MdShower className='property-icons'/> {props['Bathrooms']} 
                    {(props["Garages"] !== 0) &&  <h1 className='large-header'><FaWarehouse className='property-icons'/>  {props["Garages"]} </h1>}  
                    {props["petFriendly"] && <FaDog className='property-icons'/>} 
                </h1>
            </div>
            <div className='second-row-property'>
                <span></span>
                <div class='availability'>
                    <h5>Available</h5>
                    <p>Now</p>
                </div>
            </div>
            <p><h3>{props["Rent"]}</h3>p/w</p>
        </div>
    </div>
  )
}

export default LatestProperty