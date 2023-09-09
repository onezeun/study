// 함수로 object 데이터를 꺼내는 방법
var 사람1 = {
  name: 'Kim',
  age: 30,
  nextAge1() {
    return this.age + 1;
  },
  setAge1(나이) {
    this.age = parseInt(나이);
  },
};

사람1.age + 1;
사람1.nextAge1(); // 요즘 유행
사람1.setAge1('200');//문자 넣었는데도 숫자 200으로 저장됨

// getter, setter 사용하기
var 사람2 = {
  name: 'Kim',
  age: 30,
  get nextAge2() {
    return this.age + 1;
  },
  set setAge2(나이) {
    this.age = parseInt(나이);
  },
};

사람2.setAge2 = 40;//set 키워드를 추가하면 이렇게 함수를 사용가능
console.log( 사람2.nextAge2 )//get 키워드를 추가하면 이렇게 함수를 사용가능


// class 안에서 사용하려면?
class 사람 {
  constructor() {
    this.name = 'Park';
    this.age = 20;
  }
  get nextAge() {
    return this.age + 1;
  }
  set setAge(나이) {
    this.age = 나이;
  }
}

var class사람 = new 사람();
class사람.nextAge;
class사람.setAge = 50;