import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => { 

    const googleProvider=new GoogleAuthProvider() 
    const [user,setUser]=useState(null) 

  
const registerUser=(email,password)=>{
     return createUserWithEmailAndPassword(auth,email,password)
} 

const logInUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}  

const googleSignIn=()=>{
    return signInWithPopup(auth,googleProvider)
} 
const SignOutUser=()=>{
    return signOut(auth)
} 
useEffect(()=>{
    const unsubcribe=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
    }) 
    return ()=>{
        unsubcribe()
    }
},[])


const authInfo={ 
    user,
    registerUser,
    logInUser,
    googleSignIn,
    SignOutUser
} 
return (
    <AuthContext value={authInfo}>
    {children}
    </AuthContext>
)

}; 


export default AuthProvider;