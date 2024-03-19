$(function(){
  // 메뉴
  $('.main').mouseover(function(){
    $('.sub>li').stop().slideDown(500);
  }).mouseout(function(){$('.sub>li').stop().slideUp(500)})

  // 이미지슬라이드
  // 좌->우
  setInterval(function(){
    $('.imglist').delay(2000);
    $('.imglist').animate({marginLeft: -1200});
    $('.imglist').delay(2000);
    $('.imglist').animate({marginLeft: -2400});
    $('.imglist').delay(2000);
    $('.imglist').animate({marginLeft: 0});
    $('.imglist').delay(2000);

  })

})