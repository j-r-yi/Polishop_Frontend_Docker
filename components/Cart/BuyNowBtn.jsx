import { Button, Text } from '@chakra-ui/react';
import { BiSolidPurchaseTag } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { addToCart } from '../../features/slices/cart.slice';

import { useSelector } from 'react-redux';

export default function BuyNowBtn({ productDetails }) {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleBuyNow = function (e) {
    e.stopPropagation();
    const existingProduct = cartItems.find(
      (item) => item.productId === productDetails.productId,
    );
    console.log(existingProduct);
    if (!existingProduct) {
      dispatch(addToCart(productDetails));
      router.push('/cart');
    } else {
      router.push('/cart');
    }
  };

  return (
    <Button
      variant='solid'
      colorScheme='blue'
      onClick={handleBuyNow}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      gap='5px'
    >
      <Text>Buy now</Text>
      <BiSolidPurchaseTag fontSize={20}></BiSolidPurchaseTag>
    </Button>
  );
}
