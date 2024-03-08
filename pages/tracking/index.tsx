import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Enter from '../../components/tracking/enterno';
import Status from '../../components/tracking/status';
import '../../app/globals.css';

const TrackingPage = () => {


  return (
    <div className="">
        <Navbar />
        <div className="border-b-2 border-gray-500">
            <div className=" p-12">
                <div className="text-center text-4xl font-semibold">TRACKING</div>
            </div>
        </div>
        <Enter />
         <Footer /> 
        
    </div>
  );
};

export default TrackingPage;