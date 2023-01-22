// 필드값 타입지정 지정 안해도 자동으로 number 타입되긴함
class Person1 {
  data: number = 0;
}

let 사람11 = new Person1();
let 사람12 = new Person1();

// constructor 타입지정
class Person2 {
  // 위에서 변수를 만들어놔야 사용 가능
  name: string;
  constructor(a: string) {
    this.name = a;
  }
  // 프로토타입 함수 자리
  함수(a: string): void {
    console.log('안녕' + a);
  }
}

let 사람21 = new Person2('kim');
let 사람22 = new Person2('park');
사람21.함수('반가워');

// prototype 타입지정
// Person2.prototype.함수 = function(){}
