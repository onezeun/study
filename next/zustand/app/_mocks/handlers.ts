import { http, HttpResponse } from 'msw';

const delay = (ms: number) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

export const handlers = [
  http.get('/api/test', ({ request }) => {
    return HttpResponse.json('테스트 API');
  }),

  http.get('/api/trends', ({ request }) => {
    return HttpResponse.json([
      { ifd: 1, title: '첫번째', content: '첫번째내용' },
      { ifd: 1, title: '두번째', content: '두번째내용' },
      { ifd: 1, title: '세번째', content: '세번째내용' },
      { ifd: 1, title: '네번째', content: '네번째내용' },
    ]);
  }),
];
