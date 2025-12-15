import React from 'react';
import Banar from '../Extra-Components/Banar';
import { useLoaderData } from 'react-router';
import HowitWork from '../Extra-Components/HowitWork';
import Feedback from '../Extra-Components/Feedback';


const Home = () => { 
   
 const loans=useLoaderData()
 console.log(loans)

    
    return (
        <div className='container mx-auto '>
      <Banar></Banar> 

  <div className="mt-5">
    <h1 className='text-2xl font-bold p-2'>Available Loans : {loans.length}</h1> 

    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3"> 

    {loans.map((loan)=>(
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img className='w-[350px] h-[250px]'
      src={loan.image}
      alt="not supported" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title "> 
      {loan.title}
      <div className=" text-green-800 bg-green-100   p-1 font-semibold rounded-md ml-4">Loan limit : {loan.maxLoanLimit/1000}k</div>
    </h2>
    <p>{loan.shortDesc}</p>
    <div className="card-actions justify-center mt-3">
      
      <div className="btn btn-primary">View Details</div>
    </div>
  </div>
</div>
    ))
        
    } 
    
    <HowitWork></HowitWork> 

  






    



    </div> 
    
     <Feedback></Feedback>



  </div>

 </div>
    );
};

export default Home;