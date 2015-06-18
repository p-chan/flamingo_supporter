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

// $(window).scroll(function () {
//   var top = $(this).scrollTop();
//   parallaxBg(top);
// });


function fitHeaderSize () {
  var height = $(window).height();
  $(".header").height(height);
}

// function parallaxBg (top) {
//   $(".header").css({
//     "background-position": '0px' + ' ' + - top / 15 + 'px'
//   });
//   $(".download").css({
//     "background-position": '0px' + ' ' + - top / 15 + 'px'
//   });
// }

});