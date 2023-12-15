const axios = require('axios');
const cheerio = require('cheerio');
const xlsx = require('xlsx');
const add_to_sheet = require('./add_to_sheet');

const crawler = async () => {
  const workbook = xlsx.utils.book_new();
  const infoSheet = xlsx.utils.aoa_to_sheet([['공고명']]);
  xlsx.utils.book_append_sheet(workbook, infoSheet, 'info');

  const response = await axios.get('https://www.bizinfo.go.kr/web/lay1/bbs/S1T122C128/AS/74/list.do');

  if (response.status === 200) {
    const html = response.data;
    const $ = cheerio.load(html);
    const texts = [];

    $('td.txt_l a').each((index, element) => {
      const text = $(element).text().replace(/\s/g, '');
      texts.push(text);
    });

    const data = [ ...texts.map((text) => [text])];
    xlsx.utils.sheet_add_aoa(infoSheet, data, { origin: -1 });

    console.log('Adding data to sheet');

    xlsx.writeFile(workbook, 'xlsx/result.xlsx');
  }
};

crawler();