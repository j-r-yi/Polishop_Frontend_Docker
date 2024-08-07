import NextLink from 'next/link';
import { Image } from '@chakra-ui/react';

// const banner2ImgList = [
//   {
//     src: 'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   },
//   {
//     src: 'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   },
//   {
//     src: 'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   },
//   {
//     src: 'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   },
// ];

export default function Banner2() {
  return (
    <div className='flex flex-row justify-center relative mt-20'>
      <div className='container grid grid-cols-1 md:grid-cols-2 gap-5'>
        {/* {banner2ImgList.map((curr) => {
          return (
            <Image
              borderTopLeftRadius={'3%'}
              src={curr.src}
              alt='Clothing'
              fallbackSrc='https://via.placeholder.com/150'
            />
          );
        })} */}
        <NextLink href='/' passHref>
          <Image
            objectFit='cover'
            borderTopLeftRadius={'5%'}
            src='https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='Clothing'
            fallbackSrc='https://via.placeholder.com/150'
          />
        </NextLink>
        <NextLink href='/' passHref>
          <Image
            objectFit='cover'
            borderTopRightRadius={'5%'}
            src='https://images.pexels.com/photos/3850271/pexels-photo-3850271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='Clothing'
            fallbackSrc='https://via.placeholder.com/150'
          />
        </NextLink>
        <NextLink href='/' passHref>
          <Image
            objectFit='cover'
            borderBottomLeftRadius={'5%'}
            src='https://images.pexels.com/photos/2084829/pexels-photo-2084829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='Clothing'
            fallbackSrc='https://via.placeholder.com/150'
          />
        </NextLink>
        <NextLink href='/' passHref>
          <Image
            objectFit='cover'
            borderBottomRightRadius={'5%'}
            src='https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='Clothing'
            fallbackSrc='https://via.placeholder.com/150'
          />
        </NextLink>
        {/* onset-1/2  top-1/2 left-1/2*/}
        <div className='sm:hidden md:block absolute top-1/2 left-1/2 z-100 w-32 h-32 bg-gray-100 rounded-full transform -translate-x-1/2 -translate-y-1/2'></div>
      </div>
    </div>
  );
}
