'use client';
import { useDisclosure } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  IconButton,
} from '@chakra-ui/react';

import NextLink from 'next/link';
import { CloseIcon } from '@chakra-ui/icons';

export default function Signup() {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = function (e) {
    setUsername(e.target.value);
  };
  const handleEmailChange = function (e) {
    setEmail(e.target.value);
  };

  const handlePasswordChange = function (e) {
    setPassword(e.target.value);
  };

  const handleSignupClick = async function (e) {
    // console.log('You clicked the button');
    e.preventDefault();
    const newUser = {
      username: username,
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/users_post',
        newUser,
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal
        isOpen={true}
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
            <ModalHeader>Sign Up</ModalHeader>
            <NextLink href='/' passHref>
              <IconButton onClick={onClose} icon={<CloseIcon />}></IconButton>
            </NextLink>
          </div>
          <ModalBody display={'flex'} flexDirection={'column'} gap={'1rem'}>
            <Text>Username</Text>
            <Input
              placeholder='Enter a username'
              size='md'
              variant='outline'
              value={username}
              onChange={handleUsernameChange}
            />
            <Text>Email</Text>
            <Input
              placeholder='Enter an email'
              size='md'
              variant='outline'
              value={email}
              onChange={handleEmailChange}
            />
            <Text>Password</Text>
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
                value={password}
                onChange={handlePasswordChange}
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            {/* <Text>Confirm Password</Text>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
              value={password}
              onChange={handlePasswordChange}
            /> */}
          </ModalBody>
          <ModalFooter display={'flex'} flexDirection={'column'} gap={'2rem'}>
            <Button colorScheme='blue' mr={3} onClick={handleSignupClick}>
              Sign Up
            </Button>
            <div className='flex flex-row items-start gap-5'>
              <Text size='xs'>Already have an account?</Text>
              <NextLink href='/account/login' passHref>
                <Text size='xs' color='blue'>
                  Log in here
                </Text>
              </NextLink>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
