import React, { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

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
}

const ShopBags = () => {
    const router: any = useRouter();

    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
    const [subtotal, setSubtotal] = useState(0); 
    const [total, setTotal] = useState(0);
    const [cartToDelete, setCartToDelete] = useState<CartItem | null>(null); 
    const [error, setError] = useState<string | null>(null); 
    const [editingIndex, setEditingIndex] = useState<number | null>(null); 
  
  useEffect(() => {
    fetchCart();
  }, []); 
  
  const fetchCart = async () => {
    try {
        const userId = getUserId(); 
        const response = await fetch(`https://capstone23.sit.kmutt.ac.th/sj3/api/cart?userId=${userId}`, {
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

  const handleDelete = async (item: CartItem) => {
    try {
        const response = await fetch(`https://capstone23.sit.kmutt.ac.th/sj3/api/cart/${item.cart_id}`, {
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
                total += item.Price ;
            });
            setSubtotal(total);
        };

        const calculateTotal = () => {
            setTotal(subtotal + 50 ); 
        };

        calculateSubtotal();
        calculateTotal();
    }, [cartItems, subtotal]);

    const toggleEditing = (index: number | null) => {
        setEditingIndex(prevIndex => prevIndex === index ? null : index);
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
                                    <div className='p-1 border-b-2 border-gray-500 w-fit' onClick={() => toggleEditing(index)}>EDIT</div>
                                </div>
                                    <div className={`p-4 w-10/12 border-2 border-gray-800 rounded-lg ${editingIndex === index ? '' : 'hidden'}`}>
                                    <div className="mt-4">
                                        <p className="font-semibold tracking-normal">COLORS:</p>
                                        <div className="flex mt-2">
                                            <button className="white-button border-solid border-2 colorinput w-8 h-8 p-1 bg-white"></button>
                                            <button className="black-button border-solid border-2 colorinput w-8 h-8 p-1 ml-2 bg-black"></button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <p className="font-semibold tracking-normal">SIZES:</p>
                                        <p className="text-red-700 tracking-wide text-sm mt-2">Please select your size first</p>
                                        <div className="flex mt-1">
                                            <button className="white-button border-solid border-2 border-gray-500 rounded-md w-8 h-8 p-1 inputCard font-bold text-center text-sm">L</button>
                                            <button className="black-button border-solid border-2 border-gray-500 rounded-md w-8 h-8 p-1 ml-3 inputCard font-bold text-center text-sm">XL</button>
                                        </div>
                                        <p className="underline tracking-wide text-sm mt-1">Size guide</p>
                                    </div>
                                    <div className="mt-5">
                                        <p className="font-semibold tracking-normal mt-5">QUANTITY:</p>
                                        <p className="text-red-700 tracking-wide text-sm mt-2">Only 1 item left, you cannot add to the cart</p>
                                        <div className="flex mt-1">
                                            <button className="first-button border-y-2 border-l-2 border-2 border-gray-500 rounded-l-lg w-10 h-10 p-1 inputCard">{'-'}</button>
                                            <button className="mid-button border-y-2 border-gray-500 w-10 h-10 p-1 inputCard">1</button>
                                            <button className="last-button border-y-2 border-r-2 border-2 border-gray-500 rounded-r-lg w-10 h-10 p-1 inputCard">+</button>
                                            <span className="mt-4 ml-2">({item.Quantity})</span>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <button
                                            className="w-2/12 rounded-lg p-2 bg-slate-50 border border-gray-600 text-center"
                                            type="button"
                                            onClick={() => toggleEditing(null)}
                                        >
                                            CANCEL
                                        </button>
                                        <button className="w-2/12 ml-3 rounded-lg p-2 bg-[#3B3B3B] text-[#FAF9F6] border border-gray-600 text-center" type="button">UPDATE</button>
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
                <div className=' '>฿50</div>
            </div>
            <div className='mt-4  flex justify-between text-2xl'>
                <div className=' '>TOTAL</div>
                <div className=' '>฿{total}</div>
            </div>
            <div className='mt-8 text-base'>
            <button
                className="m-auto rounded-lg p-3 bg-slate-50 border border-gray-600 text-center w-full"
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
