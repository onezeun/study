var 출석부 = ['흥민', '영희', '철수', '재석'];

function 이름찾기(value){
  출석부.forEach(function(data, i) {
    if(value == data) {
      console.log('있어요');
    } else return false;
  });
}

// function 이름찾기(name){
//   for (var i = 0; i < 4; i++) {
//     if ( name == 출석부[i]) {
//       console.log('있어요')
//     }
//   }
// }

console.log(이름찾기('철수'));
console.log(이름찾기('명수'));