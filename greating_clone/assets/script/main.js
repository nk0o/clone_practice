$(document).ready(function(){
    $('#visual__slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $('.bnr__slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });
    $('#magazine__slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        variableWidth: true
    });

    let $magazineCurrentSlideBG = $('#magazine__slider .slick-active .magazine__slide').eq(1).css('background-image');
    $('.magazine__contents.blur').css( "background-image", $magazineCurrentSlideBG);

    $('#magazine__slider').on('afterChange', function(event, slick, currentSlide) {
        const $numOfshowSlide = 3;
        var $magazineConts = $('#magazine__slider .magazine__slide');
        let $magazineBg =$magazineConts.eq(currentSlide + $numOfshowSlide + 1).css( "background-image");
        $('.magazine__contents.blur').css( "background-image", $magazineBg);
     });
    $('#bg--slider').slick({
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        fade: true,
        cssEase: 'linear',
    });
    $('#notice__slider').slick({
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        verticalSwiping: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
      });

  });