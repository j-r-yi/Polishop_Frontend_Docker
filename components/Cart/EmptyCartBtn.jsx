import { useDispatch } from 'react-redux';
import { clearCart } from '../../features/features/cart.slice';
import { border, IconButton } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

export default function ClearCartBtn() {
  const dispatch = useDispatch();

  const handleClearCart = function () {
    dispatch(clearCart());
  };

  return (
    <div>
      <Button variant='solid' colorScheme='red' onClick={handleClearCart}>
        Empty Cart
      </Button>
    </div>
  );
}
