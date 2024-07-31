'use client';
import { Box } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';

let isLoggedIn = false;

export default function ProfileBtns() {
  return (
    <>
      {isLoggedIn ? (
        <></>
      ) : (
        <Box
          position='relative'
          padding='5'
          display='flex'
          flex='row'
          border='none'
        >
          <Button>Login</Button>
          <Divider orientation='vertical' />
          <Button>Signup</Button>
        </Box>
      )}
    </>
  );
}
