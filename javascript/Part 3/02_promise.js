var 프로미스 = new Promise(function (성공, 실패) {
  setTimeout(function () {
    성공();
  }, 1000);
});

프로미스
  .then(function () {
    console.log('1초 대기 성공했습니다');
  })
  .catch(function () {
    console.log('실패했습니다');
  });

// async await
async function 더하기() {
  var 어려운연산 = new Promise((성공, 실패) => {
    var 결과 = 1 + 1;
    성공(결과);
  });
  var 결과 = await 어려운연산;
  console.log(결과);
}
더하기();

async function 더하기2(){
  var 어려운연산 = new Promise((성공, 실패)=>{
    실패();
  });
  try {  var 결과 = await 어려운연산 }
  catch { `어려운연산 Promise가 실패할 경우 실행할 코드` }
}
