import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LoadMore from '../../components/Loadmore';
import Accessories from '../../components/shop/AccessoriesCollection';
import '../../setupEnv';
import '../../app/globals.css';

const AccessorieShopPage = () => {


  return (
    <div className="">
        <Navbar />
        <div className="border-b-2 border-gray-500">
            <div className=" p-12">
                <div className="text-center text-4xl font-semibold">ACCESSORIES</div>
            </div>
        </div>
        <Accessories />
        <LoadMore />
         <Footer /> 
        
    </div>
  );
};

export default AccessorieShopPage;