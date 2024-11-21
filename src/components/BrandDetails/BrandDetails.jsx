import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const BrandDetails = () => {
    const brandData = useLoaderData()
    const { brand_name, brand_logo, description, rating, coupons, shop_Link, category, isSaleOn } = brandData;

    console.log(brandData)

    //copy code
    const copyToClipboard = (code) => {
        navigator.clipboard.writeText(code).then(() => {
            toast.success(`Coupon code "${code}" copy successful`)
        });
    };

    // open in new tab
    const openInNewTab = (link) => {
        window.open(link, "_blank"); 
    };
    return (
        <div className='p-10'>
            <div className="card bg-base-100 lg:w-[1000px] shadow-2xl mx-auto">
                <figure className="px-10 pt-10">
                    <img className='w-[600px] rounded-xl' src={brand_logo} alt="" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title  md:text-5xl">Name : <span className='text-red-500'>{brand_name}</span></h2>
                    <div className='flex gap-20'>
                        <h1 className='font-bold'>Rating : {rating}</h1>
                        <button className='px-4 border border-green-800 text-bold bg-pink-200 rounded-full'> {isSaleOn ? 'true' : 'false'}</button >
                    </div>
                    {coupons.map((coupon) => (
                        <div className='w-96 shadow-xl p-5 rounded-lg'>
                            <p><strong>Coupon Code:</strong>{coupon.coupon_code}</p>
                            <p><strong>Description:</strong> {coupon.description}</p>
                            <p><strong>Expiry Date:</strong> {coupon.expiry_date}</p>
                            <p><strong>Condition:</strong> {coupon.condition}</p>
                            <p><strong>Type:</strong> {coupon.coupon_type}</p>
                            <button onClick={() => copyToClipboard(coupon.coupon_code)} className='px-5 bg-blue-600 rounded-full text-white font-bold mt-3'>Copy Code</button>
                        </div>))}

                    <button onClick={() => openInNewTab(shop_Link)} className='btn btn-success w-60 mt-5'>use Now</button>

                </div>
            </div>
        </div>
    );
};

export default BrandDetails;