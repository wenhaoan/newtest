$(function() {
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //operaFix
    $(".totop").click(function() {
        $body.animate({ scrollTop: 0 });
    });
    window.onscroll = function() {
        if ((document.documentElement.scrollTop + document.body.scrollTop) > 200) {
            $(".totop").show();
        } else {
            $(".totop").hide();
        }
    };
    // $('.nav li.er').hover(function () {
    //     $('.header').css({'background':'#26499d'})
    // },function () {
    //     $('.header').css({'background':'transparent'})
    // })
    // $('.header .wrapper .nav li').click(function() {
    //     $(this).addClass('cur');
    //     $(this).siblings('li').removeClass('cur');

    // });
    $(".header .wrapper .nav .er1").each(function() {

        $this = $(this);
        if (this.href == window.location.href) {
            $this.parent().addClass("cur");
        }


    });
    $('.header .san').click(function() {
        if ($(this).hasClass('cur')) {
            $(this).removeClass('cur');
            $('.nav').slideUp();
            if ($(window).scrollTop() > 10) {

            } else {
                $('.header').css('background', 'transparent');
            }
        } else {
            $(this).addClass('cur');
            $('.nav').slideDown();
            $('.header').css('background', '#26499d');
        }
    });
    if ($(window).width() < 1024) {
        $('.nav>ul>li>a').click(function() {
            if ($(this).siblings("dl,.sub-nav").length > 0) {
                $(this).siblings('dl,.sub-nav').toggle();
                return false;
            }
        });
        $(window).bind('scroll', function() {
            if ($(window).scrollTop() > 10) {
                $('.header').css('background', '#26499d');
            } else {
                $('.header').css('background', 'transparent');
            }
        })
    } else {
        $(window).bind('load scroll', function() {
            if ($(window).scrollTop() > 50) {
                $('.header').addClass('scroll')
            } else {
                $('.header').removeClass('scroll')
            }
        })
    }

});

function disabled() {
    $(document).bind("contextmenu", function(e) {
        return false;
    });
    $(document).bind("selectstart", function() { return false; });
    $("body").css({ '-moz-user-select': 'none' });
    $("body").attr("ondragstart", "return false");
}

disabled();