'use client';
import NextLink from 'next/link';

import { SearchIcon } from '@chakra-ui/icons';
import {
  Input,
  InputGroup,
  InputRightAddon,
  IconButton,
  Divider,
  Text,
  Image,
} from '@chakra-ui/react';

import ListNavBar from './ListNavBar';
import DrawerNav from './DrawerNav';
import ShoppingCartBtn from '../Cart/ShoppingCartBtn';
import LocationModal from '../Navbar/LocationModal';
import ProfileBtns from '../Account/ProfileBtns';

const handleSearch = async function (term) {
  try {
    const res = await fetch(`http://127.0.0.1:8000/search/${term}`);
    if (!res.ok) {
      throw new Error('Invalid Search');
    }
    const data = await res.json();
  } catch (error) {
    console.log('Cannot find item', error);
  }
};

import { useState } from 'react';

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = function (e) {
    e.stopPropagation();
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = function (e) {
    if (e.key === 'Enter') {
      console.log('enter key ');
      e.preventDefault();
      handleSearch(searchTerm);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center mx-auto bg-gradient-to-br from-blue-200 to-cyan-100'>
      <div className='flex flex-col sm:flex-row items-center justify-evenly gap-10 pl-20 pr-20 w-full pb-3 pt-6'>
        <NextLink href='/' passHref>
          <div className='flex flex-row items-center gap-2 mr-10'>
            <Image src='/icon_copy.png' boxSize='50px' />
            <Text
              as='b'
              color='black'
              fontSize='xl'
              className='whitespace-nowrap'
            >
              Poli Shop
            </Text>
          </div>
        </NextLink>

        <InputGroup size='md'>
          <Input
            placeholder='Search for items...'
            width='90%'
            variant='filled'
            onChange={handleSearchTermChange}
            onKeyDown={handleKeyDown}
            bg='gray.100'
            _focus={{ backgroundColor: 'gray.100' }}
          />

          <InputRightAddon width='4.5rem'>
            <IconButton
              colorScheme='white'
              color='black'
              aria-label='Search Items'
              icon={<SearchIcon />}
              w='full'
              border='hidden'
              onClick={() => {
                handleSearch(searchTerm);
              }}
            />
          </InputRightAddon>
        </InputGroup>

        <ProfileBtns></ProfileBtns>
        <ShoppingCartBtn></ShoppingCartBtn>
      </div>
      <div className='flex flex-row items-center justify-evenly gap-3 p-2 w-full pb-3'>
        <DrawerNav></DrawerNav>
        <div className='hidden md:block'>
          <ListNavBar></ListNavBar>
        </div>
        <div>
          <LocationModal></LocationModal>
        </div>
      </div>
    </div>
  );
}
