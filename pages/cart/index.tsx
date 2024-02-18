import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Shopbag from '../../components/cart/shopbag';
import EmtyBag from '../../components/cart/emtybag';
import '../../app/globals.css';

interface CartItem {
  cart_id: number;
  ProductName: string;
  Price: number;
  Color: string;
  Size: string;
  quantity: number;
  ImagePath: string;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;

  useEffect(() => {
    fetch('https://capstone23.sit.kmutt.ac.th/sj3/api/cart', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    .then((response) => response.json())
    .then((data) => setCartItems(data))
    .catch((error) => console.error('Error fetching cart items:', error));
}, [token]);

  return (
    <div className="">
        <Navbar />
        <div className="border-b-2 border-gray-500">
            <div className=" p-12">
                <div className="text-center text-4xl font-semibold">YOUR SHOPPING BAGS</div>
            </div>
        </div>
        {cartItems.length == 0 ? (
        <>
          <EmtyBag />
        </>
      ) : (
        <>
          <Shopbag />
        </>
      )}
         <Footer /> 
        
    </div>
  );
};

export default CartPage;