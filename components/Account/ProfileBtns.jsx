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

import NextLink from 'next/link';
import { useSelector } from 'react-redux';

export default function ProfileBtns() {
  const isLoggedIn = useSelector((state) => state.account.isLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <>
          <Menu direction=''>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} gap='15px'>
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
                // onClick={}
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
