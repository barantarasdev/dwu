import type {Metadata} from 'next';
import {Poppins} from 'next/font/google';
import Header from '@/components/Header';
import ThemeProvider from '@/common/themes/ThemeProvider';
import ReduxProvider from '@/store/ReduxProvider';
import {memo} from 'react';
import {Container} from '@mui/material';
import Footer from '@/components/Footer';
import {Wrapper} from '@/styles';

const poppins = Poppins({subsets: ['latin'], weight: ['400', '600', '700']});

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
    <html lang="en" style={{height: '100%'}}>
      <body className={poppins.className} style={{height: '100%'}}>
        <ReduxProvider>
          <ThemeProvider>
            <Wrapper>
              <Header />
              <main style={{flex: '1 1 auto'}}>
                <Container>{children}</Container>
              </main>
              <Footer />
            </Wrapper>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}

export default memo(RootLayout);
