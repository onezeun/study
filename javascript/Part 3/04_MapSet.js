// Map 자료형 자료들 간의 연관성을 표현 (알고리즘 풀 때 사용할듯?)
var person = new Map();
person.set('age', 20);

person.get('age'); //자료 꺼내기
person.delete('age'); //자료 삭제
person.size; //자료 몇갠지?

//Map자료 반복문 돌리기
for (var key of person.keys() ){
  console.log(key)
}

//자료를 직접 집어넣고 싶으면
var person = new Map([
  ['age', 20],
  ['name', 'Kim']
]);

// Set 중복 데이터를 방지하고 싶을 때 사용 순서가 없음
var 출석부 = new Set([ 'john' , 'tom', 'andy', 'tom' ]);

출석부.add('sally'); //자료더하기
출석부.has('tom'); //자료있는지 확인
출석부.size; //자료 몇갠지 세기

var 바보 = [ 'john' , 'tom', 'andy', 'tom' ];

var 천재 = new Set(바보); //Array를 Set으로 바꾸기

바보 = [...천재]; //Set을 Array로 바꾸기