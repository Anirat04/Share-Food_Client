import { useContext } from 'react';
import { ProviderContext } from '../Provider/Provider';
import { Navigate } from 'react-router-dom';
import Lottie from "lottie-react";
import LoadingJson from "./Loading.json"

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(ProviderContext)
    if(loading){
        return <div className='max-w-[200px] mx-auto mt-[200px]'><Lottie animationData={LoadingJson}></Lottie></div>
        // return <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children
    }
    return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoutes;