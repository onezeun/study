import type { Metadata } from 'next';
import './globals.css';
import { pretendard } from './_utils/fonts';
import Providers from './_utils/provider';

export const metadata: Metadata = {
  title: '쭈쓰텐드',
  description: '연습용',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
