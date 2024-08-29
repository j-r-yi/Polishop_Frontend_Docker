import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Image,
  Text,
  Stack,
  Divider,
  ButtonGroup,
} from '@chakra-ui/react';

import CartCheckoutNav from '../../components/Cart/CartCheckoutNav';

export default function Checkout() {
  return (
    <div className='py-10'>
      <CartCheckoutNav></CartCheckoutNav>
      <Card maxW='md' className='py-10'>
        <CardBody>
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Living room Sofa</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
