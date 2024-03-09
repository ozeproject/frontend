import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LoadMore from '../../components/Loadmore';
import WomenCollection from '../../components/shop/WomenCollection';
import '../../setupEnv';
import '../../app/globals.css';

const WomenShopPage = () => {


  return (
    <div className="">
        <Navbar />
        <div className="border-b-2 border-gray-500">
            <div className=" p-12">
                <div className="text-center text-4xl font-semibold">WOMENS</div>
            </div>
        </div>
        <WomenCollection />
        <LoadMore />
         <Footer /> 
        
    </div>
  );
};

export default WomenShopPage;