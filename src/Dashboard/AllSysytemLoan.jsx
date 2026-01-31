import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const AllSysytemLoan = () => { 
     const [loans,setLoans]=useState([]) 


     useEffect(()=>{
       axios.get(`http://localhost:3000/availableloan`)
       .then(res=>setLoans(res.data))
     },[]) 

     const handleHome=async(id,currentStatus)=>{
         axios.patch(`http://localhost:3000/availableloan/show-on-home/${id}`,{showOnHome:!currentStatus})
         .then(res=>{
              if(res.data.modifiedCount >0){
                Swal.fire({
                        title: "Success!",
                        text:'Updated Home Page Loan Successfuly',
                        icon: "success",
                        
                        showConfirmButton: false
                    }) 
                    setLoans(prevloans=>prevloans.map(loan=>{
                         if(loan._id===id){
                             return{...loan,showOnHome:!currentStatus }
                         } 
                         return loan
                    }))
              }
         })
     }

    return (
        <div className='container mx-auto p-5 bg-base-200 rounded-md min-h-screen'> 
        <h2 className='text-center font-bold text-2xl '>All System Loan</h2>
           
     <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>  # </th>
         <th>Image</th>
        <th>Title</th>
        <th>Interest</th>
        <th>Category</th> 
        <th>Created By</th>
        <th>Show on Home</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody> 

        {loans.map((loan,index)=>(
              <tr key={loan._id}>
        <th>
         {index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={loan.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          
          </div>
        </td>
        <td>
          {loan.title}
          
        </td>
        <td>  {loan.interest}% </td>
        <th>
          {loan.category}
        </th> 
        <th>{loan.createdby || "Bank Created"} </th> 
        <th>{loan.showOnHome ? 
            <span className="badge badge-success text-white p-3"> Show </span> : 
            <span className="badge badge-ghost p-3">Hidden</span>
                }</th> 
                <th>
        <button className="btn btn-sm btn-outline p-3" onClick={()=>handleHome(loan._id,loan.showOnHome)}>{loan.showOnHome ? "Remove from Home" : "Add to Home"}</button>
                </th>
      </tr> 
        ))}
    
    </tbody>
 
 
  </table>
</div>
        </div>
    );
};

export default AllSysytemLoan;