import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import LoadMore from '../../components/Loadmore';
import Filter from '../../components/shop/Filter';
import MenCollection from '../../components/shop/MenCollection';
import '../../setupEnv';
import '../../app/globals.css';

const MenShopPage = () => {


  return (
    <div className="">
        <Navbar />
        <Title />
        <Filter />
        <MenCollection />
        <LoadMore />
         <Footer /> 
        
    </div>
  );
};

export default MenShopPage;