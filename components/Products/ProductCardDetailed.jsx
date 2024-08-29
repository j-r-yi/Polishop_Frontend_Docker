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
        // className='py-5'
        border={'solid'}
        borderColor={'gray.200'}
      >
        <Image
          objectFit='cover'
          maxW={{ base: '80%', sm: '200px' }}
          src={product.img}
          alt={product.alt}
        />

        <div className='flex flex-col'>
          <CardBody>
            <Heading size='md'>{product.productname}</Heading>
            {/* <Text py='2'>{product.description}</Text> */}
            <Stat>
              {/* <StatLabel>Sent</StatLabel> */}
              <StatNumber>${product.price.toLocaleString()}</StatNumber>
              <StatHelpText>
                <StatArrow type='decrease' />$
                {product.discount.toLocaleString()}
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
