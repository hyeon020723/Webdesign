$(function () {
  // 메뉴

  $(".main>li")
    .mouseover(function () {
      $(".sub>li").stop().slideDown(500);
    })
    .mouseout(function () {
      $(".sub>li").stop().slideUp(500);
    });

  // 이미지슬라이드

  setInterval(function () {
    $(".imglist").delay(2000);
    $(".imglist").animate({ marginTop: -300 });
    $(".imglist").delay(2000);
    $(".imglist").animate({ marginTop: -600 });
    $(".imglist").delay(2000);
    $(".imglist").animate({ marginTop: 0 });
    $(".imglist").delay(2000);
  });

  // 모달창

  $(".notice>.tabcon>a:first-child").click(function () {
    $("#modal").addClass("active");
  });
  $(".btn").click(function () {
    $("#modal").removeClass("active");
  });
});
