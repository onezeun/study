// Primitive data type : 자료 자체가 변수에 저장되는 자료 (문자, 숫자형)
var 이름_1 = '김';
var 이름_2 = 이름1;
이름_1 = '박';
console.log('이름_2', 이름_2);

// Reference data type :  Array, Object 자료형
var 이름1 = { name: '김' };
var 이름2 = 이름1;
이름1.name = '박';

function 변경(obj) {
  obj = { name: 'park' };
}

변경(이름1);
console.log(이름1);

var 이름1 = { name: '김' };

function 변경(obj) {
  obj.name = 'park';
}

변경(이름1);
console.log(이름1);
