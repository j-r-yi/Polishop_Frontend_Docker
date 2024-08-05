import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/features/cart.slice';
import { Button, ButtonGroup } from '@chakra-ui/react';

export default function AddToCartBtn({ productDetails }) {
  const dispatch = useDispatch();

  const handleAddItem = function () {
    dispatch(addToCart(1));
    localStorage.setItem('product', productDetails);
  };

  return <Button onClick={handleAddItem}>Add to cart</Button>;
}
