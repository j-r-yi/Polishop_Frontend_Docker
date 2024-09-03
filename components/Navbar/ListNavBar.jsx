'use client';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const get_categories = async function () {
  try {
    const res = await fetch(`http://127.0.0.1:8000/category`);
    if (!res.ok) {
      throw new Error('Error accessing category endpoint');
    }
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log('Error fetching categories', error);
    return [];
  }
};

export default function ListNavBar() {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async function () {
      const data = await get_categories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  // console.log(categories);
  return (
    <div className='flex flex-row gap-5'>
      {categories.map((curr, id) => {
        return (
          <Menu trigger='hover' key={id}>
            <MenuButton
              trigger='hover'
              as={Button}
              bg='transparent'
              rightIcon={<ChevronDownIcon />}
              _hover={{
                background: 'none',
                border: 'solid',
                borderColor: 'white',
              }}
              _active={{ background: 'none' }}
            >
              {curr.category}
            </MenuButton>
            <MenuList>
              {curr.subcategories.map((curItem, idx) => {
                return (
                  <MenuItem
                    key={idx}
                    onClick={() => {
                      router.push(`/products/category/${curItem}`);
                    }}
                  >
                    {curItem}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        );
      })}
    </div>
  );
}
