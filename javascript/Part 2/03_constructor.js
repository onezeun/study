// object를 복사하고 싶을 때 constructor 사용
function 기계(이름) {
  this.name = 이름;
  this.age = 15;
  this.sayHi = function () {
    console.log('안녕하세요' + this.name + ' 입니다');
  };
}
var 학생1 = new 기계('Park');
var 학생2 = new 기계('Kim');

function Product(상품명, 가격) {
  this.name = 상품명;
  this.price = 가격;
  this.부가세 = function () {
    console.log(this.price * 0.1);
  };
}

var product1 = new Product('shirts', 50000);
var product2 = new Product('pants', 60000);
