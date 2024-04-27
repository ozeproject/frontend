import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductCard from '../../components/shop/ProductCard';
import Link from 'next/link';
import '../../setupEnv';
import '../../app/globals.css';
import { jwtDecode } from "jwt-decode";


interface MyToken {
  userId: string;
  username: string;
  role: string;
  exp: number;
}

const ShopPage = () => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode<MyToken>(token);
        setUserRole(decodedToken.role);
      } catch (error) {
        console.error('Error decoding JWT token:', error);
      }
    }
  }, [token]);


  return (
    <div className="">
        <Navbar />
        <div className="border-b-2 border-gray-500">
            <div className=" p-12">
                <div className="text-center text-4xl font-semibold">ALL ITEMS</div>
            </div>
        </div>
        {userRole === 'Admin' ? (
        <>
          <div>
        <div className="border-b-2 border-gray-500">
            <div className="lay2 p-12">
                <div className="text-center text-3xl">ADMIN</div>
                <div className='text-center mt-4'><button className='w-1/12 rounded-lg p-2 bordertext-center border-[#3B3B3B] bg-[#3B3B3B] hover:bg-black text-[#FAF9F6]'type="button"><Link href={`${process.env.NEXT_PUBLIC_BASEPATH}/shop/create/`}>CREATE ITEM</Link></button> </div>
            </div>
        </div>
      </div>
        </>
      ) : (
        <>
          
        </>
      )}
        <ProductCard />
        {/* <div className='  '>
            <div className='text-center p-10 m-auto'>
                    <span className='m-auto font-semibold text-lg rounded-lg px-3 py-2 bg-[#3B3B3B] text-[#FAF9F6] border border-gray-600 text-center'>LOAD MORE . . .</span>
            </div>
        </div> */}
        <Footer /> 
        
    </div>
  );
};

export default ShopPage;