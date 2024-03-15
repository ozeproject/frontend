import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../app/globals.css';
import Fail from '../../components/validation/CreateFail';
import Success from '../../components/validation/CreateSuccess';
import { storage } from '@/app/firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const Create = () => {
  const [formData, setFormData] = useState({
    ProductName: '',
    Description: '',
    Price: '',
    StockQuantity: '',
    Color: '',
    IsTrend: 'No',
    IsNew: 'No',
    CategoryId: '1',
    ImagePath: '',
    gender:'Male',
    Size:'2',
  });
  // const [file,setFile] = useState();
  const [file,setFile] = useState<File | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);
  const [ProductNameError, setProductNameError] = useState<string | null>(null);
  const [StockError, setStockQuantityError] = useState<string | null>(null);
  const [PriceError, setPriceError] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (e.target.name == 'ProductName') {
      setProductNameError(e.target.value === '' ? 'Please input product name.' : null);
    }
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
    console.log(formData);
    
    if(formData.ProductName == '') {
      setProductNameError( 'Please input name.');
    }
    if(formData.StockQuantity == '') {
      setStockQuantityError( 'Please input StockQuantity.');
    }
    if(formData.Price == '') {
      setPriceError( 'Please input Price.');
    }
    // formData.ImagePath = await uploadImage(formData.ProductName,file)
    if(file == undefined) {
      setFileError( 'Please upload image.');
    }
    if(formData.ProductName !== '' && parseInt(formData.StockQuantity) > 0 && parseInt(formData.Price) > 0 && file != undefined){
      formData.ImagePath = await uploadImage(formData.ProductName,file)
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
          ImagePath: '',
          gender:'',
          Size:'',
        });
      } else {
        setShowFailModal(true);
        console.error('Failed to create product');
      }
    } catch (error) {
      console.error('Error creating product:', error);
      setShowFailModal(true);
    }
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    setShowFailModal(false);
  };

  const uploadImage = async (path: string, file: any) => {
    // const imageRef = storageRef.child(`images/${file.name}`);
    try {
      const storageRef = ref(storage,path);
      const snapshot = await uploadBytes(storageRef,file)
      const linkFile = await getDownloadURL(snapshot.ref)
      return linkFile;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };
  const handleFileUpload = (e:any) =>{
    setFile(e.target.files[0]) 
    setFileError(null);
    console.log('file',file)
  }

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
          <label className='text-[#3B3B3B]'>Upload file</label>
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={handleFileUpload}
          />
          <div className="mt-3"> 
          <label htmlFor="fileInput"><div style={{width:'fit-content'}} 
              className="border border-[#B9B9B9] rounded-md bg-[#D4CBB1] hover:bg-[#D9D9D9] px-4 py-2"
            >
              Choose file
            </div>
          </label>
            {file && (
              <div className="mt-2">
                {file.name}
              </div>
            )}
            {fileError && <p className='text-red-700 tracking-wide text-sm mt-2'>{fileError}</p>}
          </div>
          </div>

          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>ProductName</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="text" name="ProductName" value={formData.ProductName} onChange={handleInputChange} />
            {ProductNameError && <p className='text-red-700 tracking-wide text-sm mt-2'>{ProductNameError}</p>}
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Description</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="text" name="Description"  value={formData.Description} onChange={handleInputChange} />
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Price</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="number" name="Price" value={formData.Price} onChange={handleInputChange} />
            {PriceError && <p className='text-red-700 tracking-wide text-sm mt-2'>{PriceError}</p>}
          </div>
          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Stock</label>
            <input className='border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' type="number" name="StockQuantity" value={formData.StockQuantity} onChange={handleInputChange} />
            {StockError && <p className='text-red-700 tracking-wide text-sm mt-2'>{StockError}</p>}
          </div>

          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Color</label>
            <input
              type="color"
              className="border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]"
              name="Color"
              value={formData.Color}
              onChange={handleInputChange}
            />
          </div>

          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Gender</label>
            <select  
              className="border border-[#B9B9B9] w-full rounded h-12 placeholder:pl-3 bg-[#F2EEE3]" 
              name="gender" 
              value={formData.gender} 
              onChange={handleInputChange} 
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Category</label>
            <select  className="border border-[#B9B9B9] w-full rounded h-12 placeholder:pl-3 bg-[#F2EEE3]" name="CategoryId" value={formData.CategoryId} onChange={handleInputChange}>
              <option value="1">Shirt</option>
              <option value="2">Accessories</option>
            </select>
          </div>

          <div className='mt-3'>
            <label className='text-[#3B3B3B]'>Size</label>
            <select  className="border border-[#B9B9B9] w-full rounded h-12 placeholder:pl-3 bg-[#F2EEE3]" name="Size" value={formData.Size} onChange={handleInputChange}>
              <option value="1">FREE SIZE</option>
              <option value="2">L , XL</option>
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
