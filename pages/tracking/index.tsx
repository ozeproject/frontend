import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../app/globals.css';

const TrackingPage = () => {
  const [parcelNumber, setParcelNumber] = useState('');

  const handleSearch = () => {
    // Check if the parcel number is provided
    if (parcelNumber) {
      // Construct the tracking URL using the provided parcel number
      const trackingURL = `https://track.thailandpost.co.th/?trackNumber=${parcelNumber}`
      
      // Open a new tab or window with the tracking URL
      window.open(trackingURL, '_blank');
    }
  };

  return (
    <div className="">
      <Navbar />
      <div className="border-b-2 border-gray-500">
        <div className=" p-12">
          <div className="text-center text-4xl font-semibold">TRACKING</div>
        </div>
      </div>

      <div className="w-1/6 mx-auto my-8">
        <div className="">Enter the 13-digit item number</div>
        <input
          className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 mt-1 bg-[#F2EEE3]'
          type="text"
          name="EMS"
          placeholder='EF582568151TH'
          onChange={(e) => setParcelNumber(e.target.value)}
        />
        <div className='mt-4'>
          <button className="rounded-lg px-4 py-1 w-full bg-[#3B3B3B] text-[#FAF9F6] border border-gray-600" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TrackingPage;
