import React, { useEffect, useState } from 'react';
import OnSellCard from './OnSellCard';

const OnSell = () => {
    const [coupons, setCoupons] = useState([]); 
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/coupon.json') 
            .then((response) => {
                return response.json(); 
            })
            .then((data) => {
                console.log(data)
                setCoupons(data); 
            })
            .catch((error) => {
                setError(error.message); 
            });
    }, []); 
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3' data-aos="fade-right">
            {coupons.filter((sell)=> sell.isSaleOn).map((coupon) => <OnSellCard coupon={coupon}></OnSellCard>
                    )}
        </div>
    );
};

export default OnSell;