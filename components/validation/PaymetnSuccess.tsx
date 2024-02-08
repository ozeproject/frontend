import React, { useEffect, useState } from 'react';

interface LoginSuccessProps {
    onClose: () => void;
}

const LoginSuccess: React.FC<LoginSuccessProps> = ({ onClose }) => {

    const handleDoneClick = () => {
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="pdcard p-8 rounded-md shadow-lg w-1/4 h-88">
                <div className='flex justify-center'>
                    <div>
                        <svg width="50" height="49" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.2486 27.1543L7.86915 23.144L3.35121 22.1543L3.79225 17.503L0.730713 14.0005L3.79225 10.4979L3.35121 5.84668L7.86915 4.85695L10.2486 0.84668L14.4999 2.65181L18.7511 0.84668L21.1306 4.85695L25.6485 5.84668L25.2075 10.4979L28.269 14.0005L25.2075 17.503L25.6485 22.1543L21.1306 23.144L18.7511 27.1542L14.4999 25.3491L10.2486 27.1543ZM11.0999 24.6005L14.4999 23.1594L17.9409 24.6005L19.8332 21.4005L23.4999 20.5594L23.1665 16.8005L25.6332 14.0005L23.1665 11.1594L23.4999 7.40048L19.8332 6.60048L17.8999 3.40048L14.4999 4.84151L11.0588 3.40048L9.16655 6.60048L5.49988 7.40048L5.83321 11.1594L3.36655 14.0005L5.83321 16.8005L5.49988 20.6005L9.16655 21.4005L11.0999 24.6005ZM13.0999 18.2722L20.1716 11.2005L18.7665 9.75435L13.0999 15.421L10.2332 12.5954L8.82811 14.0005L13.0999 18.2722Z" fill="#12B76A"/>
                        </svg>
                    </div>
                </div>
                <div className='text-center'>
                    <div className='text-green-600 mt-8 text-2xl'>Payment completed!</div>
                    <div className='mt-4 font-semibold text-xl'>You have successfully payment</div>
                    <div>
                        <button
                            className='mt-8 w-3/12 m-auto rounded-lg p-3 bg-[#3B3B3B] border border-gray-600 text-center text-[#FAF9F6]'
                            type="button"
                            onClick={handleDoneClick}
                        >
                            DONE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSuccess;
