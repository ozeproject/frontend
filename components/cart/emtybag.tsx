import React, { useEffect, useState } from 'react';
import CreateFail from '../validation/PaymentFail';

const EmtyBag = () => {
    const [productCount, setProductCount] = useState<number>(0);
    const [showModal, setShowModal] = useState(false);

    const handleGoShoppingClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        fetch('http://10.4.85.33:8080/api/productCount')
            .then((response) => response.json())
            .then((data) => setProductCount(data.count))
            .catch((error) => console.error('Error fetching product count:', error));
    }, []);

    return (
        <div className='m-auto p-40'>
            <div className="text-center">
                <div className='text-xl font-semibold text-center'>Your cart is empty</div>
                <div className='mt-8 text-base'>
                    {/* Use an onClick event to trigger the modal display */}
                    <button
                        className='m-auto rounded-lg p-3 bg-slate-50 border border-gray-600 text-center'
                        type="button"
                        onClick={handleGoShoppingClick}
                    >
                        GO SHOPPING
                    </button>
                </div>
            </div>
            {/* Render the modal if showModal is true */}
            {showModal && <CreateFail onClose={handleCloseModal} />}
        </div>
    );
};

export default EmtyBag;
