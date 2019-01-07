$(function(){


    //技术
    var swiper = new Swiper('.sy-content04 .swiper-container', {
        pagination: '.sy-content04 .swiper-pagination',
        nextButton: '.sy-content04 .swiper-button-next',
        prevButton: '.sy-content04 .swiper-button-prev',
        paginationClickable: true,
        slidesPerView: 3,
        speed:500,
        resistanceRatio:0,
        spaceBetween: 0,
        breakpoints: {
            1023: {
                slidesPerView: 1,
                spaceBetween: 20
            }
        }
    });

    var swiper1 = new Swiper('.sy-content02 .swiper-container', {
        pagination: '.sy-content02 .swiper-pagination',
        nextButton: '.sy-content02 .swiper-button-next',
        prevButton: '.sy-content02 .swiper-button-prev',
        paginationClickable: true,
        slidesPerView: 3,
        speed:500,
        resistanceRatio:0,
        spaceBetween: 0,
        breakpoints: {
            1023: {
                slidesPerView: 1,
                spaceBetween: 20
            }
        }
    });
    //技术支持
    var swiper3 = new Swiper('.sy-content03 .swiper-container', {
        pagination: '.sy-content03 .swiper-pagination',
        nextButton: '.sy-content03 .swiper-button-next',
        prevButton: '.sy-content03 .swiper-button-prev',
        paginationClickable: true,
        slidesPerView: 3,
        speed:500,
        resistanceRatio:0,
        spaceBetween: 0,
        breakpoints: {
            1023: {
                slidesPerView: 1,
                spaceBetween: 20
            }
        }
    });
    //品牌客户
    var swiper4 = new Swiper('.sy-content05 .swiper-container', {
        pagination: '.sy-content05 .swiper-pagination',
        nextButton: '.sy-content05 .swiper-button-next',
        prevButton: '.sy-content05 .swiper-button-prev',
        paginationClickable: true,
        slidesPerView: 6,
        slidesPerColumn: 3,
        slidesPerGroup : 6,
        speed:500,
        resistanceRatio:0,
        spaceBetween: 0,
        breakpoints: {
            1023: {
                slidesPerView: 3,
                slidesPerColumn: 2,
                spaceBetween: 0,
                slidesPerGroup : 3
            }
        }
    });

    //新闻
    var swiper5 = new Swiper('.sy-content06 .swiper-container', {
        pagination: '.sy-content06 .swiper-pagination',
        nextButton: '.sy-content06 .swiper-button-next',
        prevButton: '.sy-content06 .swiper-button-prev',
        paginationClickable: true,
        slidesPerView: 3,
        speed:500,
        resistanceRatio:0,
        spaceBetween: 20,
        breakpoints: {
            1023: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });

    $('.counter').countUp();

    $('.close,.black').click(function(){
        $('.black').fadeOut();
        $('.video-alert').removeClass('on').find('iframe').attr('src','');
    })
});
