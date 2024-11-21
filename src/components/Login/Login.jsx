import React, { useContext, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../../Firebase/firebase.config';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [error,setError] = useState('')
    const [showPassword,setShowPassword] = useState(false)
    const {googleLogin,userLogin,user} = useContext(authContext)
    const [email,setEmail] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const emailRef = useRef(null)
    const handleSubmit = e =>{
        e.preventDefault()
        setError('')
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        userLogin(email,password)
        .then(result =>{
            setError('')
            navigate(location.state ? location.state : '/')
            toast.success('Login Successful')
        })
        .catch((error) => {
            // console.log(error)
            setError({...error,login:'Invalid Password'})
          });
          

    }
    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(res =>{
            navigate('/')
        })
    }

    
    return (
        <div className=' justify-center flex py-6'  >
            {/* <button onClick={handleGoogleLogin}>google</button> */}
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl" data-aos="fade-left">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" onChange={(event)=>setEmail(event.target.value)} ref={emailRef} name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input  type={showPassword ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered " required />
                        <button onClick={() => setShowPassword(!showPassword)} className='absolute ml-72 mt-12 text-xl'>
                            {
                                showPassword ? <FaEye></FaEye> : <FaEyeSlash />
                            }
                        </button>
                       <Link to={`/forget-password?email=${email}`}>
                       <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                       </Link>
                        {error.login && (
                            <p className='text-red-600'>{error.login}</p>
                        )}
                        <div>
                            <p>Continue with
                                <button className='ml-2 underline text-blue-500 ' onClick={handleGoogleLogin}>Google</button>
                            </p>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p>Don't have an account ? Please <NavLink className='text-red-500 underline font-semibold' to='/register'>Register</NavLink></p>
                </form>

            </div>
        </div>
    );
};

export default Login;