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

const handleBuyNow = function () {
  return;
};

export default function ProductCard({ product }) {
  return (
    <div className=''>
      <Card w='300px' h='600px'>
        <CardBody>
          <Image
            objectFit='cover'
            boxSize='300px'
            src={product.img}
            alt={product.alt}
            borderRadius='lg'
          />
          <Stack spacing='1'>
            <Heading size='md'>{product.productname}</Heading>
            <Text>{product.description}</Text>
            <Text color='blue.600' fontSize='2xl'>
              ${product.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue' onClick={handleBuyNow}>
              Buy now
            </Button>
            <AddToCartBtn productDetails={product} />
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
}
