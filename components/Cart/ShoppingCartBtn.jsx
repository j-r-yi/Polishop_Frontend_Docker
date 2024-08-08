'use client';
import NextLink from 'next/link';

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  Button,
  border,
  IconButton,
  Badge,
  Text,
} from '@chakra-ui/react';

import { FaShoppingCart } from 'react-icons/fa';

import EmptyCart from '../../components/Cart/EmptyCartBtn';
import { useSelector } from 'react-redux';
import ClearCartBtn from '../../components/Cart/EmptyCartBtn';
import CartIsEmpty from './CartIsEmpty';

const handleClearCart = function () {
  localStorage.clear();
};

export default function ShoppingCartBtn() {
  const cartItems = useSelector((state) => state.cart.cartItemCount);
  const cartCost = useSelector((state) => state.cart.totalPrice);

  return (
    <>
      <Popover trigger='hover'>
        <PopoverTrigger>
          <div>
            <IconButton
              variant='outline'
              border='hidden'
              aria-label='Shopping Cart'
              fontSize='35px'
              color='teal'
              icon={<FaShoppingCart />}
            ></IconButton>
            {cartItems > 0 ? (
              <span className='absolute bg-red-400 rounded-md w-5 h-5 p-0.5 text-center text-xs text-white'>
                {cartItems}
              </span>
            ) : (
              <></>
            )}
          </div>
        </PopoverTrigger>
        {cartItems > 0 ? (
          <PopoverContent width={'500px'} height={'300px'}>
            <PopoverHeader>
              <div className='flex flex-row justify-between items-center'>
                <Text>{cartItems} items in cart</Text>
                <NextLink href='/cart' passHref>
                  <Text color='blue'>Go to cart</Text>
                </NextLink>
              </div>
            </PopoverHeader>
            <PopoverBody>Popover Body</PopoverBody>
            <PopoverFooter>
              <div className='flex flex-row items-center justify-between'>
                <Text>Current Cart Cost: ${cartCost}</Text>
                <ClearCartBtn />
              </div>
            </PopoverFooter>
          </PopoverContent>
        ) : (
          <PopoverContent width={'500px'} height={'300px'}>
            <PopoverBody>
              <CartIsEmpty></CartIsEmpty>
            </PopoverBody>
          </PopoverContent>
        )}
      </Popover>
    </>
  );
}
