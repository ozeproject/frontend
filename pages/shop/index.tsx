import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import LoadMore from '../../components/Loadmore';
import Filter from '../../components/shop/Filter';
import ProductCard from '../../components/shop/ProductCard';
import '../../app/globals.css';


interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ShopPage = () => {
  const [productCount, setProductCount] = useState<number>(0);

  useEffect(() => {
    fetch('http://localhost:3001/api/products/count')
      .then((response) => response.json())
      .then((data) => setProductCount(data.count))
      .catch((error) => console.error('Error fetching product count:', error));
  }, []);

  //เทสเฉยๆ 12ตัว
    const products = Array.from({ length: 12 }, (_, index) => ({ id: index, name: `Product ${index + 1}` }));

    const renderProductGrid = (products: Product[]) => {
      return (
        <div className={`grid grid-cols-4 border-b-2 border-gray-500`}>
          {products.map((product, index) => (
            <div key={product.id} className={`border-t-2 border-gray-500 ${index % 4 !== 3 ? 'border-r-2' : ''}`}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      );
    };

  return (
    <div className="wrapper">
        <Navbar />
        <Title />
        <Filter />
        <div>
          <p>Total Products: {productCount}</p>
        </div>
        
        {renderProductGrid(products)}
        
        <LoadMore />
         <Footer /> 
        
    </div>
  );
};

export default ShopPage;