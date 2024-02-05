import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'

const AccessoriesCollection = () => {
    const [productCount, setProductCount] = useState<number>(0);

  useEffect(() => {
    fetch('https://capstone23.sit.kmutt.ac.th/sj3/api/productCount')
      .then((response) => response.json())
      .then((data) => setProductCount(data.count))
      .catch((error) => console.error('Error fetching product count:', error));
  }, []);

  return (
    <div className=''>
        <div className={`grid grid-cols-4   border-gray-500`}>
            <div  className=" border-gray-500 border-b-2 border-r-2">
              <div className="product p-6 ">
                <Link href={`/detail/`}>
                    <div className='detail'>
                    <div className='flex justify-end'><span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <mask id="mask0_510_1236" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                      <rect width="32" height="32" fill="#D9D9D9"/>
                      </mask>
                      <g mask="url(#mask0_510_1236)">
                      <path d="M16 26.2052L14.9897 25.2923C12.8137 23.3043 11.0137 21.6026 9.58973 20.1872C8.1658 18.7718 7.04187 17.5235 6.21793 16.4423C5.394 15.3611 4.81837 14.3829 4.49103 13.5077C4.16368 12.6325 4 11.7522 4 10.8667C4 9.17097 4.57607 7.74703 5.7282 6.5949C6.88033 5.44277 8.30427 4.8667 10 4.8667C11.1726 4.8667 12.2726 5.1667 13.3 5.7667C14.3274 6.3667 15.2274 7.23934 16 8.38463C16.7726 7.23934 17.6726 6.3667 18.7 5.7667C19.7274 5.1667 20.8274 4.8667 22 4.8667C23.6957 4.8667 25.1197 5.44277 26.2718 6.5949C27.4239 7.74703 28 9.17097 28 10.8667C28 11.7522 27.8363 12.6325 27.509 13.5077C27.1816 14.3829 26.606 15.3611 25.7821 16.4423C24.9581 17.5235 23.8385 18.7718 22.4231 20.1872C21.0077 21.6026 19.2034 23.3043 17.0103 25.2923L16 26.2052ZM16 24.4C18.1333 22.4718 19.8889 20.8201 21.2667 19.4449C22.6444 18.0697 23.7333 16.8765 24.5333 15.8654C25.3333 14.8543 25.8889 13.9586 26.2 13.1782C26.5111 12.3979 26.6667 11.6274 26.6667 10.8667C26.6667 9.53337 26.2222 8.42226 25.3333 7.53337C24.4444 6.64448 23.3333 6.20003 22 6.20003C20.9385 6.20003 19.959 6.50302 19.0615 7.109C18.1641 7.71498 17.3607 8.62738 16.6513 9.8462H15.3487C14.6222 8.61029 13.8145 7.69362 12.9256 7.0962C12.0367 6.49876 11.0615 6.20003 10 6.20003C8.68376 6.20003 7.57692 6.64448 6.6795 7.53337C5.78206 8.42226 5.33333 9.53337 5.33333 10.8667C5.33333 11.6274 5.48889 12.3979 5.8 13.1782C6.11111 13.9586 6.66667 14.8543 7.46667 15.8654C8.26667 16.8765 9.35556 18.0654 10.7333 19.4321C12.1111 20.7988 13.8667 22.4547 16 24.4Z" fill="#3B3B3B"/>
                      </g>
                    </svg></span></div>

                    <div className='text-center '><Image className='mx-auto' src="" width={400} height={400} alt="Test" loading="lazy"/></div>

                    <div className='text-center'><span>*Accessories Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc  </span></div>
                    
                    <div className='text-center font-bold text-3xl mt-4'><span>฿xx,xxx</span></div>
                    
                    <div className="hideforhold mt-4">
                        <div className="color-options text-center">
                                      <button className="white-button  border-solid border-2 colorinput  w-5 h-5 p-1  bg-white mx-2 "></button>
                                      <button className="black-button  border-solid border-2 colorinput w-5 h-5 p-1  bg-black mx-2 "></button>
                        </div>
                    </div>
                    
                    </div>
                </Link>

                <div className='mt-4'>
                        <button
                        className="white-button  border-solid border-2  quickbtn  rounded-md p-2 mx-2 w-full">Quick Shop</button>
                </div>
              </div>
            </div>
          </div>

    </div>
  );
};

export default AccessoriesCollection;
