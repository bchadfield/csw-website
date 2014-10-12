$(document).ready(function(){
  // LEFT NAV TOGGLE
  $('.sub-nav-toggle').on('click', function(){
    $('.sub-nav').toggleClass('sub-nav-visible');
  });

  if($('body.home').length > 0) {
    $('body.home').scrollspy();
    $(window).scroll(function(){
      var st = $(this).scrollTop();
      var opacity = 0.4 + (st/1000);
      var padding = 15 - (st/25);
      $('header').setBackgroundAlpha(opacity);
      $('header').setPadding(padding);
    });
  }

  $('a.link-to').click(function(event) {
    event.preventDefault();
    var destination = $(this).attr('href');
    $('html, body').animate({
        scrollTop: destination == "#home" ? 0 : $(destination).offset().top - 62
    }, 500);
    _gaq.push(['_trackEvent', 'Home', 'Click', destination]);
  });
});

$.fn.setBackgroundAlpha = function(opacity) {
  if (opacity > 1) opacity = 1
  var currentColor = this.css('background-color');
  var slicePoint = currentColor.substr(0,4) == "rgba" ? currentColor.lastIndexOf(',') : currentColor.lastIndexOf(')');
  var newColor = "rgba" + currentColor.slice(currentColor.lastIndexOf('('), slicePoint) + ", "+ opacity + ")";
  this.css('background-color', newColor);
}

$.fn.setPadding = function(padding) {
  if (padding < 0) padding = 0
  this.css({'padding-top': padding, 'padding-bottom': padding });
}