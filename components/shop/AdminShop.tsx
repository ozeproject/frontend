// components/Navbar.js
import React from 'react';


const AdminShop = () => {
  return (
    <div>
        <div className="border-b-2 border-gray-500">
            <div className="lay2 p-12">
                <div className="text-center text-3xl">ADMIN</div>
                <div className='text-center mt-4'><button className='w-1/12 rounded-lg p-2 bg-slate-50 border border-gray-600 text-center'type="button">CREATE ITEM</button> </div>
            </div>
        </div>
    </div>
  );
};

export default AdminShop;