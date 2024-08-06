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
import { Button } from '@chakra-ui/react';
import { Checkbox } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

export default function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount={false}
        motionPreset='none'
        isCentered={true}
        closeOnEsc={false}
        closeOnOverlayClick={false}
      >
        <ModalOverlay bg='#E5E7EB' opacity={1} />
        <ModalContent>
          <div className='flex flex-row justify-between items-center pr-5 whitespace-nowrap'>
            <ModalHeader>Log In</ModalHeader>
            <NextLink href='/' passHref>
              <IconButton onClick={onClose} icon={<CloseIcon />}></IconButton>
            </NextLink>
          </div>
          <ModalBody display={'flex'} flexDirection={'column'} gap={'2rem'}>
            {/* <Text>Log In</Text> */}
            <Input placeholder='Enter your email' size='md' variant='outline' />
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter your password'
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
            <Checkbox defaultChecked>Remember me?</Checkbox>
            <div className='flex flex-row items-start gap-5'>
              <Text size='xs'>Don't have an account yet?</Text>
              <NextLink href='/signup' passHref>
                <Text size='xs' color='blue'>
                  Sign up here
                </Text>
              </NextLink>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
