import { useContext } from 'react';
import { ProviderContext } from '../Provider/Provider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(ProviderContext)
    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children
    }
    return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoutes;