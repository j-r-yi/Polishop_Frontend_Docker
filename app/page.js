'use client';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Navbar/Footer';
import ProductCard from '../components/ProductCard';
import Banner1 from '../components/Products/Banner1';
import Banner2 from '../components/Products/Banner2';
import { useEffect, useState } from 'react';

import { Text } from '@chakra-ui/react';

export default function Home() {
  const [isLoaded, setLoaded] = useState(false);
  const [productsData, setProductData] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/products/`)
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);

  return (
    <div className='bg-gray-100'>
      <Banner1></Banner1>
      <Banner2></Banner2>
      <div className='mt-10  ml-5'>
        <Text fontSize='xl'>Sample Products</Text>
      </div>
      <div className='flex flex-col sm:flex-row mt-3 pb-10 items-center justify-center gap-10 flex-wrap'>
        {productsData.map((curr, idx) => {
          return <ProductCard product={curr} key={idx}></ProductCard>;
        })}
      </div>
    </div>
  );
}
