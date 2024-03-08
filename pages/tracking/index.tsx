import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../app/globals.css';

const TrackingPage = () => {

  const [showTrackingStatus, setShowTrackingStatus] = useState(false);

  const handleSearch = () => {
    setShowTrackingStatus(true);
  };



  return (
    <div className="">
        <Navbar />
        <div className="border-b-2 border-gray-500">
            <div className=" p-12">
                <div className="text-center text-4xl font-semibold">TRACKING</div>
            </div>
        </div>

        <div className="w-1/6 mx-auto my-8 ">
                <div className="">Enter the 13-digit item number</div>
                <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 mt-1 bg-[#F2EEE3]' type="text" name="EMS" placeholder='EF582568151TH' />
                <div className='mt-4' ><button className="rounded-lg px-4 py-1 w-full bg-[#3B3B3B] text-[#FAF9F6] border border-gray-600" onClick={handleSearch} >Search</button></div>
        </div>

        {showTrackingStatus && (
        <div className="w-1/6 mx-auto mb-8 ">
                <div className="flex">
                  <div><svg width="32" height="60" viewBox="0 0 32 60" fill="none" xmlns="http://www.w3.org/2000/svg"><g ><rect width="32" height="32" rx="16" fill="#D4CBB1"/><rect x="1" y="1" width="30" height="30" rx="15" fill="#D4CBB1"/><rect x="1" y="1" width="30" height="30" rx="15" stroke="#3B3B3B" /><circle cx="16" cy="16" r="5" fill="#3B3B3B"/></g><rect x="15" y="36" width="2" height="20" rx="1" fill="#D4CBB1"/><defs><rect width="32" height="32" rx="16" fill="white"/></defs>
                  </svg></div>

                  <div className='mx-6 mt-1'>เตรียมการฝากส่ง</div>
                </div>

                <div className="flex">
                  <div><svg width="32" height="60" viewBox="0 0 32 60" fill="none" xmlns="http://www.w3.org/2000/svg"><g ><rect width="32" height="32" rx="16" fill="#D4CBB1"/><rect x="1" y="1" width="30" height="30" rx="15" fill="#D4CBB1"/><rect x="1" y="1" width="30" height="30" rx="15" stroke="#3B3B3B" /><circle cx="16" cy="16" r="5" fill="#3B3B3B"/></g><rect x="15" y="36" width="2" height="20" rx="1" fill="#D4CBB1"/><defs><rect width="32" height="32" rx="16" fill="white"/></defs>
                  </svg></div>

                  <div className='mx-6 mt-1'>ออกจากที่ทำการ/ศูนย์ไปรษณีย์</div>
                </div>

                <div className="flex">
                  <div><svg width="32" height="60" viewBox="0 0 32 60" fill="none" xmlns="http://www.w3.org/2000/svg"><g ><rect width="32" height="32" rx="16" fill="#D4CBB1"/><rect x="1" y="1" width="30" height="30" rx="15" fill="#D4CBB1"/><rect x="1" y="1" width="30" height="30" rx="15" stroke="#3B3B3B" /><circle cx="16" cy="16" r="5" fill="#3B3B3B"/></g><rect x="15" y="36" width="2" height="20" rx="1" fill="#D4CBB1"/><defs><rect width="32" height="32" rx="16" fill="white"/></defs>
                  </svg></div>

                  <div className='mx-6 mt-1'>ถึงที่ทำการไปรษณีย์</div>
                </div>

                <div className="flex">
                  <div><svg width="32" height="60" viewBox="0 0 32 60" fill="none" xmlns="http://www.w3.org/2000/svg"><g ><rect width="32" height="32" rx="16" fill="#D4CBB1"/><rect x="1" y="1" width="30" height="30" rx="15" fill="#D4CBB1"/><rect x="1" y="1" width="30" height="30" rx="15" stroke="#3B3B3B" /><circle cx="16" cy="16" r="5" fill="#3B3B3B"/></g><rect x="15" y="36" width="2" height="20" rx="1" fill="#D4CBB1"/><defs><rect width="32" height="32" rx="16" fill="white"/></defs>
                  </svg></div>

                  <div className='mx-6 mt-1'>อยู่ระหว่างการนำจ่าย</div>
                </div>

                <div className="flex">
                  <div><svg width="32" height="60" viewBox="0 0 32 60" fill="none" xmlns="http://www.w3.org/2000/svg"><g ><rect width="32" height="32" rx="16" fill="#D4CBB1"/><rect x="1" y="1" width="30" height="30" rx="15" fill="#D4CBB1"/><rect x="1" y="1" width="30" height="30" rx="15" stroke="#3B3B3B" /><circle cx="16" cy="16" r="5" fill="#3B3B3B"/></g><rect x="15" y="36" width="2" height="20" rx="1" fill="#D4CBB1"/><defs><rect width="32" height="32" rx="16" fill="white"/></defs>
                  </svg></div>

                  <div className='mx-6 mt-1'>นำจ่ายสำเร็จ</div>
                </div>
        </div>
        )}

         <Footer /> 
        
    </div>
  );
};

export default TrackingPage;