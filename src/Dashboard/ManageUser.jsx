import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const ManageUser = () => { 
  const navigate=useNavigate()
 const [users,setUsers]=useState([]) 

 useEffect(()=>{ 
    axios.get(`https://loan-link-server-nine.vercel.app/users`)
    .then(res=>setUsers(res.data)) 

 },[])


    return (
        <div className='container mx-auto p-2 m-3 bg-base-200 rounded-md shodow-lg '> 
        <h1 className='text-center text-3xl font-bold'>Manage User : {users.length} </h1>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th> 
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */} 

     {users.map((user,index)=>( 

      <tr key={user._id} className='gap-5'>
        <th>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        
        <td
        >{user.role}</td> 
        <td>
        <span className={`badge ${user.status === 'pending' ? 'badge-error' : 'badge-success'}`}>
          {user.status || 'active'}
        </span>
      </td>
        <td className='btn p-5 btn-active' onClick={()=>navigate(`/dashboard/Update-Users/${user._id}`)} >Update</td>
      </tr>


     ))}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageUser;