import React from 'react';
import Swal from 'sweetalert2';

const ManageLoan = () => { 

 const openModal=()=>{
     document.getElementById('my_modal_5').showModal()
 }



    return (
        <div className='container mx-auto p-3 rounded-md'>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <p>#</p>
        </th>
        <th>Image</th>
        <th>Title</th>
        <th>Interest</th>
        <th>Category</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th> <p>#</p> </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
        <td>
          Title here
          <br />
        
        </td>
        <td>5%</td>
        <th>
          Category here
        </th> 
        <th>
            <div className="flex item-center gap-2 "> 
                 <button className='btn btn-primary rounded-xl hover:bg-green-500' onClick={openModal}>Update</button>
                <button className='btn btn-primary rounded-xl hover:btn-secondary ' onClick={()=>{
                    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
                }}>Delete</button>
            </div>
        </th>
      </tr>
     
   
    
    
    </tbody>
   

  </table> 

                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
           <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">Press ESC key or click the button below to close</p>
               <div className="modal-action">
              <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</div>
        </div>
    );
};

export default ManageLoan;