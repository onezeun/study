// 부모
function 기계(qq, ww) {
  this.q = qq,
  this.w = ww;
}

// 자식
var nunu = new 기계('consume', 'snowball');
var garen = new 기계('strike', 'courage');


//2016년에 생긴 신문법
class Hero {  // 영어 대문자로 작명
  constructor(qq, ww){
    this.q = qq;
    this.w = ww;
  }
}

var nunu = new Hero('consume', 'snowball');
var garen = new Hero('strike', 'courage');


var nunu = {
  q: 'consume',
  w: 'snowball'
}

var garen = {
  q: 'strike',
  w: 'courage'
}

// prototype
기계.prototype.name = 'kim'

console.log(nunu.name) // kim
// name은 안나옴
console.log(nunu) // 기계 {q:'consume' , w:'snowball'}