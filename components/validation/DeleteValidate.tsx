import React, { useEffect, useState } from 'react';

interface DeleteProps {
    onClose: () => void;
    onDelete: () => void; 
}

const Delete: React.FC<DeleteProps> = ({ onClose, onDelete }) => {

    const handleDoneClick = () => {
        onClose();
    };

    const handleDeleteClick = () => {
        onDelete();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="pdcard p-8 rounded-md shadow-lg w-1/4 h-88">
                <div className='flex justify-center'>
                    <div>
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_574_6367"  maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="32">
                        <rect x="0.5" width="32" height="32" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_574_6367)">
                        <path d="M10.2436 27.333C9.57864 27.333 9.0107 27.0976 8.53977 26.6266C8.06881 26.1557 7.83333 25.5877 7.83333 24.9228V7.99975H6.5V5.99978H12.5V4.82031H20.5V5.99978H26.4999V7.99975H25.1666V24.9228C25.1666 25.5963 24.9333 26.1664 24.4666 26.633C23.9999 27.0997 23.4298 27.333 22.7563 27.333H10.2436ZM23.1666 7.99975H9.8333V24.9228C9.8333 25.0424 9.87177 25.1407 9.9487 25.2177C10.0256 25.2946 10.1239 25.3331 10.2436 25.3331H22.7563C22.8589 25.3331 22.9529 25.2903 23.0384 25.2049C23.1239 25.1194 23.1666 25.0254 23.1666 24.9228V7.99975ZM13.0385 22.6664H15.0384V10.6664H13.0385V22.6664ZM17.9615 22.6664H19.9615V10.6664H17.9615V22.6664Z" fill="#1C1B1F"/>
                        </g>
                        </svg>
                    </div>
                </div>
                <div className='text-center'>
                    <div className='mt-8 text-2xl'>DELETE ITEM</div>
                    <div className='mt-4 text-xl font-semibold'>Are you sure to delete this item.</div>
                    <div className='flex justify-center'>
                        <div className='w-1/3'>
                            <button
                                className='mt-8  m-auto rounded-lg p-3 bg-[#F2EEE3] text-[#3B3B3B] border border-gray-600 text-center'
                                type="button"
                                onClick={handleDoneClick}
                            >
                                CANCEL
                            </button>
                        </div>
                        <div className='w-1/3'>
                            <button
                                className='mt-8  m-auto rounded-lg p-3 bg-red-500 text-white border border-gray-600 text-center'
                                type="button"
                                onClick={handleDeleteClick}
                            >
                                DELETE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delete;
