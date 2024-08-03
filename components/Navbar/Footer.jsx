'use client';
import { Divider } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';

import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { GrCertificate } from 'react-icons/gr';
import { TbTruckDelivery, TbTruckReturn } from 'react-icons/tb';
import { LuPackageCheck } from 'react-icons/lu';

import NextLink from 'next/link';
import { IconButton } from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

const footerInfoList = [
  {
    icon: RiCustomerService2Fill,
    message: '24/7 Support',
  },
  {
    icon: GrCertificate,
    message: 'Quality products',
  },
  {
    icon: LuPackageCheck,
    message: 'Track Delivery',
  },
  {
    icon: TbTruckDelivery,
    message: 'Same-Day Delivery',
  },
  {
    icon: TbTruckReturn,
    message: '7 Day Return',
  },
];

const moreContactList = [
  {
    icon: FaGithub,
    link: 'https://github.com/Joshua-R-Yi',
    arialabel: 'github',
  },
  {
    icon: FaDiscord,
    link: 'https://discord.gg',
    arialabel: 'discord',
  },
  {
    icon: AiFillInstagram,
    link: 'https://www.instagram.com/joshua_.i/',
    arialabel: 'instagram',
  },
  {
    icon: FaLinkedin,
    link: 'https://www.linkedin.com/in/joshua-y-2a8a34282/',
    arialabel: 'linkedin',
  },
];

const footerContactList = [{}];

const backToTop = function () {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function Footer() {
  return (
    <div className='flex flex-col w-screen bg-sky-100 gap-6 pl-20 pr-20 pt-5'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row gap-5'>
          <Text fontSize='md'>We are alway here to help!</Text>
          <Divider
            orientation='vertical'
            borderWidth='1px'
            borderStyle='solid'
            // color='#5c5c5c'
          />
          <Text fontSize='md'>Contact us at: onlineshop@gmail.com</Text>
        </div>
        <div>
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to top
            <Icon as={ChevronUpIcon}></Icon>
          </Button>
        </div>
      </div>
      <div className='hidden lg:flex flex-row justify-center items-center pt-5 gap-20'>
        {footerInfoList.map((curr, idx) => {
          return (
            <div
              className='flex flex-row gap-4 pl-10 pr-10 items-center justify-center'
              key={idx}
            >
              <Icon as={curr.icon} boxSize={10} />
              <Text fontSize='md'>{curr.message}</Text>
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
      <div className='hidden md:flex flex-row justify-between'>
        <div className='flex flex-row justify-left items-center gap-10'>
          <Text fontSize='xl'>Follow us on:</Text>
          {moreContactList.map((curr, idx) => {
            return (
              <NextLink href={curr.link} target='_blank' key={idx}>
                <IconButton
                  variant='outline'
                  colorScheme='gray'
                  aria-label={curr.arialabel}
                  fontSize='20px'
                  border={'none'}
                  as={curr.icon}
                  boxSize={7}
                ></IconButton>
              </NextLink>
            );
          })}
        </div>
        <div className='flex flex-row items-center'>
          <Input
            // value={value}
            // onChange={handleChange}
            placeholder='Your Email'
            size='sm'
          />
          <Button>Submit</Button>
        </div>
      </div>
      <Divider
        orientation='horizontal'
        // size='10px'
        borderWidth='1px'
        borderStyle='solid'
        color='	#D3D3D3'
      />
      <div className='pb-10'>
        <Text as='b'>
          Quality Products, Exceptional Service, Secure Shopping
        </Text>
        <Text>
          NextJS shop is your premier online shopping partner, offering a wide
          range of carefully selected products, competitive pricing, and a
          customer-centric approach. We strive to make every shopping experience
          with us a delight.
        </Text>
      </div>
    </div>
  );
}
