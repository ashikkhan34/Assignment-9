import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BrandCard from './BrandCard';

const Brands = () => {
    const couponsData = useLoaderData()
    console.log( couponsData)
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3'>
              {
                couponsData.map(data => <BrandCard data={data}></BrandCard> )
              }
        </div>
    );
};

export default Brands;