import { Text, Card, CardBody } from '@chakra-ui/react';

export default function CheckoutOptions() {
  return (
    <div className='flex flex-col'>
      <div>
        <Card w='100%'>
          <CardBody className='flex flex-row items-center justify-evenly'>
            <Text>1. Delivery Address</Text>
            <Text>{localStorage.getItem('user')}</Text>
          </CardBody>
        </Card>
      </div>
      <div>
        <Card w='100%'>
          <CardBody className='flex flex-row items-center justify-evenly'>
            <Text>2. Payment Method</Text>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
