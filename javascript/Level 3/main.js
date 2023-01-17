$(document).ready(function () {
  var car2 = {name:'소나타', price: [ 50000, 3000, 4000 ]}
  $('.car-title').text(car2.name)
  $('.car-price').text(car2.price[0])

  // 자주 쓰는 셀렉터 변수에 넣어 쓰기
  var button = $('.tab-button');
  var content = $('.tab-content');
  
  for(let i = 0; i < content.length; i++ ){
      button.eq(i).on('click', function(){
          button.removeClass('orange');
          button.eq(i).addClass('orange');
          content.removeClass('show');
          content.eq(i).addClass('show');
      });
  };
});
