import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
    const router = useRouter();


    return (
        <div className='footer border-y-2 border-gray-500 '>
            <div className=" footerin ">
                <div className="flex">
                    <div className='text-start m-6'>
                        <div className='font-bold mb-3'>SHOP</div>
                        <div className='font-medium'>
                            <Link href="/shop/" passHref>
                                <div className={`hover:underline ${router.pathname === '/shop' ? 'underline' : ''}`}>
                                    All ITEMS
                                </div>
                            </Link>
                            <Link href="/shop/menshop" passHref>
                                <div className={`hover:underline ${router.pathname === '/shop/menshop' ? 'underline' : ''}`}>
                                    MEN
                                </div>
                            </Link>
                            <Link href="/shop/womenshop" passHref>
                                <div className={`hover:underline ${router.pathname === '/shop/womenshop' ? 'underline' : ''}`}>
                                    WOMEN
                                </div>
                            </Link>
                            <Link href="/shop/accessorie" passHref>
                                <div className={`hover:underline ${router.pathname === '/shop/accessorie' ? 'underline' : ''}`}>
                                    ACCESSORIES
                                </div>
                            </Link>


                        </div>
                    </div>

                    <div className='text-start m-6'>
                        <div className='font-bold mb-3'>HELP</div>
                        <div className='font-medium'>
                            <Link href="/home/contact"><div className={`hover:underline ${router.pathname === '/home/contact' ? 'underline' : ''}`}>
                                CONTACT US
                            </div></Link>
                            <Link href="/tracking/"><div className={`hover:underline ${router.pathname === '/tracking' ? 'underline' : ''}`}>TRACKING</div></Link>
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
