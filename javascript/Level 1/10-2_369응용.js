function 삼육구(num) {
  // toString() : 숫자를 문자열로 바꾸기
  // charAt(Index) :  Index의 문자를 가져옴
  // 문자열의 마지막 index -> num.length - 1
  
  let i = num.toString();
  let j = i.charAt(i.length - 1)

  if(j == "3" || j == "6" || j == "9") {
    console.log("박수");
  } else {
    console.log("통과")
  }
}

삼육구(3);
삼육구(8);
삼육구(12);
삼육구(9);