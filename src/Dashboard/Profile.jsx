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
        <div className='container mx-auto shadow-lg rounded-md  bg-base-100 border-base-300 mt-2 p-2'> 



      <h1 className='text-2xl font-semibold mb-4 text-center'>My Profile</h1> 

        <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow"> 

       <img 
            src={user?.photoURL || user?.photo || "https://via.placeholder.com/150"} 
                 alt="profile" className='rounded-full mx-auto w-24 h-24 object-cover border-2 border-primary' 
/>

<h2 className='text-center mt-3 font-bold'>Name: {user?.displayName || user?.name}</h2>
<p className='text-center'>Email: {user?.email}</p>

           <p className="text-sm text-center mt-2 text-primary ">
        User ID: {user.uid}
      </p>





        </div>





       
        </div>
    );
};

export default Profile;