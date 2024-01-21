import React, { useEffect, useState } from 'react';

interface LoginFailProps {
    onClose: () => void;
}

const LoginFail: React.FC<LoginFailProps> = ({ onClose }) => {

    const handleDoneClick = () => {
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="pdcard p-8 rounded-md shadow-lg w-1/4 h-88">
                <div className='flex justify-center'>
                    <div>
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5003 10.666V15.9993M16.5003 21.3327H16.5137M29.8337 15.9993C29.8337 23.3631 23.8641 29.3327 16.5003 29.3327C9.13653 29.3327 3.16699 23.3631 3.16699 15.9993C3.16699 8.63555 9.13653 2.66602 16.5003 2.66602C23.8641 2.66602 29.8337 8.63555 29.8337 15.9993Z" stroke="#D92D20" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className='text-center'>
                    <div className='text-red-600 mt-8 text-2xl'>Login failed!</div>
                    <div className='mt-4 font-semibold'>Please check _______Reaction_______.</div>
                    <div>
                        <button
                            className='mt-8 w-3/12 m-auto rounded-lg p-3 bg-red-500 text-white border border-gray-600 text-center'
                            type="button"
                            onClick={handleDoneClick}
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginFail;
