import React from 'react';
import Link from 'next/link';


const AdminShop = () => {
  return (
    <div>
        <div className="border-b-2 border-gray-500">
            <div className="lay2 p-12">
                <div className="text-center text-3xl">ADMIN</div>
                <div className='text-center mt-4'><button className='w-1/12 rounded-lg p-2 bordertext-center border-[#3B3B3B] bg-[#3B3B3B] hover:bg-black text-[#FAF9F6]'type="button"><Link href={`${process.env.NEXT_PUBLIC_BASEPATH}/shop/create/`}>CREATE ITEM</Link></button> </div>
            </div>
        </div>
    </div>
  );
};

export default AdminShop;
