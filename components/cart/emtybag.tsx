import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const EmtyBag = () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;

    return (
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
    );
};

export default EmtyBag;
