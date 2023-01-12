$(document).ready(function () {
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
