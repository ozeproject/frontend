import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../app/globals.css';

const HomePage = () => {


  return (
    <div className="">
        <Navbar />
        <div className="border-b-2 border-gray-500">
            <div className=" p-12">
                <div className="text-center text-4xl font-semibold">CONTACT US</div>
            </div>
        </div>
        <div className="">
            <div className="w-4/6 px-12 my-20 mx-auto">
                <div className="">ความเป็นมาโปรเจ็ค ตัวเว็บเกี่ยวกับอะไร</div>
                <div className="">ข้อมูลวิชาและมหาลัย</div>
                <div className="">รูป 1 - 2 รูป</div>
                <div className="">ข้อมูลติดต่อของสมาชิกแต่ละคน + github</div>
            </div>
        </div>
         <Footer /> 
        
    </div>
  );
};

export default HomePage;