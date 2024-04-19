import React, { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import Tooltip from '../../components/Tooltip';

interface MyToken {
    userId: string;
    username: string;
    role: string;
    exp: number;
  }

interface CartItem {
    cart_id: number;
    ProductId: number;
    ProductName: string;
    Price: number;
    Color: string;
    Size: string;
    ImagePath: string;
    Quantity: number;
    CategoryId: string;
    StockQuantity: number;
}

const ShopBags = () => {
    const router: any = useRouter();

    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
    const [subtotal, setSubtotal] = useState(0); 
    const [total, setTotal] = useState(0);
    const [error, setError] = useState<string | null>(null); 
    const [editingIndex, setEditingIndex] = useState<number | null>(null); 
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const tooltipTextLines = ['L  w31 h41', 'XL w33 h43'];
    const apiUrl = process.env.REACT_APP_API_URL;
  
  useEffect(() => {
    fetchCart();
  }, []); 

  const handleSizeClick = (size: string) => {
    setSelectedSize(prevSize => (prevSize === size ? null : size));
    console.log("size selected: "+ size); 
};

const handleIncrement =  async (item: CartItem) => {
    if (quantity < item.StockQuantity) {
        setQuantity(prevQuantity => prevQuantity + 1);
    }
};

const handleDecrement =  async (item: CartItem) => {
    if (quantity > 1) {
        setQuantity(prevQuantity => prevQuantity - 1);
    }
};
  
  const fetchCart = async () => {
    try {
        const userId = getUserId(); 
        const response = await fetch(`${apiUrl}/cart?userId=${userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
  
        if (response.ok) {
            const cartItems = await response.json();
            setCartItems(cartItems);
            console.log('Cart Items:', cartItems);
        } else {
            console.error('Error fetching Cart items:', response.status);
        }
    } catch (error: any) { 
        console.error('Error fetching Cart items:', error.message);
    }
  };

  const handleUpdateCartItem = async (item: CartItem) => {
    try {
        const response = await fetch(`${apiUrl}/cart/${item.cart_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                size: selectedSize,
                quantity: quantity,
            }),
        });

        if (response.ok) {
            console.log('Cart item updated successfully');
            fetchCart(); 
            toggleEditing(null, null);
        } else {
            setError('Failed to update cart item. Please try again.');
        }
    } catch (error) {
        console.error('Error updating cart item:', error);
        setError('Error updating cart item. Please try again.');
    }
};

  const handleDelete = async (item: CartItem) => {
    try {
        const response = await fetch(`${apiUrl}/cart/${item.cart_id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (response.ok) {
            setCartItems(prevItems => prevItems.filter(cartItem => cartItem.cart_id !== item.cart_id));
            console.log('Product deleted successfully from the Cart.');
        } else {
            setError('Failed to delete product. Please try again.');
        }
    } catch (error) {
        console.error('Error deleting product:', error);
        setError('Error deleting product. Please try again.');
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
        const calculateSubtotal = () => {
            let total = 0;
            cartItems.forEach((item) => {
                total += item.Price * item.Quantity ;
            });
            setSubtotal(total);
        };

        const calculateTotal = () => {
            setTotal(subtotal + 0 ); 
        };

        calculateSubtotal();
        calculateTotal();
    }, [cartItems, subtotal]);

    const toggleEditing = (index: number | null, item: CartItem | null) => {
        setEditingIndex(prevIndex => {
            const newIndex = prevIndex === index ? null : index;
    
            if (newIndex !== null && item) {
                setSelectedSize(item.Size);
                setQuantity(item.Quantity); 
            } else {
                setSelectedSize(null);
                setQuantity(1); 
            }
    
            return newIndex;
        });
    };
    
    const handleMouseEnter = () => {
        setIsTooltipVisible(true);
      };
    
      const handleMouseLeave = () => {
        setIsTooltipVisible(false);
      };
    

  return (
    <div className='flex'>
            <div className="w-4/6">
                {cartItems.map((item, index) => (
                    <div key={item.cart_id} className='border-b-2 border-gray-500 p-10 flex'>
                        <div className='w-3/12 p-4'>
                            <div><img className='mx-auto' src={item.ImagePath} width={220} height={220} alt="Test IMG" loading="lazy"/></div>
                        </div>
                        <div className='w-9/12 p-4'>
                            <div className='flex justify-between text-2xl'>
                                <div className=''>{item.ProductName}</div>
                                <div className=''>฿{item.Price}</div>
                            </div>
                            <div className='flex text-lg mt-4'>
                                <div className=''>COLORS:</div>
                                <div className='ml-2'><button className="white-button border-solid border-2 colorinput w-5 h-5 " style={{ backgroundColor: item.Color }}></button></div>
                            </div>
                            <div className='flex text-lg'>
                                <div className=''>SIZES:</div>
                                <div className=' ml-2'>{item.Size}</div>
                            </div>
                            <div className='flex text-lg'>
                                <div className=''>QUANTITY:</div>
                                <div className=' ml-2'>{item.Quantity}</div>
                            </div>
                            <div className='mt-4 text-lg flex justify-between'>
                                <div className='w-1/12'>
                                    <div className='p-1 border-b-2 border-gray-500 w-fit' onClick={() => toggleEditing(index, item)}>EDIT</div>
                                </div>
                                <div className={`p-4 w-10/12 border-2 border-gray-800 rounded-lg ${editingIndex === index ? '' : 'hidden'}`}>
                                    <div className="mt-4">
                                        <p className="font-semibold tracking-normal">COLORS:</p>
                                        <div className="flex mt-2">
                                        <button
                                            className="white-button border-solid border-2 colorinput w-8 h-8 p-1"
                                            style={{ backgroundColor: item.Color }}
                                        ></button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                    <p className='font-semibold tracking-normal'>SIZES:</p>
                                    {selectedSize ? null : (
                                        <p className='text-red-700 tracking-wide text-sm mt-2'>
                                        Please select your size first
                                        </p>
                                    )}

                                    <div className='flex mt-1'>
                                                        {item.CategoryId == '2' ? (
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

                                    <div className="mt-6">
                                        <p
                                        className="underline tracking-wide text-sm mt-1"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                        >
                                        Size guide
                                        </p>
                                        {isTooltipVisible && <Tooltip text={tooltipTextLines} />}
                                    </div>

                                    </div>
                                    <div className="mt-5">
                                        <p className="font-semibold tracking-normal mt-5">QUANTITY:</p>
                                        {item.StockQuantity <= 1 && (
                                            <p className="text-red-700 tracking-wide text-sm mt-2">
                                                Only 1 item left, you cannot add to the cart
                                            </p>
                                        )}
                                        <div className="flex mt-1">
                                            <button
                                                className="first-button border-y-2 border-l-2 border-2 border-gray-500 rounded-l-lg w-10 h-10 p-1 inputCard"
                                                onClick={() => handleDecrement(item)}
                                            >
                                                {'-'}
                                            </button>
                                            <button className="mid-button border-y-2 border-gray-500 w-10 h-10 p-1 inputCard">
                                                {quantity}
                                            </button>
                                            <button
                                                className="last-button border-y-2 border-r-2 border-2 border-gray-500 rounded-r-lg w-10 h-10 p-1 inputCard"
                                                onClick={() => handleIncrement(item)} 
                                            >
                                                {'+'}
                                            </button>
                                            <span className="mt-4 ml-2">({item.StockQuantity})</span>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <button
                                            className="w-2/12 rounded-lg p-2 bg-[#F2EEE3] border border-gray-600 text-center"
                                            type="button"
                                            onClick={() => toggleEditing(null, null)} 
                                        >
                                            CANCEL
                                        </button>
                                        <button
                                                className="w-2/12 ml-3 rounded-lg p-2 bg-[#3B3B3B] text-[#FAF9F6] border border-gray-600 text-center"
                                                type="button"
                                                onClick={() => handleUpdateCartItem(item)}
                                            >
                                                UPDATE
                                        </button>
                                    </div>

                                </div>
                                <div className='flex justify-end w-1/12 p-1'>
                                    <button onClick={() => handleDelete(item)}>
                                        <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.2436 23.333C3.57864 23.333 3.0107 23.0976 2.53977 22.6266C2.06881 22.1557 1.83333 21.5877 1.83333 20.9228V3.99975H0.5V1.99978H6.49997V0.820312H14.5V1.99978H20.4999V3.99975H19.1666V20.9228C19.1666 21.5963 18.9333 22.1664 18.4666 22.633C17.9999 23.0997 17.4298 23.333 16.7563 23.333H4.2436ZM17.1666 3.99975H3.8333V20.9228C3.8333 21.0424 3.87177 21.1407 3.9487 21.2177C4.02563 21.2946 4.12393 21.3331 4.2436 21.3331H16.7563C16.8589 21.3331 16.9529 21.2903 17.0384 21.2049C17.1239 21.1194 17.1666 21.0254 17.1666 20.9228V3.99975ZM7.03847 18.6664H9.03843V6.66641H7.03847V18.6664ZM11.9615 18.6664H13.9615V6.66641H11.9615V18.6664Z" fill="#1C1B1F"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        
        <div className="border-l-2  border-gray-500 w-2/6 ">
        <div className='border-b-2  border-gray-500 p-16'>
            <div className='flex justify-between text-lg'>
                <div className=' '>YOUR ORDER SUMMARY</div>
                <div className=' '>{'[ '}[ {cartItems.length} ]{' ]'}</div>
            </div>
            <div className='flex justify-between text-base mt-4'>
                <div className=' '>SUBTOTAL</div>
                <div className=' '>฿{subtotal}</div>
            </div>
            <div className='flex justify-between text-base'>
                <div className=' '>SHIPPING</div>
                <div className=' '>฿0</div>
            </div>
            <div className='mt-4  flex justify-between text-2xl'>
                <div className=' '>TOTAL</div>
                <div className=' '>฿{total}</div>
            </div>
            <div className='mt-8 text-base'>
            <button
                className="m-auto rounded-lg p-3 border border-gray-600 text-center w-full bg-[#3B3B3B] hover:bg-black text-[#FAF9F6]"
                type="button"
                onClick={() => {
                  router.push({
                    pathname: "/checkout",
                    query: {
                      detail: JSON.stringify({
                        isQuickBuy: false,
                        product: cartItems,
                      }),
                    },
                  });
                }}
              >
                CHECK OUT
              </button>
                </div>
        </div>
        </div>
    </div>
  );
};

export default ShopBags;
