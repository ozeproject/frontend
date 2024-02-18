import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import LoadMore from '../../components/Loadmore';
import Filter from '../../components/shop/Filter';
import Accessories from '../../components/shop/AccessoriesCollection';
import '../../setupEnv';
import '../../app/globals.css';

const AccessorieShopPage = () => {


  return (
    <div className="">
        <Navbar />
        <Title />
        {/* <Filter /> */}
        <Accessories />
        <LoadMore />
         <Footer /> 
        
    </div>
  );
};

export default AccessorieShopPage;