type 함수타입 = (a :string) => number;
// 파라미터 string, 결과값은 number인 함수타입 완송 ^0^


// 함수 type alias 부착하려면 함수 표현식 써야 함
let 함수5 :함수타입 = function (a){
  return 10;
}

function 여기엔못씀(){
}

함수5('e');

type 회원정보5타입 = {
  name: string,
  plusOne: (x : number) => number,
  changeName : () => void
}

// object 안에 함수 만들기
let 회원정보5 :회원정보5타입 = {
  name : 'kim',
  plusOne(a: number) :number {
    return a + 1
  },
  changeName : () => {
    console.log('안녕')
  }
}

console.log(회원정보5.plusOne(2))
console.log(회원정보5.changeName())
