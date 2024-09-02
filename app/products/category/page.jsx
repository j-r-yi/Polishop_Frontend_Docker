import CategorySideBar from '../../../components/Products/CategorySidebar';
import { Text, Grid, GridItem } from '@chakra-ui/react';

export default function Category() {
  return (
    <div className='flex flex-col px-10'>
      <div>
        <Text fontSize='4xl' className='mb-10'>
          Category
        </Text>
      </div>
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 3fr' }}
        gap={6}
        className='mt-10'
      >
        <GridItem>
          <CategorySideBar></CategorySideBar>
        </GridItem>
        <GridItem>{/* <CheckoutFinal></CheckoutFinal> */}</GridItem>
      </Grid>
    </div>
  );
}
