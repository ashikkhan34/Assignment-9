import React, { useContext, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

const UpdateProfile = () => {
    const {updateUserProfile,setUser,createNewUser} =useContext(authContext)
    const updateInformation = e =>{
        e.preventDefault();
        const photoURL = e.target.photo.value;
        const name = e.target.name.value;
        console.log(photoURL,name)
        
            updateUserProfile({displayName:name,PhotoURL:photoURL})
            setUser((prev) =>{
                return {...prev,displayName:name,photoURL}
            })
       
    }
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mb-5">
                <form onSubmit={updateInformation} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input name='photo' type="text" placeholder="PhotoURL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;