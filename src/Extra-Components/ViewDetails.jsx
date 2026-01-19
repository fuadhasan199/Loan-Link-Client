import React from 'react';
import { GrLinkPrevious } from 'react-icons/gr';
import { useLoaderData, useNavigate } from 'react-router';

const ViewDetails = () => { 
    const navigate=useNavigate()

    const card = useLoaderData(); 
    console.log(card)
  
  return ( 
   

    <div className="container mx-auto mt-6 max-w-5xl bg-base-100 border border-base-300 min-h-screen rounded-lg p-6 text-base-content "> 
      
      
  <button onClick={()=>navigate(-1)} className='mb-4 inline-flex items-center gap-2 bg-slate-200 text-slate-800 px-4 py-2 rounded-md hover:bg-slate-300 transition font-semibold '> <GrLinkPrevious /> Back </button>
    
   
      
      <img
        src={card.image}
        alt="loan"
        className="w-full h-[350px] object-cover rounded-md"
      />

  
      <h1 className="text-3xl font-bold mt-6 text-base-content">
        {card.title}
      </h1>

   
      <div className="flex gap-4 mt-3">
        <span className="bg-base-200 border text-base-content px-3 py-1 rounded-full text-sm font-medium">
          {card.category}
        </span>

        <span className="bg-base-100 border text-base-content px-3 py-1 rounded-full text-sm font-semibold">
          Interest: {card.interest}%
        </span>
      </div>

    
      <p className="mt-5 text-base-content leading-relaxed">
        {card.description}
      </p>

      <div className="mt-6 space-y-2">
        <p className="font-semibold text-base-content">
          Max Loan Limit: {card.maxLoanLimit / 1000}k
        </p>

        <p className="font-semibold text-base-content">
          EMI Plans:
          <span className="ml-2 text-base-content font-normal">
            {card.emiPlans?.join(', ')} months
          </span>
        </p>
      </div>

  
      <div className="mt-8">
        <button onClick={()=>navigate('/apply-loan',{state:{card:card}})} className="btn btn-primary w-full">
          Apply Now
        </button>
      </div>

    </div>
  );
};

export default ViewDetails;
