import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import EmtyCard from '../../components/wishlist/emtycard';
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
            const response = await fetch(`https://capstone23.sit.kmutt.ac.th/sj3/api/wishlist?userId=${userId}`, {
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
        <WishlistCard />
        {wishlistItems.length == 0 ? (
        <>
          <EmtyCard />
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