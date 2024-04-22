import React, { useEffect, useState } from 'react';
import '../../app/globals.css';
import { jwtDecode } from "jwt-decode";
import SizeValidate from '../../components/validation/SizeShop';
import router from 'next/router';

interface WishlistItem {
    wishlist_id: number;
    ProductId: number;
    ProductName: string;
    Description: string;
    Price: number;
    StockQuantity: number;
    Color: string;
    IsTrend: string;
    IsNew: string;
    CategoryId: string;
    ImagePath: string;
    gender: string;
    Size: string;
    Quantity: number;
}

interface MyToken {
    userId: string;
    username: string;
    role: string;
    exp: number;
  }

const WishlistCard = () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState<string | null>(null); 
    const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<WishlistItem | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [showSizeValidModal, setSizeValidModal] = useState(false);
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        fetchWishlist();
    }, []); 

    const fetchWishlist = async () => {
        try {
            const userId = getUserId(); 
            const response = await fetch(`${process.env.REACT_APP_API_URL}/wishlist?userId=${userId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const wishlistItems = await response.json();
                setWishlistItems(wishlistItems);
            } else {
                console.error('Error fetching wishlist items:', response.status);
            }
        } catch (error: any) { 
            console.error('Error fetching wishlist items:', error.message);
        }
    };

    const handleDelete = async (item: WishlistItem) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/wishlist/${item.wishlist_id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
    
            if (response.ok) {
                setWishlistItems(prevItems => prevItems.filter(wishlistItem => wishlistItem.wishlist_id !== item.wishlist_id));
                console.log('Product deleted successfully from the wishlist.');
            } else {
                setError('Failed to delete product. Please try again.');
            }
        } catch (error) {
            console.error('Error deleting product:', error);
            setError('Error deleting product. Please try again.');
        }
    };

   const handleSizeClick = (size: string) => {
      setSelectedSize(prevSize => (prevSize === size ? null : size));
  };
  
  useEffect(() => {
  }, [selectedSize]);
  

    const handleIncrement = () => {
       if (quantity < selectedProduct!.StockQuantity) {
           setQuantity(prevQuantity => prevQuantity + 1);
       }
   };
  
   const handleDecrement = () => {
       if (quantity > 1) {
           setQuantity(prevQuantity => prevQuantity - 1);
       }
  };

  const handleCloseModal = () => {
    setSizeValidModal(false);
  };

  const openModal = (product: WishlistItem) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    if (product.CategoryId == '2') {
        setSelectedSize('FREE');
    }
    setSelectedSize(product.Size);
    setQuantity(product.Quantity);
};

const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSize(null);
};
      
        useEffect(() => {
          if (isModalOpen) {
            document.body.style.overflow = 'hidden';
          } else {
            document.body.style.overflow = 'auto';
          }
      
          const cleanup = () => {
            document.body.style.overflow = 'auto';
          };
      
          return cleanup;
        }, [isModalOpen]);

    
        const addToCart2 = async (product: WishlistItem) => {
            try {
                if (!selectedSize) {
                    setSizeValidModal(true);
                    return; 
                }
                if (!token) {
                    router.push('/authen/login');
                    return;
                }

                const userId = getUserId(); 
                if (userId) {
                    const deleteResponse = await fetch(`${process.env.REACT_APP_API_URL}/wishlist/${product.wishlist_id}`, {
                        method: 'DELETE',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        },
                    });
                    
                    if (deleteResponse.ok) {
                        const response = await fetch(`${process.env.REACT_APP_API_URL}/cart/add`, {
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
                            setWishlistItems(prevItems => prevItems.filter(wishlistItem => wishlistItem.wishlist_id !== product.wishlist_id));
                            const data = await response.json();
                            console.log(data.message); 
                        } else {
                            console.error('Failed to add product to cart:', response.statusText);
                        }
                    } else {
                        setError('Failed to delete product from wishlist. Please try again.');
                    }
                } else {
                    console.error('User ID not found.');
                }
            } catch (error) {
                console.error('Error adding product to cart:', error);
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

  return (
    <div className="">
        
        
        <div>
            <div className={`grid grid-cols-4   border-gray-500`}>
            {wishlistItems.map(item => (
                <div  key={item.wishlist_id} className=" border-gray-500 border-b-2 border-r-2">
                    <div className="product p-6 ">
                    <div className='detail'>
                        <div className='flex justify-end '>
                        <span className='pr-1 pt-1'>
                            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22.2052L10.9897 21.2923C8.81367 19.3043 7.01367 17.6026 5.58973 16.1872C4.1658 14.7718 3.04187 13.5235 2.21793 12.4423C1.394 11.3611 0.818367 10.3829 0.491033 9.50773C0.163678 8.63251 0 7.75217 0 6.8667C0 5.17097 0.576066 3.74703 1.7282 2.5949C2.88033 1.44277 4.30427 0.866699 6 0.866699C7.17264 0.866699 8.27264 1.1667 9.3 1.7667C10.3274 2.3667 11.2274 3.23934 12 4.38463C12.7726 3.23934 13.6726 2.3667 14.7 1.7667C15.7274 1.1667 16.8274 0.866699 18 0.866699C19.6957 0.866699 21.1197 1.44277 22.2718 2.5949C23.4239 3.74703 24 5.17097 24 6.8667C24 7.75217 23.8363 8.63251 23.509 9.50773C23.1816 10.3829 22.606 11.3611 21.7821 12.4423C20.9581 13.5235 19.8385 14.7718 18.4231 16.1872C17.0077 17.6026 15.2034 19.3043 13.0103 21.2923L12 22.2052Z" fill="#3B3B3B"/>
                            </svg>
                        </span>
                        </div>

                        <div className='text-center '><img className='mx-auto' src={item.ImagePath} style={{ width: '400px', height: '400px' }} alt="img" loading="lazy"/></div>

                        <div className='text-center '><span>{item.ProductName}</span></div>
                        
                        <div className='text-center font-bold text-3xl mt-4'><span>฿{item.Price}</span></div>
                        
                        <div className="mt-4">
                            <div className="color-options text-center">
                            <button className="white-button  border-solid border-2 colorinput  w-5 h-5 p-1"
                                    style={{ backgroundColor: item.Color }}></button>
                            </div>
                        </div>
                    
                    </div>
                    
                        <div className='mt-4 flex justify-center'>
                            <button
                            className="white-button  border-solid border-2  quickbtn  rounded-md p-2 mx-2 w-4/6"
                            onClick={() => openModal(item)}
                        >
                            CHOOSE OPTIONS
                        </button>
                            
                            <button
                            className="white-button  rounded-md  w-1/6 "
                            onClick={() => handleDelete(item)}
                            >
                                <svg className='' width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_726_2277"  maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <rect width="24" height="24" fill="#D9D9D9"/>
                                </mask>
                                
                                <g mask="url(#mask0_726_2277)">
                                <path d="M7.30773 20.4998C6.80901 20.4998 6.38306 20.3232 6.02986 19.97C5.67664 19.6168 5.50003 19.1908 5.50003 18.6921V5.99981H4.50003V4.49983H9.00001V3.61523H15V4.49983H19.5V5.99981H18.5V18.6921C18.5 19.1972 18.325 19.6248 17.975 19.9748C17.625 20.3248 17.1974 20.4998 16.6923 20.4998H7.30773ZM17 5.99981H7.00001V18.6921C7.00001 18.7818 7.02886 18.8556 7.08656 18.9133C7.14426 18.971 7.21798 18.9998 7.30773 18.9998H16.6923C16.7692 18.9998 16.8397 18.9678 16.9039 18.9037C16.968 18.8395 17 18.769 17 18.6921V5.99981ZM9.40388 16.9998H10.9039V7.99981H9.40388V16.9998ZM13.0962 16.9998H14.5961V7.99981H13.0962V16.9998Z" fill="#1C1B1F"/>
                                </g>
                                </svg>

                            </button>
                        </div>
                        
                {isModalOpen && selectedProduct && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="modalproduct pdcard p-8 rounded-md shadow-lg z-10 flex">
                      <div className='w-full p-4'>
                          <div className='h-3/4'>
                              <p><img className='mx-auto' src={selectedProduct.ImagePath} style={{ width: '500px', height: '500px' }} alt="img" loading="lazy"/></p>
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
                              <p className='text-2xl font-semibold tracking-normal'>{selectedProduct.ProductName}  </p>
                              <p className='text-2xl font-semibold mt-2 tracking-normal'>฿{selectedProduct.Price} </p>

                              <div className='mt-4'>
                                    <p className='font-semibold tracking-normal'>COLORS:</p>
                                    <div className='flex mt-2'>
                                        <button
                                            className="white-button border-solid border-2 colorinput w-8 h-8 p-1"
                                            style={{ backgroundColor: selectedProduct.Color }}
                                        ></button>
                                    </div>
                                </div>

                                <div className='mt-6'>
                                  <p className='font-semibold tracking-normal'>SIZES:</p>
                                  {!selectedSize && (
                                      <p className='text-red-700 tracking-wide text-sm mt-2'>
                                          Please select your size first
                                      </p>
                                  )}
                                  <div className='flex mt-1'>
                                        {selectedProduct.CategoryId == '2' ? (
                                            <button
                                                className={`white-button border-solid border-2 border-gray-500 w-12 h-8 p-1 inputCard font-bold text-center rounded-md text-sm selected ${
                                                    selectedSize === 'FREE' ? 'selected' : ''
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
                                                        selectedSize === 'L' ? 'selected' : ''
                                                    }`}
                                                    onClick={() => handleSizeClick('L')}
                                                >
                                                    L
                                                </button>
                                                <button
                                                    className={`black-button border-solid border-2 border-gray-500 w-8 h-8 p-1 ml-3 inputCard font-bold text-center rounded-md text-sm ${
                                                        selectedSize === 'XL' ? 'selected' : ''
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
                                {selectedProduct!.StockQuantity <= 1 && (
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
                                    <span className='mt-4 ml-2'>({selectedProduct!.StockQuantity})</span>
                                </div>
                            </div>

                          </div>

                          <div className='mt-16'>
                              <div className='flex '>
                                  
                                  <div className=''>
                                    <button className="last-button  border-y-2 border-r-2 border-2 border-gray-500 rounded-lg  p-2 w-48 h-14 addcrt hover:bg-slate-950"
                                    onClick={() => addToCart2(selectedProduct)} >ADD TO BAG</button>
                                  </div>
                                  
                                  <div className='ml-5 '>
                                    <span className="last-button "><svg width="49" height="60" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22.2052L10.9897 21.2923C8.81367 19.3043 7.01367 17.6026 5.58973 16.1872C4.1658 14.7718 3.04187 13.5235 2.21793 12.4423C1.394 11.3611 0.818367 10.3829 0.491033 9.50773C0.163678 8.63251 0 7.75217 0 6.8667C0 5.17097 0.576066 3.74703 1.7282 2.5949C2.88033 1.44277 4.30427 0.866699 6 0.866699C7.17264 0.866699 8.27264 1.1667 9.3 1.7667C10.3274 2.3667 11.2274 3.23934 12 4.38463C12.7726 3.23934 13.6726 2.3667 14.7 1.7667C15.7274 1.1667 16.8274 0.866699 18 0.866699C19.6957 0.866699 21.1197 1.44277 22.2718 2.5949C23.4239 3.74703 24 5.17097 24 6.8667C24 7.75217 23.8363 8.63251 23.509 9.50773C23.1816 10.3829 22.606 11.3611 21.7821 12.4423C20.9581 13.5235 19.8385 14.7718 18.4231 16.1872C17.0077 17.6026 15.2034 19.3043 13.0103 21.2923L12 22.2052Z" fill="#3B3B3B"/>
                                    </svg>
                                    </span>
                                  </div>
                              </div>
                          </div>

                      </div>
                    </div>
                </div>
            )}
                </div> 
            
            </div>
            ))}
        </div>
        </div>
        {showSizeValidModal && <SizeValidate onClose={handleCloseModal} />}
    </div>
  );
};

export default WishlistCard;