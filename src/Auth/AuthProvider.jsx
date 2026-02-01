import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut ,updateProfile} from 'firebase/auth';

const AuthProvider = ({children}) => { 

    const googleProvider=new GoogleAuthProvider() 
    const [user,setUser]=useState(null) 
    const [loading,setloading]=useState(true)

  
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

 const updateUserProfile=(name,photo)=>{
     return updateProfile(auth.currentUser,{
        displayName: name, 
        photoURL: photo
     })
 }


useEffect(()=>{
    const unsubcribe=onAuthStateChanged(auth, async(currentUser)=>{
        setUser(currentUser) 
         setloading(true)
        if(currentUser){
             const token=await currentUser.getIdToken()
             localStorage.setItem('token',token) 
        } 
        else {
             localStorage.removeItem('token')
        } 
         setloading(false)
    }) 
    return ()=>{
        unsubcribe()
    }
},[])


const authInfo={ 
    user, 
    loading,
    registerUser,
    logInUser,
    googleSignIn,
    SignOutUser,
    updateUserProfile
} 
return (
    <AuthContext value={authInfo}>
    {children}
    </AuthContext>
)

}; 


export default AuthProvider;