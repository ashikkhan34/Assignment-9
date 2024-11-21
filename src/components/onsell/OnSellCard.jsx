import React from 'react';

const OnSellCard = ({ coupon }) => {
    const { brand_name, brand_logo, category, coupons } = coupon;
    console.log(coupon)
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl mb-6" data-aos="flip-right">
                <figure className="px-10 pt-10">
                    <img
                        src={brand_logo}
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"><strong>Brand Name :</strong>{brand_name}</h2>
                    <p><strong>Category :</strong>{category}</p>
                    <p><strong>Total Coupons :</strong>{coupons.length}</p>
                </div>
            </div>
        </div>
    );
};

export default OnSellCard;