import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import UseAuth from '../Auth/UseAuth';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const ManageLoan = () => { 
 const {register,handleSubmit,reset}=useForm()
const {user}=UseAuth()
const [loan, setLoan]=React.useState([])
const [selectedloan,setSelectedloan]=useState(null)
useEffect(()=>{
 if(user?.email){

  axios.get(`https://loan-link-server-nine.vercel.app/availableloan/manager/${user?.email}`)
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
axios.delete(`https://loan-link-server-nine.vercel.app/availableloan/${id}`)
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


const handleUpdate=async(data)=>{ 
  console.log("selectedloan:", selectedloan)

const updateInfo = {
  title: data.title,
  interestRate: data.interestRate,
  category: data.category,
  maxlimit: data.maxLimit
}

     try{
       const response=await axios.patch(`https://loan-link-server-nine.vercel.app/availableloan/${selectedloan._id}`,updateInfo)
     
       if(response.data.modifiedCount >0){
         Swal.fire({
         title: "The Loan has been updated..!",
          icon: "success",
          draggable: true 
});
       } 

       const updatedLoans=loan.map(lon=>lon._id ===selectedloan._id ? {...lon,...updateInfo}:lon)
     
      setLoan(updatedLoans)
      document.getElementById('my_modal_5').close()
     
      } 

     catch(error){
        console.log(error.message)
     }
}

 const openModal=(loanData)=>{ 
  setSelectedloan(loanData)
  reset(loanData)
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
                 <button className='btn btn-primary rounded-xl hover:bg-green-500' onClick={()=>openModal(loan)}>Update</button>
                <button className='btn btn-secondary rounded-xl  ' 

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
        <h3 className="font-bold text-lg mb-4 text-center">Update Loan Details</h3>
        
        
        <form onSubmit={handleSubmit(handleUpdate)} className="space-y-4">
            
            {/* Title */}
            <div className="form-control">
                <label className="label font-semibold">Loan Title</label>
                <input type="text" {...register("title")} className="input input-bordered" required />
            </div>

            <div className="grid grid-cols-2 gap-4">
                {/* Interest Rate */}
                <div className="form-control">
                    <label className="label font-semibold">Interest (%)</label>
                    <input type="number" step="0.01" {...register("interestRate")} className="input input-bordered" required />
                </div>

                {/* Max Limit */}
                <div className="form-control">
                    <label className="label font-semibold">Max Limit</label>
                    <input type="number" {...register("maxLimit")} className="input input-bordered" required />
                </div>
            </div>

            {/* Category */}
            <div className="form-control">
                <label className="label font-semibold">Category</label>
                <select {...register("category")} className="select select-bordered" required>
                    <option value="Personal">Personal</option> 
                    <option value="Business">Business</option> 
                    <option value="Education">Education</option> 
                </select>
            </div>

            <div className="modal-action">
                <button type="submit" className="btn btn-primary ">Save Changes</button>
                <button type="button" className="btn btn-secondary" onClick={() => document.getElementById('my_modal_5').close()}>Cancel</button>
            </div>
        </form>
    </div>
</dialog>
</div>
        </div>
    );
};

export default ManageLoan;