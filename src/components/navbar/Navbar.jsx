import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/download.png'
import { authContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, singOut } = useContext(authContext)
    console.log(user)
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/brands'>Brands</NavLink></li>
        <li><NavLink to='/my-profile'>My-Profile</NavLink></li>
        <li><NavLink to='/about-dev'>About Dev</NavLink></li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100 px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <NavLink to='/'><img className='w-14' src={logo} alt="" /></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        {
                            user && user?.email ? <>
                                <div className='mt-5 ml-4'>
                                    <img className='w-12 h-12 rounded-full' src={`${user?.photoURL}`} alt="" />
                                    <p className='text-xs '>{user.displayName}</p>
                                </div>
                            </> : ''
                        }
                    </div>
                    <div>
                        {
                            user && user?.email ? (
                                <button onClick={singOut} className='btn btn-primary rounded-xl'>LogOut</button>
                            ) : (
                                <Link to='/login' className='btn btn-neutral rounded-none'>Login</Link >
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;