'use clinet';
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
import { border, IconButton } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

const handleClearCart = function () {
  localStorage.clear();
};

export default function ShoppingCartBtn() {
  return (
    <>
      <Popover trigger='hover'>
        <PopoverTrigger>
          <IconButton
            variant='outline'
            colorScheme='blue'
            aria-label='Shopping Cart'
            fontSize='20px'
            icon={<FaShoppingCart />}
          ></IconButton>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>Popover Header</PopoverHeader>
          <PopoverBody>Popover Body</PopoverBody>
          <PopoverFooter display='flex'>
            <NextLink href='/shoppingcart' passHref>
              <Button variant='solid' colorScheme='blue'>
                Cart
              </Button>
              <Button
                variant='solid'
                colorScheme='red'
                onClick={handleClearCart}
              >
                Empty
              </Button>
            </NextLink>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  );
}
