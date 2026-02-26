import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link  } from 'react-router';

const AllLoans = () => { 
  
    
    const[loans,setLoans]=useState([])
    const [loading,setLoading]=useState(true) 

    useEffect(()=>{ 
      const fetchLoans=async()=>{
         try{
           setLoading(true)
           const response=await axios.get(`https://loan-link-server-nine.vercel.app/availableloan`)
           setLoans(response.data) 
           setLoading(false)
         } 
         catch(error){ 
          console.log(error.message)
             setLoading(false)
         }
      } 
      fetchLoans() 

    },[]) 

    if(loading){
        return <span className="loading loading-ball loading-xl "></span>
    }

    return (
        <div className='container mx-auto bg-base-100  text-center rounded-lg p-6'> 
        <h1 className='font-bold text-4xl p-2 mt-1'>Explore Our Flexible Microloans</h1> 
        <p className='font-semibold'>We offer a variety of microloans tailored to support small businesses, education, and emergency needs with minimal documentation and fast approval.</p> 
            
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 p-3">
                {loans.map((loan)=>(
        <div className="card bg-base-100 w-96 shadow-sm border border-base-400"key={loan._id}>
  <figure>
    <img className='w-[350px] h-[250px] p-2 rounded-2xl'
      src={loan.image}
      alt="not supported" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title "> 
      {loan.title}
      <div className=" text-green-800 bg-green-100   p-1 font-semibold rounded-md ml-4">Loan limit : {loan.maxLoanLimit/1000}k</div> 
    
    </h2> 
    <div className="flex justify-between mb-2 mt-2 p-2 items-center  px-4">
      <p className='text-xs font-medium bg-blue-100 text-blue-800 p-1 rounded-full'>Category:{loan.category}</p> 
       <p className='text-xs font-semibold bg-red-100 text-red-600 p-1 rounded-full'>Interest:{loan.interest}</p>
      </div>
      
    <p>{loan.shortDesc}</p>
    <div className="card-actions justify-center mt-3">
          
     <Link to={`/details/${loan._id}`}> 
     
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