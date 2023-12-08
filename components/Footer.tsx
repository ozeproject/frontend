import React from 'react';

const Footer = () => {
  return (
    <div className='footer border-y-2 border-gray-500 '>
        <div className=" footerin ">
                <div className="flex">
                    <div className='text-start m-6'>
                        <div className='font-bold mb-3'>SHOP</div>
                        <div className='font-medium'>
                            <div>NEW ITEMS</div>
                            <div>MEN</div>
                            <div>WOMEN</div>
                            <div>ACCESSORIES</div>
                        </div>
                    </div>

                    <div className='text-start m-6'>
                        <div className='font-bold mb-3'>HELP</div>
                            <div className='font-medium'>
                            <div>CONTACT US</div>
                            <div>TRACKING</div>
                        </div>
                    </div>
                </div>
                
        <div className='text-center mb-5 m-auto'>
                &copy; 2023 OZE
        </div>
        </div>



    </div>
  );
};

export default Footer;
