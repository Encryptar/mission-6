import {React, useState, useEffect} from 'react'
import LatestProperty from '../LatestProperty/LatestProperty';
import './LatestProperties.scss'

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
        


  return (
    <div className='properties-wrapper'>
        <h0>Latest Properties</h0>
        <div className='latest-properties-container'>
            {returnedStated.slice(0,3).map((data, key) => {
                return (
                    <LatestProperty key={key} 
                    Name={data["name"]} 
                    Suburb={data["Suburb"]} 
                    petFriendly={data["Pet-friendly"]} 
                    Bedrooms={data["Bedrooms"]}
                    Bathrooms={data["Bathrooms"]}
                    Garages={data["Garages"]}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default LatestProperties