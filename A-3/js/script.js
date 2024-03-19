$(function () {
  // menu
  $(".mainmenu")
    .mouseover(function () {
      $(this).find(".submenu").stop().slideDown(500);
    })
    .mouseout(function () {
      $(this).find(".submenu").stop().slideUp(500);
    });

  // 이미지슬라이드

  $(".imglist a:gt(0)").hide();

  setInterval(function () {
    $(".imglist a:first-child")
      .fadeOut()
      .next("a")
      .fadeIn()
      .end()
      .appendTo(".imglist");
  }, 3000);

  // layer
  $(".contentsCon>ul>li:first-child>a>img").click(function () {
    $("#layer").addClass("active");
  });
  $(".btn").click(function () {
    $("#layer").removeClass("active");
  });
});
