$(function () {


var resize_timer = false;

$(window).load(function() {
  fitHeaderSize();
});

$(window).resize(function() {
  if (resize_timer !== false) {
    clearTimeout(resize_timer);
  }
  resize_timer = setTimeout(function() {
    fitHeaderSize();
  }, 250);
});


function fitHeaderSize () {
  var height = $(window).height();
  var width = $(window).width();

  $(".header").height(height);
  var movie_width = $("#header__movie").width();
  var ne_margin = (movie_width - width) / 2;

  var header_inner_width = $(".header__inner").width();
  var header_inner_height = $(".header__inner").height();


  $(".heaedr__filter").height(height);

  // $("#header__movie").css({
  //   "marginLeft": - ne_margin + 'px'
  // });

  $(".header__inner").css({
    "marginTop": - header_inner_height / 2 + 'px',
    "marginLeft": - header_inner_width / 2 + 'px'
  });

}

});