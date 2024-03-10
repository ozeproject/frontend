import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AdminShop from '../../components/shop/AdminShop';
import LoadMore from '../../components/Loadmore';
import ProductCard from '../../components/shop/ProductCard';
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
          <AdminShop />
        </>
      ) : (
        <>
          
        </>
      )}
        <ProductCard />
        <LoadMore />
        <Footer /> 
        
    </div>
  );
};

export default ShopPage;