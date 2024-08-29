// 'use client';

// import ProductCardDetailed from '../../components/Products/ProductCardDetailed';
// import CheckoutSummary from '../../components/Cart/CheckoutSummary';
// import CartIsEmpty from '../../components/Cart/CartIsEmpty';
// import CartCheckoutNav from '../../components/Cart/CartCheckoutNav';

// import { Text, Container, Box } from '@chakra-ui/react';
// import { useSelector } from 'react-redux';

// export default function ShoppingCart() {
//   const cartItemsCount = useSelector((state) => state.cart.cartItemCount);
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   return (
//     <div className='flex flex-col px-10'>
//       <Text fontSize='4xl' className='mb-10'>
//         Cart
//       </Text>
//       <CartCheckoutNav></CartCheckoutNav>
//       <div className='flex flex-col md:flex-row justify-evenly mt-10 gap-10'>
//         <Container maxW='container.lg' flexBasis='3/4'>
//           <Box
//             display='flex'
//             flexDirection='column'
//             overflowY='auto'
//             // height='800px' // Set the height to trigger vertical scrolling
//             borderRadius='lg'
//             borderColor='gray.200'
//           >
//             {cartItemsCount > 0 ? (
//               <>
//                 {cartItems.map((curr, idx) => {
//                   return (
//                     <ProductCardDetailed
//                       product={curr}
//                       key={idx}
//                     ></ProductCardDetailed>
//                   );
//                 })}
//               </>
//             ) : (
//               <CartIsEmpty></CartIsEmpty>
//             )}
//           </Box>
//         </Container>
//         <div className='flex-grow basis-1/4'>
//           <CheckoutSummary></CheckoutSummary>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import ProductCardDetailed from '../../components/Products/ProductCardDetailed';
import CheckoutSummary from '../../components/Cart/CheckoutSummary';
import CartIsEmpty from '../../components/Cart/CartIsEmpty';
import CartCheckoutNav from '../../components/Cart/CartCheckoutNav';

import { Text, Container, Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export default function ShoppingCart() {
  const cartItemsCount = useSelector((state) => state.cart.cartItemCount);
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className='flex flex-col px-10'>
      <Text fontSize='4xl' className='mb-10'>
        Cart
      </Text>
      <CartCheckoutNav></CartCheckoutNav>
      <div className='flex flex-col md:flex-row justify-evenly mt-10 gap-10'>
        <Container
          maxW='container.lg'
          className='flex-grow'
          style={{ flexBasis: '75%' }}
        >
          <Box
            display='flex'
            flexDirection='column'
            overflowY='auto'
            // height='800px' // Set the height to trigger vertical scrolling
            borderRadius='lg'
            borderColor='gray.200'
          >
            {cartItemsCount > 0 ? (
              <>
                {cartItems.map((curr, idx) => {
                  return (
                    <ProductCardDetailed
                      product={curr}
                      key={idx}
                    ></ProductCardDetailed>
                  );
                })}
              </>
            ) : (
              <CartIsEmpty></CartIsEmpty>
            )}
          </Box>
        </Container>
        <Container
          maxW='container.sm'
          className='flex-grow'
          style={{ flexBasis: '25%' }}
        >
          <CheckoutSummary></CheckoutSummary>
        </Container>
      </div>
    </div>
  );
}
