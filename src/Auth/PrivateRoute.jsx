import React from 'react';
import UseAuth from './UseAuth';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => { 
    const {user}=UseAuth() 

    if(user){
        return children
    } 
     
    return <Navigate to={'/login'}></Navigate>
        
    
};

export default PrivateRoute;