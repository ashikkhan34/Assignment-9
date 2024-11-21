import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    const { user } = useContext(authContext)
    return (
        <div className='p-10'>
            <div className="card bg-base-100 w-96 shadow-xl mx-auto ">
                <figure className="px-10 pt-10">
                    <img
                        src={user.photoURL}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name : {user.displayName}</h2>
                    <p>Email : {user.email}</p>
                </div>
            </div>
            <Link to='/update-profile'>
            <button className='btn btn-primary w-40 text-white font-bold ml-[500px] mt-5'>Update Profile</button>
            </Link>
        </div>
    );
};

export default MyProfile;

// <img className='w-12 h-12 rounded-full' src={`${user?.photoURL}`} alt="" />
// <p className='text-xs '>{user.displayName}</p>