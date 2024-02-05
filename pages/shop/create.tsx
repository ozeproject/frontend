import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../app/globals.css';

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
      //const response = await fetch('http://localhost:8080/api/products', {
      const response = await fetch('https://capstone23.sit.kmutt.ac.th/sj3/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Log the response
      } else {
        console.error('Failed to create product');
      }
    } catch (error) {
      console.error('Error creating product:', error);
    }
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
            <label className='text-[#3B3B3B]'>Product Name</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="text" name="ProductName" value={formData.ProductName} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Description</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="text" name="Description" value={formData.Description} onChange={handleInputChange} />
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
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="text" name="Color" value={formData.Color} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Trend</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="text" name="IsTrend" value={formData.IsTrend} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>New</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="text" name="IsNew" value={formData.IsNew} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Category</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="number" name="CategoryId" value={formData.CategoryId} onChange={handleInputChange} min="1" max="2" />
          </div>

          <div>
            <button className='mt-3 w-2/12 p-1 bg-slate-50 border rounded border-[#3B3B3B] text-center bg-[#3B3B3B] hover:bg-black text-[#FAF9F6]' type="submit">CREATE</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Create;
