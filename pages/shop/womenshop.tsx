import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import LoadMore from '../../components/Loadmore';
import Filter from '../../components/shop/Filter';
import WomenCollection from '../../components/shop/WomenCollection';
import '../../setupEnv';
import '../../app/globals.css';

const WomenShopPage = () => {


  return (
    <div className="">
        <Navbar />
        <Title />
        {/* <Filter /> */}
        <WomenCollection />
        <LoadMore />
         <Footer /> 
        
    </div>
  );
};

export default WomenShopPage;