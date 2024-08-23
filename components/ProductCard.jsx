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
      <Card w='400px' h='600px'>
        <CardBody>
          <div className='flex items-center justify-center'>
            <Image
              objectFit='cover'
              boxSize='300px'
              src={product.img}
              alt={product.alt}
              borderRadius='lg'
            />
          </div>
          <div className='pt-5'>
            <Stack spacing='2'>
              <Heading size='md'>{product.productname}</Heading>
              <Text>{product.description}</Text>
              <Text color='blue.600' fontSize='2xl'>
                ${product.price}
              </Text>
            </Stack>
          </div>
        </CardBody>
        <Divider />
        <CardFooter>
          <div className='flex justify-center items-center gap-10'>
            <Button variant='solid' colorScheme='blue' onClick={handleBuyNow}>
              Buy now
            </Button>
            <AddToCartBtn productDetails={product} />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
