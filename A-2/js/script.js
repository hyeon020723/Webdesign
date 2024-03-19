$(function(){

  $('.menu').mouseover(function(){
    $('.submenu > a').stop().slideDown(500);
  }).mouseout(function(){
    $('.submenu > a').stop().slideUp(500);});


  setInterval(function(){
    $('.imglist').delay(2000);
    $('.imglist').animate({marginTop:-300});
    $('.imglist').delay(2000);
    $('.imglist').animate({marginTop:-600});
    $('.imglist').delay(2000);
    $('.imglist').animate({marginTop:0});
    $('.imglist').delay(2000);
  });

  $('.tab_con>ul>a:first-child').click(function(){
    $('#modal').addClass('active');
  })
  $('.btn').click(function(){
    $('#modal').removeClass('active');
  })
})