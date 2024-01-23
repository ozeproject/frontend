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
      <div className="border-b-2 border-gray-500">
            <div className="lay2 p-12">
                <div className="text-center text-4xl font-semibold text-[#3B3B3B]">EDIT {productId}</div>
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
            <label className='text-[#3B3B3B]'>Product name</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="text" name="ProductName" value={product.ProductName} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Description</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="text" name="Description" value={product.Description} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Price</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="number" name="Price" value={product.Price} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label>Stock</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="number" name="StockQuantity" value={product.StockQuantity} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Color</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="text" name="Color" value={product.Color} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Trend</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="text" name="IsTrend" value={product.IsTrend} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>New</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="text" name="IsNew" value={product.IsNew} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Category</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="number" name="CategoryId" value={product.CategoryId} onChange={handleInputChange} min="1" max="2" />
          </div>

          <div>
            <button className='mt-3 w-2/12 p-1 bg-slate-50 border rounded border-[#3B3B3B] text-center bg-[#3B3B3B] text-[#FAF9F6]' type="submit">UPDATE</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default EditProduct;
