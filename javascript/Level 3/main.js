$(document).ready(function () {
  $('.form-select').eq(0).on('input', function () {
    var value = $('.form-select').eq(0).val();
    if (value == '셔츠') {
      $('.form-select').eq(1).removeClass('form-hide');
      $('.form-select').eq(1).html(''); // append는 그저 추가일뿐, 원래 존재하는 HTML은 삭제

      var shirts = [95, 100, 105];
      shirts.forEach(function (a, i) {
        $('.form-select').eq(1).append(`<option>${a}</option>`);
      });

    } else if (value == '바지') {
      $('.form-select').eq(1).removeClass('form-hide');

      $('.form-select').eq(1).html(''); // append는 그저 추가일뿐, 원래 존재하는 HTML은 삭제
      var pants = [28, 30, 32, 34];
      pants.forEach(function (a, i) {
        $('.form-select').eq(1).append(`<option>${a}</option>`);
      });
    } else {
      $('.form-select').eq(1).addClass('form-hide');
    }
  })

  var car2 = { name: '소나타', price: [50000, 3000, 4000] }
  $('.car-title').text(car2.name)
  $('.car-price').text(car2.price[0])

  // 자주 쓰는 셀렉터 변수에 넣어 쓰기
  var button = $('.tab-button');
  var content = $('.tab-content');

  for (let i = 0; i < content.length; i++) {
    button.eq(i).on('click', function () {
      button.removeClass('orange');
      button.eq(i).addClass('orange');
      content.removeClass('show');
      content.eq(i).addClass('show');
    });
  };
});
