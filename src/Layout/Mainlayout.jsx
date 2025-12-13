import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { Toaster } from 'react-hot-toast';

const Mainlayout = () => {
    return (
        <div className='flex flex-col min-h-screen  '> 
         <div className="mt-2">
          <Navbar></Navbar> 
         </div>
     
          <div className="flex-1 mb-20 ">
            <Outlet></Outlet>
          </div> 
          <Footer></Footer> 
            <Toaster
  position="top-center"
  reverseOrder={false}
/>
        </div>
    );
};

export default Mainlayout;