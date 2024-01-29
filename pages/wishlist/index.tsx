import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image'
import '../../app/globals.css';

const WishlistPage = () => {


  return (
    <div className="">
        <Navbar />
        <div className='border-gray-500 border-b-2 text-center text-3xl py-12 font-bold'>
            <div className='h2'>YOUR WISHLIST</div>
        </div>
        <div>
            <div className={`grid grid-cols-4   border-gray-500`}>
                <div  className=" border-gray-500  border-r-2">
                    <div className="product p-6 ">
                    <div className='detail'>
                        <div className='flex justify-end '><span><svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <mask id="mask0_510_1236" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                            <rect width="32" height="32" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_510_1236)" >
                            <path d="M16 26.2052L14.9897 25.2923C12.8137 23.3043 11.0137 21.6026 9.58973 20.1872C8.1658 18.7718 7.04187 17.5235 6.21793 16.4423C5.394 15.3611 4.81837 14.3829 4.49103 13.5077C4.16368 12.6325 4 11.7522 4 10.8667C4 9.17097 4.57607 7.74703 5.7282 6.5949C6.88033 5.44277 8.30427 4.8667 10 4.8667C11.1726 4.8667 12.2726 5.1667 13.3 5.7667C14.3274 6.3667 15.2274 7.23934 16 8.38463C16.7726 7.23934 17.6726 6.3667 18.7 5.7667C19.7274 5.1667 20.8274 4.8667 22 4.8667C23.6957 4.8667 25.1197 5.44277 26.2718 6.5949C27.4239 7.74703 28 9.17097 28 10.8667C28 11.7522 27.8363 12.6325 27.509 13.5077C27.1816 14.3829 26.606 15.3611 25.7821 16.4423C24.9581 17.5235 23.8385 18.7718 22.4231 20.1872C21.0077 21.6026 19.2034 23.3043 17.0103 25.2923L16 26.2052ZM16 24.4C18.1333 22.4718 19.8889 20.8201 21.2667 19.4449C22.6444 18.0697 23.7333 16.8765 24.5333 15.8654C25.3333 14.8543 25.8889 13.9586 26.2 13.1782C26.5111 12.3979 26.6667 11.6274 26.6667 10.8667C26.6667 9.53337 26.2222 8.42226 25.3333 7.53337C24.4444 6.64448 23.3333 6.20003 22 6.20003C20.9385 6.20003 19.959 6.50302 19.0615 7.109C18.1641 7.71498 17.3607 8.62738 16.6513 9.8462H15.3487C14.6222 8.61029 13.8145 7.69362 12.9256 7.0962C12.0367 6.49876 11.0615 6.20003 10 6.20003C8.68376 6.20003 7.57692 6.64448 6.6795 7.53337C5.78206 8.42226 5.33333 9.53337 5.33333 10.8667C5.33333 11.6274 5.48889 12.3979 5.8 13.1782C6.11111 13.9586 6.66667 14.8543 7.46667 15.8654C8.26667 16.8765 9.35556 18.0654 10.7333 19.4321C12.1111 20.7988 13.8667 22.4547 16 24.4Z" fill="#3B3B3B"/>
                            </g>
                            </svg></span>
                        </div>

                        <div className='text-center '><Image className='mx-auto'  src="" width={400} height={400} alt="Test IMG" loading="lazy"/></div>

                        <div className='text-center mt-8'><span>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc  ProductName </span></div>
                        
                        <div className='text-center font-bold text-3xl mt-4'><span>Price</span></div>
                        
                        <div className="hideforhold mt-4">
                            <div className="color-options text-center">
                                    <button className="white-button  border-solid border-2 colorinput  w-5 h-5 p-1  bg-white mx-1"></button>
                                    <button className="black-button  border-solid border-2 colorinput w-5 h-5 p-1  bg-black mx-1"></button>
                            </div>
                        </div>
                    
                    </div>
                    
                        <div className='mt-4 flex justify-center'>
                            <button
                            className="white-button  border-solid border-2  quickbtn  rounded-md p-2 mx-2 w-4/6"
                        >
                            CHOOSE OPTIONS
                        </button>
                            
                            <button
                            className="white-button  rounded-md  w-1/6 "
                            >
                                <svg className='' width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_726_2277"  maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <rect width="24" height="24" fill="#D9D9D9"/>
                                </mask>
                                
                                <g mask="url(#mask0_726_2277)">
                                <path d="M7.30773 20.4998C6.80901 20.4998 6.38306 20.3232 6.02986 19.97C5.67664 19.6168 5.50003 19.1908 5.50003 18.6921V5.99981H4.50003V4.49983H9.00001V3.61523H15V4.49983H19.5V5.99981H18.5V18.6921C18.5 19.1972 18.325 19.6248 17.975 19.9748C17.625 20.3248 17.1974 20.4998 16.6923 20.4998H7.30773ZM17 5.99981H7.00001V18.6921C7.00001 18.7818 7.02886 18.8556 7.08656 18.9133C7.14426 18.971 7.21798 18.9998 7.30773 18.9998H16.6923C16.7692 18.9998 16.8397 18.9678 16.9039 18.9037C16.968 18.8395 17 18.769 17 18.6921V5.99981ZM9.40388 16.9998H10.9039V7.99981H9.40388V16.9998ZM13.0962 16.9998H14.5961V7.99981H13.0962V16.9998Z" fill="#1C1B1F"/>
                                </g>
                                </svg>

                            </button>
                        </div>
                </div> 
            
            </div>
        </div>
        </div>
         
        <Footer /> 
        
    </div>
  );
};

export default WishlistPage;