'use client';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  StackDivider,
  Box,
  Heading,
  Button,
  Text,
} from '@chakra-ui/react';

// import QuantityAdjuster from '/QuantityAdjuster';
import QuantityAdjuster from './QuantityAdjuster';

export default function ProductCheckout({ product }) {
  console.log(product.quantity);
  return (
    <Card>
      <CardHeader>
        <Heading size='md'>Subtotal</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Summary
            </Heading>
            <Text pt='2' fontSize='sm'>
              View a summary of all your cart products.
            </Text>
          </Box>
          <Box>
            <Button>Go to checkout</Button>
            <QuantityAdjuster product={product}></QuantityAdjuster>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
