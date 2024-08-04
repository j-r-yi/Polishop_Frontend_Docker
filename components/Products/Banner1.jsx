'use client';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Image } from '@chakra-ui/react';

export default function Banner1() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div
      style={{
        paddingBottom: '30px',
        position: 'relative',
      }}
      className='flex flex-row items-center justify-center w-full'
    >
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className='flex flex-row items-center'
        containerClass='container'
        dotListClass=''
        draggable
        focusOnSelect={true}
        infinite
        itemClass=''
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={true}
        rewindWithAnimation={true}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=''
        slidesToSlide={1}
        swipeable
      >
        <Image
          borderRadius='2%'
          boxSize='100px'
          src='https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='Clothing'
          fallbackSrc='https://via.placeholder.com/150'
          display={'block'}
          height={'100%'}
          marigin={'auto'}
          width={'100%'}
        />
        <Image
          borderRadius='20px'
          boxSize='100px'
          src='https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='Clothing'
          fallbackSrc='https://via.placeholder.com/150'
          display={'block'}
          height={'100%'}
          marigin={'auto'}
          width={'100%'}
        />
        <Image
          borderRadius='20px'
          boxSize='100px'
          src='https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='Clothing'
          fallbackSrc='https://via.placeholder.com/150'
          display={'block'}
          height={'100%'}
          marigin={'auto'}
          width={'100%'}
        />
        <Image
          borderRadius='20px'
          boxSize='100px'
          src='https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='Clothing'
          fallbackSrc='https://via.placeholder.com/150'
          display={'block'}
          height={'100%'}
          marigin={'auto'}
          width={'100%'}
        />
      </Carousel>
    </div>
  );
}
