import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    // console.log(routes)
    const {user,loading} = useContext(authContext)
    const location = useLocation()

    if (loading) {

        return <span className="loading loading-infinity loading-lg"></span>
     }

    if(user && user?.email){
        return children
    }
    return (
        <div>
            <Navigate state={location.pathname} to={'/login'}></Navigate>
        </div>
    );
};

export default PrivateRoute;