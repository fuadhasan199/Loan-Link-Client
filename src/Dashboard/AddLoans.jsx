import React from 'react';
import UseAuth from '../Auth/UseAuth';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddLoans = () => {
   const {user}=UseAuth() 
     const { register, handleSubmit ,reset} = useForm() 

      const onsubmit=async(data)=>{ 
      
      const loanData={
         ...data,
        title: data.title,
         category: data.category,
        interestRate: Number(data.interest),
         maxLoanLimit: Number(data.maxLoanLimit),
        emiPlans: data.emiPlans.split(',').map(e => e.trim()),
        image: data.image,
        shortDesc: data.shortDesc,
        description: data.description,
       createdAt: new Date().toLocaleDateString(),
       createdBy: user?.email

      } 
      const res=await axios.post(`http://localhost:3000/availableloan`,loanData) 

      if(res.data.insertedId){
         
        Swal.fire({
           title: "Success",
           icon: "success",
        confirmButtonText:"OK"
});
      } 
           reset() 
         








    
      }


    return (
        <div className='container mx-auto bg-base-100 border border-base-300 text-base-content rounded-md mt-1 p-3 min-h-screen  '> 
       <h2 className='mt-5 text-center text-2xl font-bold'>Add Loans</h2> 

        <form onSubmit={handleSubmit(onsubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base-content">
                    
                    <div className="form-control w-fit">
                        <label className="label text-base-content">Loan Title</label>
                        <input type="text" {...register('title',({required:true}))}  className="input input-bordered"  />
                    </div>

                    <div className="form-control text-base-content w-fit ">
                        <label className="label text-base-content">Category :</label>
                        <select name="category" {...register('category')} className="select select-bordered">
                            <option value="Personal">Personal</option>
                            <option value="Business">Business</option>
                            <option value="Education">Education</option>
                        </select>
                    </div>

                    <div className="form-control text-base-content w-fit">
                        <label className="label text-base-content">Interest Rate (%)</label>
                        <input type="number"{...register('interest',({required:true}))} className="input input-bordered"  />
                    </div>

                    <div className="form-control w-fit text-base-content">
                        <label className="label text-base-content">Max Loan Limit</label>
                        <input type="number"{...register('maxLoanLimit',({required:true}))}  className="input input-bordered"  />
                    </div>

                    <div className="form-control w-fit text-base-content">
                        <label className="label text-base-content">EMI Plans</label>
                        <input type="text" {...register('emiPlans',({required:true}))}  placeholder="e.g. 6, 12, 24 months" className="input input-bordered"  />
                    </div>

                    <div className="form-control w-fit text-base-content">
                        <label className="label text-base-content">Image URL</label>
                        <input type="text"{...register('image',({required:true}))} name="image" className="input input-bordered"  />
                    </div>

                    <div className="form-control md:col-span-2 w-fit">
                        <label className="label text-base-content">Short Description</label>
                        <input type="text"{...register('shortDesc',({required:true}))} name="shortDesc"  className="input input-bordered"  />
                    </div>

                    <div className="form-control md:col-span-2 w-fit">
                        <label className="label text-base-content">Description</label>
                        <textarea name="description" className="textarea textarea-bordered h-24" {...register('description',({required:true}))} placeholder='Description'></textarea>
                    </div>

                    <div className="form-control w-fit">
                        <label className="label cursor-pointer gap-4">
                           
                        </label>
                    </div>

                    <button type='submit' className="btn btn-primary md:col-span-2 mt-4">Add Loan</button>
                </form>
     





            
        </div> 
     );
};

export default AddLoans;