import React, { useEffect, useState } from 'react';
import UseAuth from '../Auth/UseAuth';
import axios from 'axios';

const MyLoan = () => { 

    const {user}=UseAuth() 
    const [myloan,setmyloan]=useState([]) 
    const [loading,setloading]=useState(true) 

useEffect(() => {
  if (!user?.email)  return   
 

   
  setloading(true) 
  const token=localStorage.getItem('access-token')
   axios.get(`https://loan-link-server-nine.vercel.app/my-loan/${user.email}`,{
     headers:{
      authorization:`Bearer ${token}`
     }
   })
    .then(res => {
      setmyloan(res.data) 
      setloading(false)
    }) 
    
    .catch((error)=>{ 
      console.log(error.message) 
      setmyloan([])
       setloading(false)
    })
  }
, [user?.email])

  

    return (
<div className="overflow-x-auto container mx-auto mt-6 bg-gray-200 p-2 gap-3 rounded-lg shadow-md"> 
  <h1 className='mb-2 text-2xl text-gray-800 font-bold '>User Loan Application List</h1>
  <table className="table table-xs">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Income</th>
        <th>Loan Amount</th>
        <th>Status</th>
    
        <th>Apply Date</th>
      </tr>
    </thead>
<tbody>
  
  {myloan.length === 0 && !loading && (
    <tr>
      <td colSpan="7" className="text-center text-gray-500">
        No loan applications found
      </td>
    </tr>
  )}

  
  {myloan.map((loan, index) => (
    <tr key={loan._id}>
      <th>{index + 1}</th>
      <td>{loan.firstName} {loan.lastName}</td>
      <td>{loan.income}</td>
      <td>{loan.loanAmount}</td>
      <td>{loan.status}</td>
      
      <td>{loan.applicationDate}</td>
    </tr>
  ))}
</tbody>

  </table> 
  
</div>
    );
};

export default MyLoan;
