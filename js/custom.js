$(function () {
  var $nav = $(".nav-link").click(function () {
    $nav.removeClass("active");
    $(this).addClass("active");
  });
});
