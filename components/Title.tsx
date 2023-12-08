// components/Navbar.js
import React from 'react';


const Title = () => {
  return (
    <div>
        <div className="border-b-2 border-gray-500">
            <div className='menutitle m-auto w-1/2 p-2 lay1 flex flex-row '>
                <span className='m-2'> HOME </span>
                <span className='m-2'>{'>'}</span>
                <span className='m-2'> MENS </span>
                <span className='m-2'>{'>'}</span>
                <span className='m-2'> T-SHIRT</span>
            </div>
            
            <div className="lay2">
                <div><h1 className='text-center text-5xl'>T-SHIRTS</h1></div>
                
            </div>

            <div className='menutitle m-auto w-1/2 p-2 lay1 flex flex-row '>
                <span className='m-4'>All items</span>
                <span className='m-4'>T-Shirts</span>
                <span className='m-4'>Shirts</span>
            </div>
        </div>

        


    </div>
  );
};

export default Title;
