function 삼육구게임(num) {
  if(num % 9 == 0) {
    console.log("박수x2");
  } else if(num % 3 == 0){
    console.log("박수");
  } else {
    console.log("통과")
  }
}

삼육구게임(15);
삼육구게임(11);
삼육구게임(9);