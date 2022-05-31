
import React, {useState} from 'react'

const SortedItem = () => {
    const [returnedStated, setReturnedState] = useState([]);
   
    
    
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
        <div>
            {returnedStated.map((data, key) => {
                return (
                    <div key={key}>
                        <h1>Product Name: {data["product-name"]}</h1>
                        <h2>Product Quantity: {data["quantity"]}</h2>
                        <h2>Product Description: {data["product-description"]}</h2>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default SortedItem