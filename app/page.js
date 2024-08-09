'use client';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Navbar/Footer';
import ProductCard from '../components/ProductCard';
import Banner1 from '../components/Products/Banner1';
import Banner2 from '../components/Products/Banner2';

const product = {
  productId: 1111,
  img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  name: 'Living Room Sofa',
  price: 450,
  color: null,
  discount: 0,
  description: 'Green Sofa.',
  rating: 4.7,
  quantity: 0,
  stockQuantity: 10,
  reviews: 50,
};

const product2 = {
  productId: 2222,
  img: 'https://media.istockphoto.com/id/177735411/photo/home-for-sale-real-estate-sign-and-house.jpg?s=612x612&w=0&k=20&c=rlxoVGQLRX8PR3UCkUi8Vlw9wCztLoe0C2J7PHOpecQ=',
  name: 'House',
  price: 3000000,
  color: null,
  discount: 0,
  description: 'Single House',
  rating: 5.0,
  quantity: 0,
  stockQuantity: 1,
  reviews: 10,
};

export default function Home() {
  return (
    <div className='bg-gray-100'>
      {/* <Banner1></Banner1>
      <Banner2></Banner2> */}
      <ProductCard product={product}></ProductCard>
      <ProductCard product={product2}></ProductCard>
    </div>
  );
}
