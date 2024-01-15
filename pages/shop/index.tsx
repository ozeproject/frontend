import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import AdminShop from '../../components/shop/AdminShop';
import LoadMore from '../../components/Loadmore';
import Filter from '../../components/shop/Filter';
import ProductCard from '../../components/shop/ProductCard';
import Men from '../../components/shop/MenCollection';
import '../../setupEnv';
import '../../app/globals.css';

const ShopPage = () => {


  return (
    <div className="">
        <Navbar />
        <Title />
        <Filter /> 
        <ProductCard />
        {/* <AdminShop />
        <Men /> */}
        <LoadMore />
         <Footer /> 
        
    </div>
  );
};

export default ShopPage;