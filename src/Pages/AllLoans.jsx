import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link  } from 'react-router';

const AllLoans = () => { 
  
    
    const[loans,setLoans]=useState([])
    const [loading,setLoading]=useState(true) 
    const [searchTerm,setSearchTerm]=useState('')
    const [sort,setSort]=useState("") 
    const [currentPage,setCurrentPage]=useState(1)
    const [totalLoans,setTotalloans]=useState(0) 

    const limit=9

useEffect(() => {
    const fetchLoans = async () => {
       
        if (!searchTerm && !sort && currentPage === 1) {
            const cachedData = localStorage.getItem('allloans')
            if (cachedData) {
                const parsedData = JSON.parse(cachedData)
               
                setLoans(Array.isArray(parsedData) ? parsedData : [])
                setLoading(false)
               
            }
        }

        try {
            const res = await axios.get(`https://loan-link-server-nine.vercel.app/availableloan?search=${searchTerm}&sort=${sort}&page=${currentPage}&limit=${limit}`);
            
           
            const fetchedLoans = res.data.result || []
            setLoans(fetchedLoans);
            setTotalloans(res.data.totalLoans || 0)

            
            if (!searchTerm && !sort && currentPage === 1) {
                localStorage.setItem('allloans', JSON.stringify(fetchedLoans))
            }
        } catch (error) {
            console.log("Error fetching data:", error)
            setLoans([])
        } finally {
            setLoading(false)
        }
    };

    fetchLoans();
}, [searchTerm, sort, currentPage])

  if(loading){ 
     return <div className="flex justify-center items-center min-h-screen"> 
           <span className="loading loading-dots loading-xl"></span>
    </div>
     
   }

    return (
        <div className='container mx-auto bg-base-100  text-center rounded-lg p-6'> 
        <h1 className='font-bold text-4xl p-2 mt-1'>Explore Our Flexible Microloans</h1> 
        <p className='font-semibold'>We offer a variety of microloans tailored to support small businesses, education, and emergency needs with minimal documentation and fast approval.</p> 
            


   {/*  Search ans sort */} 

    <div className="flex justify-between  gap-3"> 
      {/* search */}
   <label className="input mt-3">
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
  <input type="search" required placeholder="Loan Search Here" onChange={(e)=>setSearchTerm(e.target.value)} />
</label> 

 {/* sort */}
   
  <fieldset className="fieldset mt-2">
    
  <select defaultValue="Pick a browser" className="select"  onChange={(e)=>setSort(e.target.value)}>
    
   <option value="">Sort By (Default)</option>
    <option value="asc">Low to High</option>
    <option value="desc">High to Low</option>
  </select>
 
</fieldset>

      
      </div> 


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
       <div className="text-sm font-semibold text-gray-600">Interest: {loan.interest} </div>
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

       {/* Pagination Controls */}
<div className="flex justify-center items-center gap-4 mt-8 mb-10">
    <button 
        className="btn btn-outline btn-primary"
        disabled={currentPage === 1} // ১ নম্বর পেজে থাকলে Previous বাটন অফ থাকবে
        onClick={() => setCurrentPage(currentPage - 1)}
    >
        « Previous
    </button>

    <div className="font-bold">
        Page {currentPage} of {Math.ceil(totalLoans / limit)}
    </div>

    <button 
        className="btn btn-outline btn-primary"
        disabled={currentPage >= Math.ceil(totalLoans / limit)} // শেষ পেজে থাকলে Next বাটন অফ থাকবে
        onClick={() => setCurrentPage(currentPage + 1)}
    >
        Next »
    </button>
</div>




            
        </div>
    );
};

export default AllLoans;