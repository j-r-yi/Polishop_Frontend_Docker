'use client';
import NextLink from 'next/link';

import { SearchIcon } from '@chakra-ui/icons';
import {
  Input,
  InputGroup,
  InputRightElement,
  InputRightAddon,
  InputLeftElement,
  InputLeftAddon,
  IconButton,
  Select,
  Divider,
  LinkBox,
  Text,
} from '@chakra-ui/react';

import ListNavBar from './ListNavBar';
import DrawerNav from './DrawerNav';
import ShoppingCartBtn from '../Cart/ShoppingCartBtn';
import LocationModal from '../Navbar/LocationModal';
import ProfileBtns from '../Account/ProfileBtns';

export default function Navbar() {
  return (
    <div className='flex flex-col justify-center items-center mx-auto'>
      <div className='flex flex-col sm:flex-row items-center justify-evenly gap-10 pl-20 pr-20 bg-gradient-to-r from-blue-200 to-cyan-100 w-full pb-3 pt-6'>
        <NextLink href='/' passHref>
          <Text
            as='b'
            color='white'
            fontSize='xl'
            className='whitespace-nowrap'
          >
            Poli Shop
          </Text>
        </NextLink>

        <InputGroup size='md'>
          <InputLeftAddon>
            <Select w='full' placeholder='All' border='hidden'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </InputLeftAddon>
          <Input
            placeholder='Search for items...'
            width='80%'
            variant='filled'
          />

          <InputRightAddon width='4.5rem'>
            <IconButton
              colorScheme='white'
              color='black'
              aria-label='Search Items'
              icon={<SearchIcon />}
              w='full'
              border='hidden'
            />
          </InputRightAddon>
        </InputGroup>

        <ProfileBtns></ProfileBtns>

        <ShoppingCartBtn></ShoppingCartBtn>
      </div>
      <div className='flex flex-row items-center justify-evenly gap-3 p-2 bg-gradient-to-r from-blue-200 to-cyan-100 w-full pb-3'>
        <div>
          <DrawerNav></DrawerNav>
        </div>
        <div className='hidden md:block'>
          <ListNavBar></ListNavBar>
        </div>
        <div>
          <LocationModal></LocationModal>
        </div>
      </div>
      <div>
        <Divider orientation='horizontal' />
      </div>
    </div>
  );
}
