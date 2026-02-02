import React from 'react';
import UseAuth from './UseAuth';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => { 
    const {user,loading}=UseAuth() 

    if(loading){
        return <div className="min-h-screen flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
        </div>
    }
    if(user){
        return children
    } 
     
    return <Navigate to={'/login'}></Navigate>
        
    
};

export default PrivateRoute;