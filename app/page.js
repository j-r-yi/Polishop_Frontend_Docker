'use client';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Navbar/Footer';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import Banner1 from '../components/Products/Banner1';
import Banner2 from '../components/Products/Banner2';

export default function Home() {
  return (
    <>
      <div className='bg-gray-200 w-screen'>
        <Banner1></Banner1>
        <Banner2></Banner2>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </>
  );
}
