import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import LoadMore from '../../components/Loadmore';
import Filter from '../../components/shop/Filter';
import ProductCard from '../../components/shop/ProductCard';
import '../../app/globals.css';

const ShopPage = () => {


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