import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {  Link, useNavigate } from 'react-router';
import UseAuth from '../Auth/UseAuth';
import { GoogleAuthProvider } from 'firebase/auth';

const LogIn = () => { 
  const {register,handleSubmit,formState: { errors }}=useForm()
  const navigate=useNavigate()

  const {logInUser,googleSignIn}=UseAuth() 



 

  const handleLogin=async(data,e)=>{
    

      try{ 
        const result=await logInUser(data.email,data.password) 
        console.log(result.user)
 toast.success('successfully Login')
 e.target.reset() 
  navigate('/')
      }
   catch{
  toast.error("Login failed")
   }
    
  } 

  const handleGoogleLogIn=async()=>{
    try{
     const result=await googleSignIn() 
     console.log(result.user)
      toast.success('successfully Login') 
      navigate('/')
    } 
    catch(error){
      toast.error(error.message)
    }
  } 

  

    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold px-4">Login now!</h1>
     
      
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit(handleLogin)}>
          <label className="label">Email</label>
          <input type="email" {...register('email',{required:'email is required'})} className="input" placeholder="Enter your email" />
          {
            errors.email && <p className='text-red-500'>{errors.email.message}</p> 
          }
          <label className="label">Password</label>
          <input type="password" {...register('password',{required:'password is required'})} className="input" placeholder="Enter your Password" /> 
          {
            errors.password &&  <p className='text-red-500'>{errors.password.message} </p> 
          }
          <div><a className="link link-hover">Forgot password?</a> 
               <p>Dont've an account? <Link to={'/register'} className='text-red-500 font-bold'>Register</Link></p>
          </div> 
          <div className='flex flex-col'>
      <button className="btn btn-primary mt-4">Login</button> 
           <button onClick={handleGoogleLogIn} className="btn btn-primary mt-4">Login With Google</button>
          </div>
    
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default LogIn;