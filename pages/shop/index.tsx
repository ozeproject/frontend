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

const ShopPage = () => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;

  return (
    <div className="">
        <Navbar />
        <Title />
        <Filter /> 
        <ProductCard />
        <LoadMore />
         <Footer /> 
        
    </div>
  );
};

export default ShopPage;