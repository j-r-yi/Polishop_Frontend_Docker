import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/slices/cart.slice';
import { Button } from '@chakra-ui/react';

export default function AddToCartBtn({ productDetails }) {
  // Uses redux dispatch
  const dispatch = useDispatch();

  // Cart reducer (redux) to update global state of cart items and store item in local storage
  const handleAddItem = function () {
    dispatch(addToCart(productDetails));
  };

  return <Button onClick={handleAddItem}>Add to cart</Button>;
}
