function 기계() {
  this.name = 'Kim';
  this.age = 15;
}

기계.prototype.gender = '남';
var 학생1 = new 기계();
var 학생2 = new 기계();

console.log(학생1.gender);

function 기계2() {
  this.name = 'Kim';
  this.age = 15;
}
var 학생1 = new 기계2();
console.log(학생1.__proto__);
console.log(기계2.prototype);

var 부모 = { name: 'Kim' };
var 자식 = {};

자식.__proto__ = 부모;
console.log(자식.name); // Kim
