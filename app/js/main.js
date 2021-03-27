$(function () {

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.svg-inline').inlineSvg();
  $('[data-inline-svg]').inlineSvg();

  $('.product-card')
    .mouseenter(function () {
      $(this).find('.product-card__links').css('display', 'flex')
    })
    .mouseleave(function () {
      $(this).find('.product-card__links').css('display', 'none');
    })

  var mixer = mixitup('.products-cards');
})