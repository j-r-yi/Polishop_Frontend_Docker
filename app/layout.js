import { Inter } from "next/font/google";
import "../styles/globals.css";

import { Providers } from './providers'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJS Online Shop",
  description: "An Online Shop Made with NextJS",

};

export default function RootLayout({
  children,
}) {
  return (
    <html lang='en'>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

