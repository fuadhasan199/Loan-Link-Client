import React from 'react';
import UseAuth from '../Auth/UseAuth';

const Profile = () => { 

   const {user}=UseAuth() 
    
   if(!user){
      return <div className="text-center flex justify-center items-center min-h-screen"> 
       
           Profile Loading <span className="loading loading-dots loading-lg"></span>
              
      </div>
   }


    return (
        <div className='container mx-auto shadow-lg rounded-md  bg-gray-100 mt-2 p-2'> 



      <h1 className='text-2xl font-semibold mb-4 text-center'>My Profile</h1> 

        <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow"> 

          <img src={user.photoURL} alt="https://i.ibb.co.com/CpSS3hkY/photo-1740252117070-7aa2955b25f8-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-1.jpg" className='rounded-full mx-auto w-24 h-25' /> 

          <h2 className='text-center mt-3 font-bold p-1'>Name:{user.displayName}</h2> 
          <p className='font-bold text-center mt-1 text-gray-700 '>Email:{user.email}</p> 

           <p className="text-sm text-center mt-2 text-gray-700">
        User ID: {user.uid}
      </p>





        </div>





       
        </div>
    );
};

export default Profile;