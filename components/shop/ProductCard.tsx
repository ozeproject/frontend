import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import '../../app/globals.css';
 
interface Product {
  ProductId: number;
  ProductName: string;
  Description: string;
  Price: string;
  StockQuantity: string;
  Color: string;
  IsTrend: string;
  IsNew: string;
  CategoryId: string;
  ImagePath: string;
}

const ProductCard = () => {
  const itemsToMap = [1, 2, 3, 4, 5];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null); 
  const [products, setProducts] = useState<Product[]>([]);
  
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://10.4.85.33:8080/api/products'); // Update the URL accordingly
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          setError('Failed to fetch products. Please try again.');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error fetching products. Please try again.');
      }
    };

    fetchProducts();
  }, []); // Run the effect only once when the component mounts

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    useEffect(() => {
      if (isModalOpen) {
        // Disable scrolling on the body when the modal is open
        document.body.style.overflow = 'hidden';
      } else {
        // Enable scrolling on the body when the modal is closed
        document.body.style.overflow = 'auto';
      }
  
      // Clean up the effect
      const cleanup = () => {
        document.body.style.overflow = 'auto';
      };
  
      return cleanup;
    }, [isModalOpen]);
  
  
  return (
  <div className={`grid grid-cols-4   border-gray-500`}>
     {/* {itemsToMap.map((product, index) => (  */}
     {products.map((product, index) => (
    <div className=" border-gray-500 border-b-2 border-r-2">
      <Link href={`/detail/${product.ProductId}`}>
        <div className="product p-6 ">
                        
            <div className='text-right'><span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <mask id="mask0_510_1236" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
              <rect width="32" height="32" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_510_1236)">
              <path d="M16 26.2052L14.9897 25.2923C12.8137 23.3043 11.0137 21.6026 9.58973 20.1872C8.1658 18.7718 7.04187 17.5235 6.21793 16.4423C5.394 15.3611 4.81837 14.3829 4.49103 13.5077C4.16368 12.6325 4 11.7522 4 10.8667C4 9.17097 4.57607 7.74703 5.7282 6.5949C6.88033 5.44277 8.30427 4.8667 10 4.8667C11.1726 4.8667 12.2726 5.1667 13.3 5.7667C14.3274 6.3667 15.2274 7.23934 16 8.38463C16.7726 7.23934 17.6726 6.3667 18.7 5.7667C19.7274 5.1667 20.8274 4.8667 22 4.8667C23.6957 4.8667 25.1197 5.44277 26.2718 6.5949C27.4239 7.74703 28 9.17097 28 10.8667C28 11.7522 27.8363 12.6325 27.509 13.5077C27.1816 14.3829 26.606 15.3611 25.7821 16.4423C24.9581 17.5235 23.8385 18.7718 22.4231 20.1872C21.0077 21.6026 19.2034 23.3043 17.0103 25.2923L16 26.2052ZM16 24.4C18.1333 22.4718 19.8889 20.8201 21.2667 19.4449C22.6444 18.0697 23.7333 16.8765 24.5333 15.8654C25.3333 14.8543 25.8889 13.9586 26.2 13.1782C26.5111 12.3979 26.6667 11.6274 26.6667 10.8667C26.6667 9.53337 26.2222 8.42226 25.3333 7.53337C24.4444 6.64448 23.3333 6.20003 22 6.20003C20.9385 6.20003 19.959 6.50302 19.0615 7.109C18.1641 7.71498 17.3607 8.62738 16.6513 9.8462H15.3487C14.6222 8.61029 13.8145 7.69362 12.9256 7.0962C12.0367 6.49876 11.0615 6.20003 10 6.20003C8.68376 6.20003 7.57692 6.64448 6.6795 7.53337C5.78206 8.42226 5.33333 9.53337 5.33333 10.8667C5.33333 11.6274 5.48889 12.3979 5.8 13.1782C6.11111 13.9586 6.66667 14.8543 7.46667 15.8654C8.26667 16.8765 9.35556 18.0654 10.7333 19.4321C12.1111 20.7988 13.8667 22.4547 16 24.4Z" fill="#3B3B3B"/>
              </g>
            </svg></span></div>

            <div className='text-center '><img src={product.ImagePath} alt="White" /></div>

            <div className='text-center'><span>{product.ProductName} </span></div>
            
            <div className='text-center font-bold text-3xl mt-4'><span>฿{product.Price}</span></div>
            
            <div className="hideforhold mt-4">
                <div className="color-options text-center">
                    {product.Color === 'White' ? (
                                <button className="white-button  border-solid border-2 colorinput  w-5 h-5 p-1  bg-white"></button>
                            ) : product.Color === 'Black' ? (
                              <button className="black-button  border-solid border-2 colorinput w-5 h-5 p-1  bg-black"></button>
                            ) : null}
                </div>
            
                <div className='mt-4'>
                    <button className="white-button  border-solid border-2  quickbtn  rounded-md p-2 mx-2 w-full"
                    onClick={openModal}>
                        Quick Shop
                    </button>
                </div>
                
            </div>
            
            <div></div>

            {isModalOpen && (
              //Modal Product
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="modalproduct pdcard p-8 rounded-md shadow-lg z-10 flex">
                      <div className='w-full p-4'>
                          <div className='h-3/4'>
                              <p><img src={product.ImagePath}  alt="White" /></p>
                          </div>
                          
                          <div className='h-1/4'>
                              <div className='flex justify-between'>
                             
                                  <p><img src={product.ImagePath}  alt="White" /></p>
                                  <p><img src={product.ImagePath}  alt="White" /></p>
                                  <p><img src={product.ImagePath}  alt="White" /></p>
                                  <p><img src={product.ImagePath}  alt="White" /></p>
                              </div>
                          </div>
                      </div>

                      <div className='w-full p-4'>
                          <div className='text-end'>
                              <button
                                className="text-2xl text-black items-end"
                                onClick={closeModal}
                                >
                                X
                              </button>
                          </div>
                          
                          <div>
                              <p className='text-2xl font-semibold tracking-normal'>{product.ProductName}  </p>
                              <p className='text-2xl font-semibold mt-2 tracking-normal'>฿{product.Price} </p>
                              <div className='mt-4'>
                                  <p className='font-semibold tracking-normal'>COLORS:</p>
                                  <div className='flex mt-2'>
                                  {product.Color === 'White' ? (
                                        <button className="white-button  border-solid border-2 colorinput  w-8 h-8 p-1  bg-white"></button>
                                    ) : product.Color === 'Black' ? (
                                      <button className="black-button  border-solid border-2 colorinput  w-8 h-8 p-1  bg-black"></button>
                                    ) : null}
                                  </div>
                              </div>
                              <div className='mt-6'>
                                  <p className='font-semibold tracking-normal'>SIZES:</p>
                                  <p className='text-red-700 tracking-wide text-sm mt-2'>Please select your size first</p>
                                  <div className='flex mt-1'>
                                      <button className="white-button  border-solid border-2 border-gray-500 rounded-md  w-8 h-8 p-1  inputCard font-bold text-center text-sm">L</button>
                                      <button className="black-button  border-solid border-2 border-gray-500  rounded-md w-8 h-8 p-1 ml-3 inputCard font-bold text-center text-sm">XL</button>
                                  </div>
                                  <p className='underline tracking-wide text-sm mt-1'>Size guide</p>
                              </div>
                              <div>
                                  <p className='font-semibold tracking-normal mt-5'>QUANTITY::</p>
                                  <p className='text-red-700 tracking-wide text-sm mt-2'>Only 1 item left you cannot add to the cart</p>
                                  <div className='flex mt-1'>
                                      <button className="first-button  border-y-2 border-l-2 border-2 border-gray-500 rounded-l-lg  w-10 h-10 p-1  inputCard">{'-'}</button>
                                      <button className="mid-button  border-y-2 border-gray-500  w-10 h-10 p-1  inputCard">1</button>
                                      <button className="last-button  border-y-2 border-r-2 border-2 border-gray-500 rounded-r-lg  w-10 h-10 p-1  inputCard">+</button>
                                      <span className='mt-4 ml-2'>{'('}{product.StockQuantity}{')'}</span>
                                  </div>
                              </div>
                          </div>

                          <div className='mt-16'>
                              <div className='flex '>
                                  <div>
                                    <button className="last-button  border-y-2 border-r-2 border-2 border-gray-500 rounded-lg p-2  w-48 h-14  ckbtn">CHECKOUT</button>
                                  </div>
                                  
                                  <div className='ml-4'>
                                    <button className="last-button  border-y-2 border-r-2 border-2 border-gray-500 rounded-lg  p-2 w-48 h-14 addcrt">ADD TO BAG</button>
                                  </div>
                                  
                                  <div className='ml-4 '>
                                    <button className="last-button    "><svg xmlns="http://www.w3.org/2000/svg" width="48" height="60" viewBox="0 0 32 33" fill="none">
                                    <mask id="mask0_510_546"  maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="60">
                                        <rect y="0.5" width="32" height="32" fill="#D9D9D9"/>
                                    </mask>
                                    <g mask="url(#mask0_510_546)">
                                        <path d="M16 26.7052L14.9897 25.7923C12.8137 23.8043 11.0137 22.1026 9.58973 20.6872C8.1658 19.2718 7.04187 18.0235 6.21793 16.9423C5.394 15.8611 4.81837 14.8829 4.49103 14.0077C4.16368 13.1325 4 12.2522 4 11.3667C4 9.67097 4.57607 8.24703 5.7282 7.0949C6.88033 5.94277 8.30427 5.3667 10 5.3667C11.1726 5.3667 12.2726 5.6667 13.3 6.2667C14.3274 6.8667 15.2274 7.73934 16 8.88463C16.7726 7.73934 17.6726 6.8667 18.7 6.2667C19.7274 5.6667 20.8274 5.3667 22 5.3667C23.6957 5.3667 25.1197 5.94277 26.2718 7.0949C27.4239 8.24703 28 9.67097 28 11.3667C28 12.2522 27.8363 13.1325 27.509 14.0077C27.1816 14.8829 26.606 15.8611 25.7821 16.9423C24.9581 18.0235 23.8385 19.2718 22.4231 20.6872C21.0077 22.1026 19.2034 23.8043 17.0103 25.7923L16 26.7052ZM16 24.9C18.1333 22.9718 19.8889 21.3201 21.2667 19.9449C22.6444 18.5697 23.7333 17.3765 24.5333 16.3654C25.3333 15.3543 25.8889 14.4586 26.2 13.6782C26.5111 12.8979 26.6667 12.1274 26.6667 11.3667C26.6667 10.0334 26.2222 8.92226 25.3333 8.03337C24.4444 7.14448 23.3333 6.70003 22 6.70003C20.9385 6.70003 19.959 7.00302 19.0615 7.609C18.1641 8.21498 17.3607 9.12738 16.6513 10.3462H15.3487C14.6222 9.11029 13.8145 8.19362 12.9256 7.5962C12.0367 6.99876 11.0615 6.70003 10 6.70003C8.68376 6.70003 7.57692 7.14448 6.6795 8.03337C5.78206 8.92226 5.33333 10.0334 5.33333 11.3667C5.33333 12.1274 5.48889 12.8979 5.8 13.6782C6.11111 14.4586 6.66667 15.3543 7.46667 16.3654C8.26667 17.3765 9.35556 18.5654 10.7333 19.9321C12.1111 21.2988 13.8667 22.9547 16 24.9Z" fill="#3B3B3B"/>
                                    </g>
                                    </svg></button>
                                  </div>
                              </div>
                          </div>

                      </div>
                    </div>
                </div>
            )}

        </div> 
        </Link>
        </div>
        ))}
        </div>
    
  );
};

export default ProductCard;
