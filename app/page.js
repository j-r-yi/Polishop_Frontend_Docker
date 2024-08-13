'use client';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Navbar/Footer';
import ProductCard from '../components/ProductCard';
import Banner1 from '../components/Products/Banner1';
import Banner2 from '../components/Products/Banner2';
// import { getProducts, getAllProducts } from '../helpers/getProducts';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoaded, setLoaded] = useState(false);
  const [productsData, setProductData] = useState([]);

  useEffect(() => {
    fetch(``)
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);

  return (
    <div className='bg-gray-100'>
      <Banner1></Banner1>
      <Banner2></Banner2>
      {productsData.map((curr, idx) => {
        return <ProductCard product={curr} key={idx}></ProductCard>;
      })}
    </div>
  );
}
