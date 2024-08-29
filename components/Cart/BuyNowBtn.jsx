import { Button, Text } from '@chakra-ui/react';
import { BiSolidPurchaseTag } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { addToCart } from '../../features/slices/cart.slice';

export default function BuyNowBtn({ productDetails }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleBuyNow = function (e) {
    e.stopPropagation();
    dispatch(addToCart(productDetails));
    router.push('/cart');
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
