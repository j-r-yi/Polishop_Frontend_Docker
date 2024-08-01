// 'use client';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { Providers } from './providers';
import Home from './page';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Navbar/Footer';

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'NextJS Online Shop',
  description: 'An Online Shop Made with NextJS',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link
          rel='icon'
          href='/icon?<generated>'
          type='image/<generated>'
          sizes='<generated>'
        />
      </head>
      <body>
        <Providers>
          <div className='flex flex-col space-between'>
            <Navbar></Navbar>
            <main>{children}</main>
            <Footer></Footer>
          </div>
        </Providers>
      </body>
      <footer></footer>
    </html>
  );
}
