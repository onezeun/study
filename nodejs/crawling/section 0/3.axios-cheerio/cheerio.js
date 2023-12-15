const axios = require('axios');
const cheerio = require('cheerio');

const crawler = async () => {
  const response = await axios.get(
    'https://www.bizinfo.go.kr/web/lay1/bbs/S1T122C128/AS/74/list.do',
  );
  if (response.status === 200) {
    const html = response.data;
    // console.log(html);

    const $ = cheerio.load(html)
    const text = $('td.txt_l a').text();
    console.log(text);
  }
};

crawler();
