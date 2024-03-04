import React, { useEffect, useState } from 'react';
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
        <img className='m-auto' src='https://i.pinimg.com/originals/ed/cd/32/edcd32b829a5c6e614a6d6383c562742.jpg'  width={500} height={500} alt="" loading="lazy"/>
        </div>
        <div className='mt-6'>
          <div className=' font-semibold text-xl'>New Arrival</div>
          <div className='underline text-sm mt-3'>EXPLORE ITEMS</div>
        </div>
    </div>
  );
};

export default Banner;
