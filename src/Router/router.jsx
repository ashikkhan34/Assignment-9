
import { createBrowserRouter } from 'react-router-dom';
import MainlayOut from '../MainLayOut/MainlayOut';
import Home from '../components/Home/Home';
import Error from '../components/error/Error';
import Details from '../components/Deteails/Details';
import Brands from '../components/brands/Brands';
import MyProfile from '../components/my-profile/MyProfile';
import AboutDev from '../components/About-dev/AboutDev'
import Login from '../components/Login/Login';
import Register from '../components/register/Register';
import BrandDetails from '../components/BrandDetails/BrandDetails';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import ForgetPassword from '../components/ForgetPass/ForgetPassword';
import UpdateProfile from '../components/UpdateProfile/UpdateProfile';

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainlayOut></MainlayOut>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/details/:_id',
                element:<Details></Details>,
                loader:async ({params})=>{
                    const res = await fetch('../coupon.json')
                    const data = await res.json()
                    const singleData = data.find(d=>d._id == params._id)
                    return singleData;
                }
            },
            {
                path:'/brands',
                element:<Brands></Brands>,
                loader:()=>fetch('/coupon.json')
            },
            {
                path:'/brand-details/:_id',
                element:<PrivateRoute><BrandDetails></BrandDetails></PrivateRoute>,
                loader:async ({params})=>{
                    const res = await fetch('../coupon.json')
                    const data = await res.json()
                    const brandData = data.find(d=>d._id == params._id)
                    return brandData;
                }
            },
            {
                path:'/my-profile',
                element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            {
                path:'/about-dev',
                element:<AboutDev></AboutDev>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/forget-password',
                element:<ForgetPassword></ForgetPassword>
            },
            {
                path:'/update-profile',
                element:<UpdateProfile></UpdateProfile>
            }
        ]
    },
    {
        path:'/*',
        element:<Error></Error>
    },
    
])

export default router;