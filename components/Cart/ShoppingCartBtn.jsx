'use client';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { border, IconButton, Badge } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
import EmptyCart from '../../components/Cart/EmptyCartBtn';
import { Text } from '@chakra-ui/react';

import { useSelector } from 'react-redux';
import ClearCartBtn from '../../components/Cart/EmptyCartBtn';

const handleClearCart = function () {
  localStorage.clear();
};

export default function ShoppingCartBtn() {
  const cartItems = useSelector((state) => state.cart.cartItems);

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
          <PopoverContent>
            <PopoverHeader>
              <Text>{cartItems} items in cart</Text>
              <NextLink href='/shoppingcart' passHref>
                Go to cart
              </NextLink>
            </PopoverHeader>
            <PopoverBody>Popover Body</PopoverBody>
            <PopoverFooter display='flex'>
              <ClearCartBtn />
            </PopoverFooter>
          </PopoverContent>
        ) : (
          <PopoverContent>
            <PopoverBody>Shopping Cart Empty</PopoverBody>
          </PopoverContent>
        )}
      </Popover>
    </>
  );
}
