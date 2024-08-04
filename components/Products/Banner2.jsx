import NextLink from 'next/link';
import { Image } from '@chakra-ui/react';

export default function Banner2() {
  return (
    <div className='flex flex-row items-center justify-center'>
      <div className='container grid grid-cols-1 md:grid-cols-2'>
        <div className='overflow-hidden h-[30vw] w-[40vw]'>
          <Image
            borderBottomRightRadius={'3%'}
            src='https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='Clothing'
            fallbackSrc='https://via.placeholder.com/150'
          />
        </div>
        <div className='overflow-hidden h-[30vw] w-[40vw]'>
          <Image
            borderBottomLeftRadius={'3%'}
            src='https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='Clothing'
            fallbackSrc='https://via.placeholder.com/150'
          />
        </div>
        <div className='overflow-hidden h-[30vw] w-[40vw]'>
          <Image
            borderTopRightRadius={'3%'}
            src='https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='Clothing'
            fallbackSrc='https://via.placeholder.com/150'
          />
        </div>
        <div className='overflow-hidden h-[30vw] w-[40vw]'>
          <Image
            borderTopLeftRadius={'3%'}
            src='https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='Clothing'
            fallbackSrc='https://via.placeholder.com/150'
          />
        </div>
        <div className='absolute top-1/2 left-1/2 z-100 w-16 h-16 bg-black onset-1/2 rounded-full'></div>
      </div>
    </div>
  );
}
