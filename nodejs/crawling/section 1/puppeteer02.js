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
  try {
    await Promise.all(records.map(async (r, i) => {
        try {
          console.log(r);
          const page = await browser.newPage();
          await page.goto(r.공고상세URL);
          const title = await page.$('.title_area .title');

          if (title) {
            const text = await page.evaluate((tag) => tag.textContent, title);
            console.log(text);
          }
          await page.waitForTimeout(1000);
          await page.close();
        } catch (err) {
          console.error(err);
        }
      }),
    );
  } catch (err) {
    console.error(err);
  }

  // browser.close() 브라우저 닫기
  await browser.close();
};

crawler();
