import React from 'react';
import { GrLinkPrevious } from 'react-icons/gr';
import { useLoaderData, useNavigate } from 'react-router';

const ViewDetails = () => { 
    const navigate=useNavigate()

    const card = useLoaderData(); 
    console.log(card)
  
  return ( 
   

    <div className="container mx-auto mt-6 max-w-5xl bg-gray-50 rounded-lg p-6 "> 
      
      
  <button onClick={()=>navigate(-1)} className='mb-4 inline-flex items-center gap-2 bg-slate-200 text-slate-800 px-4 py-2 rounded-md hover:bg-slate-300 transition font-semibold '> <GrLinkPrevious /> Back </button>
    
   
      
      <img
        src={card.image}
        alt="loan"
        className="w-full h-[350px] object-cover rounded-md"
      />

  
      <h1 className="text-3xl font-bold mt-6">
        {card.title}
      </h1>

   
      <div className="flex gap-4 mt-3">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          {card.category}
        </span>

        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
          Interest: {card.interest}%
        </span>
      </div>

    
      <p className="mt-5 text-gray-700 leading-relaxed">
        {card.description}
      </p>

      <div className="mt-6 space-y-2">
        <p className="font-semibold text-gray-800">
          Max Loan Limit: {card.maxLoanLimit / 1000}k
        </p>

        <p className="font-semibold text-gray-800">
          EMI Plans:
          <span className="ml-2 text-gray-600">
            {card.emiPlans?.join(', ')} months
          </span>
        </p>
      </div>

  
      <div className="mt-8">
        <button className="btn btn-primary w-full">
          Apply Now
        </button>
      </div>

    </div>
  );
};

export default ViewDetails;
