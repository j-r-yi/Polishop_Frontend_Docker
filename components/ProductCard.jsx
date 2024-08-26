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
  AspectRatio,
  Flex,
} from '@chakra-ui/react';

import AddToCartBtn from './Cart/AddToCartBtn';
import QuantityAdjuster from './Products/QuantityAdjuster';

const handleBuyNow = function () {
  return;
};

export default function ProductCard({ product }) {
  return (
    <Card h='100%'>
      <CardBody>
        <div className='flex flex-col justify-center'>
          <div className='items-center justify-center'>
            <AspectRatio ratio={4 / 3} w='100%' maxW='300px'>
              <Image
                objectFit='cover'
                boxSize='300px'
                src={product.img}
                alt={product.alt}
                borderRadius='lg'
                width='100%'
                height='100%'
              />
            </AspectRatio>
          </div>
          {/* <Flex direction='column' justify='evenly' paddingTop='10px'> */}
          <Stack spacing='2' paddingTop='10px'>
            <Heading size='md'>{product.productname}</Heading>
            <Text>{product.description}</Text>
            <Text color='blue.600' fontSize='2xl'>
              ${product.price}
            </Text>
            <div className='flex flex-row gap-2'>
              <Text>{product.rating}</Text>
              <img src='/star-svgrepo-com.svg' width={20} height={20}></img>
            </div>
          </Stack>
          {/* </Flex> */}
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className='flex flex-row justify-evenly items-center w-full'>
          <Button variant='solid' colorScheme='blue' onClick={handleBuyNow}>
            Buy now
          </Button>
          <AddToCartBtn productDetails={product} />
        </div>
      </CardFooter>
    </Card>
  );
}
