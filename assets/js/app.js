$(function () {

$(".header__inner__button").on({
  click: function () {
    $(".header__inner__button").attr("placeholder", "Your Email");
    $(".header__inner__button__description").css({
      "display": "block"
    });
  }
});

$("#header__inner__form").submit(function () {
  var data = {
    pre_register : {
      email : $('.header__inner__button').val()
    }
  };
  $.ajax({
    type: "POST",
    url: "http://api.app-flamingo.com/pre_registers",
    async: false,
    data: data,
    success: function(res) {
      $(".header__inner__button").attr("placeholder", "Thank You");
      $('.header__inner__button').val("");
      $(".header__inner__button__description").text("Please wait an email from us.");
    },
    error: function(xhr) {
      alert('Error');
    }
  });
  return false;
});


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