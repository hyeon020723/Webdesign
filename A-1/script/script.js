$(function () {
  $(".mainmenu")
    .mouseover(function () {
      $(".submenu>li>a").stop().slideDown(300);
    })
    .mouseout(function () {
      $(".submenu>li>a").stop().slideUp(300);
    });

  // slide
  setInterval(function () {
    $(".slidelist").delay(2000);
    $(".slidelist").animate({ marginTop: -300 });
    $(".slidelist").delay(2000);
    $(".slidelist").animate({ marginTop: -600 });
    $(".slidelist").delay(2000);
    $(".slidelist").animate({ marginTop: 0 });
    $(".slidelist").delay(2000);
  });
});
