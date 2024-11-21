// import React, { useState } from 'react';
import Marquee from "react-fast-marquee";

import React, { useState, useEffect } from 'react';
import Card from "./Card";

const LogoCard = () => {

    const [coupons, setCoupons] = useState([]); 
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/coupon.json') 
            .then((response) => {
                return response.json(); 
            })
            .then((data) => {
                setCoupons(data); 
            })
            .catch((error) => {
                setError(error.message); 
            });
    }, []); 

    return (

        <div className="py-10">
            <Marquee pauseOnHover='true'>
                <div className='flex gap-8'>
                    {coupons.map((coupon) => <Card coupon={coupon}></Card>
                    )}
                </div>
            </Marquee>
        </div>
    );
};

export default LogoCard;