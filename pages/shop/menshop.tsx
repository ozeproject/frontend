import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
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
        <MenCollection />
        <div className='  '>
            <div className='text-center p-10 m-auto'>
                    <span className='m-auto font-semibold text-lg rounded-lg px-3 py-2 bg-[#3B3B3B] text-[#FAF9F6] border border-gray-600 text-center'>LOAD MORE . . .</span>
            </div>
        </div>
        <Footer /> 
    </div>
  );
};

export default MenShopPage;