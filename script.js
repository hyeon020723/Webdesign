$(function () {
  // tapmenu
  $(".mainmenu>li")
    .mouseover(function () {
      $(".submenu>li").stop().slideDown(500);
    })
    .mouseout(function () {
      $(".submenu>li").stop().slideUp(500);
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

  // fadeinout
  $(".imgslide a:gt(0)").hide();
  setInterval(function () {
    $(".imgslide a:first-child")
      .fadeOut()
      .next("a")
      .fadeIn()
      .end()
      .appendTo(".imgslide");
  }, 3000);

  // modal or layer
  $(".notice > a").click(function () {
    $("#layer").addClass("active");
  });
  $(".btn").click(function () {
    $("#layer").removeClass("active");
  });
});
