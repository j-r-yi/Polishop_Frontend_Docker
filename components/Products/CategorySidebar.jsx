'use client';
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  StackDivider,
  Switch,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CategorySidebar() {
  const format = (val) => `$` + val;
  const parse = (val) => val.replace(/^\$/, '');
  const [value1, setValue1] = useState('0');
  const [value2, setValue2] = useState('9999');

  const router = useRouter();

  return (
    <Card>
      <CardHeader>
        <Heading size='md'>Category Adjustments</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <div className='flex flex-row items-center justify-between'>
              <Text>Discounted items</Text>
              <Switch size='md' />
            </div>
          </Box>
          <Box>
            <div>
              <Text as='b'>Price Range</Text>
              <div className='flex flex-row justify-between items-center mb-5'>
                <Text>From:</Text>
                <NumberInput
                  onChange={(valueString) => setValue1(parse(valueString))}
                  value={format(value1)}
                  min={0}
                  w={'50%'}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </div>
              <div className='flex flex-row justify-between items-center'>
                <Text>To:</Text>
                <NumberInput
                  onChange={(valueString) => setValue2(parse(valueString))}
                  value={format(value2)}
                  max={9999}
                  w={'50%'}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </div>
            </div>
          </Box>
        </Stack>
      </CardBody>
      <CardFooter className='items-center justify-center'>
        <Button
          onClick={() => {
            router.push('/products/addproduct');
          }}
          variant='solid'
          color='white'
          backgroundColor='#59c1c1'
          _hover={{ backgroundColor: '#49B1B1' }}
        >
          Add Product
        </Button>
      </CardFooter>
    </Card>
  );
}
