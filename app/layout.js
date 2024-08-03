// 'use client';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { Providers } from './providers';
import Home from './page';
// const inter = Inter({ subsets: ["latin"] });
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Navbar/Footer';

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
      {/* className='overflow-x-hidden' */}
      <body>
        <Providers>
          <div>
            <div>
              <Navbar></Navbar>
            </div>
            <main>{children}</main>
            <div>
              <Footer></Footer>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
