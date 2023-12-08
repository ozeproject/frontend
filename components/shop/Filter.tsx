import React from 'react';

const Filter = () => {
  return (
    <div className=' p-10'>
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
                <span>{'[ '}999{' }'}</span>
            </div>
        </div>
    </div>
  );
};

export default Filter;
