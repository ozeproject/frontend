import React, { useEffect, useState } from 'react';

const Edit = () => {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
    const [userData, setUserData] = useState({
      Name: '',
      Username: '',
      Email: '',
      Phone: '',
      Address: ''
    });
    const [nameError,setNameError] = useState<string | null>(null)
    const [userNameError,setUserNameError] = useState<string | null>(null)
    const [emailError,setEmailError] = useState<string | null>(null)
  
    useEffect(() => {
      const fetchUserProfile = async () => {
          try {
              const response = await fetch(`${process.env.REACT_APP_API_URL}/user/profile`, {
                  method: 'GET',
                  headers: {
                      'Authorization': `Bearer ${token}`
                  }
              });
              if (response.ok) {
                  const userData = await response.json();
                  setUserData(userData);
              } else {
                  console.error('Failed to fetch user profile');
              }
          } catch (error) {
              console.error('Error fetching user profile:', error);
          }
      };
      fetchUserProfile();
  }, [token]); 

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleCancelClick = () => {
    setIsEditMode(false);
  };

  const handleUpdateClick = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setNameError(null);
    setUserNameError(null);
    setEmailError(null);

    if (userData.Email) {
      const isValidEmail = emailRegex.test(userData.Email);
      setEmailError(isValidEmail ? null : 'Invalid email format');
    }
    if(userData.Name === '') {
      setNameError( 'Please input name.');
    }
    if(userData.Username === '') {
      setUserNameError( 'Please input Username.');
    }
   
    if(emailRegex.test(userData.Email) && userData.Name !== '' && userData.Username !== ''){
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/user/profile`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              },
              body: JSON.stringify(userData),
            });
  
        if (response.ok) {
          setIsEditMode(false);
        } else {
          console.error('Failed to update product');
        }
      } catch (error) {
        console.error('Error updating product:', error);
      }
    }
    
  };

  return (
    <div className='w-1/5 mx-auto my-12'>
        <form >
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Name:</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="text" value={userData.Name} name="Name" placeholder="Admin User" readOnly={!isEditMode} onChange={handleInputChange}  />
            {nameError && <p className='text-red-700 tracking-wide text-sm mt-2'>{nameError}</p>}
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Username:</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="text" value={userData.Username } name="Username" placeholder="admin_user" readOnly={!isEditMode} onChange={handleInputChange} />
            {userNameError && <p className='text-red-700 tracking-wide text-sm mt-2'>{userNameError}</p>}
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Email:</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="email" value={userData.Email } name="Email" placeholder="admin@example.com" readOnly={!isEditMode} onChange={handleInputChange}  />
            {emailError && <p className='text-red-700 tracking-wide text-sm mt-2'>{emailError}</p>}
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Phone:</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="number" value={userData.Phone } name="Phone" placeholder="132-456-789" readOnly={!isEditMode} onChange={handleInputChange}  />
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Address:</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="text" value={userData.Address } name="Address" placeholder="13 Admin Street" readOnly={!isEditMode} onChange={handleInputChange}  />
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
                className='w-3/12 rounded-lg p-3 border border-[#3B3B3B] text-center bg-[#3B3B3B] hover:bg-black text-[#FAF9F6]'
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
