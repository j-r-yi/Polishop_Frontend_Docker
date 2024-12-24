'use client';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Input,
  InputGroup,
  Stack,
  Button,
  VStack,
  Heading,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function AddProductCard() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    discount: '',
    description: '',
    product_details: '',
    category: '',
    subcategory: '',
    img: '',
    gallery_1: '',
    gallery_2: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    // You can add your form submission logic here
  };

  return (
    <Card
      className='items-center justify-center'
      p={5}
      boxShadow='lg'
      borderRadius='md'
    >
      <CardHeader>
        <Heading size='md' textAlign='center' mb={4}>
          Add New Product
        </Heading>
      </CardHeader>
      <CardBody>
        <VStack spacing={4} align='stretch'>
          <Input
            name='name'
            placeholder='Enter product name'
            size='md'
            variant='outline'
            focusBorderColor='blue.500'
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            name='price'
            placeholder='Enter product price'
            size='md'
            variant='outline'
            focusBorderColor='blue.500'
            value={formData.price}
            onChange={handleChange}
          />
          <Input
            name='discount'
            placeholder='Enter product discounted price'
            size='md'
            variant='outline'
            focusBorderColor='blue.500'
            value={formData.discount}
            onChange={handleChange}
          />
          <Input
            name='description'
            placeholder='Enter product description'
            size='md'
            variant='outline'
            focusBorderColor='blue.500'
            value={formData.description}
            onChange={handleChange}
          />
          <Input
            name='product_details'
            placeholder='Enter product details'
            size='md'
            variant='outline'
            focusBorderColor='blue.500'
            value={formData.product_details}
            onChange={handleChange}
          />
          <Input
            name='category'
            placeholder='Enter product category'
            size='md'
            variant='outline'
            focusBorderColor='blue.500'
            value={formData.category}
            onChange={handleChange}
          />
          <Input
            name='subcategory'
            placeholder='Enter product subcategory'
            size='md'
            variant='outline'
            focusBorderColor='blue.500'
            value={formData.subcategory}
            onChange={handleChange}
          />
          <Input
            name='img'
            placeholder='Enter product image 1 URL'
            size='md'
            variant='outline'
            focusBorderColor='blue.500'
            value={formData.img}
            onChange={handleChange}
          />
          <Input
            name='gallery_1'
            placeholder='Enter product image 2 URL'
            size='md'
            variant='outline'
            focusBorderColor='blue.500'
            value={formData.gallery_1}
            onChange={handleChange}
          />
          <Input
            name='gallery_2'
            placeholder='Enter product image 3 URL'
            size='md'
            variant='outline'
            focusBorderColor='blue.500'
            value={formData.gallery_2}
            onChange={handleChange}
          />
        </VStack>
      </CardBody>
      <CardFooter>
        <Button
          colorScheme='blue'
          size='md'
          width='full'
          onClick={handleSubmit}
        >
          Submit Product
        </Button>
      </CardFooter>
    </Card>
  );
}
