$(function () {
  $('.mobile__menu').on('click', function () {
    $('.mobile__menu,.top-header__menu').toggleClass('active')
    $('body').toggleClass('lock')
  })
  $('.slider-comment').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  })
  $('.about__slider').slick({
    slidesToShow: 2,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [{
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
      }
    }]

  })
  $('.works__menu-item').click(function () {
    let ctg = $(this).data('ctg')
    let gall = $('.works__gallery-item[data-ctg]')

    for (let i = 0; i < gall.length; i++) {
      gall.eq(i).show()
    }
    if (ctg != 'all') {
      for (let i = 0; i < gall.length; i++) {
        if (ctg != gall.eq(i).data('ctg')) {
          gall.eq(i).hide()
        }

      }
    }



    return false
  })




})