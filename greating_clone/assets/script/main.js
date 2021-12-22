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
        variableWidth: true,
        dots:true,
    });

    var $magazineBG = $('#magazine__slider .magazine__slide.center').css("background-image");    
    $('.magazine__contents .magazin__bg').css("background-image", $magazineBG);

    $('#magazine__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {            
        $('#magazine__slider .magazine__slide').removeClass('center');
        $("#magazine__slider div[data-slick-index='" +nextSlide+ "'] .magazine__slide").addClass('center');
        let $magazineCurrentBG = $('#magazine__slider .magazine__slide.center').css("background-image");
        $('.magazine__contents .magazin__bg').fadeTo(0,0.5, function() {
            $('.magazine__contents .magazin__bg').css("background-image", $magazineCurrentBG);
        }).fadeTo(500,1);
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
    $('#brand__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 10000,
      });

  });