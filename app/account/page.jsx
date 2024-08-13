'use client';
import { Button, ButtonGroup, Input } from '@chakra-ui/react';
import { useState } from 'react';

export default function AccountPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onUsernameChange = function (e) {
    setUsername(e.target.value);
  };

  const onPasswordChange = function (e) {
    setPassword(e.target.value);
  };

  const onEmailChange = function (e) {
    setEmail(e.target.value);
  };

  const handleDeleteAccount = function () {
    console.log(email);
  };

  const handleResetPassword = function () {
    console.log(username, password);
  };

  return (
    <div className='bg-white'>
      <div>YOU ARE ON THE ACCOUNT PAGE</div>

      <Input
        variant='outline'
        placeholder='Enter email to delete account'
        value={email}
        onChange={onEmailChange}
      />
      <Button onClick={handleDeleteAccount}>Delete Account</Button>
      <Input
        variant='outline'
        placeholder='Username'
        value={username}
        onChange={onUsernameChange}
      />
      <Input
        variant='outline'
        placeholder='New password'
        value={password}
        onChange={onPasswordChange}
      />

      <Button onClick={handleResetPassword}>Reset Password</Button>
    </div>
  );
}
