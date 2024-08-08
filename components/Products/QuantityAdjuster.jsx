import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
  Text,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon, DeleteIcon } from '@chakra-ui/icons';

import AddToCartBtn from '../Cart/AddToCartBtn';

const handleAdd = function () {
  return;
};

const handleMinus = function () {
  return;
};

export default function QuantityAdjuster({ product }) {
  return (
    <>
      {product?.quantity > 0 ? (
        <div className='flex flex-row items-center justify-center'>
          <InputGroup>
            <InputLeftElement>
              <IconButton icon={<AddIcon />} onClick={handleAdd}></IconButton>
            </InputLeftElement>
            <Input
              isReadOnly={true}
              defaultValue={product.quantity}
              textAlign={'center'}
            ></Input>

            <InputRightElement>
              {product.quantity == 1 ? (
                <></>
              ) : (
                <IconButton
                  icon={product.quantity == 1 ? <Delete /> : <MinusIcon />}
                  onClick={handleMinus}
                ></IconButton>
              )}
            </InputRightElement>
          </InputGroup>
        </div>
      ) : (
        <>{/* <AddToCartBtn product={product}></AddToCartBtn> */}</>
      )}
    </>
  );
}
