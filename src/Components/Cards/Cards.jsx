// import React from 'react';
// import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { RotatingLines } from  'react-loader-spinner'
const Cards = () => {
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> {
            setDonations(data)
            setLoading(false)
        }
        )
        
    },[])

    
    return (
        <>
        {
            loading 
            ? 
            <div className="flex flex-col justify-center items-center my-[50px]">
                <div>
                <RotatingLines
                strokeColor="blue"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                size={100}
                />
                </div>
                <h1 className="text-4xl mt-6 font-bold text-blue-500">Loading</h1>
            </div>
       
          :
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-[10px] md:mx-[30px] lg:mx-[100px] lg:mb-[100px] justify-center">                
            {
                donations.map((donation, idx)=> <Card key={idx} donation={donation}></Card>)
            }
          </div>

        }
         
        
        </>
    );
};

Cards.propTypes = {
    
};

export default Cards;