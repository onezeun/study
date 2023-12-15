const xlsx = require('xlsx');

const parse = require('csv-parse/lib/sync');
const fs = require('fs');
const puppeteer = require('puppeteer');

const workbook = xlsx.readFile('_xlsx/20231215.xlsx');
const ws = workbook.Sheets[workbook.SheetNames[0]];

// 엑셀 데이터를 json을 바꿈
const records = xlsx.utils.sheet_to_json(ws).splice(0, 10);

const crawler = async () => {
  // puppeteer.launch() 브라우저 열기
  const browser = await puppeteer.launch({
    headless: process.env.NODE_ENV === 'production',
  });
  const page = await browser.newPage();
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  );
  // console.log(await page.evaluate('navigator.userAgent'))

  for (const [i, r] of records.entries()) {
    await page.goto(r.공고상세URL);

    const text = await page.evaluate(() => {
      const title = document.querySelector('.title_area .title');
      const region = document.querySelector('.view_cont ul li .txt');

      if (title) {
        return {
          title: title.textContent,
          region: region.textContent,
        };
      }
    });

    console.log(text);
    await page.waitForTimeout(1000);
  }

  await page.close();
  // browser.close() 브라우저 닫기
  await browser.close();
};

crawler();
