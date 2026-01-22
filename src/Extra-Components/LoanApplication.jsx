import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import UseAuth from '../Auth/UseAuth';
import { useLocation, useNavigate } from 'react-router';
import { GrLinkPrevious } from 'react-icons/gr';



const LoanApplication = () => { 
     const {user}=UseAuth()
     const {register, handleSubmit,reset}=useForm() 
     const navigate=useNavigate()
    
const location=useLocation()
const card=location.state?.card
      
 const onsubmit=async(data)=>{
     
     const applicationInfo={
         ...data, 
         userEmail:user?.email ||"",
         loanTitle:card?.title || 'personal loan',
         interestRate:card?.interest || "5%",
         status:'pending',
         paymentStatus:'unpaid',
         applicationDate:new Date().toLocaleDateString() 


     } 

    try{ 
        const response= await axios.post('http://localhost:3000/apply-loan',applicationInfo) 
        if(response.data.insertedId){
            Swal.fire({
                title: "Application Submitted Seccessfully",
                icon: "success",
                confirmButtonText:"OK"
});
        } 
        reset()

    } 
    catch(error){
       Swal.fire({
         title:'Error!',
         text:error.message,
         icon:'error',
         confirmButtonText:'OK'
       })
    }

 }
 return (
        
  <div className='container mx-auto border border-base-300 p-2 bg-base-100 text-base-content'>
  <div className="min-h-screen border border-base-300 py-12 px-4">
    <div className="max-w-4xl mx-auto bg-base-100 shadow-xl rounded-2xl overflow-hidden border border-base-300">
      
      <button className='btn btn-primary p-2 rounded-md m-2' onClick={()=>navigate(-1)}>
        <GrLinkPrevious /> Previous page
      </button>    

      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-8 text-white">
        <h2 className="text-3xl font-extrabold">Loan Application Form</h2>
        <p className="mt-2 text-blue-100 italic">Please provide accurate information for faster verification.</p>
      </div>

      <form onSubmit={handleSubmit(onsubmit)} className="p-8">

        {/* --- Read Only Section  --- */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-base-content mb-4 flex items-center gap-2">
            <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
            Loan Summary (Read Only)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-base-200 p-6 rounded-xl border border-dashed border-base-300">
            <div className="form-control">
              <label className="label text-xs font-bold uppercase text-base-content">User Email</label>
              <input type="text" value={user?.email} readOnly className="input input-bordered input-disabled" />
            </div>
            <div className="form-control">
              <label className="label text-xs font-bold uppercase text-base-content">Loan Title</label>
              <input type="text" value="Personal Startup Loan" readOnly className="input input-bordered input-disabled" />
            </div>
            <div className="form-control">
              <label className="label text-xs font-bold uppercase text-base-content">Interest Rate</label>
              <input type="text" value="5%" readOnly className="input input-bordered input-disabled" />
            </div>
          </div>
        </div>

        {/* --- User Input Section --- */}
        <h3 className="text-lg font-bold text-base-content mb-4 flex items-center gap-2">
          <span className="w-2 h-6 bg-green-500 rounded-full"></span>
          Personal & Financial Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label font-semibold text-base-content">First Name:</label>
            <input type="text" {...register('firstName',{required:true})} placeholder="First Name" className="input input-bordered hover:border-primary transition-all" />
          </div>

          <div className="form-control">
            <label className="label font-semibold text-base-content">Last Name :</label>
            <input type="text" {...register('lastName',{required:true})} placeholder="Last Name" className="input input-bordered hover:border-primary transition-all" />
          </div>

          <div className="form-control">
            <label className="label font-semibold text-base-content">Contact Number </label>
            <input type="tel" {...register('phone',{required:true})} placeholder="+880 1XXX XXXXXX" className="input input-bordered hover:border-primary transition-all" />
          </div>

          <div className="form-control">
            <label className="label font-semibold text-base-content">National ID / Passport Number </label>
            <input type="text" {...register('nid',{required:true})} placeholder="Enter ID number..." className="input input-bordered hover:border-primary transition-all" />
          </div>

          <div className="form-control">
            <label className="label font-semibold text-base-content">Income Source</label>
            <select {...register('income',{required:true})} className="select select-bordered hover:border-primary">
              <option disabled selected>Select Source</option>
              <option>Salary</option> 
              <option>Govt. Job</option>
              <option>Business</option>
              <option>Freelancing</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label font-semibold text-base-content">Monthly Income (taka)</label>
            <input type="number" {...register('monthlyIncome', { required: true })} placeholder="Enter amount" className="input input-bordered hover:border-primary transition-all" />
          </div>

          <div className="form-control">
            <label className="label font-semibold text-base-content">Requested Loan Amount (taka)</label>
            <input type="number" {...register('loanAmount', { required: true })} placeholder="Enter requested amount" className="input input-bordered hover:border-primary transition-all" />
          </div>

          <div className="form-control">
            <label className="label font-semibold text-base-content p-1">Address:</label>
            <input type="text" {...register('address', { required: true })} placeholder="thana,district,division" className="input input-bordered hover:border-primary transition-all" />
          </div>

          <div className="form-control col-span-full">
            <label className="label font-semibold text-base-content p-1">Reason for Loan</label>
            <textarea {...register('reason', { required: true })} className="textarea textarea-bordered h-24 hover:border-primary" placeholder="Describe why you need this loan..."></textarea>
          </div>

          <div className="form-control col-span-full">
            <label className="label font-semibold text-base-content p-1">Extra Notes (Optional)</label>
            <textarea {...register('extraNotes')} className="textarea textarea-bordered h-20 hover:border-primary" placeholder="Any additional information..."></textarea>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 flex flex-wrap gap-4 justify-between items-center p-4 bg-base-200 rounded-lg border border-base-300">
          <div className="text-sm text-base-content">
            <strong>Note:</strong> Your application will be submitted as <span className="badge badge-warning font-bold">Pending</span>.
          </div>
          <div className="text-sm text-base-content">
            <strong>Fee Status:</strong> <span className="badge badge-ghost font-bold">Unpaid</span>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-10">
          <button className="btn btn-primary w-full text-lg font-bold shadow-lg hover:shadow-primary/30 transition-all">
            Apply for Loan
          </button>
        </div>

      </form>
    </div>
  </div>
</div>


    );
};

export default LoanApplication;