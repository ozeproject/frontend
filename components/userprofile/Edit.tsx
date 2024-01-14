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
            <label>Name:</label>
            <input className='border border-gray-600 w-full rounded h-8 placeholder:pl-3' type="text" name="ProductName" placeholder="Admin User"/>
          </div>
          <div className='mt-3'>
            <label>Username:</label>
            <input className='border border-gray-600 w-full rounded h-8 placeholder:pl-3' type="text" name="Description" placeholder="admin_user" />
          </div>
          <div className='mt-3'>
            <label>Email:</label>
            <input className='border border-gray-600 w-full rounded h-8 placeholder:pl-3' type="number" name="Price" placeholder="admin@example.com" />
          </div>
          <div className='mt-3'>
            <label>Phone:</label>
            <input className='border border-gray-600 w-full rounded h-8 placeholder:pl-3' type="number" name="StockQuantity" placeholder="132-456-789" />
          </div>
          <div className='mt-3'>
            <label>Address:</label>
            <input className='border border-gray-600 w-full rounded h-8 placeholder:pl-3' type="text" name="Color" placeholder="13 Admin Street" />
          </div>
         
          <div className='mt-3 text-xs flex justify-end'>
          {!isEditMode && (
            <button
              className='w-3/12 rounded-lg p-3 bg-slate-50 border border-gray-600 text-center'
              type="button"
              onClick={handleEditClick}
            >
              EDIT
            </button>
          )}

          {isEditMode && (
            <>
              <button
                className='w-3/12 mx-2 rounded-lg p-3 bg-slate-50 border border-gray-600 text-center'
                type="button"
                onClick={handleCancelClick}
              >
                CANCEL
              </button>

              <button
                className='w-3/12 rounded-lg p-3 bg-slate-50 border border-gray-600 text-center'
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
