import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/features/cart.slice';
import { Button, ButtonGroup } from '@chakra-ui/react';

export default function AddToCartBtn() {
  const dispatch = useDispatch();

  const handleAddItem = function () {
    dispatch(addToCart(1));
  };

  return <Button onClick={handleAddItem}>Add to cart</Button>;
}
