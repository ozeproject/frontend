import React, { useEffect, useState } from 'react';
import { useRouter ,} from 'next/router';
import Image from 'next/image'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { jwtDecode } from "jwt-decode";
import '../../app/globals.css';


interface MyToken {
    userId: string;
    username: string;
    role: string;
    exp: number;
  }



const ProductDetail = () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
    const router = useRouter();
    const { productId } = router.query;
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState({
        ProductId: productId,
        ProductName: '',
        Description: '',
        Price: 0,
        StockQuantity: 0,
        Color: '',
        IsTrend: '',
        IsNew: '',
        CategoryId: '',
        ImagePath: '',
        gender: '',
        Size: '',
      });

    const handleSizeClick = (size: string) => {
        setSelectedSize(prevSize => (prevSize === size ? null : size));
        console.log("size selected: "+ size); 
    };

    const handleIncrement = () => {
        if (quantity < product.StockQuantity) {
            setQuantity(prevQuantity => prevQuantity + 1);
        }
        console.log(quantity);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
        console.log(quantity);
    };

      const addToCart = async () => {
        try {
            const userId = getUserId(); 
            if (userId) {
                const response = await fetch('https://capstone23.sit.kmutt.ac.th/sj3/api/cart/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        userId: userId,
                        productId: product.ProductId, 
                        size: selectedSize,
                        quantity: quantity,
                    }),
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log(data.message); 
                } else {
                    console.error('Failed to add product to cart:', response.statusText);
                }
            } else {
                console.error('User ID not found.');
            }
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };
    
    const addToWishlist = async () => {
        try {
            const userId = getUserId(); 
            if (userId) {
                const response = await fetch('https://capstone23.sit.kmutt.ac.th/sj3/api/wishlist/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        userId: userId,
                        productId: product.ProductId, 
                        size: selectedSize,
                        quantity: quantity,
                    }),
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log(data.message); 
                } else {
                    console.error('Failed to add product to wishlist:', response.statusText);
                }
            } else {
                console.error('User ID not found.');
            }
        } catch (error) {
            console.error('Error adding product to wishlist:', error);
        }
    };
    
    function getUserId() {
        const token = localStorage.getItem('accessToken');
    
        if (token) {
            try {
                const decodedToken = jwtDecode<MyToken>(token);
                const userId = decodedToken.userId;
                return userId;
            } catch (error) {
                console.error('Error decoding JWT token:', error);
                return null;
            }
        } else {
            console.error('JWT token not found in local storage');
            return null;
        }
    }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://capstone23.sit.kmutt.ac.th/sj3/api/products/${productId}`);
        const data = await response.json();
        setProduct(data);

        if (data.CategoryId == 2) {
            setSelectedSize('FREE');
        }

        console.log(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  

    return (
        <div>
            <Navbar />
            <div className='flex mb-5'>

                <div className='flex w-7/12'>
                    <div className='w-full h-full'>
                        <div className='border-b-2 border-x-2 h-fit '><img className='mx-auto' src={product.ImagePath}  width={500} height={500} alt={product.ProductName} loading="lazy"/></div>
                    </div>
                </div>

                <div className='w-5/12 pl-5'>
                    <p className='text-2xl mt-5 font-semibold tracking-normal'>{product.ProductName} </p>
                    <p className='text-2xl font-semibold mt-2 tracking-normal'>฿{product.Price}</p>
                    
                    <div className='mt-4'>
                        <p className='font-semibold tracking-normal'>COLORS:</p>
                        <div className='flex mt-2'>
                            <button
                                className="white-button border-solid border-2 colorinput w-8 h-8 p-1"
                                style={{ backgroundColor: product.Color }}
                            ></button>
                        </div>
                    </div>
                          

                    
            <div className='mt-6'>
                <p className='font-semibold tracking-normal'>SIZES:</p>
                {selectedSize ? null : (
                    <p className='text-red-700 tracking-wide text-sm mt-2'>
                    Please select your size first
                    </p>
                )}

                <div className='flex mt-1'>
                                      {product.CategoryId == '2' ? (
                                          <button
                                              className={`white-button border-solid border-2 border-gray-500 w-12 h-8 p-1 inputCard font-bold text-center rounded-md text-sm selected ${
                                                selectedSize  === 'FREE' ? 'selected' : ''
                                              }`}
                                              onClick={() => handleSizeClick('FREE')}
                                              disabled={true}
                                          >
                                              FREE
                                          </button>
                                      ) : (
                                          <>
                                              <button
                                                  className={`white-button border-solid border-2 border-gray-500 w-8 h-8 p-1 inputCard font-bold text-center rounded-md text-sm ${
                                                    selectedSize  == 'L' ? 'selected' : ''
                                                  }`}
                                                  onClick={() => handleSizeClick('L')}
                                              >
                                                  L
                                              </button>
                                              <button
                                                  className={`black-button border-solid border-2 border-gray-500 w-8 h-8 p-1 ml-3 inputCard font-bold text-center rounded-md text-sm ${
                                                    selectedSize == 'XL' ? 'selected' : ''
                                                  }`}
                                                  onClick={() => handleSizeClick('XL')}
                                              >
                                                  XL
                                              </button>
                                          </>
                                      )}
                                  </div>

                <p className='underline tracking-wide text-sm mt-1'>Size guide</p>
            </div>

                        <div>
                            <p className='font-semibold tracking-normal mt-5'>QUANTITY:</p>
                            {product.StockQuantity <= 1 && (
                                <p className='text-red-700 tracking-wide text-sm mt-2'>
                                    Only 1 item left, you cannot add to the cart
                                </p>
                            )}
                            <div className='flex mt-1'>
                                <button
                                    className="first-button border-y-2 border-l-2 border-2 border-gray-500 rounded-l-lg w-10 h-10 p-1 inputCard"
                                    onClick={handleDecrement}
                                >
                                    {'-'}
                                </button>
                                <button className="mid-button border-y-2 border-gray-500 w-10 h-10 p-1 inputCard">
                                    {quantity}
                                </button>
                                <button
                                    className="last-button border-y-2 border-r-2 border-2 border-gray-500 rounded-r-lg w-10 h-10 p-1 inputCard"
                                    onClick={handleIncrement}
                                >
                                    {'+'}
                                </button>
                                <span className='mt-4 ml-2'>({product.StockQuantity})</span>
                            </div>
                        </div>

                    <div>
                        <p className='font-semibold tracking-normal mt-5'>INFORMATION:</p>
                        <p className='tracking-wide text-sm mt-2 pr-10'>{product.Description} </p>
                    </div>
                    <div className='mt-8'>
                        <div className='flex '>
                            <div>
                                <button className="last-button  border-y-2 border-r-2 border-2 border-gray-500 rounded-lg p-2  w-48 h-14  ckbtn"><Link href="/checkout/">CHECKOUT</Link></button>
                            </div>

                            <div className='ml-4'>
                                <button className="last-button  border-y-2 border-r-2 border-2 border-gray-500 rounded-lg  p-2 w-48 h-14 addcrt" onClick={addToCart}>ADD TO BAG</button>
                            </div>

                            <div className='ml-4 '>
                                    <button className="hover:bg-[#D4CBB1] rounded-full" onClick={addToWishlist}><svg className="hover:bg-[#D4CBB1] rounded-full" xmlns="http://www.w3.org/2000/svg" width="48" height="60" viewBox="0 0 32 33" fill="none">
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
            <Footer />
        </div>
    );
};

export default ProductDetail;