import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'

const ShopBags = () => {
    const [productCount, setProductCount] = useState<number>(0);
    const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
    const [isEditing, setIsEditing] = useState<boolean>(false);


  useEffect(() => {
    fetch('https://capstone23.sit.kmutt.ac.th/sj3/api/productCount')
      .then((response) => response.json())
      .then((data) => setProductCount(data.count))
      .catch((error) => console.error('Error fetching product count:', error));
  }, []);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
};

  return (
    <div className=' flex '>
        <div className=" w-4/6">
            <div className='border-b-2  border-gray-500 p-10 flex'>
                <div className='w-3/12 p-4'>
                    <div className='flex justify-end'><span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <mask id="mask0_510_1236" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                    <rect width="32" height="32" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_510_1236)">
                    <path d="M16 26.2052L14.9897 25.2923C12.8137 23.3043 11.0137 21.6026 9.58973 20.1872C8.1658 18.7718 7.04187 17.5235 6.21793 16.4423C5.394 15.3611 4.81837 14.3829 4.49103 13.5077C4.16368 12.6325 4 11.7522 4 10.8667C4 9.17097 4.57607 7.74703 5.7282 6.5949C6.88033 5.44277 8.30427 4.8667 10 4.8667C11.1726 4.8667 12.2726 5.1667 13.3 5.7667C14.3274 6.3667 15.2274 7.23934 16 8.38463C16.7726 7.23934 17.6726 6.3667 18.7 5.7667C19.7274 5.1667 20.8274 4.8667 22 4.8667C23.6957 4.8667 25.1197 5.44277 26.2718 6.5949C27.4239 7.74703 28 9.17097 28 10.8667C28 11.7522 27.8363 12.6325 27.509 13.5077C27.1816 14.3829 26.606 15.3611 25.7821 16.4423C24.9581 17.5235 23.8385 18.7718 22.4231 20.1872C21.0077 21.6026 19.2034 23.3043 17.0103 25.2923L16 26.2052ZM16 24.4C18.1333 22.4718 19.8889 20.8201 21.2667 19.4449C22.6444 18.0697 23.7333 16.8765 24.5333 15.8654C25.3333 14.8543 25.8889 13.9586 26.2 13.1782C26.5111 12.3979 26.6667 11.6274 26.6667 10.8667C26.6667 9.53337 26.2222 8.42226 25.3333 7.53337C24.4444 6.64448 23.3333 6.20003 22 6.20003C20.9385 6.20003 19.959 6.50302 19.0615 7.109C18.1641 7.71498 17.3607 8.62738 16.6513 9.8462H15.3487C14.6222 8.61029 13.8145 7.69362 12.9256 7.0962C12.0367 6.49876 11.0615 6.20003 10 6.20003C8.68376 6.20003 7.57692 6.64448 6.6795 7.53337C5.78206 8.42226 5.33333 9.53337 5.33333 10.8667C5.33333 11.6274 5.48889 12.3979 5.8 13.1782C6.11111 13.9586 6.66667 14.8543 7.46667 15.8654C8.26667 16.8765 9.35556 18.0654 10.7333 19.4321C12.1111 20.7988 13.8667 22.4547 16 24.4Z" fill="#3B3B3B"/>
                    </g>
                    </svg></span>
                    </div>

                    <div><Image className='mx-auto'  src="" width={220} height={220} alt="Test IMG" loading="lazy"/></div>
                </div>
                <div className='w-9/12 p-4'>
                    <div className='flex justify-between text-2xl'>
                        <div className=' '>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc </div>
                        <div className=' '>฿99,99{productCount}</div>
                    </div>
                    <div className='flex  text-lg mt-4'>
                        <div className=' '>COLORS:</div>
                        <div className='ml-2 '>฿{productCount}</div>
                    </div>
                    <div className='flex  text-lg'>
                        <div className=' '>SIZES:</div>
                        <div className=' ml-2'>฿{productCount}</div>
                    </div>
                    <div className='flex  text-lg'>
                        <div className=' '>QUANTITY:</div>
                        <div className=' ml-2'>฿{productCount}</div>
                    </div>
                    <div className='mt-4 text-lg flex justify-between'>
                        <div className='w-1/12'>
                            <div className='p-1 border-b-2 border-gray-500 w-fit' onClick={toggleEditing}>EDIT</div>
                        </div>
                        <div className={`p-4 w-10/12 border-2 border-gray-800 rounded-lg ${isEditing ? '' : 'hidden'}`}>
                            
                            <div className='mt-4'>
                                  <p className='font-semibold tracking-normal'>COLORS:</p>
                                  <div className='flex mt-2'>
                                        <button className="white-button  border-solid border-2 colorinput  w-8 h-8 p-1  bg-white"></button>
                                      <button className="black-button  border-solid border-2 colorinput  w-8 h-8 p-1 ml-2 bg-black"></button>
                                  </div>
                              </div>
                              <div className='mt-6'>
                                  <p className='font-semibold tracking-normal'>SIZES:</p>
                                  <p className='text-red-700 tracking-wide text-sm mt-2'>Please select your size first</p>
                                  <div className='flex mt-1'>
                                      <button className="white-button  border-solid border-2 border-gray-500 rounded-md  w-8 h-8 p-1  inputCard font-bold text-center text-sm">L</button>
                                      <button className="black-button  border-solid border-2 border-gray-500  rounded-md w-8 h-8 p-1 ml-3 inputCard font-bold text-center text-sm">XL</button>
                                  </div>
                                  <p className='underline tracking-wide text-sm mt-1'>Size guide</p>
                              </div>
                              <div>
                                  <p className='font-semibold tracking-normal mt-5'>QUANTITY::</p>
                                  <p className='text-red-700 tracking-wide text-sm mt-2'>Only 1 item left you cannot add to the cart</p>
                                  <div className='flex mt-1'>
                                      <button className="first-button  border-y-2 border-l-2 border-2 border-gray-500 rounded-l-lg  w-10 h-10 p-1  inputCard">{'-'}</button>
                                      <button className="mid-button  border-y-2 border-gray-500  w-10 h-10 p-1  inputCard">1</button>
                                      <button className="last-button  border-y-2 border-r-2 border-2 border-gray-500 rounded-r-lg  w-10 h-10 p-1  inputCard">+</button>
                                      <span className='mt-4 ml-2'>{'('}{productCount}{')'}</span>
                                  </div>
                              </div>
                              <div className='mt-5'>
                                 <button className='w-2/12 rounded-lg p-2 bg-slate-50 border border-gray-600 text-center'type="button">CANCEL</button>
                                 <button className='w-2/12 ml-3 rounded-lg p-2 bg-slate-50 border border-gray-600 text-center' type="button">UPDATE</button>
                              </div>
                        </div>
                        <div className='flex justify-end w-1/12  p-1'>
                            <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.2436 23.333C3.57864 23.333 3.0107 23.0976 2.53977 22.6266C2.06881 22.1557 1.83333 21.5877 1.83333 20.9228V3.99975H0.5V1.99978H6.49997V0.820312H14.5V1.99978H20.4999V3.99975H19.1666V20.9228C19.1666 21.5963 18.9333 22.1664 18.4666 22.633C17.9999 23.0997 17.4298 23.333 16.7563 23.333H4.2436ZM17.1666 3.99975H3.8333V20.9228C3.8333 21.0424 3.87177 21.1407 3.9487 21.2177C4.02563 21.2946 4.12393 21.3331 4.2436 21.3331H16.7563C16.8589 21.3331 16.9529 21.2903 17.0384 21.2049C17.1239 21.1194 17.1666 21.0254 17.1666 20.9228V3.99975ZM7.03847 18.6664H9.03843V6.66641H7.03847V18.6664ZM11.9615 18.6664H13.9615V6.66641H11.9615V18.6664Z" fill="#1C1B1F"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
        <div className="border-l-2  border-gray-500 w-2/6 p-16">
            <div className='flex justify-between text-lg'>
                <div className=' '>YOUR ORDER SUMMARY</div>
                <div className=' '>{'[ '}{productCount}{' ]'}</div>
            </div>
            <div className='flex justify-between text-base mt-4'>
                <div className=' '>SUBTOTAL</div>
                <div className=' '>฿{productCount}</div>
            </div>
            <div className='flex justify-between text-base'>
                <div className=' '>SHIPPING</div>
                <div className=' '>฿{productCount}</div>
            </div>
            <div className='mt-4  flex justify-between text-2xl'>
                <div className=' '>TOTAL</div>
                <div className=' '>฿{productCount}</div>
            </div>
            <div className='mt-8 text-base'>
                    <Link href="/shop/">
                        <button className='m-auto rounded-lg p-3 bg-slate-50 border border-gray-600 text-center w-full' type="button">CHECK OUT</button>
                    </Link>
                </div>
        </div>
    </div>
  );
};

export default ShopBags;
