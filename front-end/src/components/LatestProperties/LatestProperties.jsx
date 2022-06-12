import {React, useState, useEffect} from 'react'
import LatestProperty from '../LatestProperty/LatestProperty';
import './LatestProperties.scss'
import house1 from '../../pictures/house1.svg'
import house2 from '../../pictures/house2.svg'
import house3 from '../../pictures/house3.svg'

const LatestProperties = () => {

    const [returnedStated, setReturnedState] = useState([]);
    useEffect(() => {
        console.log(returnedStated);
        fetch("http://localhost:9000/properties")
        .then(
            (response) => {
                if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
                }
                response.json().then((data) => {
                    setReturnedState(data);
                });
            }).catch((err) => {
                console.log('Fetch Error :-S', err);
            });
        });
        
    let array = [house1, house2, house3]

  return (
    <div className='properties-wrapper'>
        <h0>Latest Properties</h0>
        <div className='latest-properties-container'>
            {returnedStated.slice(0,3).map((data, key) => {
                return (
                    <LatestProperty key={key} 
                    Name={data["name"]} 
                    Suburb={data["Suburb"]} 
                    petFriendly={data["PetFriendly"]} 
                    Bedrooms={data["Bedrooms"]}
                    Bathrooms={data["Bathrooms"]}
                    Garages={data["Garages"]}
                    Rent={data["Rent"]}
                    ImageURI={array[key]}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default LatestProperties