'use client';

import axios from 'axios';
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

  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const validateInputs = () => {
    const newErrors = {};

    // Validation rules based on database schema
    if (!formData.name.trim() || formData.name.length > 45)
      newErrors.name =
        'Product name is required and must be less than 45 characters';

    if (!/^[0-9]+(\.[0-9]{1,2})?$/.test(formData.price))
      newErrors.price = 'Enter a valid price (e.g., 99.99)';

    if (formData.discount && !/^[0-9]+(\.[0-9]{1,2})?$/.test(formData.discount))
      newErrors.discount = 'Enter a valid discount price (e.g., 10.50)';

    if (!formData.description.trim())
      newErrors.description = 'Description is required';

    if (!formData.product_details.trim())
      newErrors.product_details = 'Product details are required';

    if (!formData.category.trim() || formData.category.length > 45)
      newErrors.category =
        'Category is required and must be less than 45 characters';

    if (!formData.subcategory.trim() || formData.subcategory.length > 45)
      newErrors.subcategory =
        'Subcategory is required and must be less than 45 characters';

    if (!formData.img || !/^https?:\/\//.test(formData.img))
      newErrors.img = 'Enter a valid URL for the main image';

    if (formData.gallery_1 && !/^https?:\/\//.test(formData.gallery_1))
      newErrors.gallery_1 = 'Enter a valid URL for image 2';

    if (formData.gallery_2 && !/^https?:\/\//.test(formData.gallery_2))
      newErrors.gallery_2 = 'Enter a valid URL for image 3';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async function (e) {
    if (validateInputs()) {
      // console.log('Form Data:', formData);
      e.preventDefault();

      const productPackage = {
        name: formData.name,
        price: formData.price,
        discount: formData.discount,
        description: formData.description,
        product_details: formData.product_details,
        category: formData.category,
        subcategory: formData.subcategory,
        img: formData.img,
        gallery_1: formData.gallery_1,
        gallery_2: formData.gallery_2,
        quantity: 1,
      };

      const productArray = Array.from({ length: 1000 }, (_, i) => ({
        ...productPackage,
        name: `${productPackage.name}-${i + 1}`,
      }));

      try {
        const promises = productArray.map((product) => {
          axios.post('http://localhost:8000/product/add', product);
        });
        await Promise.all(promises);
        alert('All items have been added successfully!');

        // const response = await axios.post(
        //   'http://localhost:8000/product/add',
        //   productPackage,
        // );
        // if (response.data?.Error) {
        //   setErrorMessage(response.data?.Error);
        // } else {
        //   console.log('Added to databse successfully!');
        // }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Card
      className='items-center justify-center'
      p={5}
      boxShadow='lg'
      borderRadius='md'
    >
      <CardHeader>
        <Heading size='md' textAlign='center' mb={4} color='#59c1c1'>
          Add New Product
        </Heading>
      </CardHeader>
      <CardBody width='50%'>
        <VStack spacing={4} align='stretch'>
          <Text>Product Name</Text>
          <Input
            name='name'
            placeholder='Enter product name'
            size='md'
            variant='outline'
            focusBorderColor='blue.500'
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
            errorBorderColor='red.500'
            width='100%'
          />
          <Text color='red.500'>{errors.name}</Text>

          <Text>Product Price</Text>
          <Input
            name='price'
            placeholder='Enter product price'
            size='md'
            variant='outline'
            focusBorderColor='blue.500'
            value={formData.price}
            onChange={handleChange}
            isInvalid={!!errors.price}
            errorBorderColor='red.500'
            width='100%'
          />
          <Text color='red.500'>{errors.price}</Text>

          <Text>Discounted Price</Text>
          <Input
            name='discount'
            placeholder='Enter product discounted price'
            size='md'
            variant='outline'
            focusBorderColor='blue.500'
            value={formData.discount}
            onChange={handleChange}
            isInvalid={!!errors.discount}
            errorBorderColor='red.500'
            width='100%'
          />
          <Text color='red.500'>{errors.discount}</Text>

          <Text>Description</Text>
          <Input
            name='description'
            placeholder='Enter product description'
            size='md'
            variant='outline'
            focusBorderColor='blue.500'
            value={formData.description}
            onChange={handleChange}
            isInvalid={!!errors.description}
            errorBorderColor='red.500'
            width='100%'
          />
          <Text color='red.500'>{errors.description}</Text>

          <Text>Product Details</Text>
          <Input
            name='product_details'
            placeholder='Enter product details'
            size='md'
            variant='outline'
            focusBorderColor='blue.500'
            value={formData.product_details}
            onChange={handleChange}
            isInvalid={!!errors.product_details}
            errorBorderColor='red.500'
            width='100%'
          />
          <Text color='red.500'>{errors.product_details}</Text>

          <Text>Category</Text>
          <Input
            name='category'
            placeholder='Enter product category'
            size='md'
            variant='outline'
            focusBorderColor='blue.500'
            value={formData.category}
            onChange={handleChange}
            isInvalid={!!errors.category}
            errorBorderColor='red.500'
            width='100%'
          />
          <Text color='red.500'>{errors.category}</Text>

          <Text>Subcategory</Text>
          <Input
            name='subcategory'
            placeholder='Enter product subcategory'
            size='md'
            variant='outline'
            focusBorderColor='blue.500'
            value={formData.subcategory}
            onChange={handleChange}
            isInvalid={!!errors.subcategory}
            errorBorderColor='red.500'
            width='100%'
          />
          <Text color='red.500'>{errors.subcategory}</Text>

          <Text>Image URL</Text>
          <Input
            name='img'
            placeholder='Enter product image 1 URL'
            size='md'
            variant='outline'
            focusBorderColor='blue.500'
            value={formData.img}
            onChange={handleChange}
            isInvalid={!!errors.img}
            errorBorderColor='red.500'
            width='100%'
          />
          <Text color='red.500'>{errors.img}</Text>

          <Text>Gallery Image 2</Text>
          <Input
            name='gallery_1'
            placeholder='Enter product image 2 URL'
            size='md'
            variant='outline'
            focusBorderColor='blue.500'
            value={formData.gallery_1}
            onChange={handleChange}
            isInvalid={!!errors.gallery_1}
            errorBorderColor='red.500'
            width='100%'
          />
          <Text color='red.500'>{errors.gallery_1}</Text>

          <Text>Gallery Image 3</Text>
          <Input
            name='gallery_2'
            placeholder='Enter product image 3 URL'
            size='md'
            variant='outline'
            focusBorderColor='blue.500'
            value={formData.gallery_2}
            onChange={handleChange}
            isInvalid={!!errors.gallery_2}
            errorBorderColor='red.500'
            width='100%'
          />
          <Text color='red.500'>{errors.gallery_2}</Text>
        </VStack>
      </CardBody>
      <CardFooter>
        <Button
          variant='solid'
          color='white'
          backgroundColor='#59c1c1'
          _hover={{ backgroundColor: '#49B1B1' }}
          onClick={handleSubmit}
        >
          Submit Product
        </Button>
      </CardFooter>
    </Card>
  );
}
