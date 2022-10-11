function 합격했냐(num1, num2) {
  if(num1 < 0 || 120 <= num1) {
    console.log("점수 제대로 입력하세여")
  } else if(num2 < 0 || 120 <= num2) {
      console.log("점수 제대로 입력하세여")
  } else if (num1 < 40 || num2 < 40) {
    console.log("불합격");
  } else if (num1 + num2 >= 120) {
    console.log("합격");
  } else {
    console.log("불합격");
  }
}

합격했냐(-20, 50);
합격했냐(50, 50);
합격했냐(70, 70);
합격했냐(30, 100);
합격했냐(30, 130);