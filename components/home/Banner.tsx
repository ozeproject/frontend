import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Banner = () => {
  const [productCount, setProductCount] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const images = [
    'https://assets-global.website-files.com/5fb85f26f126ce08d792d2d9/628a5e3eebec8808b407eefc_72331280_1375222229300944_3110216239734063104_n.jpg',
    'https://www.smartt.com/sites/default/files/2020-06/uniqlo-logo-banner.jpg'
    // Add additional image URLs here...
  ];

  useEffect(() => {
    fetchProductCount();
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const fetchProductCount = () => {
    fetch('https://capstone23.sit.kmutt.ac.th/sj3/api/productCount')
      .then((response) => response.json())
      .then((data) => setProductCount(data.count))
      .catch((error) => console.error('Error fetching product count:', error));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className='px-52 py-10 border-b-2 border-gray-500 relative'>
    <div className='border-2 border-gray-500 p-2' style={{ height: '500px' }}>
      <img
        className='mx-auto object-cover'
        src={images[currentIndex]}
        style={{ width: '1800px', height: '480px' }}
        alt='Banner'
        loading='lazy'
      />
      <button className="absolute top-1/2 left-40 transform -translate-y-1/2 text-5xl pb-16" onClick={prevSlide}>&lt;</button>
      <button className="absolute top-1/2 right-40 transform -translate-y-1/2 text-5xl pb-16" onClick={nextSlide}>&gt;</button>
    </div>
    <div className='mt-6'>
      <div className='font-semibold text-xl'>New Arrival</div>
      <div className='underline text-sm mt-3'>
        <Link href={`${process.env.NEXT_PUBLIC_BASEPATH}/shop/`}>EXPLORE ITEMS</Link>
      </div>
    </div>
  </div>
  );
};

export default Banner;
