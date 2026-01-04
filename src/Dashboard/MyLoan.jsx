import React, { useEffect, useState } from 'react';
import UseAuth from '../Auth/UseAuth';
import axios from 'axios';

const MyLoan = () => { 

    const {user}=UseAuth() 
    const [myloan,setmyloan]=useState([]) 
    const [loading,setloading]=useState(true) 

useEffect(() => {
  if (!user?.email) return

  axios
    .get(`http://localhost:3000/my-loan/${user.email}`)
    .then(res => {
      setmyloan(res.data)
      setloading(false)
    })
}, [user])

  

    return (
<div className="overflow-x-auto container mx-auto mt-6 bg-gray-200 p-2 gap-3 rounded-lg">
  <table className="table table-xs">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Income</th>
        <th>Loan Amount</th>
        <th>Status</th>
        <th>Payment</th>
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
      <td>{loan.paymentStatus}</td>
      <td>{loan.applicationDate}</td>
    </tr>
  ))}
</tbody>

  </table> 
  
</div>
    );
};

export default MyLoan;
