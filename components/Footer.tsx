import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='footer border-y-2 border-gray-500 '>
        <div className=" footerin ">
                <div className="flex">
                    <div className='text-start m-6'>
                        <div className='font-bold mb-3'>SHOP</div>
                        <div className='font-medium'>
                            <Link href="/shop/"><div className='hover:underline'>NEW ITEMS</div></Link>
                            <Link href="/home/"><div className='hover:underline'>MEN</div></Link>
                            <Link href="/home/"><div className='hover:underline'>WOMEN</div></Link>
                            <Link href="/home/"><div className='hover:underline'>ACCESSORIES</div></Link>
                        </div>
                    </div>

                    <div className='text-start m-6'>
                        <div className='font-bold mb-3'>HELP</div>
                        <div className='font-medium'>
                            <Link href="/home/contact"><div className='hover:underline'>CONTACT US</div></Link>
                            <Link href="/tracking/"><div className='hover:underline'>TRACKING</div></Link>
                        </div>
                    </div>
                </div>
                
        <div className='text-center mb-5 m-auto'>
                &copy; 2023 OZE
        </div>
        </div>



    </div>
  );
};

export default Footer;
