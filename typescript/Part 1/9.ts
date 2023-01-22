// type Square = { color :string, width :number}
interface Square {
  color: string;
  width: number;
}

let 네모: Square = { color: 'red', width: 100 };

// 퀴즈
// interface Student {
//   name :string
// }

// interface Teacher {
//   name :string,
//   age :number
// }

interface Student {
  name: string;
}

// interface Student {
//   score: number;
// }

interface Teacher extends Student {
  age: number;
}

let 학생: Student = { name: 'kim' };
let 선생: Teacher = { name: 'kim', age: 28 };

// 교차타입
type Animal = { name: string };
type Cat = { age: number } & Animal;

