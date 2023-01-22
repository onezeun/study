"use strict";
var 제목 = document.querySelector('#title');
//제목.innerHTML = '반가워요' --> 에러 셀렉터로 html을 찾으면 타입이 Element | null 임 (못찾을수도있기때문에)
// narrowing 방법 1
if (제목 != null) {
    제목.innerHTML = '반가워요';
}
// narrowing 방법 2 --> 가장 많이 쓸 예정
if (제목 instanceof Element) { // 왼쪽에 있는게 오른쪽에 있는 타입이 맞냐?
    제목.innerHTML = '반가워요';
}
// narrowing 방법 3
제목 = document.querySelector('#title'); // null이 들어와도 무조건 Element로 인식하겠다~
// narrowing 방법 4 옵셔널 체이닝 `?`
if (제목 === null || 제목 === void 0 ? void 0 : 제목.innerHTML) { // 제목에 innerHTML이 있으면 출력해주고 없으면 undefined 뱉기
    제목.innerHTML = '반가워요';
}
// narrowing 방법 5 tsconfig.json가서 strict 모드 끄기^.^