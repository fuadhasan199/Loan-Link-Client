import React, { useEffect, useState } from 'react';
import Banar from '../Extra-Components/Banar';
import { Link } from 'react-router';
import HowitWork from '../Extra-Components/HowitWork';
import Feedback from '../Extra-Components/Feedback';
import axios from 'axios';


const Home = () => { 
   
const [cards,setcards]=useState([]) 

 useEffect(()=>{
    axios.get(`https://loan-link-server-nine.vercel.app/home-loans`)
    .then(res=>{
       setcards(res.data)
    })
 },[])
    
    return (
        <div className='container mx-auto '>
      <Banar></Banar> 

  <div className="mt-5">
    <h1 className='text-2xl font-bold p-2'>Available Loans : {cards.length}</h1> 

    <div className="grid grid-cols-1 md:grid-cols-3  gap-4 mt-3"> 

    {cards.map((card)=>(
        <div className="card bg-base-100 w-96 shadow-sm border border-base-400"key={card._id}>
  <figure>
    <img className='w-[350px] h-[250px] p-2 rounded-2xl'
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
      
         <Link to={`/details/${card._id}`}> 
     
       <button className="btn btn-primary">View Details</button>

     </Link>
    </div>
  </div>
</div>
    ))
        
    } 
    
    <HowitWork></HowitWork> 

  






    



    </div> 
    
     <Feedback></Feedback> 

     <div className="text-center mt-10">
 
       <h1 className='text-center font-bold text-2xl'>Why Choose Us</h1>  
       <hr className='mt-5'/>  

       <div className="container mx-auto"> 
        <ul className='space-y-6'> 


          <li> 1️⃣ Fast & Transparent Process 

We believe in doing business the right way. Our loan application process is simple, fully transparent, and free from hidden terms. You always know where you stand—no last-minute surprises.</li> 

<li>2️⃣ Quick Approval & Disbursement

Time matters. That’s why our streamlined verification system ensures faster approvals and prompt fund disbursement, so you can move forward without unnecessary delays.</li> 

<li>3️⃣ Customer-First Approach

We don’t just process applications—we support people. Our dedicated support team is always available to guide you, answer questions, and ensure a smooth experience from start to finish. </li> 

<li>4️⃣ Flexible Loan Options

Every financial need is different. We offer a range of loan products with flexible terms, designed to match your goals—whether it’s education, business, or personal growth.</li> 

<li>5️⃣ Secure & Reliable Platform

Trust is earned. Our platform uses secure systems and verified processes to protect your information and ensure every transaction is handled with care and responsibility.</li>

<li>6️⃣ Proven Track Record

We value long-term relationships over quick wins. Thousands of satisfied customers and consistent positive feedback reflect our commitment to reliability and service excellence.</li>



        </ul>
 


       </div>

      


     </div>



  </div>

 </div>
    );
};

export default Home;