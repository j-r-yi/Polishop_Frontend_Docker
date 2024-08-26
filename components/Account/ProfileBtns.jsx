'use client';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Box,
  Button,
  Divider,
  Icon,
  Text,
} from '@chakra-ui/react';

import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { RxAvatar } from 'react-icons/rx';
import { IoIosLogOut } from 'react-icons/io';

import { useRouter } from 'next/navigation';
import NextLink from 'next/link';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function ProfileBtns() {
  let isLoggedIn = useSelector((state) => state.account.isLoggedIn);
  isLoggedIn = localStorage.getItem('user') != null;

  const router = useRouter();
  // const currentUsername = useSelector((state) => state.account.currentUsername);
  const currentUsername = localStorage.getItem('user');
  console.log('The current username is', currentUsername);

  const handleLogOut = async function () {
    try {
      const updated_cart = {
        new_cart: localStorage.getItem('cartItems'),
      };
      const response = await axios.put(
        `http://127.0.0.1:8000/logout/${currentUsername}`,
        updated_cart,
      );
      if (response.data?.Error) {
        console.log(response.Error);
      } else {
        localStorage.clear();
        isLoggedIn = false;
        setTimeout(() => {
          window.location.reload(true);
        }, 100);
        await router.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <Menu direction=''>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              gap='15px'
              // _hover={{ backgroundColor: '#3182ce' }}
              background={'none'}
            >
              <Icon as={RxAvatar} boxSize={8}></Icon>
            </MenuButton>
            <MenuList>
              <MenuItem
                display='flex'
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                // gap={'10px'}
              >
                <NextLink href='/account' passHref>
                  <Text fontSize='md'>Your Account</Text>
                </NextLink>

                <Icon as={ChevronRightIcon} boxSize={5}></Icon>
              </MenuItem>
              <MenuItem
                display='flex'
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                // gap={'10px'}
                onClick={handleLogOut}
              >
                <Text fontSize='md'>Logout</Text>
                <Icon as={IoIosLogOut} boxSize={5}></Icon>
              </MenuItem>
            </MenuList>
          </Menu>
        </>
      ) : (
        <Box
          position='relative'
          padding='5'
          display='flex'
          flex='row'
          border='none'
        >
          <NextLink href='/account/login' passHref>
            <Button>Login</Button>
          </NextLink>
          <Divider orientation='vertical' />
          <NextLink href='/account/signup' passHref>
            <Button>Signup</Button>
          </NextLink>
        </Box>
      )}
    </>
  );
}
