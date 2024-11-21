import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center items-center mt-52'>
            <h1 className='text-9xl '>404</h1>
            <p className='text-red-700 font-2xl'>Can not find this Page</p>
            <NavLink to='/'><button className='btn btn-primary'>Go Back</button></NavLink>
        </div>
    );
};

export default Error;