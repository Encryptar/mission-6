import React, { useEffect, useState } from 'react'

const SortedItem = () => {
    const [returnedStated, setReturnedState] = useState(null);
   
    useEffect(() =>{
        console.log(returnedStated); 
      },[returnedStated]);
    
    
    function callAPI(){
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
        }
        

  return (
    <div>
        <button onClick={callAPI}>Click me!</button>
    </div>
  )
}

export default SortedItem