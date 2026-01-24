import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const PendingApplication = () => { 

const [applications,setApplications]=useState([]) 

useEffect(()=>{ 
    axios.get(`http://localhost:3000/loan-applications`)
    .then(res=>{
        const pending=res.data.filter(app=>app.status==='pending')
        setApplications(pending)
    })

},[])
 
const handleUpdate=(id,status)=>{
     axios.patch(`http://localhost:3000/loan-applications/${id}`,{status:status})
     .then(res=>{
         if(res.data.modifiedcount >0){
             Swal.fire("Success", `Loan ${status} Successfully!`, "success")
         } 
         const remaining=applications.filter(app=>app._id !==id) 
         setApplications(remaining)
       
     }) 
      
}


    return (
        <div className='container mx-auto bg-base-300 p-5 rounded-md mt-2'> 
        <h2 className='text-2xl text-end font-bold mt-3 mb-4'>Pending Applications : {applications.length}</h2>
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>User Info</th>
        <th>Amount</th>
        <th>Date</th> 
        <th>Actions</th> 
      </tr>
    </thead>
    <tbody>
     
 
      
     {applications.map((app,index)=>(
          <tr key={app._id}> 
        <th>{index+1}</th>
        <td>
            <p className="font-bold">{app.firstName} {app.lastName}</p>
        <p className="text-sm text-gray-500">{app.userEmail}</p>
           </td>
        <td>{app.loanAmount} tk </td>
        <td>{app.applicationDate}</td> 
        <td className='flex gap-2'>

             <button onClick={()=>handleUpdate(app._id,'Approve')} className='btn btn-success rounded-md btn-sm'>Approve</button>
             <button onClick={()=>handleUpdate(app._id,'Rejected')} className='btn btn-error rounded-md btn-sm'>Reject</button>
             
        </td>
      </tr>
     ))}


      
      
   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PendingApplication;