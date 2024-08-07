import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  StackDivider,
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';

export default function CheckoutSummary({ cartInfo }) {
  return (
    <Card>
      <CardHeader>
        <Heading size='md'>
          Subtotal ({cartInfo.cartNumItems}{' '}
          {cartInfo.cartNumItems > 1 ? 'items' : 'item'}): {cartInfo.cartCost}$
        </Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Summary
            </Heading>
            <Text pt='2' fontSize='sm'>
              View a summary of all your clients over the last month.
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Overview
            </Heading>
            <Text pt='2' fontSize='sm'>
              Check out the overview of your clients.
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
