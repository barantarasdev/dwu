import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import Navbar from '@/components/Navbar';
import ThemeProvider from '@/common/themes/ThemeProvider';
import ReduxProvider from '@/store/ReduxProvider';
import {memo} from 'react';
import {Container} from '@mui/material';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <ThemeProvider>
            <Navbar />
            <Container>
              <main>{children}</main>
            </Container>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}

export default memo(RootLayout);
