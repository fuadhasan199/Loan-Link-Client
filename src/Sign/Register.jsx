import React from 'react'; 
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { Link } from 'react-router';
import UseAuth from '../Auth/UseAuth';


const Register = () => { 
  const {  register,
    handleSubmit, formState: { errors }}=useForm() 

        
    const {registerUser,googleSignIn}=UseAuth()



   const handleRegister=async(data)=>{
      

       try{ 
      
     const result=await registerUser(data.email,data.password) 
     console.log(result.user)

        toast.success('Successfully Register')
       }
      catch(error){
        toast.error(error.message)
      }
   } 
 
const handleGoogleSignIn = async () => {
  try {
    const result = await googleSignIn();
    console.log(result.user);
    toast.success("Google sign-in successful");
  } catch (error) {
    toast.error(error.message);
  }
};





    return ( 
      
       <div className="hero bg-base-200 min-h-screen"> 
      
  <div className="hero-content flex-col lg:flex-row-reverse"> 
    
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
           <p className='text-center text-4xl font-semibold text-primary'>Register Please</p>
      <div className="card-body"> 

  
        
        <form onSubmit={handleSubmit(handleRegister)}> 


          <label className="label">Name</label>
          <input type="text" {...register('name',{required:'name is required'})} className="input" placeholder="Enter your name" />
          {errors.name && (
             <p className='text-red-500'>{errors.name.message}</p>
          )} 


          
          <label className="label">Photo</label>
          <input type="file" {...register('photo',{required:'photo is required'})} className="input"  /> 
          {
            errors.photo && ( 
              <p className='text-red-500'>{errors.photo.message}</p> 
            ) 
          } 




          <label className='label'>Role</label>
          <select className='select select-bordered w-full' {...register('role')}   >  

         <option value="borrower">borrower</option>
         <option value="Manager">Manager</option>

          </select>



          <label className="label">Email</label>
          <input type="email" {...register('email',{required:'email is required'})} className="input" placeholder="Enter your email" /> 
         
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
          <label className="label">Password</label>
          <input type="password" {...register('password',{required:'password is required',minLength:{
            value:6,
            message:'password must be at leasr 6 characters'
          },
        pattern: {
  value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
  message: "Password must contain uppercase & lowercase letters"
}
        
        
        })}
          className="input" placeholder="Enter your password"/> 
          {errors.password && (
            <p className='text-red-500'>{errors.password.message}</p>
          )}
         
          
          <div><a className="link link-hover">Forgot password?</a></div> 
          <p>Already have an account? <Link to={'/login'} className='text-red-600'>Login</Link></p>
          
          <div className="flex flex-col">
   <button className="btn btn-primary mt-4 w-full" >Register</button>
          <button onClick={handleGoogleSignIn} className="btn btn-primary mt-4 w-full">Register with Google</button> 

          </div>


        </form> 




      </div>
    </div>
  </div> 

</div>
    );
};

export default Register;