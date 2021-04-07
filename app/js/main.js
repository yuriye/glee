$(function () {

  $('.slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: false,
    autoplaySpeed: 2000
  });


  $('.product-card')
    .mouseenter(function () {
      $(this).find('.product-card__links').css('display', 'flex')
    })
    .mouseleave(function () {
      $(this).find('.product-card__links').css('display', 'none');
    })

  var mixer = mixitup('.cards');
  var mixerNewDesign = mixitup('.cards-new');

  $([data-fancybox]).fancybox();


})