let 이름: string = 'kim';
let 나이: number = 50;
let 결혼했니: boolean = true;
// undefined, null 타입도 있음

// array, object
let 어레이: string[] = ['kim', 'park'];
let 오브젝트: { 
  member1: string; 
  member2: string 
} = {
  member1: 'kim',
  member2: 'park',
};

// union type : 타입 2개 이상 합친 새로운 타입 만들기
let 회원: number | string = 123;

// 숫자 or 문자가 가능한 array 타입지정
let 회원들: (number | string)[] = [1, '2', 3];
let 회원들object: { a: string | number } = { a: '123' };

// 모든 자료형 허용
let 애니 :any;
애니 = 123;
애니 = {};

let 티버 :unknown;
티버 = 123;
티버 = {};

let 변수1 : string = 애니
// let 변수2 : string = 티버 unknown 형식은 string 형식에 할당할 수 없다는 오류가 뜸

function 함수(x :number) :number { // 파라미터 자리에 숫자타입만 입력 가능
	return x * 2
}

function 이름함수(x? :string) : void {
  if(!x) {
    console.log('이름이 없습니다.')
  } else {
    console.log(`안녕하세요 ${x}`)
  }
};

이름함수();
이름함수('홍길동');

function 자릿수세기(x :number | string) :number {
  return x.toString().length
};

function 결혼가능(a :number, b :boolean, c :string){
  let score :number = 0;
  score += a;
  if(b == true) {
    score += 500;
  }
  if(c == '상') {
    score += 100;
  }
  if (score >= 600) {
    return '결혼가능'
  }
}

console.log(결혼가능(100, true, '상'))
console.log(결혼가능(50, false, '중'))