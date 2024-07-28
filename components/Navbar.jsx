import { border, IconButton } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement, InputRightAddon, InputLeftElement, InputLeftAddon } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { FaShoppingCart } from "react-icons/fa";
import { Divider } from '@chakra-ui/react'



function handleClick(){
    return;
}

export default function Navbar(){
    return(  
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-row items-center justify-center gap-5 p-5 bg-gradient-to-r from-blue-200 to-cyan-200' w="full" >
            <IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Done' fontSize='20px'/>
            <h3>Deliver to [username] + [location]</h3>
            <InputGroup size='md'>
      <InputLeftAddon>
        <Select w="full" placeholder='All' border='hidden'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
      </InputLeftAddon>
      <Input
        pr='4.5rem'
        // type={show ? 'text' : 'password'}
        placeholder='Search for items...'
        width="40rem"
        variant='filled'
        />

      <InputRightAddon width='4.5rem'>
        {/* <Button h='1.75rem' size='sm' onClick={handleClick}>

        </Button> */}
        <IconButton
  colorScheme='blue'
  aria-label='Search Items'
  icon={<SearchIcon />}

/>
      </InputRightAddon>
    </InputGroup>

            <h3>Hello [username]</h3>
            <IconButton
  variant='outline'
  colorScheme='blue'
  aria-label='Shopping Cart'
  fontSize='20px'
  icon={<FaShoppingCart />}
  w="full"
border="hidden"
// width='-moz-fit-content'
/>
</div>
<div>

</div>
<div><Divider orientation='horizontal' />
</div>
        </div>
    )
}