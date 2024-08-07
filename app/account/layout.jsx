import AccountSideBar from '../../components/Account/AccountSideBar';

export default function AccountLayout({ children }) {
  return (
    <div className='flex flex-row'>
      <AccountSideBar></AccountSideBar>
      <div className='inline-block max-w-lg text-center justify-center'>
        {children}
      </div>
    </div>
  );
}
