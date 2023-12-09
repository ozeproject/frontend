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
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
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
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>ProductName:</label>
            <input type="text" name="ProductName" value={formData.ProductName} onChange={handleInputChange} />
          </div>
          <div>
            <label>Description:</label>
            <input type="text" name="Description" value={formData.Description} onChange={handleInputChange} />
          </div>
          <div>
            <label>Price:</label>
            <input type="number" name="Price" value={formData.Price} onChange={handleInputChange} />
          </div>
          <div>
            <label>StockQuantity:</label>
            <input type="number" name="StockQuantity" value={formData.StockQuantity} onChange={handleInputChange} />
          </div>
          <div>
            <label>Color:</label>
            <input type="text" name="Color" value={formData.Color} onChange={handleInputChange} />
          </div>
          <div>
            <label>IsTrend:</label>
            <input type="text" name="IsTrend" value={formData.IsTrend} onChange={handleInputChange} />
          </div>
          <div>
            <label>IsNew:</label>
            <input type="text" name="IsNew" value={formData.IsNew} onChange={handleInputChange} />
          </div>
          <div>
            <label>CategoryId:</label>
            <input type="number" name="CategoryId" value={formData.CategoryId} onChange={handleInputChange} min="1" max="2" />
          </div>

          <div>
            <button type="submit">Create Product</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Create;
