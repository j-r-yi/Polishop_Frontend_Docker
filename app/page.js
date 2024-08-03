'use client';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Navbar/Footer';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <>
      <div className='bg-gray-200 w-screen'>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </>
  );
}
