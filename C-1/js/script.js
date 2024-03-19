$(function () {
  // 메뉴
  $(".main > li")
    .mouseover(function () {
      $(this).find(".sub > li > a").stop().slideDown(500);
    })
    .mouseout(function () {
      $(this).find(".sub > li > a").stop().slideUp(500);
    });

  // 이미지슬라이드
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
