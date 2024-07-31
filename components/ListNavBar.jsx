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
      {listItems.map((curr) => {
        return (
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              {curr.category}
            </MenuButton>
            <MenuList>
              {curr.subset.map((curItem) => {
                return <MenuItem>{curItem}</MenuItem>;
              })}
              {/* <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem> */}
            </MenuList>
          </Menu>
        );
      })}
    </div>
  );
}

/*
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, ButtonGroup } from '@chakra-ui/react'


export default function ListNavBar(){
    return(
        <div>
            <Tabs isFitted variant='enclosed'>
  <TabList mb='1em'>
    <Tab>One<Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
        {isOpen ? 'Close' : 'Open'}
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem>
      </MenuList>
    </>
  )}
</Menu></Tab>
    <Tab>Two <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
        {isOpen ? 'Close' : 'Open'}
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem>
      </MenuList>
    </>
  )}
</Menu></Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
        </div>
    )
}
*/
