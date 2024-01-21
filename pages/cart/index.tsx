import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Shopbag from '../../components/cart/shopbag';
import EmtyBag from '../../components/cart/emtybag';
import '../../app/globals.css';


const CartPage = () => {


  return (
    <div className="">
        <Navbar />
        <div className="border-b-2 border-gray-500">
            <div className=" p-12">
                <div className="text-center text-4xl font-semibold">YOUR SHOPPING BAGS</div>
            </div>
        </div>
        <EmtyBag /> 
         <Footer /> 
        
    </div>
  );
};

export default CartPage;