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
      const response = await fetch('http://localhost:3001/api/products', {
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
      <div className='w-1/3 mx-auto my-12'>
        <form onSubmit={handleSubmit}>
        <div className='m-auto w-1/2 text-center text-5xl font-semibold'>Create</div>
          <div className='mt-3'>
            <label>ProductName:</label>
            <input className='border border-gray-600 w-full rounded h-8 placeholder:pl-3' type="text" name="ProductName" value={formData.ProductName} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label>Description:</label>
            <input className='border border-gray-600 w-full rounded h-8 placeholder:pl-3' type="text" name="Description" value={formData.Description} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label>Price:</label>
            <input className='border border-gray-600 w-full rounded h-8 placeholder:pl-3' type="number" name="Price" value={formData.Price} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label>StockQuantity:</label>
            <input className='border border-gray-600 w-full rounded h-8 placeholder:pl-3' type="number" name="StockQuantity" value={formData.StockQuantity} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label>Color:</label>
            <input className='border border-gray-600 w-full rounded h-8 placeholder:pl-3' type="text" name="Color" value={formData.Color} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label>IsTrend:</label>
            <input className='border border-gray-600 w-full rounded h-8 placeholder:pl-3' type="text" name="IsTrend" value={formData.IsTrend} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label>IsNew:</label>
            <input className='border border-gray-600 w-full rounded h-8 placeholder:pl-3' type="text" name="IsNew" value={formData.IsNew} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label>CategoryId:</label>
            <input className='border border-gray-600 w-full rounded h-8 placeholder:pl-3' type="number" name="CategoryId" value={formData.CategoryId} onChange={handleInputChange} min="1" max="2" />
          </div>

          <div className='mt-3 w-2/12 p-1 bg-slate-50 border rounded border-gray-600 text-center '>
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Create;
