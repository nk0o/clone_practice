window.addEventListener('load',function() {
    setTimeout(scrollTo, 0, 0, 1);
},false);
document.addEventListener("DOMContentLoaded", () => {
    var secTitle = document.querySelectorAll('.sec__title');
    var secDesc = document.querySelectorAll('.sec__description');
    secDesc.forEach(element=>{
        if(element.parentElement.classList == 'tv__title_wrap'){
            return false;
        }
        element.setAttribute("data-aos", "fade-up");
    })
    secTitle.forEach(element => {
        if(element.parentElement.classList == 'tv__title_wrap'){
            return false;
        }
        element.setAttribute('data-aos','fade-up');
        element.setAttribute("data-aos-delay", "500");
    });
});
$(document).ready(function(){
    /* AOS */
    AOS.init({
        easing: 'ease-in-out-back',
        duration: 1000,
        once:true,
        mirror: true,
        anchorPlacement :'top-bottom',
    });
    /* 슬라이드 */
    $('#visual__slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $('#visual__slider').mouseover(function(){
        $(this).find('.slick-arrow').addClass('show');
        $(this).find('.slick-arrow').removeClass('hide');
    }).mouseout(function(){
        $(this).find('.slick-arrow').addClass('hide');
        $(this).find('.slick-arrow').removeClass('show');
    })
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
        autoplay: true,
        autoplaySpeed: 10000,
      });
    $('#benefit_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        vertical: true,
        verticalSwiping: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10000,
      });
      /* 스크롤 이벤트 */
    $(window).on('scroll',function(){
        let winScrTop = $(this).scrollTop();
        let secTvOffset = $('#section--tv').offset().top;
        let secVisualOffset = $('#section--visual').offset().top;
        let headerHeight = $('header').height();
        let menuHeight = $('header .menu-group').height();

        if(winScrTop > secTvOffset - 900){
            $('#section--tv').addClass('animation');
            $('.tv__img_wrap').addClass('animation');
        }else{
            $('#section--tv').removeClass('animation');
            $('.tv__img_wrap').removeClass('animation');
        };

        if(winScrTop < secVisualOffset){
            $('.ic__pageUp').removeClass('show')
        }else {
            $('.ic__pageUp').addClass('show')
        };

        if(winScrTop > (headerHeight - menuHeight)){
            $('header').addClass('fix')
        }
        if(winScrTop < menuHeight){
            $('header').removeClass('fix')
        }

    })
    /* 카테고리 메뉴 */

    $('.menu_depth-2 li a').on('mouseover mouseleave', function(){
        $(this).each(function(index, item){
            $(item).parent('li').find('.menu_depth-3').stop().toggle();
        });
    });
    $('.menu-group .category').on('mouseenter mouseleave', function(){
        $('.category_menu').stop().toggle();
    });

  });