import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';


const UpdateUser = () => { 
    const {id}=useParams() 
    const [userId,setUserID]=useState() 
    const {register,handleSubmit}=useForm()
    const Navigate=useNavigate()



    useEffect(()=>{
         axios.get(`https://loan-link-server-nine.vercel.app/users`)
         .then(res=>{
             const sigleUser=res.data.find(u=>u._id===id)
             setUserID(sigleUser)
         })
    },[id]) 
    
    const handleUpdate=async(data)=>{
         try{
            const res=await axios.patch(`https://loan-link-server-nine.vercel.app/users/update/${id}`,{role:data.role,
                status:data.status
            })
              if(res.data.modifiedCount >0){
                  Swal.fire({
                    title: "Success",
                    text: "User role updated successfully!",
                    icon: "success",
                    
                }); 
                Navigate('/dashboard/manage-user')
              } 
                   
              
         } 
         catch(error){
              Swal.fire({
                  title: "Error",
                  text: error.message || "Failed to update user role.",
                  icon: "error",
                
              })
         }
    }
 
   if(!userId){
       return <span className="loading loading-spinner loading-2xl items-center justify-center"></span>
   }

    return (
        <div className='container mx-auto bg-base-200 p-5 rounded-md'>
           <h1 className='text-xl text-center mb-5 mt-5'> <span className='font-bold text-2xl'>{userId?.name}</span> Role Update Page</h1> 
           <hr />  

           <form  className="space-y-4 p-12" onSubmit={handleSubmit(handleUpdate)}>
                <div className="form-control">
                    <label className="label p-5">Current Role: <span className="badge badge-success">{userId?.role}</span></label>
                    <select {...register('role',{required:true})} name="role" className="select select-bordered w-full" defaultValue={userId?.role}>
                        <option value="borrower">borrower</option>
                        <option value="manager">manager</option>
                        <option value="admin">admin</option>
                        <option value="suspended">Suspended</option> 
                    </select>
                </div> 
              <div className="form-control">
        <label className="label font-bold">Account Status:</label>
        <select {...register('status')} className="select select-bordered w-full" defaultValue={userId?.status}>
            <option value="active"> Approve</option>
            <option value="pending">Pending</option>
            <option value="suspended">Suspended</option>
        </select>
    </div>

                <button type="submit" className="btn btn-primary w-full  text-white">Update Status</button>
            </form>


        </div>
    );
};

export default UpdateUser;