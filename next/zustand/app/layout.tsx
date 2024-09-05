import type { Metadata } from 'next';
import './globals.css';
import { pretendard, notosans } from './_utils/fonts';

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
      <body className={`${pretendard.className}`}>{children}</body>
    </html>
  );
}
