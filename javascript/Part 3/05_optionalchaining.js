// 중첩된 object 자료에서 에러없이 안전하게 데이터를 꺼낼 때 사용
var user = {
  name: 'kim',
  age: { value: 20 },
};

console.log(user.age.value);

// ?? nullish coalescing operator 왼쪽이 null, undefined 일 경우 오른쪽 보여달라는 뜻

var user2;
console.log(user2 ?? '로딩중');