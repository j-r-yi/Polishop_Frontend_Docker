// 'use client';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { Providers } from './providers';
import Home from './page';
// const inter = Inter({ subsets: ["latin"] });
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Navbar/Footer';
// import 'leaflet/dist/leaflet.css';
// import '../styles/globals.css';

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
        <link
          rel='stylesheet'
          href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
          integrity='sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
          crossOrigin=''
        />
        <script
          src='https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
          integrity='sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo='
          crossOrigin=''
        ></script>
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
