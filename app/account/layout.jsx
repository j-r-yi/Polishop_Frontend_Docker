'use client';
import AccountSideBar from '../../components/Account/AccountSideBar';
// import { useSelector } from 'react-redux';
let isLoggedIn = true;

export default function AccountLayout({ children }) {
  return (
    <>
      {isLoggedIn ? (
        <div className='flex flex-row items-center justify-center gap-5 py-10'>
          <div className='flex border-solid border-2'>
            <AccountSideBar></AccountSideBar>
          </div>
          <div className='inline-block text-center justify-center w-[80%] border-solid border-2'>
            {children}
          </div>
        </div>
      ) : (
        <div className='flex items-center justify-center bg-white py-60'>
          Please Log In Or Sign Up
        </div>
      )}
    </>
  );
}
