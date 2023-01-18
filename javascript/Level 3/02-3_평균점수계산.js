function avg(arr, score) {
  var result = 0;

  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i]
  }

  var gap = Math.abs(result/arr.length - score)

  if (result/arr.length < score) {
    console.log(`평균보다 ${gap}점이 올랐네요`);
  } else {
    console.log(`평균보다 ${gap}점이 떨어졌네요 재수추천`)
  }
}

avg([10, 20, 30, 40, 50], 40);