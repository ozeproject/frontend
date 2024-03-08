import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { jwtDecode } from "jwt-decode";

const GuestChkout = () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;

    return (
        <div className='flex '>
        <div className=" w-4/6">
        
            <div className=' p-10 flex'>
                
                <div className='w-7/12 mx-48'>
                    <div className='flex justify-between text-2xl'>
                        <div className=' '>GUEST CHECKOUT</div>
                    </div>
                    <div className='text-lg mt-4'>
                        <div className=' '>NAME *</div>
                        <div className=' '><input className='border border-[#B9B9B9] w-3/6 rounded h-8 placeholder:pl-3 mt-1 bg-[#F2EEE3]' type="text" name="Lastname" placeholder='First name-Lastname' /></div>
                    </div>
                    <div className=' mt-2 text-lg'>
                        <div className=' '>EMAIL *</div>
                        <div className=' '><input className='border border-[#B9B9B9] w-3/6 rounded h-8 placeholder:pl-3 mt-1 bg-[#F2EEE3]' type="text" name="Email" placeholder='Enter your email' /></div>
                    </div>
                    <div className='mt-2  text-lg'>
                        <div className=' '>ADDRESS *</div>
                        <div className=' '><textarea className='border border-[#B9B9B9] w-3/6  rounded h-28 placeholder:pl-3 mt-1 bg-[#F2EEE3]'  name="Address" placeholder='Address' /></div>
                    </div>
                    <div className=' mt-2  text-lg'>
                        <div className=' '>PHONE *</div>
                        <div className=' '><input className='border border-[#B9B9B9] w-3/6 rounded h-8 placeholder:pl-3 mt-1 bg-[#F2EEE3]' type="text" name="Email" placeholder='Enter your email' /></div>
                    </div>
                    <div className='mt-5'>
                        <button className='w-2/12 rounded-lg p-2 bg-[#3B3B3B] text-[#FAF9F6] border border-gray-600 text-center' type="button">NEXT</button>
                    </div>
                </div>
            </div>
           
        </div>
        
        <div className="border-l-2  border-gray-500 w-5/12 ">
            <div className='border-b-2  border-gray-500 p-16'>
            <div className='flex justify-between text-lg '>
                <div className=' '>YOUR ORDER SUMMARY</div>
                <div className=' '>{'[ '}00{' ]'}</div>
            </div>
            <div className='flex justify-between text-base mt-4'>
                <div className=' '>SUBTOTAL</div>
                <div className=' '>฿</div>
            </div>
            <div className='flex justify-between text-base'>
                <div className=' '>SHIPPING</div>
                <div className=' '>฿0</div>
            </div>
            <div className='mt-4   flex justify-between text-2xl'>
                <div className=' '>TOTAL</div>
                <div className=' '>฿0</div>
            </div>

           </div>
        </div>
    </div>
    );
};

export default GuestChkout;
