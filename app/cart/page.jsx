'use client';

import ProductCardDetailed from '../../components/Products/ProductCardDetailed';
import CheckoutSummary from '../../components/Cart/CheckoutSummary';
import CartIsEmpty from '../../components/Cart/CartIsEmpty';

import { Text } from '@chakra-ui/react';
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
    <div className=''>
      <Text fontSize='4xl'>Shopping Cart</Text>
      <div className='flex flex-row gap-10'>
        <div className='flex-5'>
          {cartItems > 0 ? (
            <>
              <>
                <ProductCardDetailed></ProductCardDetailed>
              </>
            </>
          ) : (
            <>
              <CartIsEmpty></CartIsEmpty>
            </>
          )}
        </div>
        <div className='flex-2'>
          <CheckoutSummary
            cartInfo={{ cartNumItems: cartItems, cartCost: 0 }}
          ></CheckoutSummary>
        </div>
      </div>
    </div>
  );
}
