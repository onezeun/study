// ES5 Object.create()
var 부모1 = { name: 'Kim', age: 50 };
var 자식1 = Object.create(부모1);
자식1.age = 20;

var 손자1 = Object.create(자식1);

console.log(손자.age);

// ES6 class
class 부모2 {
  constructor(이름, 나이) {
    this.name = 이름;
    this.sayHi_constructor = function () {
      console.log('hello constructor');
    };
  }
  sayHi_prototype() {
    console.log('hello prototype');
  }
}
var 자식2 = new 부모2('Park', 30);

// Object.getPrototypeOf()
Object.getPrototypeOf(자식2); // 자식.__proto__와 동일

// class를 상속한 class를 만들고 싶을 때 쓰는 extends
class 할아버지 {
  constructor(name) {
    this.성 = 'Kim';
    this.이름 = name;
  }
  sayHi() {
    console.log('안녕 나는 할아버지');
  }
}

// super : extends로 상속중인 부모 class의 constructor() (할아버지 class의 constructor()) 파라미터도 똑같이 입력해야 함
class 아버지 extends 할아버지 {
  constructor(name) {
    super(name);
    this.나이 = 50;
  }
  sayHi2() {
    console.log('안녕 나는 아버지');
    super.sayHi(); // 부모 class의 prototype
  }
}

var a = new 아버지('만수');
a.sayHi2(); // 안녕 나는 할아버지 안녕 나는 아버지 출력
