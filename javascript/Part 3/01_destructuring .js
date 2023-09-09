// array

var array = [2, 3, 4];
// var a = array[0];
// var b = array[1];

var [a1, b1, c1] = [2, 3, 4];

// default값 주기
var [a2, b2, c2 = 5] = [2, 3];


//object
// var { name: a, age: b } = { name: 'Kim', age: 30 };
var { name, age } = { name: 'Kim', age: 30 };

// 변수를 object로 집어넣고 싶은 경우
var name = 'Kim';
var age = 30;

var obj1 = { name: name, age: age };
var obj2 = { name, age }; // key값과 value값이 동일하면 destructuring문법 사용 가능

// 함수 파라미터
var obj3 = { name: 'Kim', age: 20 };

function 함수1(name, age) {
  console.log(name);
  console.log(age);
}

함수1(obj3.name, obj3.age);

function 함수2({ name, age }) {
  console.log(name);
  console.log(age);
}

함수2(obj3);

var [number, address] = [30, 'seoul'];
var { address: a, number = 20 } = { address, number };
// var { address: a, number = 20 } = { address: 'seoul', number: 30 };


// Object에서 데이터를 뽑아서 변수 만들기
let 신체정보 = {
  body: {
    height: 190,
    weight: 70,
  },
  size: ['상의 Large', '바지 30인치'],
};

let {
  body: { height, weight },
  size: [상의, 하의],
} = 신체정보;
