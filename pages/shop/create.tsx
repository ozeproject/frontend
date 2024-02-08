import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../app/globals.css';
import Fail from '../../components/validation/CreateFail';
import Success from '../../components/validation/CreateSuccess';

const Create = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    ProductName: '',
    Description: '',
    Price: '',
    StockQuantity: '',
    Color: '',
    IsTrend: '',
    IsNew: '',
    CategoryId: '',
    ImagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWsPfSz6bOW4iOxwZ8krfFxShTYYFVrXM7Q&usqp=CAU',
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);

  // Handler to update form data on input change
  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handler for form submission
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch('https://capstone23.sit.kmutt.ac.th/sj3/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccessModal(true);
        setFormData({
          ProductName: '',
          Description: '',
          Price: '',
          StockQuantity: '',
          Color: '',
          IsTrend: '',
          IsNew: '',
          CategoryId: '',
          ImagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWsPfSz6bOW4iOxwZ8krfFxShTYYFVrXM7Q&usqp=CAU',
        });
      } else {
        setShowFailModal(true);
        console.error('Failed to create product');
      }
    } catch (error) {
      console.error('Error creating product:', error);
      setShowFailModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    setShowFailModal(false);
  };

  return (
    <div>
      <Navbar />
      <div className="border-b-2 border-gray-500">
            <div className="lay2 p-12">
                <div className="text-center text-4xl font-semibold text-[#3B3B3B]">CREATE</div>
            </div>
      </div>
      <div className='w-1/4 mx-auto my-12'>
        <form onSubmit={handleSubmit}>
        <div className='mt-3'>
        <div className="border-2 border-[#B9B9B9] p-2 h-44 rounded-md bg-[#F2EEE3]">
            <div className='text-[#3B3B3B]'>Upload file</div>
        </div>
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>ProductName</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="text" name="ProductName" value={formData.ProductName} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Description</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="text" name="Description"  value={formData.Description} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Price</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="number" name="Price" value={formData.Price} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Stock</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="number" name="StockQuantity" value={formData.StockQuantity} onChange={handleInputChange} />
          </div>

          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Color</label>
            <select  className="border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]" name="Color" value={formData.Color} onChange={handleInputChange}>
              <option value="Black">Black</option>
              <option value="White">White</option>
            </select>
          </div>

          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Trend</label>
            <select  className="border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]" name="IsTrend" value={formData.IsTrend} onChange={handleInputChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>New</label>
            <select  className="border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]" name="IsNew" value={formData.IsNew} onChange={handleInputChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Category</label>
            <select  className="border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]" name="CategoryId" value={formData.CategoryId} onChange={handleInputChange}>
              <option value="Shirt">Shirt</option>
              <option value="Bag">Bag</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>

          <div className='mt-5'>
            <button className=' py-2 w-full p-1 bg-[#3B3B3B] border rounded-lg border-[#3B3B3B] text-center text-[#FAF9F6]' type="submit">CREATE</button>
          </div>
        </form>
      </div>
      <Footer />
      {/* Success Modal */}
      {showSuccessModal && <Success onClose={handleCloseModal} />}
      {/* Fail Modal */}
      {showFailModal && <Fail onClose={handleCloseModal} />}
    </div>
  );
};

export default Create;
