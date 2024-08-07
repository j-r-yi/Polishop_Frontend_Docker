'use client';

import ProductCardDetailed from '../../components/Products/ProductCardDetailed';
import CheckoutSummary from '../../components/Cart/CheckoutSummary';
import CartIsEmpty from '../../components/Cart/CartIsEmpty';

import { Text, Container, Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

// const getCartItems = function () {
//   const key = 'product';
//   const allItems = localStorage.getItem(key);
//   // const allItems = JSON.parse(localStorage.getItem(key));
//   return allItems;
// };

export default function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  // const cartItems = getCartItems();
  // console.log(cartItems);
  return (
    <div className='flex flex-col px-10'>
      <Text fontSize='4xl'>Shopping Cart</Text>
      <div className='flex flex-row gap-10'>
        <Container maxW='container.md' flexBasis='3/4'>
          <Box
            display='flex'
            flexDirection='column'
            overflowY='auto'
            height='800px' // Set the height to trigger vertical scrolling
            // borderWidth={1}
            borderRadius='lg'
            borderColor='gray.200'
          >
            {cartItems > 0 ? (
              <>
                <ProductCardDetailed></ProductCardDetailed>
                <ProductCardDetailed></ProductCardDetailed>
                <ProductCardDetailed></ProductCardDetailed>
                <ProductCardDetailed></ProductCardDetailed>
                <ProductCardDetailed></ProductCardDetailed>
              </>
            ) : (
              <CartIsEmpty></CartIsEmpty>
            )}
          </Box>
        </Container>
        <div className='flex-grow basis-1/4'>
          <CheckoutSummary
            cartInfo={{ cartNumItems: cartItems, cartCost: 0 }}
          ></CheckoutSummary>
        </div>
      </div>
    </div>
  );
}
