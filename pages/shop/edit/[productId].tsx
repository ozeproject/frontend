import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { useRouter } from 'next/router';
import '../../../app/globals.css';
import Fail from '../../../components/validation/EditFail';
import Success from '../../../components/validation/EditSuccess';

const EditProduct: React.FC = () => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
    const router = useRouter();
    const { productId } = router.query;
    const [product, setProduct] = useState({
      ProductName: '',
      Description: '',
      Price: '',
      StockQuantity: '',
      Color: '',
      IsTrend: 'No',
      IsNew: 'No',
      CategoryId: '',
      ImagePath: '',
      gender:'',
      Size:'',
    });

    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showFailModal, setShowFailModal] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://capstone23.sit.kmutt.ac.th/sj3/api/products/${productId}`);
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

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://capstone23.sit.kmutt.ac.th/sj3/api/products/${productId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
          });

      if (response.ok) {
        setShowSuccessModal(true);
      } else {
        setShowFailModal(true);
        console.error('Failed to update product');
      }
    } catch (error) {
      console.error('Error updating product:', error);
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
                <div className="text-center text-4xl font-semibold text-[#3B3B3B]">EDIT {productId}</div>
            </div>
      </div>
      <div className='w-1/4 mx-auto my-12'>
        <form onSubmit={handleSubmit}>
        <div className='mt-3'>
          <label className='text-[#3B3B3B]'>Upload file</label>
          <input
            type="file"
            id="fileInput"
            className="hidden"
            // value={product.ImagePath}
            // onChange={handleFileUpload} // Add your file upload handling function
          />
          <div className="mt-3"> {/* Add this line for a blank line */}
            <button
              className="border border-[#B9B9B9] rounded-md bg-[#D4CBB1] hover:bg-[#D9D9D9] px-4 py-2"
              // onClick={() => document.getElementById('fileInput').click()}
            >
              Choose file
            </button>
          </div>
        </div>

          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Product name</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="text" name="ProductName" value={product.ProductName} onChange={handleInputChange} required/>
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
            <input
              type="color"
              className="border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]"
              name="Color"
              value={product.Color}
              onChange={handleInputChange}
            />
          </div>

          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Gender</label>
            <select  className="border border-[#B9B9B9] w-full rounded h-12 placeholder:pl-3 bg-[#F2EEE3]" name="IsTrend" value={product.gender} onChange={handleInputChange}>
              <option value="true">Male</option>
              <option value="false">Female</option>
              <option value="false">Other</option>
            </select>
          </div>
          
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Category</label>
            <select  className="border border-[#B9B9B9] w-full rounded h-12 placeholder:pl-3 bg-[#F2EEE3]" name="CategoryId" value={product.CategoryId} onChange={handleInputChange}>
              <option value="Shirt">Shirt</option>
              <option value="Bag">Bag</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>

          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Size</label>
            <select  className="border border-[#B9B9B9] w-full rounded h-12 placeholder:pl-3 bg-[#F2EEE3]" name="Size" value={product.Size} onChange={handleInputChange}>
              <option value="1">FREE SIZE</option>
              <option value="2">L , XL</option>
            </select>
          </div>

          <div className='mt-5'>
            <button className=' py-2 w-full p-1 bg-[#3B3B3B] border rounded-lg border-[#3B3B3B] text-center text-[#FAF9F6]' type="submit">UPDATE</button>
          </div>
        </form>
      </div>
      <Footer />

      {showSuccessModal && <Success onClose={handleCloseModal} />}
      {showFailModal && <Fail onClose={handleCloseModal} />}
    </div>
  );
};

export default EditProduct;
