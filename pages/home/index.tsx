import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Banner from '../../components/home/Banner';
import Men from '../../components/shop/MenCollection';
import Women from '../../components/shop/WomenCollection';
import Link from 'next/link';
import '../../app/globals.css';

const HomePage = () => {


  return (
    <div className="">
        <Navbar />
        <Banner />
        <div className='border-b-2  border-gray-500'>
          <div className="filter flex justify-between p-10 border-b-2  border-gray-500">
              <div className='m-auto font-semibold text-xl '>MEN COLLECTION</div>
          </div>

          <Men /> 
          
          <div className="filter flex justify-between p-10">
            <button className='m-auto font-semibold text-sm rounded-lg p-3 bg-slate-50 border border-gray-600 text-center'><Link href="/shop/menshop">VIEW MORE</Link></button>
          </div>

        </div>
        <div>
          <div className="filter flex justify-between p-10 border-b-2  border-gray-500">
              <div className='m-auto font-semibold text-xl '>WOMEN COLLECTION</div>
          </div>
          
          <Women /> 

          <div className="filter flex justify-between p-10">
            <button className='m-auto font-semibold text-sm rounded-lg p-3 bg-slate-50 border border-gray-600 text-center'><Link href="/shop/womenshop">VIEW MORE</Link></button>
          </div>
          
        </div>
         <Footer /> 
        
    </div>
  );
};

export default HomePage;