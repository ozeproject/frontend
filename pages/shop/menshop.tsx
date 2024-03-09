import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LoadMore from '../../components/Loadmore';
import MenCollection from '../../components/shop/MenCollection';
import '../../setupEnv';
import '../../app/globals.css';

const MenShopPage = () => {


  return (
    <div className="">
        <Navbar />
        <div className="border-b-2 border-gray-500">
            <div className=" p-12">
                <div className="text-center text-4xl font-semibold">MENS</div>
            </div>
        </div>
        {/* <Filter /> */}
        <MenCollection />
        <LoadMore />
         <Footer /> 
        
    </div>
  );
};

export default MenShopPage;