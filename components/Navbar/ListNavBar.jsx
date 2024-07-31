'use client';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { currentMonitor } from '@tauri-apps/api/window';

const listItems = [
  {
    category: 'category1',
    subset: ['item1', 'item2', 'item3'],
  },
  {
    category: 'category2',
    subset: ['item4', 'item5', 'item6'],
  },
  {
    category: 'category3',
    subset: ['item7', 'item8', 'item9'],
  },
  {
    category: 'category4',
    subset: ['item10', 'item11', 'item12'],
  },
];

export default function ListNavBar() {
  return (
    <div className='flex flex-row gap-5'>
      {listItems.map((curr, id) => {
        return (
          <Menu trigger='hover' key={id}>
            <MenuButton
              trigger='hover'
              as={Button}
              bg='transparent'
              rightIcon={<ChevronDownIcon />}
            >
              {curr.category}
            </MenuButton>
            <MenuList>
              {curr.subset.map((curItem, idx) => {
                return <MenuItem key={idx}>{curItem}</MenuItem>;
              })}
            </MenuList>
          </Menu>
        );
      })}
    </div>
  );
}
