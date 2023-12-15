const xlsx = require('xlsx');

const workbook = xlsx.readFile('../../_xlsx/20231215.xlsx');
// console.log(Object.keys(workbook.Sheets)) // 시트 목록 가져오기


// workbook.SheetNames -> 모든 시트명 배열로 가져오기
// const ws = workbook.Sheets.Sheet0; // 시트명으로 가져오기
const ws = workbook.Sheets[workbook.SheetNames[0]]; // 첫번째 시트 가져오기
// console.log(ws);

const records = xlsx.utils.sheet_to_json(ws); // 엑셀 데이터를 json을 바꿈
console.log(records)

// 배열 키 변경 (첫재줄이 키가 아닌 열 이름으로 키가 설정됨)
// const records = xlsx.utils.sheet_to_json(ws, {header: 'A'});
// console.log(ws['!ref']);

// 배열 키 변경했을 때 첫번째 배열을 빼는 방법
  // 1. 엑셀 데이터 범위 지정하여 빼기
  // ws['!ref'] = ws['!ref'].split(':').map((v, i) => {
  //   if(i === 0) {
  //     return 'A2'
  //   }
  //   return v;
  // }).join(':')

  // const records = xlsx.utils.sheet_to_json(ws, {header: 'A'}).splice(0,5);
  // console.log(records)

  // 2. shift() 함수 사용
  // records.shift()

// 결과는 같지만 비동기 처리할때 for of와 forEach 차이가 많이 남
// entries() : 내부 배열이 [인덱스, 값] 모양 이터레이터로 바뀜
// for (const [i, r] of records.entries()) {
//   console.log(i, r);
// }

// records.forEach((r, i) => {
//   console.log(i, r);
// });
