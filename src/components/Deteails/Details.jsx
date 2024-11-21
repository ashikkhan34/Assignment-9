import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const singleData = useLoaderData()
    const { brand_name, brand_logo, description, rating, coupons, shop_Link, category, isSaleOn } = singleData;
    return (
        <div className='p-12'>
            <div className='w-11/12 md:flex border p-6 shadow-xl mx-auto '>
                <div className=''>
                    <img className='rounded-lg w-[700px] h-[400px]  mx-auto' src={brand_logo} alt="" />
                </div>
                <div className='ml-9 space-y-4 mt-6'>
                    <h1 className='md:text-5xl text-4xl font-bold'>{brand_name}</h1>
                    <p className='text-2xl font-semibold'>category : {category}</p>
                    <p className=' text-gray-500'>Description : {description}</p>
                    <div className='flex justify-between'>
                        <p className='text-lg font-bold'>Rating : {rating}</p>
                        <button className='px-4 border border-green-800 text-bold bg-purple-300 rounded-full'>{isSaleOn ? 'true' : 'false'}</button >
                    </div>
                    <h1 className='md:text-2xl'>Shop Link : <a  className='text-red-500 underline' href={shop_Link}>{shop_Link}</a></h1>
                </div>
            </div>
        </div>
    );
};

export default Details;