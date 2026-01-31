import React, { useEffect, useState } from 'react';
import { IoMdHome } from 'react-icons/io';
import { SiUnacademy } from 'react-icons/si';
import { Link,Outlet } from 'react-router';
import UseAuth from '../Auth/UseAuth';
import axios from 'axios';
import { ImProfile } from 'react-icons/im';
import { MdFormatListBulletedAdd, MdLibraryAdd, MdManageAccounts } from 'react-icons/md';
import { RiPassPendingFill } from 'react-icons/ri';

const Dashboard = () => { 

  const {user}=UseAuth()
  const [role,setRole]=useState(null) 
  const [loading ,setLoading]=useState(true) 
  const [status,setStatus]=useState(null)


   useEffect(()=>{
   
    if(user?.email){ 
       setLoading(true)
       axios.get(`http://localhost:3000/users/role/${user.email}`) 
       .then(res=>
        {setRole(res.data.role)
        setStatus(res.data.status)
        setLoading(false)
       }) 
       .catch(()=>{ 
        setLoading(false)
       })
    } 
   
   },[user?.email]) 
   
   if(role==='manager' && status==='pending'){
       return (
          <div className="text-center mt-5 min-h-screen font-bold p-5"> 
          <h2 className='font-bold text-red-500 text-center text-4xl'>Access Denied !  </h2> 
           
           <p className='mt-5  '>You are not authorized to access this page , waiting for admin aprove</p>  
            <Link to={'/'} className='btn btn-primary mt-5'>Go to Home</Link>   
          </div> 
         
       ) 

   }

   if(loading){ 
     return <div className="flex justify-center items-center min-h-screen"> 
           <span className="loading loading-dots loading-xl"></span>
    </div>
     
   }




    return (
      <div className="drawer lg:drawer-open container mx-auto rounded-md shadow-lg mt-3 ">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Navbar */}
    <nav className="navbar w-full bg-base-300">
      <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost"> 
        {/* Sidebar toggle icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
      </label>
      <div className="px-4">{role} Dashboard</div>
    </nav>
    {/* Page content here */}
    <Outlet></Outlet>
  </div>

  <div className="drawer-side is-drawer-close:overflow-visible">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
      {/* Sidebar content here */}
      <ul className="menu w-full grow">
        {/* List item */}
        <li>
          <Link to={'/'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex gap-2" data-tip="Homepage">
            {/* Home icon */}
          <IoMdHome className='items-center' /> 
        <span className="is-drawer-close:hidden"> Home</span>
           

          </Link> 

        </li>

        {/* my profile item */}
        <li>
            <Link to={'/dashboard/profile'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex gap-2 " data-tip="my-profile">
            {/* Settings icon */} <ImProfile className='items-center' />
            <span className="is-drawer-close:hidden"> My Profile</span>
            
          </Link> 

         


        </li> 

         <div className="divider"></div> 
         
         {/* Borrower */}
         {role==='borrower' && (
                
            <li>
            <Link to={'/dashboard/my-loan'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex gap-2 " data-tip="my-loan">
            {/* Settings icon */} < SiUnacademy className='items-center' />
            <span className="is-drawer-close:hidden">  My Loan</span>
            </Link> 
            </li> 


         )} 


       {/* Manager  */} 

       { role==='manager' && ( 

        <>
             <li>
            <Link to={'/dashboard/add-loan'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex gap-2 " data-tip="add-loan">
             <MdLibraryAdd className='items-center' />
            <span className="is-drawer-close:hidden"> Add Loan</span>
            </Link> 
            </li>  
              

               <li>
            <Link to={'/dashboard/manage-loan'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex gap-2 " data-tip="manage-loan">
             <MdManageAccounts className='items-center' />
            <span className="is-drawer-close:hidden"> Manage Loan</span>
            </Link> 
            </li>  



               <li>
            <Link to={'/dashboard/pending-loan'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex gap-2 " data-tip="pending-loan">
             <RiPassPendingFill className='items-center' />
            <span className="is-drawer-close:hidden"> Pending Loan</span>
            </Link> 
            </li>   
        
        
        
        </> 

                  )}  
                  
                  {/*  admin */} 

               {role==='admin' && ( 

                <>
                    <li>
            <Link to={'/dashboard/manage-user'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex gap-2 " data-tip="manage-user">
             <MdManageAccounts className='items-center' />
            <span className="is-drawer-close:hidden"> Manage User</span>
            </Link> 
            </li>  



            <li>
            <Link to={'/dashboard/all-system-loan'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex gap-2 " data-tip="all-system-loan">
            <MdFormatListBulletedAdd className='items-center' />
            <span className="is-drawer-close:hidden"> All System Loan</span>
            </Link> 
            </li> 
                
          
                
                
                </>
                 
               )}   









      </ul>
    </div>
  </div>
</div>
    );
};

export default Dashboard;