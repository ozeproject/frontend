// pages/shop/edit/[productId].tsx

import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { useRouter } from 'next/router';
import '../../../app/globals.css';

const EditProduct: React.FC = () => {
    const router = useRouter();
    const { productId } = router.query;
    const [product, setProduct] = useState({
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

  // Fetch product details based on productId
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  // Handler to update form data on input change
  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  // Handler for form submission
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
        const response = await fetch(`http://localhost:3001/api/products/${productId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
          });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Log the response
      } else {
        console.error('Failed to update product');
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Edit Product {productId}</h1>
      <form onSubmit={handleSubmit}>
        {/* Render form fields similar to the create page */}
        <div>
          <label>ProductName:</label>
          <input type="text" name="ProductName" value={product.ProductName} onChange={handleInputChange} />
        </div>
        <div>
            <label>Description:</label>
            <input type="text" name="Description" value={product.Description} onChange={handleInputChange} />
          </div>
          <div>
            <label>Price:</label>
            <input type="number" name="Price" value={product.Price} onChange={handleInputChange} />
          </div>
          <div>
            <label>StockQuantity:</label>
            <input type="number" name="StockQuantity" value={product.StockQuantity} onChange={handleInputChange} />
          </div>
          <div>
            <label>Color:</label>
            <input type="text" name="Color" value={product.Color} onChange={handleInputChange} />
          </div>
          <div>
            <label>IsTrend:</label>
            <input type="text" name="IsTrend" value={product.IsTrend} onChange={handleInputChange} />
          </div>
          <div>
            <label>IsNew:</label>
            <input type="text" name="IsNew" value={product.IsNew} onChange={handleInputChange} />
          </div>
          <div>
            <label>CategoryId:</label>
            <input type="number" name="CategoryId" value={product.CategoryId} onChange={handleInputChange} min="1" max="2" />
          </div>
        {/* Add more fields based on your product structure */}
        <div>
          <button type="submit">Update Product</button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default EditProduct;
