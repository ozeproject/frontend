import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Edit from '../../components/userprofile/Edit';
import History from '../../components/userprofile/History';
import '../../app/globals.css';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('information');

  const handleTabChange = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div className="">
      <Navbar />
      <div>
        <div className="border-b-2 border-gray-500">
          <div className=" m-auto w-1/2 mt-12 lay1">
            <div>
              <h1 className='text-center text-5xl text-[#3B3B3B]'>PROFILE</h1>
            </div>
          </div>

          <div className='menutitle m-auto w-1/2 p-2 lay1 flex flex-row '>
            <span
              className={`m-4 text-[#3B3B3B] hover:underline ${
                activeTab === 'information' ? 'underline' : ''
              }`}
              onClick={() => handleTabChange('information')}
            >
              Information
            </span>
            <span
              className={`m-4 text-[#3B3B3B] hover:underline ${
                activeTab === 'orderHistory' ? 'underline' : ''
              }`}
              onClick={() => handleTabChange('orderHistory')}
            >
              Order History
            </span>
          </div>
        </div>
      </div>

      {activeTab === 'information' && <Edit />}
      {activeTab === 'orderHistory' && <History />}

      <Footer />
    </div>
  );
};

export default UserProfile;
