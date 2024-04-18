import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import WishlistCard from '../../components/wishlist/wishlistcard';
import '../../app/globals.css';
import { jwtDecode } from "jwt-decode";

interface WishlistItem {
    wishlist_id: number;
    ProductId: number;
    ProductName: string;
    Description: string;
    Price: number;
    StockQuantity: number;
    Color: string;
    IsTrend: string;
    IsNew: string;
    CategoryId: number;
    ImagePath: string;
    gender: string;
}

interface MyToken {
    userId: string;
    username: string;
    role: string;
    exp: number;
  }

const WishlistPage = () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
    const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

    useEffect(() => {
        fetchWishlist();
    }, []); 

    const fetchWishlist = async () => {
        try {
            const userId = getUserId(); 
            const response = await fetch(`${process.env.REACT_APP_API_URL}/wishlist?userId=${userId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const wishlistItems = await response.json();
                setWishlistItems(wishlistItems);
                console.log('Hey Wishlist Items:', wishlistItems);
            } else {
                console.error('Error fetching wishlist items:', response.status);
            }
        } catch (error: any) { 
            console.error('Error fetching wishlist items:', error.message);
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
                <div className="text-center text-4xl font-semibold">YOUR WISHLIST</div>
            </div>
        </div>
        {wishlistItems.length == 0 ? (
        <>
          <div className='m-auto p-40'>
            <div className="text-center">
                <div className='text-xl font-semibold text-center'>Your cart is empty</div>
                <div className='mt-8 text-base'>
                <Link href={`${process.env.NEXT_PUBLIC_BASEPATH}/shop/`}><button
                        className='m-auto rounded-lg p-3 border border-gray-600 text-center bg-[#3B3B3B] hover:bg-black text-[#FAF9F6]'
                        type="button"
                    >
                        GO SHOPPING
                    </button></Link>
                </div>
            </div>
        </div>
        </>
      ) : (
        <>
          <WishlistCard />
        </>
      )}
        <Footer /> 
        
    </div>
  );
};

export default WishlistPage;