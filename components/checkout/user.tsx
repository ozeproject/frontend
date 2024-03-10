import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { jwtDecode } from "jwt-decode";
import Fail from '../../components/validation/PaymentFail';
import Success from '../../components/validation/PaymetnSuccess';

const UserChkout = () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;

    return (
        <div className='flex '>
        <div className=" w-4/6">
        
            <div className=' p-10 flex'>
                
                <div className='w-7/12 mx-48'>
                    <div className=''>
                        <div className='text-2xl '>SHIPPING ADDRESS</div>
                        <div className=' '><textarea className='border border-[#B9B9B9] w-4/6  rounded h-28 placeholder:pl-3 mt-1 bg-[#F2EEE3]'  name="Address" placeholder='Address' /></div>
                    </div>

                    <div className='mt-8'>
                        <div className='text-xl '>SHIPPING ADDRESS</div>
                        <label></label>
                        <select className='border-2 border-[#B9B9B9] bg-[#F2EEE3] rounded' >
                            <option value=''>EMS : Thailand Post</option>
                        </select>
                    </div>

                    <div className='mt-8'>
                        <div className='text-xl'>PAYMENT METHOD</div>
                        <div>
                            <input type="radio" id="qrCode" name="paymentMethod" value="QR CODE" />
                            <label className='ml-2' htmlFor="qrCode">QR CODE</label><br />
                        </div>
                        <div>
                            <input type="radio" id="creditCard" name="paymentMethod" value="Credit/Debit Card" />
                            <label className='ml-2' htmlFor="creditCard">Credit/Debit Card</label><br />
                        </div>
                    </div>
                    
                    <div className='my-8'>
                        <button className='w-6/12 rounded-lg p-2 bg-[#3B3B3B] text-[#FAF9F6] border border-gray-600 text-center' type="button">PLACCE ORDER</button>
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

export default UserChkout;
