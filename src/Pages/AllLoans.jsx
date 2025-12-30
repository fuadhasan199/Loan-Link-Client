import React from 'react';
import { useLoaderData } from 'react-router';

const AllLoans = () => { 
    const cards=useLoaderData()
    
    return (
        <div className='container mx-auto bg-gray-100 text-center rounded-lg p-6'> 
        <h1 className='font-bold text-4xl p-2 mt-1'>Explore Our Flexible Microloans</h1> 
        <p className='font-semibold'>We offer a variety of microloans tailored to support small businesses, education, and emergency needs with minimal documentation and fast approval.</p> 
            
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 p-3">
                {cards.map((card)=>(
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img className='w-[350px] h-[250px] p-2 rounded-xl'
      src={card.image}
      alt="not supported" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title "> 
      {card.title}
      <div className=" text-green-800 bg-green-100   p-1 font-semibold rounded-md ml-4">Loan limit : {card.maxLoanLimit/1000}k</div>
    </h2>
    <p>{card.shortDesc}</p>
    <div className="card-actions justify-center mt-3">
      
      <div className="btn btn-primary">View Details</div>
    </div>
  </div>
</div>
    ))
        
    } 



       </div>




            
        </div>
    );
};

export default AllLoans;