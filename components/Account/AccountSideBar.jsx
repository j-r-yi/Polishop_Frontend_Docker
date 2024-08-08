'use client';
import { Box, Menu, MenuItem, Avatar, Text, Flex } from '@chakra-ui/react';

import { ChevronRightIcon } from '@chakra-ui/icons';

import NextLink from 'next/link';

const accountItems = [
  { title: 'Profile', ref: '/account' },
  { title: 'Information', ref: '/account/information' },
  { title: 'Location', ref: '/account/location' },
  { title: 'Orders', ref: '/account/orders' },
  { title: 'Favorites', ref: '/account/favorites' },
  { title: 'Ratings', ref: '/account/ratings' },
];

export default function AccountSideBar() {
  return (
    <div className=''>
      <Box boxShadow='md'>
        <Menu>
          <MenuItem background={'white'}>
            <Avatar bg='teal.500' src='https://bit.ly/broken-link' />
            [Username]
          </MenuItem>
          <>
            {accountItems.map((curr) => {
              return (
                <NextLink href={curr.ref} passHref>
                  <MenuItem
                    background={'white'}
                    color={'teal.500'}
                    _hover={{
                      background: 'teal.500',
                      color: 'white',
                    }}
                  >
                    <Flex
                      flexDirection='row'
                      alignItems='center'
                      justifyContent='space-between'
                      width='100%'
                      padding='10px'
                    >
                      <Text>{curr.title}</Text>
                      <ChevronRightIcon />
                    </Flex>
                  </MenuItem>
                </NextLink>
              );
            })}
          </>
        </Menu>
      </Box>
    </div>
  );
}
