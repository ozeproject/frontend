import React, { useEffect, useState } from 'react';
const Filter = () => {
    const [productCount, setProductCount] = useState<number>(0);

  useEffect(() => {
    fetch('http://localhost:8080/api/productCount')
    //fetch('http://cp23sj3.sit.kmutt.ac.th/api/productCount')
    //fetch('http://10.4.85.33:8080/api/productCount')
      .then((response) => response.json())
      .then((data) => setProductCount(data.count))
      .catch((error) => console.error('Error fetching product count:', error));
  }, []);
  return (
    <div className=' p-10 border-b-2  border-gray-500'>
        <div className="filter flex justify-between ">
            <div className=''>
                <select>
                    <option>SORT BY: RECOMMENED</option>
                    <option>BEST SELLER</option>
                    <option>NEWEST</option>
                    <option>PRICE HIGH TO LOW</option>
                    <option>PRICE LOW TO HIGH</option>
                </select>
            </div>
            <div>
                <span>{'[ '}{productCount}{' }'}</span>
            </div>
        </div>
    </div>
  );
};

export default Filter;
