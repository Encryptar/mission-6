import {React, useState, useEffect} from 'react'
import './Statistics.scss'
import {FaDog} from 'react-icons/fa'

const Statistics = () => {
    const [returnedStated, setReturnedState] = useState([]);
    useEffect(() => {
        console.log(returnedStated);
        fetch("http://localhost:9000")
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
    
    <div  className='container'>
        <div className='outside'>
            <h1>${returnedStated[0]}b</h1>
            <h2>Value of Property Under Management</h2>
        </div>
        <div className='inside'>
            <h1>{returnedStated[1]}</h1>
            <h2>Properties Available for Rent</h2>
        </div>
        <div className='inside'>
            <h1>50+</h1>
            <h2>Years of Success</h2>
        </div>
        <div className='outside'>
            <h1><FaDog/>{returnedStated[2]}</h1>
            <h2>Friendly Pets Housed with Us</h2>
        </div>
    </div>
  )
}

export default Statistics