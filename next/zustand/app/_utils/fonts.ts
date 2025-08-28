import localFont from 'next/font/local';

const pretendard = localFont({
  src: [
    {
      path: '../fonts/Pretendard-Regular.woff',
      weight: '400',
    },
    {
      path: '../fonts/Pretendard-Bold.woff',
      weight: '700',
    },
  ],
  variable: '--font-pretendard',
  fallback: [
    'sans-serif',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
  ],
});

const notosans = localFont({
  src: [
    {
      path: '../fonts/NotoSans-Regular.woff',
      weight: '400',
    },
    {
      path: '../fonts/NotoSans-Bold.woff',
      weight: '700',
    },
  ],
  variable: '--font-notosans',
  fallback: [
    'sans-serif',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
  ],
});

export { pretendard, notosans };
