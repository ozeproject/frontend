import React, { useEffect, useState } from 'react';

const Filter = ({onChangeFilter}:{onChangeFilter:(sortBy:string)=>void}) => {
    const [productCount, setProductCount] = useState<number>(0);
    const [selectedSort, setSelectedSort] = useState<string>('');

  useEffect(() => {
    // console.log(selectedSort)
    onChangeFilter(selectedSort)
    fetch('https://capstone23.sit.kmutt.ac.th/sj3/api/productCount')
      .then((response) => response.json())
      .then((data) => setProductCount(data.count))
      .catch((error) => console.error('Error fetching product count:', error));
  }, [selectedSort]);

  const handleSortChange = (value: string) => {
    setSelectedSort(value);
  };

  return (
    <div className=' p-10 border-b-2  border-gray-500'>
        <div className="filter flex justify-between ">
            <div className=''>
                <label></label>
                  <select className='border-2 border-[#B9B9B9] bg-[#F2EEE3] rounded'  onChange={(e) => handleSortChange(e.target.value)} value={selectedSort}>
                    <option value=''>Sort by:Recommended</option>
                    <option value='a-z'>A-Z</option>
                    <option value='z-a'>Z-A</option>
                    <option value='price_high_low'>PRICE HIGH TO LOW</option>
                    <option value='price_low_high'>PRICE LOW TO HIGH</option>
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
