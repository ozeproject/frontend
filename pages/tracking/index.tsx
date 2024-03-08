import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Enter from '../../components/tracking/enterno';
import Status from '../../components/tracking/status';
import '../../app/globals.css';

const HomePage = () => {


  return (
    <div className="">
        <Navbar />
        <Enter />
         <Footer /> 
        
    </div>
  );
};

export default HomePage;