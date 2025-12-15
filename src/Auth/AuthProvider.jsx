import React from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const AuthProvider = ({children}) => { 

    const googleProvider=new GoogleAuthProvider()
  
const registerUser=(email,password)=>{
     return createUserWithEmailAndPassword(auth,email,password)
} 

const logInUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}  

const googleSignIn=()=>{
    return signInWithPopup(auth,googleProvider)
}


const authInfo={
    registerUser,
    logInUser,
    googleSignIn
} 
return (
    <AuthContext value={authInfo}>
    {children}
    </AuthContext>
)

}; 


export default AuthProvider;