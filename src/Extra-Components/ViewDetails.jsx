import React from 'react';
import { useLoaderData } from 'react-router';

const ViewDetails = () => { 
    const cards=useLoaderData() 
    console.log(cards)
    return (
        <div className='container mx-auto rounded-md p-6 bg-gray-100 mt-1'> 
            this is details page
        </div>
    );
};

export default ViewDetails;