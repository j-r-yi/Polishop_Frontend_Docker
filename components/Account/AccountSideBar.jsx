'use client';
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';

import NextLink from 'next/link';

const accountItems = [
  { title: 'Profile', ref: '' },
  { title: 'Information', ref: '/account/information' },
  { title: 'Location', ref: '/account/location' },
  { title: 'Orders', ref: '/account/orders' },
  { title: 'Favorites', ref: '/account/favorites' },
  { title: 'Ratings', ref: '/account/ratings' },
];

export default function AccountSideBar() {
  return (
    <div className=''>
      <Box>
        <Menu>
          <>
            {accountItems.map((curr) => {
              return (
                <NextLink href={curr.ref} passHref>
                  <MenuItem>{curr.title}</MenuItem>
                </NextLink>
              );
            })}
          </>
        </Menu>
      </Box>
    </div>
  );
}
