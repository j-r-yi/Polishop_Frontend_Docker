'use client';
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
  Container,
} from '@chakra-ui/react';

import CartCheckoutNav from '../../components/Cart/CartCheckoutNav';
import CheckoutOptions from '../../components/Cart/CheckoutOptions';
import CheckoutFinal from '../../components/Cart/CheckoutFinal';

export default function Checkout() {
  return (
    <div className='flex flex-col px-10'>
      <Text fontSize='4xl' className='mb-10'>
        Checkout
      </Text>
      <CartCheckoutNav></CartCheckoutNav>
      <div className='flex flex-col md:flex-row justify-evenly mt-10 gap-10'>
        <Container
          maxW='container.lg'
          className='flex-grow'
          style={{ flexBasis: '75%' }}
        >
          <CheckoutOptions></CheckoutOptions>
        </Container>
        <Container className='flex-grow' style={{ flexBasis: '25%' }}>
          <CheckoutFinal></CheckoutFinal>
        </Container>
      </div>
    </div>
  );
}
