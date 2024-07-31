import { Divider } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { RiCustomerService2Fill } from 'react-icons/ri';

// const iconArray = {
//   RiCustomerService2Fill: RiCustomerService2Fill,
//   RiCustomerService2Fill: RiCustomerService2Fill,
//   RiCustomerService2Fill: RiCustomerService2Fill,
//   RiCustomerService2Fill: RiCustomerService2Fill,
//   RiCustomerService2Fill: RiCustomerService2Fill,
// };

const footerList = [
  {
    icon: 'RiCustomerService2Fill',
    message: 'Customer Support 24/7',
  },
  {
    icon: 'RiCustomerService2Fill',
    message: 'Customer Support 24/7',
  },
  {
    icon: 'RiCustomerService2Fill',
    message: 'Customer Support 24/7',
  },
  {
    icon: 'RiCustomerService2Fill',
    message: 'Customer Support 24/7',
  },
  {
    icon: 'RiCustomerService2Fill',
    message: 'Customer Support 24/7',
  },
];

export default function Footer() {
  return (
    <div className='absolute bottom-0 w-full h-20 bg-gradient-to-r from-blue-200 to-cyan-200'>
      <div>
        <Text fontSize='md'>
          We are alway here to help! 24/7 Customer Support
        </Text>
        <Divider orientation='vertical' />
      </div>
      <Divider orientation='horizontal' />
      <div className='flex flex-row justify-center items-center'>
        {footerList.map((curr) => {
          return (
            <div>
              <Icon as={curr.icon} />
              <h5>{curr.message}</h5>
            </div>
          );
        })}
      </div>
      <Divider orientation='horizontal' />
      <Divider orientation='horizontal' />
    </div>
  );
}
