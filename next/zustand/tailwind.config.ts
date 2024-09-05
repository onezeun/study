import type { Config } from 'tailwindcss';
import tailwindScrollbarHide from 'tailwind-scrollbar-hide';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
        sans: ['var(--font-notosans)'],
      },
      colors: {
        main: {
          DEFAULT: '', // 기본 메인 색상
          dark: '',    // 어두운 톤
          light: '',   // 밝은 톤
        },
        gray_50: '#F7F6F6',
        gray_200: '#D1D1D1',
        gray_100: '#F3F4F6',
        gray_300: '#D1D5DB',
        gray_500: '#6B7280',
      },
    },
  },
  plugins: [tailwindScrollbarHide],
};
export default config;
