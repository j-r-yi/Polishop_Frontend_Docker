'use client';
import { Box } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { RxAvatar } from 'react-icons/rx';
import NextLink from 'next/link';
import { IoIosLogOut } from 'react-icons/io';
import { Text } from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';

let isLoggedIn = false;

export default function ProfileBtns() {
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
