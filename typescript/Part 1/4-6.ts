type AnimalType = string | number | undefined;
let 동물: AnimalType;

type MemberType = { name: string; age: number };
let 회원2 :MemberType = { name: 'kim', age : 20 };



type RegionType =  { region :string }

const 출생지역 :RegionType = { region : 'seoul' };
출생지역.region = 'busan'

// 읽기 전용 수정하면 에러내줌
type Boyfriend = {
  readonly name :string 
}

const 남자친구 :Boyfriend = {
  name: '차은우'
}

// type 변수 합치기 (union type)
type Name = string;
type Age = number;
type Person = Name | Age;

// & 연산자로 object 타입 합치기
type PositionX = { x :number };
type PositionY = { y :number };

// { x :number, y :number } 만들고 싶다면?
type NewType = PositionX & PositionY;

// Literal types
let john :'대머리';
let kim :'솔로';

let 방향: 'left' | 'right';

// 문제
type 가위바위보 = '가위' | '바위' | '보';
type 가바보리턴 = ('가위' | '바위' | '보')[];

function 싸우자 (a :가위바위보) :가바보리턴 {
  return ['가위'];
};

console.log(싸우자('가위'));

// Literal types의 문제점
var 자료 = {
  name : 'kim'
} as const;

function 내함수(a :'kim'){

};

내함수('kim');
내함수(자료.name)