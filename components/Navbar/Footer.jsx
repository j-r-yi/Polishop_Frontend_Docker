'use client';
import { Divider } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import {
  RiCustomerService2Fill,
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import NextLink from 'next/link';
import { IconButton } from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

// const iconArray = {
//   RiCustomerService2Fill: RiCustomerService2Fill,
//   RiCustomerService2Fill: RiCustomerService2Fill,
//   RiCustomerService2Fill: RiCustomerService2Fill,
//   RiCustomerService2Fill: RiCustomerService2Fill,
//   RiCustomerService2Fill: RiCustomerService2Fill,
// };

const footerInfoList = [
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

const footerContactList = [{}];

const backToTop = function () {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function Footer() {
  return (
    <div className='flex flex-col w-full bg-sky-100 gap-6' flexGrow={1}>
      <div className='flex flex-row'>
        <Text fontSize='md'>
          We are alway here to help! 24/7 Customer Support
        </Text>
        <Divider
          orientation='vertical'
          borderWidth='1px'
          borderStyle='solid'
          color='	#D3D3D3'
        />
        <Text fontSize='md'>Contact us at: onlineshop@gmail.com</Text>
        <IconButton
          icon={<ChevronUpIcon />}
          //   onClick={() => window.scrollTo(0, 0)}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to top
        </IconButton>
      </div>
      <div className='flex flex-row justify-center items-center pt-5 gap-20'>
        {footerInfoList.map((curr) => {
          return (
            <div>
              <Icon as={curr.icon} />
              <h5>{curr.message}</h5>
            </div>
          );
        })}
      </div>
      <Divider
        orientation='horizontal'
        // size='10px'
        borderWidth='1px'
        borderStyle='solid'
        color='	#D3D3D3'
      />
      <div className='flex flex-row'>
        <Text fontSize='xl'>Contacts:</Text>
        <NextLink href='https://github.com/Joshua-R-Yi' target='_blank'>
          <IconButton
            variant='outline'
            colorScheme='blue'
            aria-label='Github'
            fontSize='20px'
            border={'none'}
            icon={<FaGithub />}
          ></IconButton>
        </NextLink>
        <NextLink href='https://discord.gg' target='_blank'>
          <IconButton
            variant='outline'
            colorScheme='blue'
            aria-label='Github'
            fontSize='20px'
            border={'none'}
            icon={<FaDiscord />}
          ></IconButton>
        </NextLink>
        <NextLink href='https://www.instagram.com/joshua_.i/' target='_blank'>
          <IconButton
            variant='outline'
            colorScheme='blue'
            aria-label='Instagram'
            fontSize='20px'
            border={'none'}
            icon={<AiFillInstagram />}
          ></IconButton>
        </NextLink>
        <NextLink
          href='https://www.linkedin.com/in/joshua-y-2a8a34282/'
          target='_blank'
        >
          <IconButton
            variant='outline'
            colorScheme='blue'
            aria-label='Linkedin'
            fontSize='20px'
            border={'none'}
            icon={<FaLinkedin />}
          ></IconButton>
        </NextLink>
      </div>
      <Divider
        orientation='horizontal'
        // size='10px'
        borderWidth='1px'
        borderStyle='solid'
        color='	#D3D3D3'
      />
      <div>
        <div>
          <Text>Quality Products, Exceptional Service, Secure Shopping</Text>
          <Text>
            NextJS shop is your premier online shopping partner, offering a wide
            range of carefully selected products, competitive pricing, and a
            customer-centric approach. We strive to make every shopping
            experience with us a delight.
          </Text>
        </div>
        <div></div>
      </div>
    </div>
  );
}
