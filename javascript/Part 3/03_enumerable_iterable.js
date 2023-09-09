// for in - Object 자료형에 저장된 자료들을 하나씩 꺼내고 싶을 때 enumerable한 것만 출력(셀수있는)
var 오브젝트 = { name: 'Kim', age: 30 };

for (var key in 오브젝트) {
  console.log(오브젝트[key]); // Kim, 30
}

console.log(Object.getOwnPropertyDescriptor(오브젝트, 'name'));
// {value: "Kim", writable: true, enumerable: true, configurable: true}

// 부모 유전자 속성도 함께 출력
class 부모 {}
부모.prototype.name = 'Park';

var 오브젝트 = new 부모();

for (var key in 오브젝트) {
  console.log(오브젝트[key]);
  // 부모 속성 빼고 출력하고 싶을 때
  if (오브젝트.hasOwnProperty(key)) {
    console.log(오브젝트[key]);
  }
}

// for of - iterable인 자료형들에만 적용가능한 반복문
var 어레이 = [2, 3, 4, 5];
for (var 자료 of 어레이) {
  console.log(자료);  // 2, 3, 4, 5
}

console.log( 어레이[Symbol.iterator]() );

// for of 구구단 
let 데이터 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i of 데이터) {
  for (let j of 데이터) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// 어떤 놈이 object자료의 key값에 오타를 섞어놨을 때
var products = [
  {
    name1: 'chair',
    price1: 7000,
  },
  {
    name2: 'sofa',
    price: 5000,
  },
  {
    name1: 'desk',
    price3: 9000,
  },
];

let 오브젝트1 = {
  name1 : 'chair'
}

//마지막글자를 숫자로변환했을 때 NaN이 안나오면 (숫자면)
if (isNaN(parseInt('name1'.slice(-1))) == false ) {
    let newValue = 오브젝트1['name1'];
    let newKey = 'name1'.slice(0, -1);//맨 뒷 문자 제거 방법
    오브젝트1[newKey] = newValue;

    delete 오브젝트1['name1'];//원래있던 key 제거
}

console.log(오브젝트1)