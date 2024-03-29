// 함수의 default 파라미터
function 더하기1(a, b = 2 * 5) {
  console.log(a + b);
}

더하기1(1);

// 함수도 넣을 수 있음
function 임시함수() {
  return 10;
}

function 더하기2(a, b = 임시함수()) {
  console.log(a + b);
}

더하기2(3);

// arguments 입력된 파라미터를 []안에 싸매주는 고마운 키워드 옛날 문법
function 함수(a, b, c) {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

함수(2, 3, 4); // 2 // 3 // 4

// rest 파라미터
function 함수2(a, b, ...파라미터들) {
  console.log(파라미터들); // [3, 4, 5, 6, 7, 8]
}

함수2(1, 2, 3, 4, 5, 6, 7);

// 연습
function 정렬(rest) {
  console.log([...rest].sort());
}

정렬('bear');

//
function 글자세기(글) {
  var 결과 = {};
  [...글].forEach(function (a) {
    if (결과[a] > 0) {
      결과[a]++;
    } else {
      결과[a] = 1;
    }
  });
  console.log(결과);
}

글자세기('aacbbb');
