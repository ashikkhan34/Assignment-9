import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const MainlayOut = () => {
    return (
        <div>
            <Toaster position='top-right'></Toaster>
            <Navbar></Navbar>
            <div className='max-w-7xl mx-auto'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainlayOut;