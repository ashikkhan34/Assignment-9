import React, { useContext, useRef } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../../Firebase/firebase.config';

const ForgetPassword = () => {
    const emailRef = useRef()
    const {user} = useContext(authContext)
    let [searchParams, setSearchParams] = useSearchParams();
    const email = searchParams.get('email');

    const handleSubmit = e =>{
        e.preventDefault()
    }

    // password forget .................
    const handleForgetPassword = () => {
        console.log('forget password',emailRef.current.value)
        const email = emailRef.current.value;

        if(!email){
            console.log('Please provide a valid Email')
        }
        else{
            sendPasswordResetEmail(auth,email)
            .then(()=>{
                toast.error('Password reset email send,Please check your email')
            })
        }
    }

    
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mb-10">
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" ref={emailRef} defaultValue={email}  placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button onClick={handleForgetPassword}  className="btn btn-primary">Reset Password</button>
                </div>
            </form>
        </div>
    );
};

export default ForgetPassword;