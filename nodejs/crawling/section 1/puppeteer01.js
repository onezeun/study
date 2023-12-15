const parse = require('csv-parse/lib/sync');
const fs = require('fs');
const puppeteer = require('puppeteer');

const crawler = async () => {
  // puppeteer.launch() 브라우저 열기
  // const browser = await puppeteer.launch({ headless: false})
  const browser = await puppeteer.launch({
    headless: process.env.NODE_ENV === 'production',
  }); // 배포 환경에서만

  // browser.newPage() 새창 열기
  // const page = await browser.newPage();
  // const page2 = await browser.newPage();
  // const page3 = await browser.newPage();

  const [page, page2, page3] = await Promise.all([
    browser.newPage(),
    browser.newPage(),
    browser.newPage(),
  ]);

  // 동시에 하지만 순서는 보장되지 않음
  await Promise.all([
    page.goto('https://www.naver.com'),
    page2.goto('https://www.inflearn.com/'),
    page3.goto('https://www.google.com/'),
  ]);

  await Promise.all([
    page.waitForTimeout(3000),
    page2.waitForTimeout(2000),
    page3.waitForTimeout(1000),
  ]);

  await page.close();
  await page2.close();
  await page3.close();

  // browser.close() 브라우저 닫기
  await browser.close();
};

crawler();
