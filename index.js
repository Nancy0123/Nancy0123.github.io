$(function () {
   // banner图
    var bannerImg=$('.BN-img li');
    var circlelis=$('.BN-circle li');
    var now=0;
    var next=0;
    function move() {
        next=now+1;
        if(next>=3){
            next=0;
        }
        bannerImg.eq(now).animate({opacity:0},800);
        bannerImg.eq(next).animate({opacity:0.8},800);
        circlelis.eq(now).removeClass('active');
        circlelis.eq(next).addClass('active');
        now=next;
    }
    var t=setInterval(move,2000)

//nav下拉
    $('.nav_top>span').first().click(function () {
        $('html').toggleClass('active');
        $('.nav-hide').slideToggle(1400);
        var name=this.className;
        if(name=='icon-caidan'){
            this.className='icon-cha';
        }else if(name=='icon-cha'){
            this.className='icon-caidan';
        }
    });


    // events背景色的变化

    // $('.events-inner').hover(function () {
    //     $(this).css({
    //         'width':0,
    //         background:'#EFE939',
    //         overflow:'hidden'
    //     }).animate({width:'100%'},600).stop(true);
    //     $('.events-inner-body').css('color','#000');
    // },function () {
    //     $(this).animate({width:0},600).stop(true).css({
    //         'width':'100%',
    //         background:'none',
    //         overflow:'hidden'
    //     });
    //     $('.events-inner-body').css('color','#fff');
    // });


    // events轮播

    var event=$('.events_2_box');
    var eventlis=$('.events_2_box li');
    var Left;
    $('.events_circle li').click(function () {
        $('.events_circle li').removeClass('active');
        $(this).toggleClass('active');
        Left=event.get(0).style.left;
        if(Left==0||Left=='0px'){
            event.animate({left:'-100%'},800);
        }
        if(Left=='-100%'){
            event.animate({left:0},800)
        }
    })

    // var eventT=setInterval(eventMove,3000)

//下拉导航栏
    window.onscroll=function () {
        var sTop=$(document).scrollTop();
        if(sTop>=200){
            $('.nav').hide();
            $('.navTop').stop().slideDown();
        }else if(sTop<200){
            $('.nav').show();
            $('.navTop').stop().slideUp();

        }
    }

// 楼层跳转
    let section=document.querySelectorAll('section')
    let wordBoxli=document.querySelectorAll('.wordBox ul li')
    let nav_elements=document.querySelectorAll('.nav_elements ul li')
    wordBoxli.forEach(function (value,index) {
        value.onclick=function(){
            animate(document.body,{scrollTop:section[index].offsetTop}, 500);
        }
    })
    nav_elements.forEach(function (value,index) {
        value.onclick=function(){
            animate(document.body,{scrollTop:section[index].offsetTop}, 500);
        }
    })

// 返回顶部
    $('.return').click(function () {
        animate(document.body,{scrollTop:0},500)
    })
















})


