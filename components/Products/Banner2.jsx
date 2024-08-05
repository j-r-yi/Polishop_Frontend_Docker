import NextLink from 'next/link';
import { Image } from '@chakra-ui/react';

export default function Banner2() {
  return (
    <div className='flex flex-row justify-center relative'>
      <div className='container grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
        <Image
          borderTopLeftRadius={'3%'}
          src='https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='Clothing'
          fallbackSrc='https://via.placeholder.com/150'
        />
        <Image
          borderTopRightRadius={'3%'}
          src='https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='Clothing'
          fallbackSrc='https://via.placeholder.com/150'
        />
        <Image
          borderBottomLeftRadius={'3%'}
          src='https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='Clothing'
          fallbackSrc='https://via.placeholder.com/150'
        />
        <Image
          borderBottomRightRadius={'3%'}
          src='https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='Clothing'
          fallbackSrc='https://via.placeholder.com/150'
        />
        {/* onset-1/2  top-1/2 left-1/2*/}
        <div className='sm:hidden md:block absolute top-1/2 left-1/2 z-100 w-28 h-28 bg-gray-200 rounded-full transform -translate-x-1/2 -translate-y-1/2 mt-2'></div>
      </div>
    </div>
  );
}
