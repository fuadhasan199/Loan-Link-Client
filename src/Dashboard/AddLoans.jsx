import React from 'react';

const AddLoans = () => {
    return (
        <div className='container mx-auto bg-gray-200 rounded-md mt-1 p-1  '> 
       <h2 className='mt-5 text-center text-2xl font-bold'>Add Loans</h2> 

        <form  className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <div className="form-control">
                        <label className="label">Loan Title</label>
                        <input type="text" name="title" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">Category</label>
                        <select name="category" className="select select-bordered">
                            <option value="Personal">Personal</option>
                            <option value="Business">Business</option>
                            <option value="Education">Education</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">Interest Rate (%)</label>
                        <input type="number" step="0.01" name="interestRate" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">Max Loan Limit</label>
                        <input type="number" name="maxLimit" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">EMI Plans</label>
                        <input type="text" name="emiPlans" placeholder="e.g. 6, 12, 24 months" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">Image URL</label>
                        <input type="text" name="image" className="input input-bordered" required />
                    </div>

                    <div className="form-control md:col-span-2">
                        <label className="label">Required Documents</label>
                        <input type="text" name="documents" placeholder="NID, Passport, etc." className="input input-bordered" required />
                    </div>

                    <div className="form-control md:col-span-2">
                        <label className="label">Description</label>
                        <textarea name="description" className="textarea textarea-bordered h-24" required></textarea>
                    </div>

                    <div className="form-control w-fit">
                        <label className="label cursor-pointer gap-4">
                            <span className="label-text font-bold">Show on Home</span>
                            <input type="checkbox" name="showOnHome" className="toggle toggle-primary" />
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary md:col-span-2 mt-4">Add Loan</button>
                </form>
     





            
        </div> 
     );
};

export default AddLoans;