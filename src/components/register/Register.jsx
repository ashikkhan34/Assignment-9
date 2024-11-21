import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?=\S+$).{6,}$/;
    const {createNewUser,updateUserProfile,setUser} = useContext(authContext)
    const [error,setError] = useState('')
    const [showPassword,setShowPassword] = useState(false)
    const navigate = useNavigate()
    const handleRegisterSubmit = e =>{
        e.preventDefault()
        const name = e.target.name.value;
        const photoURL = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (regex.test(password)) {
            setError(
                toast.success('Registration Successful!')
            )
        } else {
            toast.error('Invalid Password')
            setError('must be 1 uppercase 1 lowercase ,1 number and  special character and more then 6 character')
            return
        }
        console.log(name,photoURL,email,password)
        createNewUser(email,password)
        .then((res)=>{
            updateUserProfile({displayName:name,photoURL:photoURL})
            setUser((prev)=> {
                return {...prev,displayName:name,photoURL}
            })
            // navigate('/')
            navigate(location.state ? location.state : '/')
        })

    }
    return (
        <div>
            <div className='min-h-screen flex justify-center items-center py-9'>
                <div className="card bg-base-100 w-full max-w-lg shrink-0 p-5 border-none shadow-xl">
                    <h2 className='text-2xl font-semibold  text-center'>Register your Account</h2>
                    <form onSubmit={handleRegisterSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password'  type={showPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered" required />
                            <button onClick={() => setShowPassword(!showPassword)} className='absolute ml-[340px] mt-12 text-xl'>
                            {
                                showPassword ? <FaEye></FaEye> : <FaEyeSlash />
                            }
                        </button>
                        </div>
                        {error  && <p className='text-red-600'>{error}</p> }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className='text-center'>Already Have An Account ? <Link to="/login" className='underline text-red-600'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;