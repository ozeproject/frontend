import React, { useEffect, useState } from 'react';
const Edit = () => {
    const [productCount, setProductCount] = useState<number>(0);
    const [isEditMode, setIsEditMode] = useState<boolean>(false);


  useEffect(() => {
    fetch('http://10.4.85.33:8080/api/productCount')
      .then((response) => response.json())
      .then((data) => setProductCount(data.count))
      .catch((error) => console.error('Error fetching product count:', error));
  }, []);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleCancelClick = () => {
    setIsEditMode(false);
  };

  const handleUpdateClick = () => {
    // Implement logic to update data
    setIsEditMode(false);
  };

  return (
    <div className='w-1/5 mx-auto my-12'>
        <form >
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Name:</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="text" name="ProductName" placeholder="Admin User"/>
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Username:</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="text" name="Description" placeholder="admin_user" />
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Email:</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="number" name="Price" placeholder="admin@example.com" />
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Phone:</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="number" name="StockQuantity" placeholder="132-456-789" />
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Address:</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="text" name="Color" placeholder="13 Admin Street" />
          </div>
         
          <div className='mt-3 text-xs flex justify-end'>
          {!isEditMode && (
            <button
              className='w-3/12 rounded-lg p-3 bg-[#F2EEE3] hover:bg-[#D4CBB1] border border-[#B9B9B9] text-center text-[#3B3B3B]'
              type="button"
              onClick={handleEditClick}
            >
              EDIT
            </button>
          )}

          {isEditMode && (
            <>
              <button
                className='w-3/12 mx-2 rounded-lg p-3 bg-[#F2EEE3] hover:bg-[#D4CBB1] border border-[#B9B9B9] text-center text-[#3B3B3B]'
                type="button"
                onClick={handleCancelClick}
              >
                CANCEL
              </button>

              <button
                className='w-3/12 rounded-lg p-3 bg-slate-50 border border-[#3B3B3B] text-center bg-[#3B3B3B] hover:bg-black text-[#FAF9F6]'
                type="button"
                onClick={handleUpdateClick}
              >
                UPDATE
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Edit;
