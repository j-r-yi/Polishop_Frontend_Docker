'use client';
import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

export default function Signup() {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount={false}
        motionPreset='slideInBottom'
        isCentered={true}
        closeOnEsc={false}
        closeOnOverlayClick={false}
      >
        <ModalOverlay bg='#E5E7EB' opacity={0.9} />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody display={'flex'} flexDirection={'column'} gap={'2rem'}>
            <Text>Sign Up</Text>
            <Input placeholder='Enter a username' size='md' variant='outline' />
            <Input placeholder='Enter an email' size='md' variant='outline' />
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter a password'
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={() => setShow(!show)}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Confirm your password'
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={() => setShow(!show)}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </ModalBody>
          <ModalFooter display={'flex'} flexDirection={'column'} gap={'2rem'}>
            <Button colorScheme='blue' mr={3} onClick={() => {}}>
              Log In
            </Button>
            <div className='flex flex-row items-start gap-5'>
              <Text size='xs'>Already have an account?</Text>
              <NextLink href='/profile/login' passHref>
                <Link color='teal.500'>Log in here</Link>
              </NextLink>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
