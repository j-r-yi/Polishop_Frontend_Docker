import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Image,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from '@chakra-ui/react';

import QuantityAdjuster from './QuantityAdjuster';

export default function ProductCardDetailed({ product }) {
  return (
    <div>
      <Card
        // maxW='full'
        direction={{ base: 'column', sm: 'row' }}
        variant='outline'
      >
        <Image
          // objectFit='cover'
          maxW={{ base: '100%', sm: '300px' }}
          src={product.img}
          alt='Caffe Latte'
        />

        <div className='flex flex-col'>
          <CardBody>
            <Heading size='md'>{product.name}</Heading>
            <Text py='2'>{product.description}</Text>
            <Stat>
              <StatLabel>Sent</StatLabel>
              <StatNumber>${product.price.toLocaleString()}</StatNumber>
              <StatHelpText>
                <StatArrow type='increase' />
                23.36%
              </StatHelpText>
            </Stat>
          </CardBody>

          <CardFooter>
            <QuantityAdjuster product={product} />
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}
