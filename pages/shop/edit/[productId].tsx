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
      IsTrend: '',
      IsNew: '',
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

  // const [ProductNameError, setProductNameError] = useState<string | null>(null);
  const [PriceError, setPriceError] = useState<string | null>(null);
  const [StockError, setStockQuantityError] = useState<string | null>(null);

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
    if (e.target.name == 'Price') {
      setPriceError(
        e.target.value === '' ? 'Please input price.' : 
        e.target.value < 0 ? 'Price cannot be negative.' : e.target.value == 0 ? 'Price cannot zero' : null
      );
     }
    if (e.target.name == 'StockQuantity') {
      setStockQuantityError(
        e.target.value === '' ? 'Please input stock quantity.' : 
        e.target.value < 0 ? 'stock quantity cannot be negative.' : e.target.value == 0 ? 'quantity cannot zero' : null
      );
     }
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if(product.Price == '') {
      setPriceError( 'Please input price.');
    }
    if(product.StockQuantity == '') {
      setStockQuantityError( 'Please input stock quantity.');
    }
    if(parseInt(product.Price) > 0 && parseInt(product.StockQuantity) > 0){
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
      <div className='text-center pb-8'><img className='mx-auto' src={product.ImagePath} style={{ width: '400px', height: '400px' }}  alt={product.ProductName} loading="lazy"/></div>
        <form onSubmit={handleSubmit}>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Product name: {product.ProductName}</label>
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Description: {product.Description}</label>
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Color:</label>
            <div className='border-solid border-2' style={{ backgroundColor: product.Color, width: '70px', height: '20px', marginLeft: '5px', display: 'inline-block' }}></div>
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Size: {product.Size == '1' ? 'Free' : product.Size == '2' ? 'L, XL' : product.Size}</label> 
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Price</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="number" name="Price" value={product.Price} onChange={handleInputChange} />
            {PriceError && <p className='text-red-700 tracking-wide text-sm mt-2'>{PriceError}</p>}
          </div>
          <div className='mt-3'>
            <label>Stock</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="number" name="StockQuantity" value={product.StockQuantity} onChange={handleInputChange} />
            {StockError && <p className='text-red-700 tracking-wide text-sm mt-2'>{StockError}</p>}
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
