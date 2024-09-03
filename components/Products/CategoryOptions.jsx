'use client';
import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Heading,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import {
  FaSortAmountDown,
  FaSortAmountUp,
  FaSortAmountDownAlt,
  FaSortAmountUpAlt,
} from 'react-icons/fa';
import { useState } from 'react';

export default function CategoryOptions() {
  const [sortMethod, setSortMethod] = useState('Newest');
  return (
    <Card>
      <CardHeader>
        <div className='flex flex-row items-center justify-start gap-4'>
          <Menu>
            <MenuButton
              as={Button}
              leftIcon={
                sortMethod == 'Price Ascending' ? (
                  <FaSortAmountUp />
                ) : (
                  <FaSortAmountDown />
                )
              }
              colorScheme={'white'}
              color={'black'}
              _hover={{ backgroundColor: 'gray.100' }}
            >
              Sort By: {sortMethod}
            </MenuButton>
            <MenuList>
              <MenuItem
                minH='20px'
                onClick={() => {
                  setSortMethod('Newest');
                }}
              >
                <Text fontSize='md'>Newest</Text>
              </MenuItem>
              <MenuItem
                minH='20px'
                onClick={() => {
                  setSortMethod('Highest Rated');
                }}
              >
                <Text fontSize='md'>Highest Rated</Text>
              </MenuItem>
              <MenuItem
                minH='20px'
                onClick={() => {
                  setSortMethod('Price Ascending');
                }}
              >
                <Text fontSize='md'>Price Ascending</Text>
              </MenuItem>
              <MenuItem
                minH='20px'
                onClick={() => {
                  setSortMethod('Price Descending');
                }}
              >
                <Text fontSize='md'>Price Descending</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Heading size='sm'>
              <div className='flex flex-row items-center justify-between'>
                <Text>All Products</Text>
                <Text>{} products</Text>
              </div>
            </Heading>
            <Text pt='2' fontSize='sm'>
              View a summary of all your cart products
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
