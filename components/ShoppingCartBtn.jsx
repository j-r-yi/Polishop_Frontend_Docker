'use clinet';
import { LinkBox, LinkOverlay } from '@chakra-ui/react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { border, IconButton } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

export default function ShoppingCartBtn() {
  return (
    <Popover trigger='hover'>
      <PopoverTrigger>
        <IconButton
          variant='outline'
          colorScheme='blue'
          aria-label='Shopping Cart'
          fontSize='20px'
          icon={<FaShoppingCart />}
          // border="hidden"
          // width='-moz-fit-content'
          // onClick={handleShoppingCartClick}
        ></IconButton>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>Popover Header</PopoverHeader>
        <PopoverBody>Popover Body</PopoverBody>
        <PopoverFooter>
          <Button variant='solid' colorScheme='blue'>
            <NextLink href='/shoppingcart' passHref>
              <Link>Cart</Link>
            </NextLink>
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
