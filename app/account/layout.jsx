import AccountSideBar from '../../components/Account/AccountSideBar';

let isLoggedIn = true;

export default function AccountLayout({ children }) {
  return (
    <>
      {isLoggedIn ? (
        <div className='flex flex-row items-center justify-center'>
          <div className='flex flex-grow'>
            <AccountSideBar></AccountSideBar>
          </div>
          <div className='inline-block max-w-lg text-center justify-center flex-grow'>
            {children}
          </div>
        </div>
      ) : (
        <p>Please Log In Or Sign Up</p>
      )}
    </>
  );
}
