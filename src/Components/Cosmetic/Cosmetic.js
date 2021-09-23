import React from 'react';
import { addToDb } from '../../Utilities/fakedb';

const Cosmetic = (props) => {
   
    // console.log(props.cosmetic);
    const {name, price, id} = props.cosmetic;
    const handlePurchase = id =>{
        // set to local storage 
        console.log(id);
        addToDb(id);
    }

    return (
        <div>
            <p>id: {id}</p>
            <h2>name: {name}</h2>
            <p>Price: ${price}</p>
            <button onClick = { () =>handlePurchase(id)}>Purchase</button>
        </div>
    );
};

export default Cosmetic;