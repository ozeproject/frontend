import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import AdminShop from '../../components/shop/AdminShop';
import LoadMore from '../../components/Loadmore';
import Filter from '../../components/shop/Filter';
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
        <Title />
        {userRole === 'Admin' ? (
        <>
          <AdminShop />
        </>
      ) : (
        <>
          <Filter />
        </>
      )}
        <ProductCard />
        <LoadMore />
         <Footer /> 
        
    </div>
  );
};

export default ShopPage;