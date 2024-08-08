'use client';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Heading,
  Divider,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';
import AddToCartBtn from './Cart/AddToCartBtn';

import QuantityAdjuster from './Products/QuantityAdjuster';

// import AddToCartButton from './Cart/AddToCartBtn';

const handleAddToCart = function () {
  localStorage.setItem('product', 'TEST PRODUCT');
};

const product = {
  productId: 1111,
  img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  name: 'Living Room Sofa',
  price: 450,
  color: null,
  discount: 0,
  description:
    'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
  rating: 4.7,
  quantity: 0,
  stockQuantity: 10,
};

const product2 = {
  productId: 2222,
  img: 'https://bit.ly/2Z4KKcF',
  name: 'House',
  price: 3000000,
  color: null,
  discount: 0,
  description: 'AirBNB House',
  rating: 5.0,
  quantity: 0,
  stockQuantity: 1,
};

export default function ProductCard() {
  return (
    <div className='flex flex-row'>
      <Card maxW='sm'>
        <CardHeader>
          <QuantityAdjuster></QuantityAdjuster>
        </CardHeader>
        <CardBody>
          <Image src={product.img} alt={product.alt} borderRadius='lg' />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{product.name}</Heading>
            <Text>{product.description}</Text>
            <Text color='blue.600' fontSize='2xl'>
              ${product.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button
              variant='solid'
              colorScheme='blue'
              onClick={handleAddToCart}
            >
              Buy now
            </Button>
            <AddToCartBtn productDetails={product} />
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Card maxW='sm'>
        <CardHeader>
          <QuantityAdjuster></QuantityAdjuster>
        </CardHeader>
        <CardBody>
          <Image src={product2.img} alt={product2.alt} borderRadius='lg' />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{product2.name}</Heading>
            <Text>{product2.description}</Text>
            <Text color='blue.600' fontSize='2xl'>
              ${product2.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button
              variant='solid'
              colorScheme='blue'
              onClick={handleAddToCart}
            >
              Buy now
            </Button>
            <AddToCartBtn productDetails={product2} />
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
}
