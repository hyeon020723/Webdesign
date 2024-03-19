$(function () {
  // 메뉴

  $(".main")
    .mouseover(function () {
      $(".sub").stop().slideDown(500);
    })
    .mouseout(function () {
      $(".sub").stop().slideUp(500);
    });

  // 이미지 슬라이드
  $(".imgslide a:gt(0)").hide();

  setInterval(function () {
    $(".imgslide a:first-child")
      .fadeOut()
      .next("a")
      .fadeIn()
      .end()
      .appendTo(".imgslide");
  }, 3000);
});
