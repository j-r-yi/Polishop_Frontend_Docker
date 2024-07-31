'use client';
import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { border, IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import {
  Input,
  InputGroup,
  InputRightElement,
  InputRightAddon,
  InputLeftElement,
  InputLeftAddon,
} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

import ListNavBar from './ListNavBar';
import DrawerNav from './DrawerNav';
import ShoppingCartBtn from './ShoppingCartBtn';

function handleClick() {
  return;
}

export default function Navbar() {
  // function handleShoppingCartClick() {
  //   return (
  //   );
  // }

  return (
    <div className='flex flex-col justify-center items-center '>
      <div className='flex flex-col sm:flex-row items-center justify-center gap-5 p-5 bg-gradient-to-r from-blue-200 to-cyan-200 w-full'>
        <IconButton
          // isRound={true}
          variant='solid'
          // colorScheme='teal'
          bg='#e8bdff'
          aria-label='Done'
          fontSize='20px'
          w='full'
        >
          <NextLink href='/' passHref>
            <Link>NextJS Shop</Link>
          </NextLink>
        </IconButton>
        <h3>Deliver to [username] + [location]</h3>
        <InputGroup size='md'>
          <InputLeftAddon>
            <Select w='full' placeholder='All' border='hidden'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </InputLeftAddon>
          <Input
            pr='4.5rem'
            // type={show ? 'text' : 'password'}
            placeholder='Search for items...'
            width='40rem'
            variant='filled'
          />

          <InputRightAddon width='4.5rem'>
            {/* <Button h='1.75rem' size='sm' onClick={handleClick}>

        </Button> */}
            <IconButton
              colorScheme='blue'
              aria-label='Search Items'
              icon={<SearchIcon />}
              w='full'
              border='hidden'
            />
          </InputRightAddon>
        </InputGroup>
        <Box
          position='relative'
          padding='5'
          display='flex'
          flex='row'
          border='none'
        >
          <Button>Login</Button>
          <Divider orientation='vertical' />
          <Button>Signup</Button>
        </Box>

        <h3>Hello [username]</h3>

        <ShoppingCartBtn></ShoppingCartBtn>
      </div>
      <div className='flex flex-row items-center justify-evenly gap-10 p-2 bg-gradient-to-r from-blue-200 to-cyan-200 w-full'>
        <DrawerNav></DrawerNav>
        <div className='display'>
          <ListNavBar></ListNavBar>
        </div>
      </div>
      <div>
        <Divider orientation='horizontal' />
      </div>
    </div>
  );
}
