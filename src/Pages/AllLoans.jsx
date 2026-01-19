import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllLoans = () => { 
    const cards=useLoaderData() 
    
    return (
        <div className='container mx-auto bg-base-100 border-base-300 text-center rounded-lg p-6'> 
        <h1 className='font-bold text-4xl p-2 mt-1'>Explore Our Flexible Microloans</h1> 
        <p className='font-semibold'>We offer a variety of microloans tailored to support small businesses, education, and emergency needs with minimal documentation and fast approval.</p> 
            
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 p-3">
                {cards.map((card)=>(
        <div className="max-w-md mx-auto mt-10 p-6 rounded-lg bg-base-200 border border-base-300">
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
    <div className="flex justify-between mb-2 mt-2 p-2 items-center  px-4">
      <p className='text-xs font-medium bg-blue-100 text-blue-800 p-1 rounded-full'>Category:{card.category}</p> 
       <p className='text-xs font-semibold bg-red-100 text-red-600 p-1 rounded-full'>Interest:{card.interest}</p>
      </div>
      
    <p>{card.shortDesc}</p>
    <div className="card-actions justify-center mt-3">
          
     <Link to={`/details/${card._id}`}> 
     
       <button className="btn btn-primary">View Details</button>

     </Link> 


          
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