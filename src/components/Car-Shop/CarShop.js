import React, { useEffect, useState } from 'react';
import './CarShop.css'

const CarShop = () => {
    const [cars,setCars]=useState([])
    useEffect(()=>{
        fetch('./car.json')
        .then(res=>res.json())
        .then(data=>setCars(data))
    }
        ,[])
    return (
        <div className='carShop-container mt-5'>
           <div className="container">
            <div className="row">
                <div className="car-container col-lg-9">
                {

                }
                </div>
                <div className="cart-container col-lg-3">
                <h1>This cart container</h1>
                </div>

            </div>
            </div> 
        </div>
    );
};

export default CarShop;