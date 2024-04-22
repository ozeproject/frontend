import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/router";

interface MyToken {
  userId: string;
  username: string;
  role: string;
  exp: number;
  Address: string;
  phone: string;
}
const UserCheckout = () => {
  const router = useRouter();

  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
  const [Authenticated, setIsAuthenticated] = useState(false);
  const [userDetail, setUserDetail] = useState<MyToken | null>(null);
  const data = router.query.detail && JSON.parse(router.query.detail as string);
  const [addressError, setAddressError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          return;
        }
        const response = await fetch(`${process.env.REACT_APP_API_URL}/user/profile`, {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${token}`
          }
        });
        if (response.ok) {
          const userProfile = await response.json();
          setUserDetail(userProfile);
        } else {
          // Handle error when fetching user profile
          console.error("Failed to fetch user profile");
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  function initProduct() {
    let countProduct = 0;
    let totalAmount = 0;
    let product: { product_id: number; price: number; Quantity: number , size : string }[] = [];
    if (data) {
      for (let index = 0; index < data.product.length; index++) {
        console.log(data.product[index]);
        console.log(data.product[index].size);
        product.push({
          product_id: data.product[index].ProductId,
          price: data.product[index].Price,
          size : data.product[index].size || data.product[index].Size,
          Quantity: data.product[index].Quantity
            ? data.product[index].Quantity
            : 1,
        });
        let Quantity = 0;
        data.product[index].Quantity
          ? (Quantity = data.product[index].Quantity)
          : (Quantity = 1);
        countProduct = countProduct + Quantity;
        console.log(data.product[index].Price)
        console.log(Quantity)
        totalAmount = totalAmount + data.product[index].Price * Quantity;
      }
    }

    return { product, countProduct, totalAmount };
  }
  function checkout() {
    if (!userDetail?.Address || userDetail.Address === '') {
      setAddressError('Please input address.');
      return; 
    }  
    fetch(`${process.env.REACT_APP_API_URL}/checkout `, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userDetail: {
          user_id: userDetail?.userId,
          address: userDetail?.Address,
        },
        total_amount: initProduct().totalAmount + 0,
        total_quantity: initProduct().countProduct,
        product: initProduct().product,
        isQuickBuy: data.isQuickBuy,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.url_link_payment);
        window.location.href = data.url_link_payment;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <div className="flex ">
      <div className=" w-4/6">
        <div className=" p-10 flex">
          <div className="w-7/12 mx-48">
          <div className="">
            <div className="text-2xl ">SHIPPING ADDRESS</div>
            <div className=" ">
              <textarea
                className="border border-[#B9B9B9] w-4/6  rounded h-28 placeholder:pl-3 mt-1 bg-[#F2EEE3]"
                name="Address"
                placeholder="Address"
                value={userDetail?.Address || ''} 
                onChange={(e) => setUserDetail((prevUserDetail) => ({
                  ...prevUserDetail!,
                  Address: e.target.value
                }))}
              />
            </div>
            {addressError && (
              <div className="text-red-500">{addressError}</div>
            )}
          </div>

            <div className="mt-8">
              <div className="text-xl ">SHIPPING ADDRESS</div>
              <label></label>
              <select className="border-2 border-[#B9B9B9] bg-[#F2EEE3] rounded">
                <option value="">EMS : Thailand Post</option>
              </select>
            </div>

            <div className="mt-8">
              <div className="text-xl">PAYMENT METHOD</div>
              <div>
                <input
                  type="radio"
                  id="creditCard"
                  name="paymentMethod"
                  value="Credit/Debit Card"
                  checked
                />
                <label className="ml-2" htmlFor="creditCard">
                  Credit/Debit Card
                </label>
                <br />
              </div>
            </div>

            <div className="my-8">
              <button
                className="w-6/12 rounded-lg p-2 bg-[#3B3B3B] text-[#FAF9F6] border border-gray-600 text-center"
                type="button"
                onClick={() => checkout()}
              >
                PLACCE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-l-2  border-gray-500 w-5/12 ">
        <div className="border-b-2  border-gray-500 p-16">
          <div className="flex justify-between text-lg ">
            <div className=" ">YOUR ORDER SUMMARY</div>
            <div className=" ">
              {"[ "}
              {initProduct().countProduct}
              {" ]"}
            </div>
          </div>
          <div className="flex justify-between text-base mt-4">
            <div className=" ">SUBTOTAL</div>
            <div className=" ">฿{initProduct().totalAmount}</div>
          </div>
          <div className="flex justify-between text-base">
            <div className=" ">SHIPPING</div>
            <div className=" ">฿0</div>
          </div>
          <div className="mt-4   flex justify-between text-2xl">
            <div className=" ">TOTAL</div>
            <div className=" ">฿{initProduct().totalAmount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCheckout;
