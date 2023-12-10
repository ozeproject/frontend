import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import LoadMore from '../../components/Loadmore';
import Filter from '../../components/shop/Filter';
import ProductCard from '../../components/shop/ProductCard';
import '../../app/globals.css';


interface Product {
  ProductId: number;
  ProductName: string;
  Description: string;
  Price: number;
  StockQuantity: number;
  Color: string;
  IsTrend: string;
  IsNew: string;
  CategoryId: number;
  ImagePath: string;
}

const ShopPage = () => {

  //เทสเฉยๆ 12ตัว
    const products: Product[] = Array.from({ length: 5 }, (_, index) => ({
      ProductId: index + 1,
      ProductName: `Product ${index + 1}`,
      Description: `Description ${index + 1}`,
      Price: 16.69 + index, // Use an appropriate numeric value for Price
      StockQuantity: 10 + index,
      Color: 'White',
      IsTrend: 'Yes',
      IsNew: 'Yes',
      CategoryId: 2 ,
      ImagePath: 'https://beamhill.fi/wp-content/uploads/2023/02/032C-WHEEL-OVERSIZED-T-SHIRT-WHITE-001.jpg',
    }));

    const renderProductGrid = (products: Product[]) => {
      return (
        <div className={`grid grid-cols-4  border-gray-500`}>
          {products.map((product, index) => (
            <div key={product.ProductId} className={`${product.ProductId} border-b-2 border-gray-500 ${index % 4 !== 3 ? 'border-r-2' : ''}`}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      );
    };

  return (
    <div className="">
        <Navbar />
        <Title />
        <Filter />
        
        {renderProductGrid(products)}
        
        <LoadMore />
         <Footer /> 
        
    </div>
  );
};

export default ShopPage;