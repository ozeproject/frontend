import React, { useEffect, useState } from 'react';
import CreateFail from '../validation/PaymentFail';

const Status = () => {
    const [productCount, setProductCount] = useState<number>(0);
    const [showModal, setShowModal] = useState(false);
    const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;


    const handleGoShoppingClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        fetch('https://capstone23.sit.kmutt.ac.th/sj3/api/productCount')
            .then((response) => response.json())
            .then((data) => setProductCount(data.count))
            .catch((error) => console.error('Error fetching product count:', error));
    }, []);

    return (
        <div className='m-auto p-40'>
            <div className="text-center">
                <div className='text-xl font-semibold text-center'>Your cart is empty</div>
                <div className='mt-8 text-base'>
                    <button
                        className='m-auto rounded-lg p-3 bg-slate-50 border border-gray-600 text-center'
                        type="button"
                        onClick={handleGoShoppingClick}
                    >
                        GO SHOPPING
                    </button>
                </div>
            </div>
            {showModal && <CreateFail onClose={handleCloseModal} />}
        </div>
    );
};

export default Status;
