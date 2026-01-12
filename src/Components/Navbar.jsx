import React from 'react'; 
import logo from "../../public/Loan-Link-Logo.jpg"
import { Link, NavLink } from 'react-router';
import UseAuth from '../Auth/UseAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';

const Navbar = () => { 
  const {user}=UseAuth() 
  const handleSignOut=()=>{
     signOut(auth) 
     .then(res=>console.log(res.user))
     .catch(err=>console.log(err.message))
  } 

    const LogedUser=(
        <>
         <li><NavLink to={'/'} className={({isActive})=>isActive ? "text-green-600 font-bold":''} >Home</NavLink></li>
      <li>
          <NavLink to={'/all-loans'} className={({isActive})=>isActive ? "text-green-600 font-bold":''}>All Loans</NavLink>
      </li> 

       <li>
          <NavLink to={'/dashboard'} className={({isActive})=>isActive ? "text-green-600 font-bold":''}>Dashboard</NavLink>
      </li> 

         <li>
          <NavLink to={'/use-Avatar'} className={({isActive})=>isActive ? "text-green-600 font-bold":''}>User Avatar</NavLink>
      </li> 
        
        
        
        
        </>
    ) 


    const GuestUser=(
        <>
         <li><NavLink to={'/'} className={({isActive})=>isActive ? "text-green-600 font-bold":''} >Home</NavLink></li>
        
         <li> 
          <NavLink to={'/all-loans'} className={({isActive})=>isActive ? "text-green-600 font-bold":''}>All Loans</NavLink>

         </li> 

         <li>
          <NavLink to={'/about'} className={({isActive})=>isActive ? "text-green-600 font-bold":''}>About us</NavLink>

         </li> 

         <li>
          <NavLink to={'/contact'} className={({isActive})=>isActive ? "text-green-600 font-bold":''}>Contact</NavLink> 

         </li> 

         <li>
          <NavLink to={'/login'} className={({isActive})=>isActive ? "text-green-600 font-bold":''}>Login</NavLink>

         </li>  


            <li>
          <NavLink to={'/register'} className={({isActive})=>isActive ? "text-green-600 font-bold":''}>Register</NavLink>

         </li> 
        
        
        
        
        </>
    )









    return ( 
     <div className="navbar bg-base-100 shadow-sm container mx-auto rounded-md ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
        <li> 
          
         
          <ul className="p-2">
           {user ?LogedUser : GuestUser}
          </ul>
        </li> 
      
      </ul>
    </div>
      <img src={logo} alt="" className='w-[65px] rounded-xl' />
  </div>
  <div className="navbar-center hidden lg:flex"> 
    <ul className="menu menu-horizontal px-1">
      
     {user ?LogedUser : GuestUser}

       
    </ul>
  </div>
  <div className="navbar-end gap-5 items-center"> 
     <div className=" ml-5 ">
      <label className="flex cursor-pointer gap-2">
  
  <input type="checkbox" value="synthwave" className="toggle theme-controller" />
  
</label>
     </div>
    {user ?<a className='btn btn-primary text-white rounded-md' onClick={handleSignOut}>LogOut</a>:<Link to={'/login'} className='btn btn-primary text-white rounded-md'>LogIn</Link>}
  </div>
</div>
    );
};

export default Navbar;