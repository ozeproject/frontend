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
        //const response = await fetch(`http://localhost:8080/api/products/${productId}`);
        const response = await fetch(`http://10.4.85.33:8080/api/products/${productId}`);
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
        //const response = await fetch(`http://localhost:8080/api/products/${productId}`, {
        const response = await fetch(`http://10.4.85.33:8080/api/products/${productId}`, {
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
      <div className='w-1/3 mx-auto my-12'>
        <form onSubmit={handleSubmit}>
        <div className='m-auto w-1/2 text-center text-5xl font-semibold'>Edit {productId}</div>
          <div className='mt-3'>
            <label>ProductName:</label>
            <input className='border border-gray-600 w-full rounded h-8 placeholder:pl-3' type="text" name="ProductName" value={product.ProductName} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label>Description:</label>
            <input className='border border-gray-600 w-full rounded h-8 placeholder:pl-3' type="text" name="Description" value={product.Description} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label>Price:</label>
            <input className='border border-gray-600 w-full rounded h-8 placeholder:pl-3' type="number" name="Price" value={product.Price} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label>StockQuantity:</label>
            <input className='border border-gray-600 w-full rounded h-8 placeholder:pl-3' type="number" name="StockQuantity" value={product.StockQuantity} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label>Color:</label>
            <input className='border border-gray-600 w-full rounded h-8 placeholder:pl-3' type="text" name="Color" value={product.Color} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label>IsTrend:</label>
            <input className='border border-gray-600 w-full rounded h-8 placeholder:pl-3' type="text" name="IsTrend" value={product.IsTrend} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label>IsNew:</label>
            <input className='border border-gray-600 w-full rounded h-8 placeholder:pl-3' type="text" name="IsNew" value={product.IsNew} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label>CategoryId:</label>
            <input className='border border-gray-600 w-full rounded h-8 placeholder:pl-3' type="number" name="CategoryId" value={product.CategoryId} onChange={handleInputChange} min="1" max="2" />
          </div>

          <div className='mt-3 w-2/12 p-1 bg-slate-50 border rounded border-gray-600 text-center '>
            <button type="submit">Edit</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default EditProduct;
