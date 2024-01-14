import React, { useEffect, useState } from 'react';
const Banner = () => {
    const [productCount, setProductCount] = useState<number>(0);

  useEffect(() => {
    fetch('http://10.4.85.33:8080/api/productCount')
      .then((response) => response.json())
      .then((data) => setProductCount(data.count))
      .catch((error) => console.error('Error fetching product count:', error));
  }, []);

  return (
    <div className=' px-20 py-10 border-b-2  border-gray-500'>
        <div className="border-2 border-gray-500 p-2 h-96">
            <div className=' '>Banner</div>
        </div>
        <div className='mt-6'>
          <div className=' font-semibold text-xl'>New Arrival</div>
          <div className='underline text-sm mt-3'>EXPLORE ITEMS</div>
        </div>
    </div>
  );
};

export default Banner;
