import React, { useEffect, useState } from 'react';
import '../../app/globals.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Guest from '../../components/checkout/guest';
import User from '../../components/checkout/user';


const CheckoutPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        setIsAuthenticated(true);
    }
    
  }, );

  return (
    <div className="">
        <Navbar />
        <div className="border-b-2 border-gray-500">
            <div className=" p-12">
                <div className="text-center text-4xl font-semibold">CHECKOUT</div>
            </div>
        </div>
        {isAuthenticated ? (
            <User /> 
                ) : (
            <Guest /> 
                )}
         <Footer /> 
        
    </div>
  );
};

export default CheckoutPage;