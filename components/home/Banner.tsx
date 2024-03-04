import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';

const Banner = () => {
    const [productCount, setProductCount] = useState<number>(0);

  useEffect(() => {
    fetch('https://capstone23.sit.kmutt.ac.th/sj3/api/productCount')
      .then((response) => response.json())
      .then((data) => setProductCount(data.count))
      .catch((error) => console.error('Error fetching product count:', error));
  }, []);

  return (
    <div className=' px-20 py-10 border-b-2  border-gray-500'>
        <div className="border-2 border-gray-500 p-2 h-96">
        <Image className='mx-auto' src="https://assets.official-goods-store.jp/product/ZMY299/babf58aafeb66622d75748d01bd85255341da3abd658eb5637b9f7c6ef4858d4.jpg" width={400} height={400} alt="Banner" loading="lazy"/>
        </div>
        <div className='mt-6'>
          <div className=' font-semibold text-xl'>New Arrival</div>
          <div className='underline text-sm mt-3'><Link href="/shop/">EXPLORE ITEMS</Link></div>
        </div>
    </div>
  );
};

export default Banner;
