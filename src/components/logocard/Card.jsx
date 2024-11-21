import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ coupon }) => {
    const {brand_name,brand_logo,category,_id} = coupon;
    return (
        <div >
            <div className="card bg-gray-100 w-96 h-80 shadow-xl">
                <figure>
                    <Link to={`/details/${_id}`}>
                    <img
                        src={brand_logo}
                        className='rounded-lg mt-5'
                        alt="Logo" />
                    </Link>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{brand_name}</h2>
                    <p>{category}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;