import React from 'react';
import { VscGitStashApply } from 'react-icons/vsc';
import { useNavigate } from 'react-router';
import { motion } from "framer-motion";

const Banar = () => { 
  const navigate = useNavigate();

  return (
    <div className='container mx-auto'>
      <div
        className="hero relative mt-1 rounded-md shadow-lg overflow-hidden"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/HfHFvvqK/loan.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="hero-content relative text-center text-white py-20">
          <div className="max-w-md">

            {/* Animated Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold p-2"
            >
              LoanLink: Fast-track Your Microloan Journey
            </motion.h1>

            {/* Animated Paragraph */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="py-6 mb-2"
            >
              Streamline the entire microloan lifecycle—from borrower application 
              and manager review to final approval and tracking—in one secure and 
              transparent platform. Built for small financial institutions, NGOs, 
              and microloan providers.
            </motion.p>

            {/* Animated Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/apply-loan')}
              className="btn btn-primary shadow-lg flex items-center gap-2 justify-center mx-auto"
            >
              <VscGitStashApply />
              Apply For Loan
            </motion.button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banar;