import React, { useEffect, useState } from 'react';
import '../../app/globals.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Chkout from '../../components/checkout/checkout';


const CheckoutPage = () => {


  return (
    <div className="">
        <Navbar />
        <Chkout /> 
         <Footer /> 
        
    </div>
  );
};

export default CheckoutPage;