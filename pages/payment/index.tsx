import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Guest from '../../components/checkout/guest';
import User from '../../components/checkout/user';
import '../../app/globals.css';

const PaymentPage = () => {


  return (
    <div className="">
        <Navbar />
        <div className="border-b-2 border-gray-500">
            <div className=" p-12">
                <div className="text-center text-4xl font-semibold">CHECKOUT</div>
            </div>
        </div>
         <Footer /> 
        
    </div>
  );
};

export default PaymentPage;