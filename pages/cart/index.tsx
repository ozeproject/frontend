import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Shopbag from '../../components/cart/shopbag';
import EmtyBag from '../../components/cart/emtybag';
import '../../app/globals.css';
import { jwtDecode } from "jwt-decode";

interface MyToken {
    userId: string;
    username: string;
    role: string;
    exp: number;
  }

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
  fetchCart();
}, []); 

const fetchCart = async () => {
  try {
      const userId = getUserId(); 
      const response = await fetch(`https://capstone23.sit.kmutt.ac.th/sj3/api/cart?userId=${userId}`, {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${token}`,
          },
      });

      if (response.ok) {
          const cartItems = await response.json();
          console.log('Cart Items:', cartItems);
      } else {
          console.error('Error fetching Cart items:', response.status);
      }
  } catch (error: any) { 
      console.error('Error fetching Cart items:', error.message);
  }
};

function getUserId() {
  const token = localStorage.getItem('accessToken');

  if (token) {
      try {
          const decodedToken = jwtDecode<MyToken>(token);
          const userId = decodedToken.userId;
          return userId;
      } catch (error) {
          console.error('Error decoding JWT token:', error);
          return null;
      }
  } else {
      console.error('JWT token not found in local storage');
      return null;
  }
}

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