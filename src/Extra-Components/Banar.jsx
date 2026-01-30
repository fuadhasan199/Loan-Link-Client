import React from 'react';
import { VscGitStashApply } from 'react-icons/vsc';
import { useNavigate } from 'react-router';

const Banar = () => { 
  const navigate=useNavigate()
    return (
        <div className='container mx-auto'>
 <div className="hero bg-base-200 p-22 mt-2 rounded-xl" 
     style={{
    backgroundImage: "url('https://i.ibb.co.com/HfHFvvqK/loan.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
  <div className="hero-content text-center text-white">
    <div className="max-w-md">
      <h1 className="text-4xl font-bold p-2">LoanLink: Fast-track Your Microloan Journey</h1>
      <p className="py-6   mb-2">
       Streamline the entire microloan lifecycle—from borrower application and manager review to final approval and tracking—in one secure and transparent platform. Built for small financial institutions, NGOs, and microloan providers.
      </p>
      <button onClick={()=>navigate('/apply-loan')} className="btn btn-primary"><VscGitStashApply />  Apply For Loan</button> 
    
    </div>
  </div>
</div>
        </div>
    );
};

export default Banar;