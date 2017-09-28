$(document).ready(function () {
    //菜单按钮
    $('.head1 .toggle').click(function () {
        // alert(1);
        $('.head1 .hiddens').stop().slideToggle();
    });
    $('.heads1 .toggle').click(function () {
        $('.heads1 .hiddens').stop().slideToggle();
    });

    //nav
    $(window).scroll(function () {
        var scrolls=$(document).scrollTop();
        if(scrolls>0){
            $('.head-2').addClass('active');
            $('.heads1').addClass('active');
            $('.hiddens').css('display','none');
        }else {
            $('.head-2').removeClass('active');
            $('.heads1').removeClass('active');
            $('.hiddens').css('display','none');
        }
    })

    //跳转
    // var wh=$(window).height();
    // $(window).scroll(function(){
    //     var s=wh-$(window).scrollTop();
    //     if(s=200){
    //         alert("小于800了")
    //     }
    // });
    function scroll(par) {
        var htwo = $('h2');
        var arr = [];
        $(par+' .tiao').click(function () {
            arr = htwo.map(function (index, val) {
                return $(this).offset().top - 100;
            })
            var n = $(this).index() - 1;
            $(document.body).animate({scrollTop: arr[n]}, 500);
        });
    }
    function scroll1(par) {
        var htwo = $('h2');
        var arr = [];
        $(par+' .tiao').click(function () {
            $('.hiddens').css('display','none');
            arr = htwo.map(function (index, val) {
                return $(this).offset().top - 100;
            })
            var n = $(this).index();
            $(document.body).animate({scrollTop: arr[n]}, 500);
        });
    }
    scroll('.head');
    scroll('.head-2');
    scroll1('.hiddens');

//回顶
    $('.hui').click(function(){
        $(document.body).animate({scrollTop:0},500);
    })

});