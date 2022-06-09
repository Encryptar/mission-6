import React from 'react'
import './Searchbar.scss'

const Searchbar = () => {
  return (
      <div className='wrapper'>
        <form>
            <div>
                <div className='search-line-1'>
                    <select >
                        <option value={'All Districts'}>All Districts</option>
                    </select>
                    <select >
                        <option value={'All Suburbs'}>All Suburbs</option>
                    </select>
                </div>
                <div className='search-line-2'>
                    <div className='search-price'>
                        <label>Price</label><br/>
                        <select>
                            <option>Any</option>
                        </select>
                        <span>To</span>
                        <select>
                            <option>Any</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor='bedrooms'>Bedrooms</label><br/>
                        <select id='bedrooms'>
                            <option value={'Any'}>Any</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor='bathrooms'>Bathrooms</label><br/>
                        <select id='bathrooms'>
                            <option value={'Any'}>Any</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor='propertyType'>Property Type</label><br/>
                        <select id='propertyType'>
                            <option value={'Any'}>All</option>
                        </select>
                    </div>

                </div>
                <div className='search-line-3'>
                    <div className='sl3-child'>
                        <input type={'checkbox'} id='petsAllowed'></input>
                        <label htmlFor='petsAllowed'>Pets Allowed</label>
                    </div>
                    <div  className='sl3-child'>
                        <input type={'checkbox'} id='availableNow'></input>
                        <label htmlFor='availableNow'>Available Now</label>
                    </div>
                </div>
            </div>
            

        </form>
        <input className='search-button' type={'submit'}></input>
    </div>
  )
}

export default Searchbar