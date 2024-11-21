import React from 'react';
import App from '../../App';
import { Link } from 'react-router-dom';

const BrandCard = ({ data }) => {
    const { brand_name, brand_logo, description, rating, coupons, shop_Link, category, isSaleOn,_id } = data;
    return (
        <div>
            <div className='p-5'>
                <div className='w-96 rounded-lg p-6 shadow-xl mx-auto h-[580px] '>
                    <div className=''>
                        <img className='rounded-lg   mx-auto' src={brand_logo} alt="" />
                    </div>
                    <div className='ml-5 space-y-2 mt-6'>
                        <h1 className='text-2xl font-bold'>{brand_name}</h1>
                        <p className='text-xl font-semibold'>category : {category}</p>
                        
                        <p className=' text-gray-500'>Description : {description}</p>
                        <div className='flex justify-between'>
                            <div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                            
                            <button className='px-4 border border-green-800 text-bold bg-purple-300 rounded-full'>{isSaleOn ? 'true' : 'false'}</button >
                        </div>
                        <h1>Shop Link : <a className='text-red-500 underline' href={shop_Link}>{shop_Link}</a></h1>
                    </div>
                    <div className='flex justify-between mt-3'>
                    <h1>{isSaleOn ?  <App></App> : ''  }</h1>
                   <Link to={`/brand-details/${_id}`}>
                   <button className='btn btn-secondary'>View Coupons</button>
                   </Link>
                    
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default BrandCard;