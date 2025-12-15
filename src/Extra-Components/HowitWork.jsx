import React from 'react';

const HowitWork = () => {
    return (
 

<div className="mt-12">
  <h2 className="text-2xl font-bold text-center mb-6">
    How It Works
  </h2>

  <div className="overflow-x-auto w-full max-w-6xl mx-auto ">
    <table className="table table-zebra table-fixed w-full">
      <thead>
        <tr>
          <th className="w-1/4">Section Title</th>
          <th className="w-1/4">Application Work</th>
          <th className="w-1/2 text-center">Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th>Step 1: Application</th>
          <td>Submit Your Request Online</td>
          <td>
            Fill out our quick and secure online application form with your personal and financial details.
          </td>
        </tr>

        <tr>
          <th>Step 2: Verification</th>
          <td>Document Verification & Assessment</td>
          <td>
            Our team reviews your uploaded documents, assesses your eligibility, and checks your credit profile.
          </td>
        </tr>

        <tr>
          <th>Step 3: Approval</th>
          <td>Fast Approval & Final Agreement</td>
          <td>
            Upon successful verification, we provide final approval and digital agreement.
          </td>
        </tr>

        <tr>
          <th>Step 4: Disbursement</th>
          <td>Receive Your Funds</td>
          <td>
            The approved loan amount is transferred directly into your bank account.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


        

        
    );
};

export default HowitWork;