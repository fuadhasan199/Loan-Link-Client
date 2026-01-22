import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import UseAuth from '../Auth/UseAuth';
import axios from 'axios';

const ManageLoan = () => { 
 

const {user}=UseAuth()
const [loan, setLoan]=React.useState([])

useEffect(()=>{
 if(user?.email){

  axios.get(`http://localhost:3000/availableloan/manager/${user?.email}`)
  .then(res=>{
    setLoan(res.data)

  })
 }
},[user?.email]) 


const handleDelete=(id)=>{ 

Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) { 
axios.delete(`http://localhost:3000/availableloan/${id}`)
.then(res=>{
    if(res.data.deletedCount >0){ 
          Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    }); 
    const remain=loan.filter(lon=>lon._id !==id) 
    setLoan(remain)
  }
        
    } ) }
})



  
   
  
}


 const openModal=()=>{
     document.getElementById('my_modal_5').showModal()
 }



    return (
        <div className='container mx-auto p-3 rounded-md'> 

           <h2 className='text-2xl p-3 text-base-content font-bold'>Manager Added Loans : {loan.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <p>#</p>
        </th>
        <th>Image</th>
        <th>Title</th>
        <th>Interest</th>
        <th>Category</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */} 

       {loan.map((loan,index)=>(
          
     <tr key={loan._id}>
        <th> <p>{index+1}</p> </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={loan.image}
                  alt="data not loded" />
              </div>
            </div>
            
          </div>
        </td>
        <td>
          {loan.title}
          <br />
        
        </td>
        <td>{loan.interest}%</td>
        <th>
          {loan.category}
        </th> 
        <th>
            <div className="flex item-center gap-2 "> 
                 <button className='btn btn-primary rounded-xl hover:bg-green-500' onClick={openModal}>Update</button>
                <button className='btn btn-primary rounded-xl hover:btn-secondary ' 

               onClick={()=>handleDelete(loan._id)}>Delete</button>
                
            </div>
        </th>
      </tr>


       ))}
      
     
   
    
    
    </tbody>
   

  </table> 
                 {/* modal body here */}
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
           <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">Press ESC key or click the button below to close</p>
               <div className="modal-action">
              <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</div>
        </div>
    );
};

export default ManageLoan;