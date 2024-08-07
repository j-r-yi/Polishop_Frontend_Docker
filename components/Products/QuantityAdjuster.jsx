import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

import AddToCartBtn from '../Cart/AddToCartBtn';

const handleAdd = function () {
  return;
};

const handleMinus = function () {
  return;
};

const count = 1;

export default function QuantityAdjuster() {
  return (
    <>
      {count > 0 ? (
        <div className='flex flex-row items-center justify-center'>
          <InputGroup>
            <InputLeftElement>
              <IconButton icon={<AddIcon />} onClick={handleAdd}></IconButton>
            </InputLeftElement>
            <Input
              isReadOnly={true}
              defaultValue={'1'}
              textAlign={'center'}
            ></Input>
            <InputRightElement>
              <IconButton
                icon={<MinusIcon />}
                onClick={handleMinus}
              ></IconButton>
            </InputRightElement>
          </InputGroup>
        </div>
      ) : (
        <>
          <AddToCartBtn></AddToCartBtn>
        </>
      )}
    </>
  );
}
