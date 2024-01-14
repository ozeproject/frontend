import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Banner from '../../components/home/Banner';
import Men from '../../components/shop/MenCollection';
import Women from '../../components/shop/WomenCollection';
import '../../app/globals.css';

const HomePage = () => {


  return (
    <div className="">
        <Navbar />
        <Banner /> 
        <Men /> 
        <Women /> 
         <Footer /> 
        
    </div>
  );
};

export default HomePage;