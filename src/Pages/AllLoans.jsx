import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link  } from 'react-router';

const AllLoans = () => { 
  
    
    const[loans,setLoans]=useState([])
    const [loading,setLoading]=useState(true) 

    useEffect(()=>{ 
      const fetchLoans=async()=>{
         try{
          const cachedData=localStorage.getItem('allloans') 
          if(cachedData){
             setLoans(JSON.parse(cachedData))
             setLoading(false) 
             return
          } 
          setLoading(true) 
          const res=await axios.get(`https://loan-link-server-nine.vercel.app/availableloan`)
          .then(res=>{
             setLoans(res.data)
             localStorage.setItem('allloans',JSON.stringify(res.data)) 
             setLoading(false)
          })
         } 
         catch(error){
           console.log(error.message)
           setLoading(false)
         }
       
      } 
      fetchLoans() 

    },[]) 

  if(loading){ 
     return <div className="flex justify-center items-center min-h-screen"> 
           <span className="loading loading-dots loading-xl"></span>
    </div>
     
   }

    return (
        <div className='container mx-auto bg-base-100  text-center rounded-lg p-6'> 
        <h1 className='font-bold text-4xl p-2 mt-1'>Explore Our Flexible Microloans</h1> 
        <p className='font-semibold'>We offer a variety of microloans tailored to support small businesses, education, and emergency needs with minimal documentation and fast approval.</p> 
            


   {/*  Search  */} 

   <label className="input mt-5 justify-start  max-w-sm flex p-2">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Loan Search Here" />
</label>







    {/* card */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 p-3"> 



      {loans.map((loan)=>(
        <div className="card bg-base-100 w-full shadow-sm border border-base-400"key={loan._id}>
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
     <div className="flex justify-between mb-2">
      <div className="text-sm font-semibold text-gray-600"> Category: {loan.category}</div> 
       <div className="text-sm font-semibold text-gray-600">Interest: {loan.interest} months</div>
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